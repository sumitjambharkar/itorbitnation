import { getTokenData } from "@/app/helpers/getTokenData";
import {NextResponse,NextRequest} from "next/server";
import User from "@/model/User";


export async function GET (req) {
    try {
       const userId = await getTokenData(req);
       const user = await User.findById({_id:userId}).select("-password");
       return NextResponse.json({message:"User Found",data:user})
    } catch (error) {
        return NextResponse.json({error:error.message})
    }
}