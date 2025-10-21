"use client";

import React from "react";
import Menu from "../components/Menu";
import Videos from "../../components/Video";
import Submenu from "../components/Submenu";

const Serie: React.FC = () => {
  return (
    <div className="w-full h-full bg-background grid grid-cols-24 grid-rows-24 ">
      <Menu />
      <div className="col-span-19  row-span-24 row-start-1 overflow-hidden animate-fade animate-duration-[2000ms] relative">
        <Videos thumb="/proj-casas/thumbjabu.png" videoSrc="/proj-casas/video.mp4" />
      </div>

      <Submenu />
    </div>
  );
};

export default Serie;
