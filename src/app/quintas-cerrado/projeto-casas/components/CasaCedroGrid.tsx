import React, { MouseEventHandler, useState } from "react"
import Image from "next/image"

type CasaItem = {
  title: string
  href: string
  index: number
}

const casasRows: CasaItem[][] = [
  [
    { title: "Fachada", href: "/proj-casas/cedro/1.png", index: 1 },
    { title: "Fachada", href: "/proj-casas/cedro/2.png", index: 2 },
    { title: "Fachada", href: "/proj-casas/cedro/3.png", index: 3 },
    { title: "Fachada", href: "/proj-casas/cedro/4.png", index: 4 },
  ],
  [
    { title: "Lago", href: "/proj-casas/cedro/5.png", index: 5 },
    { title: "Lago", href: "/proj-casas/cedro/6.png", index: 6 },
    { title: "Lago", href: "/proj-casas/cedro/7.png", index: 7, },
    { title: "Lago", href: "/proj-casas/cedro/8.png", index: 8 },
  ],
  [
    { title: "Fachada", href: "/proj-casas/cedro/9.png", index: 9 },
    { title: "Fachada", href: "/proj-casas/cedro/10.png", index: 10 },
    { title: "Fachada", href: "/proj-casas/cedro/11.png", index: 11 },
    { title: "Fachada", href: "/proj-casas/cedro/12.png", index: 12 },
    { title: "Fachada", href: "/proj-casas/cedro/13.png", index: 13 },
  ],
]

type ExpandedImage = {
  src: string
  alt: string
}


const expandedImages: ExpandedImage[] = [
  { src: "/proj-casas/cedro/expanded/1.png", alt: "Fachada" },
  { src: "/proj-casas/cedro/expanded/2.png", alt: "Fachada" },
  { src: "/proj-casas/cedro/expanded/3.png", alt: "Fachada" },
  { src: "/proj-casas/cedro/expanded/4.png", alt: "Fachada" },
  { src: "/proj-casas/cedro/expanded/5.png", alt: "Lago" },
  { src: "/proj-casas/cedro/expanded/6.png", alt: "Lago" },
  { src: "/proj-casas/cedro/expanded/7.png", alt: "Lago" },
  { src: "/proj-casas/cedro/expanded/8.png", alt: "Lago" },
  { src: "/proj-casas/cedro/expanded/9.png", alt: "Lago" },
  { src: "/proj-casas/cedro/expanded/10.png", alt: "Piscina" },
  { src: "/proj-casas/cedro/expanded/11.png", alt: "Piscina" },
  { src: "/proj-casas/cedro/expanded/12.png", alt: "Piscina" },
  { src: "/proj-casas/cedro/expanded/13.png", alt: "Piscina" },
]

const CasaCedroGrid: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleClickImage = (index: number): MouseEventHandler<HTMLDivElement> => () => {
    setImageIndex(index);
    setIsExpanded(true);
  };

  const navButtons = [
    { name: "close", src: "/proj-casas/cedro/expanded/close.svg" },
    { name: "back", src: "/proj-casas/cedro/expanded/anterior.svg" },
    { name: "next", src: "/proj-casas/cedro/expanded/prox.svg" },
  ];

  const handleNavClick = (name: string) => {
    if (name === "back") {
      setImageIndex((prev) => (prev === 0 ? expandedImages.length - 1 : prev - 1));
    } else if (name === "next") {
      setImageIndex((prev) => (prev === expandedImages.length - 1 ? 0 : prev + 1));
    } else if (name === "close") {
      setIsExpanded(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-8 px-12 relative  animate-fade animate-duration-[2000ms]">
      {isExpanded && (
        <div className=" w-full h-full z-10 bg-black/50 backdrop-blur-3xl absolute">
          <Image
            src={expandedImages[imageIndex].src}
            alt={expandedImages[imageIndex].alt}
            fill
            className="object-contain"
          />
          <div className="absolute top-10 right-0 flex items-center z-20">
            <span className=" bg-[#FAEDD4] text-[#16555A] px-8 py-4 uppercase font-bold tracking-widest">
              {expandedImages[imageIndex].alt}
            </span>
          </div>
          <div className="absolute bottom-6 left-6 flex items-center z-20">
            {navButtons.map((button) => (
              <button
                key={button.name}
                onClick={() => handleNavClick(button.name)}
                className="relative w-24 h-24 hover:scale-110 transition-transform"
              >
                <Image
                  src={button.src}
                  alt={button.name}
                  fill
                  className="object-contain pointer-events-none"
                />
              </button>
            ))}
          </div>
        </div>
      )}
      {casasRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex justify-center w-full gap-2 ${row.length === 5 ? "max-w-[90%]" : "max-w-[90%]"
            }`}
        >
          {row.map((item, index) => (
            <div
              key={index}
              className="relative w-full aspect-square rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-300"
              onClick={handleClickImage(item.index - 1)}
            >
              <Image
                src={item.href}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CasaCedroGrid
