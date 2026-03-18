import mongoose from "mongoose";


interface IUser {
    name: string;
    email: string;
    password?: string;
    role: "admin" | "user" | "deliveryBoy";
    image?: string;
}
const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: ["admin", "user", "deliveryBoy"],
        default: "user"
    },
    image: {
        type: String,
        required: false
    }
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema)

export default User