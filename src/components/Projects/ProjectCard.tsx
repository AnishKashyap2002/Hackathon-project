import { Project } from "@/types";
import defaultUser from "../../../public/user.jpeg";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import projectImage from "@/../public/bg-sky.jpg";
import ProjectOptions from "./ProjectOptions";
import { Timeline } from "./Timeline";
import { FaRegDotCircle } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { TiTickOutline } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="px-4 py-2 flex flex-col gap-2 shadow-md border-2 bg-gray-200    rounded-md sm:max-w-[700px] w-full ">
            <div className="flex gap-6 w-full">
                <div className="">
                    <div className="flex gap-2 h-fit items-center">
                        <div className="relative h-[30px] w-[30px] rounded-full">
                            <Image
                                src={project?.user?.image || defaultUser}
                                alt="User profile pic"
                                className="object-fit rounded-full"
                                fill
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-medium ">
                                {project?.user?.name}
                            </span>
                            <span className="text-xs text-gray-700">
                                {project?.createdAt.toDateString()}
                            </span>
                        </div>
                    </div>
                    <div className="relative rounded-full h-[150px] w-[150px]">
                        <Image
                            src={project?.image || projectImage}
                            alt="image"
                            className="rounded-full"
                            fill
                        />
                    </div>
                </div>
                <div className="flex flex-between">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <div className="font-bold text-xl">
                                {" "}
                                {project.name}
                            </div>
                            <div className="text-sm text-gray-800">
                                {project.info}
                            </div>
                        </div>
                        <ul className="list-disc ">
                            {project?.milestones?.map((milestone) => (
                                <li
                                    className="flex gap-4 py-2"
                                    key={Math.random()}
                                >
                                    <span className="flex items-center gap-2">
                                        <span className="">
                                            <FaRegDotCircle className="text-2xl" />
                                        </span>
                                        {milestone.title}
                                    </span>
                                    <span
                                        className={`${
                                            milestone.completed
                                                ? "text-green-700 text-2xl "
                                                : "text-red-700"
                                        } rounded-md`}
                                    >
                                        {milestone.completed ? (
                                            <TiTickOutline />
                                        ) : (
                                            <ImCross />
                                        )}
                                    </span>
                                </li>
                            ))}
                            {/* <Timeline milestones={project.milestones} /> */}
                        </ul>
                        <div className="text-xl ">
                            Timelimit:{" "}
                            <span className="font-bold">
                                {project.timelimit} days
                            </span>
                        </div>
                    </div>
                    <div className="">
                        <a href={`/edit-project/${project._id}`}>
                            <FaEdit className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>

            {project?.link && (
                <div className="flex gap-2">
                    <span className="font-bold break-words break-all  ">
                        Links:{" "}
                    </span>
                    <Link
                        className="text-red-400"
                        href={project.link}
                    >
                        Project Link
                    </Link>
                </div>
            )}
            {project?.document && (
                <div className="flex gap-2 break-words">
                    <span className="font-bold">Document: </span>
                    <span className=" break-words break-all w-full">
                        <Link
                            href={project?.document}
                            className="text-green-700"
                        >
                            {project.document}
                        </Link>
                    </span>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
