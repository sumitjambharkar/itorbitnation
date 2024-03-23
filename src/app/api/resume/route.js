import { NextResponse } from "next/server";
import database from "../../../libs/Database"
import Resume from "../../../model/Resume"
database()

export async function GET() {
   try {
    const data = await Resume.find({},"_id name image");
    return NextResponse.json(data)
   } catch (error) {
    return NextResponse.json(error)
   }
}