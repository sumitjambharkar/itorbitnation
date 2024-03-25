import { NextResponse } from "next/server";
import connectDatabase from "@/libs/Database";
import User from "@/model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

connectDatabase()

export async function POST (request) {
    const {email,password} =await request.json()
    try {
        const user = await User.findOne({email:email})
        if (!user) {
            return NextResponse.json({message:"user not register"})
        }
        const matchPassword = await bcrypt.compare(password,user.password)
        if (!matchPassword) {
            return NextResponse.json({message:"password not match"})
        }
        const createToken = {id:user._id,email:user.email}
        const token = await jwt.sign(createToken,"FHFOQFPFGDSGSHEPGOEHCMC",{expiresIn:"1h"})
        const response =  NextResponse.json({message:":login Success"})
        response.cookies.set("token",token,{httpOnly:true})
        return response
    } catch (error) {
        return NextResponse.json({message:error})
    }

}