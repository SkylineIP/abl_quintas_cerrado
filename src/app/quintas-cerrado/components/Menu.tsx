"use client";

import React, { memo } from "react";
import menuStructure from "../../utils/menuStructure";
import { usePathname, useRouter } from "next/navigation";
import { useContextDefault } from "@/context/Context";
import Image from "next/image";
import { useContextSound } from "@/context/ContextSound";

const delay = [
  "animate-delay-100",
  "animate-delay-200",
  "animate-delay-300",
  "animate-delay-400",
  "animate-delay-500",
  "animate-delay-600",
  "animate-delay-700",
];

const Menu: React.FC = memo(function Menu() {
  const context = useContextDefault();
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;
  const pathname = usePathname();
  const router = useRouter();
  const contextSound = useContextSound();
  const playSound = contextSound?.playSound;
  const handleClick = (item: {
    caminho: string;
    submenuElements: string[];
  }) => {
    if (setSubmenuAndSelected && playSound) {
      setSubmenuAndSelected(item.caminho, item.submenuElements[0]);
      router.push(item.caminho);
    }
  };

  const indexSelected = menuStructure.findIndex((item: { caminho: string }) =>
    item.caminho.includes(pathname),
  );
  return (
    <div className="col-span-6 row-span-24 w-full bg-sidebar bg-cover grid grid-rows-24 grid-cols-6 col-start-1 row-start-1">
      <div className="row-span-3 col-span-4 row-start-2 col-start-2 relative animate-fade animate-duration-[2500ms ] text-first bg-background/70 cursor-pointer flex justify-center items-center">
        <Image
          src="/side/logo.png"
          alt="Logo Quintas do Cerrado"
          fill
          className="object-contain"
        />
      </div>
      <div className="row-span-15 col-span-4 col-start-2 row-start-6 grid grid-rows-7 grid-cols-6">
        <div className="col-span-6 row-span-15 flex flex-col items-center justify-between">
          {menuStructure.map((item, index) => (
            <button
              onClick={() => {
                handleClick(item);
              }}
              key={index}
              className={`text-[#FAEDD4] tracking-widest leading-2.5 desktop:text-sm w-full text-[14px] h-12 flex items-center justify-start  cursor-pointer uppercase animate-fade-right ${delay[index]
                } animate-duration-[2000ms] ${indexSelected === index
                  ? " font-azobold font-extrabold"
                  : ""
                }`}
            >
              <span className="w-5 h-5 rounded-full bg-[#FAEDD4] mr-8 inline-block"></span>
              <p className="text-2xl text-left">{item.title}</p>
            </button>
          ))}
        </div>

        {/* <div className="col-span-1 row-span-14" /> */}
      </div>
      <div
        className="row-span-2 col-span-2 row-start-22 col-start-3 relative flex items-center justify-center animate-fade animate-duration-[2500ms] text-white bg-background/70 cursor-pointer"
        onClick={() => {
          setSubmenuAndSelected?.("/quintas-cerrado", ""); // Set state before navigation
          router.push("/quintas-cerrado"); // Redireciona para a página inicial
        }}
      >
        <Image
          src="/side/home.png"
          alt="Home Button"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
});

export default Menu;
