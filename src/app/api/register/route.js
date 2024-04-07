import { NextResponse } from "next/server";
import connectDatabase from "@/libs/Database";
import User from "@/model/User";
import bcrypt from "bcryptjs";

connectDatabase()

export async function POST(request) {
    const { email, password } = await request.json();

    try {
        const existUser = await User.findOne({ email: email });
        if (existUser) {
            return NextResponse.json({ message: "Email already exists" }, { status: 400 });
        }

        const salt = await bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = new User({
            email: email,
            password: hashPassword
        });

        await user.save();
        return NextResponse.json({ message: "Registered Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}
