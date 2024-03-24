import { NextResponse } from "next/server";
import connectDatabase from "@/libs/Database";
import User from "@/model/User";
connectDatabase()

export async function POST (request) {
    const {email,password} = request.json()
    try {
        const user = new User({
            email,
            password
        });
        await user.save();
        return NextResponse.json({message:"login"})
    } catch (error) {
        return NextResponse.json({message:error})
    }

}