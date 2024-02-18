"use client";

import React, { FormEvent, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import { HiPhoto } from "react-icons/hi2";
import { IoDocument } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { tags } from "@/constants/index";

type Props = {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateProjectForm = ({ setIsOpen }: Props) => {
    const router = useRouter();
    const session = useSession();
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState({
        name: "",
        info: "",
        link: "",
        image: "",
        hashtags: [] as string[],
        milestones: [
            {
                title: "",
                completed: false,
            },
        ],
        document: "",
        timelimit: 10,
    });

    const setMilestone = (value: string, i: number) => {
        const newMilestones = project.milestones;
        newMilestones[i].title = value;
    };

    const addMilestone = () => {
        const newMilestones = project.milestones;
        newMilestones.push({
            title: "",
            completed: false,
        });
        setProject({ ...project, milestones: newMilestones });
    };

    const handleUploadImage = (result: any) => {
        setProject({ ...project, image: result?.info?.secure_url });
    };
    const handleUploadDocument = (result: any) => {
        setProject({ ...project, document: result?.info?.secure_url });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (project.name == "" || project.info == "") {
            toast.error("Necessary fields are not filled");
        }
        if (project.timelimit < 1) {
            project.timelimit = 1;
        }
        setLoading(true);
        console.log(project);
        axios
            .post("/api/create/project", {
                ...project,
            })
            .then((response) => {
                toast.success("project published");

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
                            setProject({
                                ...project,
                                name: e.target.value,
                            })
                        }
                        placeholder="Enter what is this project is about..."
                        className="px-3 text-sm text-md py-2 outline-none  border-b  border-black border-1"
                    />
                </div>
                <div className="flex flex-col ">
                    <label className="font-bold  text-gray-700">
                        Project details*
                    </label>
                    <textarea
                        rows={5}
                        required
                        onChange={(e) =>
                            setProject({
                                ...project,
                                info: e.target.value,
                            })
                        }
                        placeholder="What are the details of your project"
                        className="px-3 text-sm text-md py-2 outline-none  rounded-lg  border-gray-700 border-2"
                    />
                </div>
                <div className="flex flex-col ">
                    <label className="font-bold  text-gray-700">
                        Enter Link
                    </label>
                    <input
                        type="text"
                        onChange={(e) =>
                            setProject({
                                ...project,
                                link: e.target.value,
                            })
                        }
                        placeholder="Enter the related link or project"
                        className="px-3 text-sm text-md py-2 outline-none  border-b  border-black border-1"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-xl">Enter milestones</h1>

                    {project.milestones.map((milestone, i) => (
                        <div
                            className="flex"
                            key={i}
                        >
                            <div className=" flex justify-between w-full">
                                <div className="flex flex-col w-full">
                                    <div className=" w-full flex gap-2 justify-between ">
                                        <input
                                            type="text"
                                            required
                                            onChange={(e) =>
                                                setMilestone(e.target.value, i)
                                            }
                                            placeholder="Enter the steps to achieve"
                                            className="px-3 w-full text-sm text-md py-2 outline-none  border-b  border-black border-1"
                                        />
                                        <div
                                            onClick={(e) => addMilestone()}
                                            className="px-4 h-fit w-fit py-2  bg-green-700 text-white font-bold text-xl rounded-md"
                                        >
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
                            setProject({
                                ...project,
                                hashtags: newHashtags,
                            });
                            console.log(newHashtags);
                        }}
                        options={tags}
                        classNamePrefix="select"
                        className="basic-multi-select w-full text-black"
                    />
                </div>
                <div className="flex flex-col ">
                    <label className="font-bold  text-gray-700">
                        Enter Time Limit (In days)*
                    </label>
                    <input
                        type="number"
                        required
                        onChange={(e) =>
                            setProject({
                                ...project,
                                timelimit: parseInt(e.target.value),
                            })
                        }
                        placeholder="Enter what is this project is about..."
                        className="px-3 text-sm text-md py-2 outline-none  border-b  border-black border-1"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col ">
                        <label className="font-bold  text-gray-700">
                            Enter Image
                        </label>
                        <CldUploadButton
                            options={{
                                maxFiles: 1,
                            }}
                            uploadPreset="s0suaub8"
                            onUpload={handleUploadImage}
                        >
                            <HiPhoto
                                size={30}
                                className={"bg-sky-500 text-white"}
                            />
                        </CldUploadButton>
                    </div>

                    <div className="flex flex-col ">
                        <label className="font-bold  text-gray-700">
                            Enter Document
                        </label>
                        <CldUploadButton
                            options={{
                                maxFiles: 1,
                            }}
                            uploadPreset="s0suaub8"
                            onUpload={handleUploadDocument}
                        >
                            <IoDocument
                                size={30}
                                className={"bg-sky-500 text-white"}
                            />
                        </CldUploadButton>
                    </div>
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

export default CreateProjectForm;
