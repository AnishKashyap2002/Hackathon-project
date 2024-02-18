import { Discussion } from "@/types";
import defaultUser from "../../../public/user.jpeg";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import discussionOptions from "./DiscussionOptions";
import { MdEdit } from "react-icons/md";

const DiscussionCard = ({ discussion }: { discussion: Discussion }) => {
    return (
        <div className="px-4 py-2 flex bg-gray-200 shadow-md flex-col gap-2   rounded-md sm:max-w-md w-full ">
            <div className="flex gap-2 w-full">
                <div className="flex gap-2 items-center">
                    <div className="relative h-[40px] w-[40px] rounded-full">
                        <Image
                            src={discussion?.owner?.image || defaultUser}
                            alt="User profile pic"
                            className="object-fit rounded-full"
                            fill
                        />
                    </div>

                    <div className="flex flex-col">
                        <span className="font-medium ">
                            {discussion?.owner?.name}
                        </span>
                        <span className="text-xs text-gray-700">
                            {/* {discussion?.createdAt?.toDateString()} */}
                        </span>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center gap-2">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col">
                            <Link href={`/discussion/${discussion._id}`}>
                                <span className="font-bold text-2xl ">
                                    {discussion?.topic}
                                </span>
                            </Link>
                        </div>
                        <div className="flex gap-2">
                            {discussion.hashtags.map((hashtag) => (
                                <div
                                    className="text-gray-800 font-medium"
                                    key={hashtag}
                                >
                                    {hashtag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-fit">
                        <a
                            href={`/edit-discussion/${discussion._id}  `}
                            className=" "
                        >
                            <span className="bg-green-800 p-2 rounded-full  hover:bg-gray-800  hover:text-white">
                                <MdEdit />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscussionCard;
