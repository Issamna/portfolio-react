import React, { useState, useEffect } from "react";
import Title from "./Title";
import ProjectItem from "./ProjectItem";
import { projects } from "../utils/Data";

const Projects = () => {
  
  return (
    <section id="projects">
      <Title name='Projects' />
      <div className="center-div subsection-box">
        <img className="section-box-img" src="./images/projects.png" alt="image" />
        <div className="project-list">
          {projects.map((project) =>(
            <ProjectItem project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;