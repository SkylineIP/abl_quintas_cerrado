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
    <div className="w-full h-full bg-impbg relative min-h-[800px] min-w-[1200px] flex justify-between items-end">
      <Image
        onClick={() => {
          router.push("/quintas-cerrado/localizacao")
          setSubmenuAndSelected?.("Localização", "tour360")
        }}
        src="/descanso/bg.png"
        alt="Background"
        fill
        className=" object-contain"
      />
    </div>
  );
};

export default MenuPage;
