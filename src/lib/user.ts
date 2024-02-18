import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    },
    bio: String,
    image: String,

    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
        },
    ],
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
