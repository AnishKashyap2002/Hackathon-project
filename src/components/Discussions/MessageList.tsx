import { Message } from "@/types";
import { Session } from "inspector";
import { getServerSession } from "next-auth";
import Image from "next/image";
import defaultImage from "@/../public/user.jpeg";
import { getMessageById } from "@/actions";

const MessageBox = async ({
    message,
    currentMail,
}: {
    message: Message;
    currentMail: string | null | undefined;
}) => {
    const fullMessage = JSON.parse(
        await getMessageById(message._id)
    ) as Message;
    const isOwn = currentMail == fullMessage.user.email;
    return (
        <div className="w-full ">
            <div
                className={` flex flex-col ${
                    isOwn ? "float-right bg-blue-300" : "float-left bg-gray-300"
                } rounded-lg px-3 py-2`}
            >
                <div className="flex gap-2 items-cene">
                    <div className=" relative flex h-[30px] w-[30px] rounded-full bg-green-400 ">
                        {" "}
                        <Image
                            src={fullMessage?.user.image || defaultImage}
                            alt=""
                            className="object-fit rounded-full"
                            fill
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col">
                            <span className="text-xs font-medium">
                                {fullMessage?.user.name}
                            </span>
                            {/* <span className="text-sm text-gray-700 font-thin">
                                {message?.createdAt?.toDateString}
                            </span> */}
                        </div>
                        <div className="">
                            {message?.image && (
                                <Image
                                    alt="image"
                                    height="288"
                                    width={288}
                                    src={message?.image}
                                    className="object-cover transition hover:scale-110 duration-200 translate"
                                />
                            )}
                            {message?.body && (
                                <span className="">{message.body}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MessageList = async ({ messages }: { messages: Message[] }) => {
    const session = await getServerSession();

    return (
        <div className="flex flex-col gap-2 mt-4 pb-16">
            {messages.map((message) => (
                <div
                    className=" "
                    key={message._id}
                >
                    <MessageBox
                        currentMail={session?.user?.email}
                        message={message}
                    />
                </div>
            ))}
        </div>
    );
};

export default MessageList;
