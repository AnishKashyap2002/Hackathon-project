import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
});

// don't miss this ? here
const Subject =
    mongoose.models?.Subject || mongoose.model("Subject", subjectSchema);

export default Subject;
