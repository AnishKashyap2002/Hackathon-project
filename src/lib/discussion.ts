import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema(
    {
        topic: {
            type: String,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        hashtags: [String],
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Message",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Discussion =
    mongoose?.models?.Discussion ||
    mongoose.model("Discussion", discussionSchema);

export default Discussion;
