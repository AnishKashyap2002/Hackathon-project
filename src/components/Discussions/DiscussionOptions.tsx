import { Project } from "@/types";
import { useState } from "react";
import Dropdown from "../Dropdown";
import Modal from "../Modal";

const DiscussionOptions = ({ project }: { project: Project }) => {
    const [openEdit, setOpenEdit] = useState(false);

    const projectOptions = [
        {
            title: "Edit",
            onclick: () => setOpenEdit(true),
        },
        {
            title: "Edit",
            onclick: () => setOpenEdit(true),
        },
    ];

    return (
        <div className="">
            Hey man
            <Dropdown options={projectOptions} />
            Hello man
            <Modal
                title="Edit Project"
                open={openEdit}
                setIsOpen={setOpenEdit}
            >
                <div className="">This is for hello</div>
            </Modal>
        </div>
    );
};

export default DiscussionOptions;
