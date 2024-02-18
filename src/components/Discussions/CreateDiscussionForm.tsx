"use client";

import React, { FormEvent, useState } from "react";
import user from "../../public/user.jpeg";
import { CldUploadButton } from "next-cloudinary";
import { HiPhoto } from "react-icons/hi2";
import { IoDocument } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import { revalidateTag } from "@/actions/revalidateTag";
import Select from "react-select";
import { tags } from "@/constants/index";

type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateDiscussionForm = ({ setIsOpen }: Props) => {
    const router = useRouter();
    const session = useSession();
    const [loading, setLoading] = useState(false);
    const [discussion, setDiscussion] = useState({
        topic: "",
        hashtags: [] as string[],
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (discussion.topic == "") {
            toast.error("Necessary fields are not filled");
        }
        setLoading(true);
        console.log(discussion);
        axios
            .post("/api/create/discussion", {
                ...discussion,
            })
            .then((response) => {
                toast.success("discussion published");

                setIsOpen(false);
            })
            .catch((error) => {
                toast.error("An error occured");
            })
            .finally(() => {
                setLoading(false);
                location.reload();
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
                        Enter Name*
                    </label>
                    <input
                        type="text"
                        required
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

                <div className="flex gap-2 items-center">
                    <div className="font-bold ">Hashtags</div>
                    <Select
                        isMulti
                        name="colors"
                        // defaultValue={oldSubjects}
                        onChange={(value) => {
                            const newHashtags = [] as string[];
                            value.map((tag) => newHashtags.push(tag.value));
                            setDiscussion({
                                ...discussion,
                                hashtags: newHashtags,
                            });
                            console.log(newHashtags);
                        }}
                        options={tags}
                        classNamePrefix="select"
                        className="basic-multi-select w-full text-black"
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

export default CreateDiscussionForm;
