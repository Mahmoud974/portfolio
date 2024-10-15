import React from "react";

export default function Title({ children }: any) {
  return (
    <h1 className="font-['Poppins'] font-[800] uppercase text-9xl text-center   ">
      {children}
    </h1>
  );
}
