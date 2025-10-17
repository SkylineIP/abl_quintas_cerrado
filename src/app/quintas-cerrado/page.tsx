"use client";
import React from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";

const MenuPage: React.FC = () => {
  const router = useRouter();

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
      }}
        className="w-full h-[10%] bg-[#FAEDD4] text-[#16555A] text-2xl text-center absolute bottom-0"
        >
          <span className=" uppercase">
            <strong>TOQUE</strong> para iniciar !
          </span>
        </button>
    </div>
  );
};

export default MenuPage;
