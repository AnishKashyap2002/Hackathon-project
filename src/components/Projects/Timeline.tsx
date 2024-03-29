"use client";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { TbProgressAlert } from "react-icons/tb";
import { TbProgressCheck } from "react-icons/tb";
import "react-vertical-timeline-component/style.min.css";

export const Timeline = ({
    milestones,
}: {
    milestones: { title: string; completed: boolean }[];
}) => {
    return (
        <VerticalTimeline>
            {milestones.map((milestone) => (
                <VerticalTimelineElement
                    key={milestone.title}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    contentArrowStyle={{
                        borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date="2011 - present"
                    iconStyle={{
                        background: "rgb(33, 150, 243)",
                        color: "#fff",
                    }}
                    icon={
                        milestone.completed ? (
                            <TbProgressCheck />
                        ) : (
                            <TbProgressAlert />
                        )
                    }
                >
                    <h3 className="vertical-timeline-element-title">
                        Creative Director
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Miami, FL
                    </h4>
                    <p>
                        Creative Direction, User Experience, Visual Design,
                        Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};
