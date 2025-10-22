"use client";

import React, { memo, useEffect, useState } from "react";
import { useContextDefault } from "@/context/Context";
import menuStructure from "../../utils/menuStructure";
import { usePathname } from "next/navigation";

const Submenu: React.FC = memo(function Submenu() {
  const [indexSelected, setIndex] = useState(0);
  const context = useContextDefault();
  const pathname = usePathname();
  const setSubmenu = context?.setSubmenuAndSelected;
  const submenu = context?.submenu;


  useEffect(() => {
    const indexMenu = menuStructure.findIndex((item: { caminho: string }) =>
      item.caminho.includes(pathname),
    );
    setIndex(indexMenu);
  }, [pathname]);

  return (
    <div className={`col-start-7 row-span-3 row-start-22 col-span-19
      ${menuStructure[indexSelected].submenuElements.length > 4 ? "grid grid-cols-4" : "flex justify-evenly"}
      items-center bg-impbg animate-fade-up animate-duration-[2500ms]
      ${menuStructure[indexSelected].submenuElements.length === 1 && "hidden"}`}
    >
      {menuStructure[indexSelected].submenu.map((item, index) => {
        const isLast = index === menuStructure[indexSelected].submenu.length - 1;
        const isTwoRows = menuStructure[indexSelected].submenuElements.length > 4;
        const isSelected = submenu === menuStructure[indexSelected].submenuElements[index];

        return (
          <button
            onClick={() => {
              setSubmenu?.(
                menuStructure[indexSelected].caminho,
                menuStructure[indexSelected].submenuElements[index],
              );
            }}
            style={{
              animationDelay: `${index * 400}ms`
            }}
            key={item}
            className={`relative w-full flex desktop:px-4 h-full animate-fade-up  duration-1000 cursor-pointer 
              ${isSelected
                ? ""
                : "hover:bg-second/20"
              }
              ${!isLast
                ? `after:content-[''] after:absolute after:top-1/2 after:right-0 after:-translate-y-1/2 after:w-[3px] after:rounded-full after:h-1/2 ${isTwoRows ? 'after:h-1/4' : 'after:h-1/2'} after:bg-[#D0C2A6]`
                : ""
              }
            `}
          >
            <div className={`w-1/2 h-full bg-[#FAEDD4] ${isSelected
              ? `${isTwoRows ? "rounded-tr-[24px]" : "rounded-tr-[42px]"} transition-all duration-1000`
              : ""}
              `}
            ></div>
            <div className={`w-1/2 h-full bg-[#FAEDD4] ${isSelected
              ? `${isTwoRows ? "rounded-tl-[24px]" : "rounded-tl-[42px]"} transition-all duration-1000`
              : ""}
              `}
            ></div>
            <span className={`w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] desktop:text-sm fourk:text-xl tracking-widest text-first uppercase ${isSelected
                ? "font-azobold font-extrabold"
                : ""
                }`}
            >
              {item}
            </span>
          </button>
        );
      })}
    </div>
  );
});

export default Submenu;
