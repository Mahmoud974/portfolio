import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function error() {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Image
        src={`/images/error.png`}
        width={900}
        height={900}
        className="w-96"
        alt="image d'error 404"
      />
      <Link href="/">
        <Button className="my-6 border-2 border-[#04F7A4] hover:bg-[#04F7A4] bg-black  px-12 py-6 rounded-none">
          <p className="text-xl   mr-2 text-[#04F7A4]  hover:text-black">
            Portfolio
          </p>
          <House className="text-xl text-[#04F7A4]  hover:text-black" />
        </Button>
      </Link>
    </main>
  );
}
