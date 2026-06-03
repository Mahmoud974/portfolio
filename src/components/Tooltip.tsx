import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

export default function TooltipSocial() {
  return (
    <div className="flex gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link
              href="https://www.linkedin.com/in/mahamoudmoussa1/"
              target="_blank"
            >
              <FaLinkedinIn className="text-2xl" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Linkedin</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Github */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href="https://github.com/Mahmoud974" target="_blank">
              <ImGithub className="text-2xl" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Github</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      
    </div>
  );
}
