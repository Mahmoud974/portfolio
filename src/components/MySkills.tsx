import React from "react";
import SectionHeading from "./ui/SectionHeading";
import { Stacks } from "./stacks";

export default function Technos() {
  return (
    <div className="py-2 sm:py-4">
      <SectionHeading primary="MES" accent="STACKS" mobilePrimary="MES" mobileAccent="STACKS" />
      <Stacks />
    </div>
  );
}
