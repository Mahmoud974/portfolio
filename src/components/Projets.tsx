import React from "react";
import SectionHeading from "./ui/SectionHeading";
import ProjectList from "./ProjectList";

export default function Projets() {
  return (
    <div className="py-2 sm:py-4">
      <SectionHeading primary="MES" accent="PROJETS" mobilePrimary="MES" mobileAccent="PROJETS" />
      <ProjectList />
    </div>
  );
}
