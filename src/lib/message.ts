import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        body: String,

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        discussion: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Discussion",
        },
        link: String,
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        image: String,
    },
    {
        timestamps: true,
    }
);

// check like here the ? is important
const Message =
    mongoose?.models?.Message || mongoose.model("Message", messageSchema);

export default Message;
