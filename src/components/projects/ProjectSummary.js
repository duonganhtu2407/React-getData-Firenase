import React from "react";
const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content blue-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by the Net Ninja</p>
                    <p className="blue-text">24 July, 2am </p>
                </div> 
        </div>
    )
}
export default ProjectSummary