import { Discussion } from "@/types";
import Image from "next/image";
import defaultImage from "@/../public/user.jpeg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import MessageList from "./MessageList";
import InputMessageBox from "./InputMessageBox";

const DiscussionBox = ({ discussion }: { discussion: Discussion }) => {
    return (
        <div className="min-w-md w-full rounded-md h-screen  ">
            <div className="bg-gray-200 rounded-md p-2 flex  gap-2 items-center ">
                <div className="flex w-full justify-between items-center">
                    <div className="flex w-fit gap-2 items-center">
                        <div className=" relative  flex h-[30px] w-[30px] rounded-full bg-green-400 ">
                            {" "}
                            <Image
                                src={discussion?.owner.image || defaultImage}
                                alt=""
                                className="object-fit rounded-full"
                                fill
                            />
                        </div>

                        <span className="text-xs font-medium">
                            {discussion?.owner.name}
                        </span>
                    </div>
                    <div className="font-bold text-xl ">{discussion.topic}</div>
                </div>
                <div className="">
                    <BsThreeDotsVertical className="text-2xl  font-bold text-blue-800" />
                </div>
            </div>

            <div className="w-full">
                <MessageList messages={discussion.messages} />
            </div>
            <div className="">
                <InputMessageBox id={discussion._id} />
            </div>
        </div>
    );
};

export default DiscussionBox;
