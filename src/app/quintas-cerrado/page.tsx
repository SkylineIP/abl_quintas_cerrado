"use client";
import React from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useContextDefault } from "@/context/Context";

const MenuPage: React.FC = () => {
  const router = useRouter();
  const context = useContextDefault()
  const setSubmenuAndSelected = context?.setSubmenuAndSelected;


  return (
    <div className="w-full h-full bg-background-tela-inicial overflow-hidden relative min-h-[800px] min-w-[1200px] flex justify-center items-center">
      <Image
        src="/descanso/bg.png"
        alt="Background"
        fill
        className=" object-fill"
      />
      <button
      onClick={() => {
        router.push("/quintas-cerrado/localizacao")
        setSubmenuAndSelected?.("Localização", "tour360")
      }}
        className="w-full h-[9%] bg-[#FAEDD4] text-[#16555A] text-2xl text-center absolute bottom-0"
        >
          <span className=" uppercase">
            <strong>TOQUE</strong> para iniciar !
          </span>
        </button>
    </div>
  );
};

export default MenuPage;
