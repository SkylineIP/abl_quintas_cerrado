"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const InstrucaoPopup: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => handleClose(), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => setVisible(false), 1000);
  };

  if (!visible) return null;

  return (
    <div
      onClick={handleClose}
      className={`absolute w-full h-full
        flex items-center justify-center
        z-50 transition-all duration-700 cursor-pointer
        ${isExiting ? "opacity-0 backdrop-blur-0 bg-black/0" : "opacity-100 backdrop-blur-md bg-black/40"}`}
    >
      <Image
        src="/implantacao/instrucao.png"
        alt="Instrução"
        height={400}
        width={500}
        className={`object-contain transition-transform -translate-x-40 duration-700 ease-in-out
          ${isExiting ? "-translate-y-[100vh]" : "translate-y-0"}`}
      />
    </div>
  );
};

export default InstrucaoPopup;
