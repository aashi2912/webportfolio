import React from "react";

import { projectsData } from "../../constants/index";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 text-justify">
        {projectsData.map((item, index) => (
          <ProjectsCard
            key={index}
            title={item.title}
            des={item.des}
            src={item.src}
            githubLink={item.githubLink}
            websiteLink={item.websiteLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
