"use client";
import Link from "next/link";
import React, { useState } from "react";
import Content from "../components/Content";
import { Heart } from "lucide-react";
import Socials from "@/components/Socials";

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("#CADBA2");
  return (
    <div
      style={{ backgroundColor }}
      className="h-screen w-full flex flex-col items-center tracking-tight justify-center text-muted relative transition-colors duration-300 ease-in"
    >
      {/* Content */}
      <Content selected={backgroundColor} setSelected={setBackgroundColor} />

      {/* Footer */}
      <div className="absolute bg-white/50 rounded-lg px-5 py-3 bottom-5 flex flex-col gap-2">
        <Socials />
        <h3 className="text-sm text-black flex items-center justify-center gap-1 font-light">
          Made with <Heart className="text-pink-400 h-5" /> by{" "}
          <Link
            href="https://github.com/Fnz11"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            @Fnz11
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Home;
