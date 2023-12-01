"use client";

import Card from "@/components/Card/Card";
import SectionApresentation from "@/components/SectionApresentation/SectionApresentation";
import SectionProjects from "@/components/SectionProjects/SectionProjects";
import { listProjects } from "@/constants/projects";
import { IProject } from "@/types/project";

export default function Home() {
  return (
    <main className="flex flex-col  items-center justify-between px-12 text-white  ">
      <SectionApresentation />
      <SectionProjects />
    
     
    </main>
  );
}
