// "use client";
import AnnoucementButton from "./ProjectButton";
import axios from "axios";
import AnnoucementCard from "./ProjectCard";

import { Project } from "@/types";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }: { projects: Project[] }) => {
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
            <div className="min-h-screen mt-4 ">
                <div className="flex justify-center text-2xl">
                    Recent Projects
                </div>

                <div className="flex flex-col gap-4 items-center">
                    {projects.map((project: Project) => (
                        <ProjectCard
                            key={Math.random()}
                            project={project}
                        />
                    ))}
                </div>
                <AnnoucementButton />
            </div>
        </>
    );
};

export default Projects;
