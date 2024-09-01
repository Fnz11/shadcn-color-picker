import { Globe, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const SOCIALS_DATA = [
  {
    name: "Github",
    url: "https://github.com/Fnz11",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=""
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/fikri-nurdiansyah-214387286/",
    icon: <Linkedin height={20} width={20} />,
  },
  {
    name: "Website",
    url: "https://ysfik.my.id/",
    icon: <Globe height={20} width={20} />,
  },
];

const Socials = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      {SOCIALS_DATA.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          className="bg-white/50 hover:bg-white text-black rounded-full aspect-square flex items-center justify-center h-7 w-7 hover:scale-[1.1] transition-all duration-300 ease-out"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
