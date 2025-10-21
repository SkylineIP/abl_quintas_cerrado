"use client";

import React from "react";
import Menu from "../components/Menu";
import Submenu from "../components/Submenu";
import { useContextDefault } from "@/context/Context";
import GoogleMap from "../../components/GoogleMaps";
import Image from "next/image";

const LocalizacaoPage: React.FC = () => {
  const context = useContextDefault();
  const submenu = context?.submenu;

  return (
    <div className="w-full h-screen bg-background grid grid-cols-24 min-h-[800px] min-w-[1200px] grid-rows-24">
      <Menu />
      <div className="col-span-18 row-span-21 grid grid-rows-24 grid-cols-19 overflow-hidden animate-fade animate-duration-[2000ms]">
        {/* <div className="row-span-24 col-span-1" />
        <div className="row-span-3 col-span-17" /> */}
        {submenu === "tour360" && (
          <div
            className="row-span-24 col-span-19 relative w-full h-full
          animate-fade animate-duration-[1000ms]"
          >
            <iframe
              allowFullScreen
              src="https://tour.ultratour.com.br/ABL+Prime/quintas+do+cerrado/index.html?media-index=4"
              className="w-full h-full"
              title="ultratour"
            />
          </div>
        )}
        {submenu === "mapa-2d" && (
          <div className="row-span-24 col-span-19 overflow-hidden">
            <GoogleMap />
          </div>
        )}
        {submenu === "proximidades" && (
          <div className="relative row-span-24 col-span-20">
            <Image
              src="/localizacao/proximidades.png"
              alt="Proximidades"
              fill
              className=""
            />
          </div>
        )}
      </div>
      <Submenu />
    </div>
  );
};

export default LocalizacaoPage;
