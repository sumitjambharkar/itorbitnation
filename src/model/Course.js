import mongoose, {Schema} from "mongoose";

const courseSchema = new Schema({
    fullName:String,
    number:String,
    location:String,
    course:String,
    relation:String
},{
    timestamps: true,
})

const Course = mongoose.models.Course || mongoose.model("Course",courseSchema);

export default Course;