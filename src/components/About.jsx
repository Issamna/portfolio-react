import React, { useState, useEffect } from "react";
import Title from "./Title";
import SkillBox from "./SkillBox";
import { aboutme, skills } from "../utils/Data";

const About = () => {
  
  return (
    <section id="about">
      <Title name='About Me' />
      <div className="center-div">
        <img className='about-me-img' src="./images/ia_pic.jpg" alt="image" />
        <div className="about-text-box">
          <div className="about-text">
            <p><span>Hi!</span> {aboutme.description1}</p>
            <p>I am currently working as a <span>{aboutme.title}</span>. {aboutme.description2}</p>
          </div>
        </div>
      </div>  
      <div className="center-div subsection-box">
        <img className="section-box-img" src="./images/skillstech.png" alt="image" />
        <h3>Skills And Tech</h3>
        <div className="skills-list">
          {skills.map((skill) =>(
            <SkillBox skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;