import { NextResponse } from "next/server";
import connectDatabase from "@/libs/Database";
import Course from "@/model/Course";
const nodemailer = require("nodemailer");

connectDatabase();

const sendEmailMailer = async ({fullName,number,location,relation}) => {
    console.log(fullName,number,location,relation);
  try {
    const transport = await nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "sumit.techdeveloper@gmail.com",
        pass: "wbiizcgbwakkbmzo",
      },
    });
    const mailOption = {
      from: "sumit.techdeveloper@gmail.com",
      to: "sumit.techdeveloper@gmail.com",
      subject: "Digital Marketing Agency || Digital Marketing Institute",
      html: `FullName : ${fullName},Number : ${number},
      Location : ${location},Relation : ${relation}`,
    };
    transport.sendMail(mailOption, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("mail has been send -", info.response);
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export async function POST(request) {
  try {
    const { fullName, number, location, relation } = await request.json();

    // Assuming you're using Mongoose for MongoDB
    const course = new Course({
      fullName,
      number,
      location,
      relation,
    });

    // Save contact to the database
    await course.save();
    sendEmailMailer({fullName,number,location,relation})
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving course:", error);
    return NextResponse.json("Error saving course", { status: 500 });
  }
}
