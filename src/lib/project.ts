import mongoose from "mongoose";

const milestoneSchema = new mongoose.Schema({});

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        hashtags: [String],
        milestones: [
            {
                title: {
                    type: String,
                    required: true,
                },
                completed: {
                    type: Boolean,
                    default: false,
                },
            },
        ],
        link: String,
        image: String,
        timelimit: {
            type: Number,
            requred: true,
        },
        info: {
            type: String,
            required: true,
        },
        document: String,
    },
    {
        timestamps: true,
    }
);

const Project =
    mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
