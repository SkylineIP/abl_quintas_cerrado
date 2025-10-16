"use client";

import React, { useRef, useState } from "react";
import Menu from "../components/Menu";
import Image from "next/image";
import { Slider } from "@mui/material";

const ImagensPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollValue, setScrollValue] = useState(0);
  const [imageIndexToShow, setImageIndexToShow] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const handleSelectImage = (index: number) => {
    setShowImage(true);
    setImageIndexToShow(index);
  };

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (!scrollRef.current) return;
    const value = Array.isArray(newValue) ? newValue[0] : newValue;

    const { scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;

    scrollRef.current.scrollLeft = (value / 100) * maxScroll;
    setScrollValue(value);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
    const maxScroll = scrollWidth - clientWidth;

    const percentage = (scrollLeft / maxScroll) * 100;
    setScrollValue(percentage);
  };
  const images = [
    { src: "/imagens/01.png", label: "Portaria" },
    { src: "/imagens/2.png", label: "Quadras de Beach Tennis" },
    { src: "/imagens/3.png", label: "Wine Garden" },
    { src: "/imagens/4.png", label: "Play Talude" },
    { src: "/imagens/5.png", label: "Módulo de Serviço" },
    { src: "/imagens/6.png", label: "Quadra de Beach Tennis" },
    { src: "/imagens/7.png", label: "Wine Garden" },
    { src: "/imagens/8.png", label: "Playground" },
    { src: "/imagens/9.png", label: "Trilha da Mata" },
    { src: "/imagens/10.png", label: "Academia" },
    { src: "/imagens/11.png", label: "Bicicross" },
    { src: "/imagens/12.png", label: "Fazendinha" },
    { src: "/imagens/13.png", label: "Pet Place" },
    { src: "/imagens/14.png", label: "Academia" },
    { src: "/imagens/15.png", label: "Bicicross" },
    { src: "/imagens/16.png", label: "Centro Ecumênico" },
    { src: "/imagens/17.png", label: "Pet Place" },
    { src: "/imagens/18.png", label: "Academia" },
    { src: "/imagens/19.png", label: "Heliponto" },
    { src: "/imagens/20.png", label: "Centro Ecumênico" },
    { src: "/imagens/21.png", label: "Pet Place" },
    { src: "/imagens/22.png", label: "Banheiros" },
    { src: "/imagens/23.png", label: "Vila Casarão" },
    { src: "/imagens/24.png", label: "Lounge" },
    { src: "/imagens/25.png", label: "Praça Vila Boa" },
    { src: "/imagens/26.png", label: "Praça do Forageu" },
    { src: "/imagens/27.png", label: "Vila Casarão" },
    { src: "/imagens/28.png", label: "Lounge" },
    { src: "/imagens/29.png", label: "Redário" },
    { src: "/imagens/30.png", label: "Praça do Forageu" },
    { src: "/imagens/31.png", label: "Salão de Festas" },
    { src: "/imagens/32.png", label: "Lago do Rosário" },
    { src: "/imagens/33.png", label: "Quadras de Tênis" },
    { src: "/imagens/34.png", label: "Wine Garden" },
    { src: "/imagens/35.png", label: "Piscina Adulto" },
    { src: "/imagens/36.png", label: "Quadra de Tênis" },
    { src: "/imagens/37.png", label: "Wine Garden" },
    { src: "/imagens/38.png", label: "Piscina Infantil" },
  ];


  const fullImages = [
    { src: "/imagens/expanded/1.png", label: "Portaria" },
    { src: "/imagens/expanded/2.png", label: "Quadras de Beach Tennis" },
    { src: "/imagens/expanded/3.png", label: "Wine Garden" },
    { src: "/imagens/expanded/4.png", label: "Play Talude" },
    { src: "/imagens/expanded/5.png", label: "Módulo de Serviço" },
    { src: "/imagens/expanded/6.png", label: "Quadra de Beach Tennis" },
    { src: "/imagens/expanded/7.png", label: "Wine Garden" },
    { src: "/imagens/expanded/8.png", label: "Playground" },
    { src: "/imagens/expanded/9.png", label: "Trilha da Mata" },
    { src: "/imagens/expanded/10.png", label: "Academia" },
    { src: "/imagens/expanded/11.png", label: "Bicicross" },
    { src: "/imagens/expanded/12.png", label: "Fazendinha" },
    { src: "/imagens/expanded/13.png", label: "Pet Place" },
    { src: "/imagens/expanded/14.png", label: "Academia" },
    { src: "/imagens/expanded/15.png", label: "Bicicross" },
    { src: "/imagens/expanded/16.png", label: "Centro Ecumênico" },
    { src: "/imagens/expanded/17.png", label: "Pet Place" },
    { src: "/imagens/expanded/18.png", label: "Academia" },
    { src: "/imagens/expanded/19.png", label: "Heliponto" },
    { src: "/imagens/expanded/20.png", label: "Centro Ecumênico" },
    { src: "/imagens/expanded/21.png", label: "Pet Place" },
    { src: "/imagens/expanded/22.png", label: "Banheiros" },
    { src: "/imagens/expanded/23.png", label: "Vila Casarão" },
    { src: "/imagens/expanded/24.png", label: "Lounge" },
    { src: "/imagens/expanded/25.png", label: "Praça Vila Boa" },
    { src: "/imagens/expanded/26.png", label: "Praça do Forageu" },
    { src: "/imagens/expanded/27.png", label: "Vila Casarão" },
    { src: "/imagens/expanded/28.png", label: "Lounge" },
    { src: "/imagens/expanded/29.png", label: "Redário" },
    { src: "/imagens/expanded/30.png", label: "Praça do Forageu" },
    { src: "/imagens/expanded/31.png", label: "Salão de Festas" },
    { src: "/imagens/expanded/32.png", label: "Lago do Rosário" },
    { src: "/imagens/expanded/33.png", label: "Quadras de Tênis" },
    { src: "/imagens/expanded/34.png", label: "Wine Garden" },
    { src: "/imagens/expanded/35.png", label: "Piscina Adulto" },
    { src: "/imagens/expanded/36.png", label: "Quadra de Tênis" },
    { src: "/imagens/expanded/37.png", label: "Wine Garden" },
    { src: "/imagens/expanded/38.png", label: "Piscina Infantil" },
  ];

  return (
    <div className="w-full h-full bg-background grid grid-cols-24 grid-rows-24 ">
      <Menu />
      <div className="col-span-19 bg-[#E8DEC7] row-span-24 px-[2vw] py-[2vh]  row-start-1 relative overflow-hidden animate-fade animate-duration-[2000ms]">
        {showImage && (
          <div className="absolute top-0 right-0 h-full w-full bg-black/30 flex items-center justify-center backdrop-blur-3xl z-50">
            <Image
              src={fullImages[imageIndexToShow].src}
              alt={images[imageIndexToShow].label}
              fill
              className="object-cover"
            />
            <span className="absolute bottom-0 right-0 bg-[#E8DEC7] px-8 py-2 uppercase h-[5%] text-[clamp(14px,1.2vw,66px)] font-bold">
              {fullImages[imageIndexToShow].label}
            </span>
            <Image
              src="/praca/bvoltar.png"
              alt="Voltar"
              width={80}
              height={80}
              onClick={() => {
                setShowImage(false);
              }}
              className="absolute bottom-8 left-10 cursor-pointer"
            />
          </div>
        )}
        <div onScroll={handleScroll} ref={scrollRef} className="flex-1 h-[95%] overflow-x-auto overflow-y-hidden no-scrollbar ">

          <div
            className="grid auto-cols-max grid-rows-[repeat(4,auto)] gap-[1.5vw] px-[1vw] py-[1vw]"
            style={{ gridAutoFlow: "column" }}
          >
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => {
                  handleSelectImage(index);
                }}
                className="relative flex-shrink-0 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105"
                style={{
                  width: "clamp(200px, 12vw, 480px)",
                  aspectRatio: "200/170",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <Slider
          value={scrollValue}
          min={0}
          max={100}
          orientation="horizontal"
          step={1}
          track={false}
          valueLabelDisplay="off"
          sx={{
            height: "clamp(3px, 1vw, 6px)",
            color: '#D8CEB8',
            "& .MuiSlider-thumb": {
              width: "clamp(24px, 2vw, 60px)", // responsive thumb
              height: "clamp(24px, 2vw, 60px)",
              backgroundImage: `url('/imagens/Indicador.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "transparent",
              borderRadius: 99,
            },
            "& .MuiSlider-rail": {
              height: "clamp(8px, 1vw, 20px)",
              backgroundColor: '#D8CEB8',
              opacity: 1,
            },
          }}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default ImagensPage;
