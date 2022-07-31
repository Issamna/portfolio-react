import React, { useState, useEffect } from "react";

export default function SkillBox(props){
    return (
        <div className="skill-item-box">
            <div className="skill-item">
                <img src={props.skill.image} alt="image" />
                <p>{props.skill.name}</p>
            </div>
        </div>
    );
}

