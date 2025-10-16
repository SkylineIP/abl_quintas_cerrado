"use client";

import React, { useRef, useState } from "react";
import Menu from "../components/Menu";
import Image from "next/image";
import { Slider } from "@mui/material";

const FotosReaisPage: React.FC = () => {
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
    { src: "/fotos/1.png", label: "Vila Casarão" },
    { src: "/fotos/2.png", label: "Vila Casarão" },
    { src: "/fotos/3.png", label: "Vila Casarão" },
    { src: "/fotos/4.png", label: "Vila Casarão" },
    { src: "/fotos/5.png", label: "Vila Casarão" },
    { src: "/fotos/6.png", label: "Vila Casarão" },
    { src: "/fotos/7.png", label: "Vila Casarão" },
    { src: "/fotos/8.png", label: "Vila Casarão" },
    { src: "/fotos/9.png", label: "Vila Casarão" },
    { src: "/fotos/10.png", label: "Lago Engenho" },
    { src: "/fotos/11.png", label: "Deck Piscina" },
    { src: "/fotos/12.png", label: "Piscinas" },
    { src: "/fotos/13.png", label: "Lago do Rosário" },
    { src: "/fotos/14.png", label: "Lago do Rosário" },
    { src: "/fotos/15.png", label: "Fire Place" },
    { src: "/fotos/16.png", label: "Fire Place" },
    { src: "/fotos/17.png", label: "Fire Place" },
    { src: "/fotos/18.png", label: "Piscina Infantil" },
    { src: "/fotos/19.png", label: "Pista de Caminhada" },
    { src: "/fotos/20.png", label: "Muro de Segurança" },
    { src: "/fotos/21.png", label: "Muro de Segurança" },
    { src: "/fotos/22.png", label: "Vista Aérea" },
    { src: "/fotos/23.png", label: "Fazendinha" },
    { src: "/fotos/24.png", label: "Fazendinha" },
    { src: "/fotos/25.png", label: "Hortinha" },
    { src: "/fotos/26.png", label: "Playground" },
    { src: "/fotos/27.png", label: "Playground" },
    { src: "/fotos/28.png", label: "Churrasqueira" },
    { src: "/fotos/29.png", label: "Casarão" },
    { src: "/fotos/30.png", label: "Casarão" },
    { src: "/fotos/31.png", label: "Casarão" },
    { src: "/fotos/32.png", label: "Casarão" },
    { src: "/fotos/33.png", label: "Casarão" },
    { src: "/fotos/34.png", label: "Recepção" },
    { src: "/fotos/35.png", label: "Salão de Festas" },
    { src: "/fotos/36.png", label: "Salão de Festas" },
    { src: "/fotos/37.png", label: "Salão de Festas" },
    { src: "/fotos/38.png", label: "Churrasqueira" },
    { src: "/fotos/39.png", label: "Churrasqueira" },
    { src: "/fotos/40.png", label: "Lago Engenho" },
    { src: "/fotos/41.png", label: "Lago Engenho" },
    { src: "/fotos/42.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/43.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/44.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/45.png", label: "Quadra de Beach Tennis" },
    { src: "/fotos/46.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/47.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/48.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/49.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/50.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/51.png", label: "Quadras de Beach Tennis" }
];

const fullImages = [
    { src: "/fotos/expanded/1.png", label: "Vila Casarão" },
    { src: "/fotos/expanded/2.png", label: "Vila Casarão" },
    { src: "/fotos/expanded/3.png", label: "Vila Casarão" },
    { src: "/fotos/expanded/4.png", label: "Vila Casarão" },
    { src: "/fotos/expanded/5.png", label: "Vila Casarão" },
    { src: "/fotos/expanded/6.png", label: "Vila Casarão" },
    { src: "/fotos/expanded/7.png", label: "Vila Casarão" },
    { src: "/fotos/expanded/8.png", label: "Vila Casarão" },
    { src: "/fotos/expanded/9.png", label: "Vila Casarão" },
    { src: "/fotos/expanded/10.png", label: "Lago Engenho" },
    { src: "/fotos/expanded/11.png", label: "Deck Piscina" },
    { src: "/fotos/expanded/12.png", label: "Piscinas" },
    { src: "/fotos/expanded/13.png", label: "Lago do Rosário" },
    { src: "/fotos/expanded/14.png", label: "Lago do Rosário" },
    { src: "/fotos/expanded/15.png", label: "Fire Place" },
    { src: "/fotos/expanded/16.png", label: "Fire Place" },
    { src: "/fotos/expanded/17.png", label: "Fire Place" },
    { src: "/fotos/expanded/18.png", label: "Piscina Infantil" },
    { src: "/fotos/expanded/19.png", label: "Pista de Caminhada" },
    { src: "/fotos/expanded/20.png", label: "Muro de Segurança" },
    { src: "/fotos/expanded/21.png", label: "Muro de Segurança" },
    { src: "/fotos/expanded/22.png", label: "Vista Aérea" },
    { src: "/fotos/expanded/23.png", label: "Fazendinha" },
    { src: "/fotos/expanded/24.png", label: "Fazendinha" },
    { src: "/fotos/expanded/25.png", label: "Hortinha" },
    { src: "/fotos/expanded/26.png", label: "Playground" },
    { src: "/fotos/expanded/27.png", label: "Playground" },
    { src: "/fotos/expanded/28.png", label: "Churrasqueira" },
    { src: "/fotos/expanded/29.png", label: "Casarão" },
    { src: "/fotos/expanded/30.png", label: "Casarão" },
    { src: "/fotos/expanded/31.png", label: "Casarão" },
    { src: "/fotos/expanded/32.png", label: "Casarão" },
    { src: "/fotos/expanded/33.png", label: "Casarão" },
    { src: "/fotos/expanded/34.png", label: "Recepção" },
    { src: "/fotos/expanded/35.png", label: "Salão de Festas" },
    { src: "/fotos/expanded/36.png", label: "Salão de Festas" },
    { src: "/fotos/expanded/37.png", label: "Salão de Festas" },
    { src: "/fotos/expanded/38.png", label: "Churrasqueira" },
    { src: "/fotos/expanded/39.png", label: "Churrasqueira" },
    { src: "/fotos/expanded/40.png", label: "Lago Engenho" },
    { src: "/fotos/expanded/41.png", label: "Lago Engenho" },
    { src: "/fotos/expanded/42.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/expanded/43.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/expanded/44.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/expanded/45.png", label: "Quadra de Beach Tennis" },
    { src: "/fotos/expanded/46.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/expanded/47.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/expanded/48.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/expanded/49.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/expanded/50.png", label: "Quadras de Beach Tennis" },
    { src: "/fotos/expanded/51.png", label: "Quadras de Beach Tennis" },
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
            className="grid auto-cols-max grid-rows-[repeat(5,auto)] gap-[1vw] px-[1vw] py-[1vw]"
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
                  width: "clamp(120px, 9vw, 370px)",
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

export default FotosReaisPage;
