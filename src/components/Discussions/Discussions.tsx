// "use client";
import AnnoucementButton from "./DiscussionButton";
import axios from "axios";
import AnnoucementCard from "./DiscussionCard";

import { Discussion } from "@/types";
import { useEffect, useState } from "react";
import discussionCard from "./DiscussionCard";
import DiscussionButton from "./DiscussionButton";
import DiscussionCard from "./DiscussionCard";

const Discussions = ({ discussions }: { discussions: Discussion[] }) => {
    // const [annoucements, setAnnoucements] = useState<Annoucement[]>([]);

    // const getAnnoucements = async () => {
    //     await axios
    //         .get<Annoucement[]>("/api/get/annoucements")
    //         .then((response) => {
    //             if (response.status >= 200 && response.status < 300) {
    //                 console.log(response.data);
    //                 setAnnoucements(response.data);
    //             } else {
    //                 console.log(response);
    //             }
    //         });
    // };
    // useEffect(() => {
    //     getAnnoucements();
    // }, []);

    return (
        <>
            <div className="min-h-screen z-0 relative  pt-4 ">
                <div className="flex py-4 justify-center text-2xl text-black">
                    Recent discussions
                </div>

                <div className="flex flex-col gap-4 items-center">
                    {discussions.map((discussion: Discussion) => (
                        <DiscussionCard
                            key={Math.random()}
                            discussion={discussion}
                        />
                    ))}
                </div>

                <DiscussionButton />
            </div>
        </>
    );
};

export default Discussions;
