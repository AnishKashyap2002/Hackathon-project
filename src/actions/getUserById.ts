import User from "@/lib/user";
import Connection from "@/lib/connectDB";

export const getUserById = async (id: string) => {
    Connection();

    const user = await User.findOne({ _id: id }).lean();

    return JSON.stringify(user);
};
