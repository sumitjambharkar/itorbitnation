import { NextResponse } from "next/server";
import connectDatabase from "@/libs/Database";
import Contact from "@/model/Contact";

connectDatabase();

export async function POST(request) {
    try {
        const { name, number, message } = await request.json();
        console.log(name);
        
        // Assuming you're using Mongoose for MongoDB
        const contact = new Contact({
            name,
            number,
            message
        });

        // Save contact to the database
        await contact.save();

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error saving contact:", error);
        return NextResponse.json("Error saving contact", { status: 500 });
    }
}
