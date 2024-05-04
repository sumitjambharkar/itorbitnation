import mongoose from "mongoose";

const connectDatabase = async () => {
   try {
    await mongoose.connect("mongodb+srv://sumittechdeveloper:sumittechdeveloper@cluster0.zzlhc7i.mongodb.net/resume")
    console.log("Database connected");
   } catch (error) {
    console.log("Database not connected");
   }
}

export default connectDatabase

// mongodb+srv://sumittechdeveloper:sumittechdeveloper@cluster0.zzlhc7i.mongodb.net/cleannation