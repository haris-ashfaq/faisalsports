import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { connectDB } from "./db/db"
import User from "./models/user.model"
import bcrypt from "bcryptjs"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "email"
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "password"
                }
            },
            async authorize(credentials, request) {
                try {
                    await connectDB()
                    const email = credentials.email
                    const password = credentials.password as string
                    const user = await User.findOne({ email })
                    if (!user) {
                        throw new Error("No user found")
                    }
                    const isMatch = await bcrypt.compare(password, user.password)
                    if (!isMatch) {
                        throw new Error("Invalid password")
                    }
                    return {
                        id: user._id,
                        email: user.email,
                        name: user.name,
                        role: user.role
                    }
                } catch (error) {
                    console.log(error)
                    return null
                }
            }
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                try {
                    await connectDB()
                    const existingUser = await User.findOne({ email: user.email })

                    if (!existingUser) {
                        const newUser = new User({
                            name: user.name,
                            email: user.email,
                            image: user.image,
                            role: "user"
                        })
                        await newUser.save()
                    }
                    return true
                } catch (error) {
                    console.error("Google SignIn Error:", error)
                    return false
                }
            }
            return true
        },
        async jwt({ token, user, account }) {
            // Initial sign in
            if (user) {
                token._id = user.id
                token.role = user.role
            }

            // For OAuth users, we might need to fetch the role/id from DB if not present
            if (account?.provider === "google") {
                try {
                    await connectDB()
                    const dbUser = await User.findOne({ email: token.email })
                    if (dbUser) {
                        token.id = (dbUser._id as string).toString()
                        token.role = dbUser.role
                    }
                } catch (dbError) {
                    console.error("JWT Callback DB Error:", dbError)
                }
            }

            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.role = token.role as string
            }
            return session
        }
    },
    pages: {
        signIn: "/login",
        error: "/login"
    },
    session: {
        strategy: "jwt",
        maxAge: 10 * 24 * 60 * 60 * 1000
    },
    secret: process.env.AUTH_SECRET
})