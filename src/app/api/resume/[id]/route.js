import { NextResponse } from "next/server";
import database from "../../../../libs/Database"
import Resume from "../../../../model/Resume"
database()


export  async function GET(req,content) {
   try {
    
    console.log("Name:",content.params.id);
    const data = await Resume.findOne({_id:content.params.id}).exec();
    return NextResponse.json(data)
   } catch (error) {
    return NextResponse.json("not")
   }
}