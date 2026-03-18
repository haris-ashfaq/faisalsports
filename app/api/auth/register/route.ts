import { connectDB } from "@/app/db/db";
import User from "@/app/models/user.model";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    try {
        await connectDB()
        const { name, email, password } = await req.json()
        const existedUser = await User.findOne({ email })
        if (existedUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 })
        }
        if (password.length < 6) {
            return NextResponse.json({ message: "Password must be at least 6 characters long" }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })

        return NextResponse.json({ 
            message: "User registered successfully",
            user: { name: newUser.name, email: newUser.email }
        }, { status: 201 })

    } catch (error: any) {
        return NextResponse.json({ message: error.message || "Something went wrong" }, { status: 500 })
    }
}