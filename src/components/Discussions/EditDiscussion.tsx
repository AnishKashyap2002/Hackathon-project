"use client";

import { Discussion } from "@/types";
import axios from "axios";
import { useSession } from "next-auth/react";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { HiPhoto } from "react-icons/hi2";
import { IoDocument } from "react-icons/io5";

const EditDiscussion = ({ oldDiscussion }: { oldDiscussion: Discussion }) => {
    const router = useRouter();
    const session = useSession();
    const [loading, setLoading] = useState(false);
    const [discussion, setDiscussion] = useState({
        topic: oldDiscussion.topic || "",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (discussion.topic == "") {
            toast.error("Necessary fields are not filled");
        }
        setLoading(true);
        console.log(discussion);
        axios
            .post("/api/edit/discussion", {
                ...discussion,
                id: oldDiscussion._id,
            })
            .then((response) => {
                toast.success("discussion Updated");
            })
            .catch((error) => {
                toast.error("An error occured");
            })
            .finally(() => {
                setLoading(false);
                router.back();
            });
    };
    return (
        <div className={`${loading && "opacity-75"} mt-4`}>
            <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col ">
                    <label className="font-bold  text-gray-700">
                        Enter topic*
                    </label>
                    <input
                        type="text"
                        required
                        value={discussion.topic}
                        onChange={(e) =>
                            setDiscussion({
                                ...discussion,
                                topic: e.target.value,
                            })
                        }
                        placeholder="Enter what is this discussion is about..."
                        className="px-3 text-sm text-md py-2 outline-none  border-b  border-black border-1"
                    />
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-3 py-2"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default EditDiscussion;
