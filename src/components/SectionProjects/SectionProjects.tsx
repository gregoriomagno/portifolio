import React from "react";
import Card from "../Card/Card";
import { IProject } from "@/types/project";
import { listProjects } from "@/constants/projects";

const SectionProjects = () => {
  return (
    <section
    className="flex flex-col h-screen   items-center gap-8"
    id="projetos"
  >
    <h1 className="text-5xl">web developer portfolio</h1>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
      {listProjects.map((project: IProject, index) => {
        return (
          <Card
            key={index}
            title={project.title}
            stack={project.stack}
            link={project.link}
            img={project.img}
            description={project.description}
          />
        );
      })}
    </div>
  </section>
  );
};

export default SectionProjects;
