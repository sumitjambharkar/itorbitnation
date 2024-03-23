import mongoose, {Schema} from "mongoose";

const resumeSchema = new Schema({
    name:String,
    image:String,
    content:String
},{
    timestamps: true,
})

const Resume = mongoose.models.Resume || mongoose.model("Resume",resumeSchema);

export default Resume