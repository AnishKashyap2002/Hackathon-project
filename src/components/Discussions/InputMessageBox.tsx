"use client";

import axios from "axios";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { HiMiniPaperAirplane, HiPhoto } from "react-icons/hi2";

const InputMessageBox = ({ id }: { id: string }) => {
    const [message, setMessage] = useState({
        body: "",
        image: "",
        link: "",
    });

    const handleSubmit = () => {
        axios.post("/api/create/message", {
            ...message,
            discussion: id,
        });
    };

    const handleUPload = (result: any) => {
        axios.post("/api/create/message", {
            ...message,
            image: result?.info?.secure_url,
            discussion: id,
        });
    };

    console.log("document", id);
    return (
        <div className="py-4 px-4 fixed bottom-0  bg-white flex items-center gap-2 w-full h-fit">
            <CldUploadButton
                options={{
                    maxFiles: 1,
                }}
                uploadPreset="s0suaub8"
                onUpload={handleUPload}
            >
                <HiPhoto
                    size={30}
                    className={"bg-sky-500 text-white"}
                />
            </CldUploadButton>
            <form
                className="flex-1 flex items-center   lg:gap-4 gap-2 w-full"
                onSubmit={handleSubmit}
            >
                <div className="relative w-full ">
                    <input
                        type="text"
                        placeholder="Please enter the message..."
                        onChange={(e) =>
                            setMessage({
                                ...message,
                                body: e.target.value,
                            })
                        }
                        className="outline-none px-4 py-2 text-black font-light bg-gray-100 w-full rounded-full"
                    />
                </div>
                <button
                    type="submit"
                    className="p-2 rounded-full bg-sky-400 hover:bg-sky-600 transition"
                >
                    <HiMiniPaperAirplane
                        size={18}
                        className={"text-white"}
                    />
                </button>
            </form>
        </div>
    );
};

export default InputMessageBox;
