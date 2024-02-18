"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Modal from "../Modal";
import CreateProjectForm from "./CreateProjectForm";

const ProjectButton = () => {
    const [open, setIsOpen] = useState(false);
    return (
        <div className="fixed flex flex-col bottom-14 right-10 items-center gap-2 group/parent">
            <div
                className="text-white text-3xlshadow-md cursor-pointer w-fit bg-rose-500 rounded-full p-3"
                onClick={() => setIsOpen(true)}
            >
                <IoMdAdd />
            </div>
            <div className="bg-gray-600 px-2 py-2 invisible group-hover/parent:visible group-hover/parent:translate-x-0 transition translate-x-32 text-white text-sm rounded-md">
                Create Project
            </div>
            <Modal
                title="Create Annoucement"
                open={open}
                setIsOpen={setIsOpen}
            >
                <CreateProjectForm setIsOpen={setIsOpen} />
            </Modal>
        </div>
    );
};

export default ProjectButton;
