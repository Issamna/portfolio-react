import React, { useState, useEffect } from "react";

export default function ProjectItem(props){
    return (
        <div className="project-item">
            <div className="project-image" style={{ backgroundImage: `url(${props.project.image})` }}>
                <div className="project-info">
                    <h4 className="project-title">{props.project.name}</h4>
                    <div className='project-description'>
                        <p>{props.project.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

