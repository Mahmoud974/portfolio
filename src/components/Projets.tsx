import React from "react";
 
import ProjectList from "./ProjectList";
import SectionHeading from "./SectionHeading";

export default function Projets() {
  return (
    <div className="py-2 sm:py-4 mt-12">
       <SectionHeading number="02" label="Projets" title="Projets" />
      <ProjectList />
    </div>
  );
}
