"use client";

import React, { useRef, useState } from "react";
import Menu from "../components/Menu";
import Videos, { VideoControls } from "../../components/Video";
import Submenu from "../components/Submenu";
import Image from "next/image";


const Serie: React.FC = () => {
  const videoRef = useRef<VideoControls | null>(null);
  const [, setIsPlaying] = useState(false);

  const navButtons = [
    { name: "rewind", src: "/implantacao/rewind.png" },
    { name: "play", src: "/implantacao/play.png" },
    { name: "pause", src: "/implantacao/pause.png" }
  ]

  const handleNavClick = (name: string) => {
    if (name === "play") {
      videoRef.current?.play();
      setIsPlaying(true);
    } else if (name === "pause") {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else if (name === "rewind") {
      videoRef.current?.rewind();
    }
  };

  return (
    <div className="w-full h-full bg-background grid grid-cols-24 grid-rows-24 ">
      <Menu />
      <div className="col-span-19  row-span-21 row-start-1 overflow-hidden animate-fade animate-duration-[2000ms] relative">
        <Videos ref={videoRef} thumb="" videoSrc="/videos/videospage.mp4" noControls />
      </div>
      <div className="col-span-19 row-span-3 row-start-22 bg-[#FAEDD4] flex items-center justify-center">
        <div className=" border-2 border-[#16555A] rounded-full py-1 px-2 flex items-center justify-between gap-10">
          {navButtons.map((button) => (
            <button
              key={button.name}
              className="relative w-8 h-8 hover:scale-[1.02] transition-transform"
              onClick={() => handleNavClick(button.name)}
            >
              <Image
                src={button.src}
                alt={button.name}
                fill
                className="object-contain pointer-events-none"
              />
            </button>
          ))}
        </div>
      </div>
      <Submenu />
    </div>
  );
};

export default Serie;
