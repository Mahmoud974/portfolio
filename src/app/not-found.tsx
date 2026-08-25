import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-4">
      <Image
        src="/images/error.webp"
        width={900}
        height={900}
        className="w-full max-w-sm h-auto"
        alt="Illustration d'une page introuvable (erreur 404)"
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
