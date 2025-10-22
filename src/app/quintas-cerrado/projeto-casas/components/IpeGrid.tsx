import React, { MouseEventHandler, useState } from "react"
import Image from "next/image"

type CasaItem = {
    title: string
    href: string
    index: number
}

const casasRows: CasaItem[][] = [
    [
        { title: "Fachada", href: "/proj-casas/ipe/1.png", index: 1 },
        { title: "Fachada", href: "/proj-casas/ipe/2.png", index: 2 },
        { title: "Fachada", href: "/proj-casas/ipe/3.png", index: 3 },
        { title: "Fachada", href: "/proj-casas/ipe/4.png", index: 4 },
        { title: "Fachada", href: "/proj-casas/ipe/5.png", index: 5 },
        { title: "Piscina", href: "/proj-casas/ipe/6.png", index: 6 },
    ],
    [
        { title: "Piscina", href: "/proj-casas/ipe/7.png", index: 7, },
        { title: "Piscina", href: "/proj-casas/ipe/8.png", index: 8 },
        { title: "Piscina", href: "/proj-casas/ipe/9.png", index: 9 },
        { title: "Piscina", href: "/proj-casas/ipe/10.png", index: 10 },
        { title: "Piscina", href: "/proj-casas/ipe/11.png", index: 11 },
        { title: "Piscina", href: "/proj-casas/ipe/12.png", index: 12 },
    ],
    [
        { title: "Piscina", href: "/proj-casas/ipe/13.png", index: 13 },
        { title: "Piscina", href: "/proj-casas/ipe/14.png", index: 14 },
        { title: "Piscina", href: "/proj-casas/ipe/15.png", index: 15 },
        { title: "Piscina", href: "/proj-casas/ipe/16.png", index: 16 },
        { title: "Piscina", href: "/proj-casas/ipe/17.png", index: 17 },
        { title: "Piscina", href: "/proj-casas/ipe/18.png", index: 18 },
    ],
    [
        { title: "Piscina", href: "/proj-casas/ipe/19.png", index: 19 },
        { title: "Piscina", href: "/proj-casas/ipe/20.png", index: 20 },
        { title: "Piscina", href: "/proj-casas/ipe/21.png", index: 21 },
        { title: "Piscina", href: "/proj-casas/ipe/22.png", index: 22 },
        { title: "Piscina", href: "/proj-casas/ipe/23.png", index: 23 },
        { title: "Piscina", href: "/proj-casas/ipe/24.png", index: 24 },
    ], 
    [
        { title: "Piscina", href: "/proj-casas/ipe/25.png", index: 25 },
        { title: "Piscina", href: "/proj-casas/ipe/26.png", index: 26 },
        { title: "Piscina", href: "/proj-casas/ipe/27.png", index: 27 },
        { title: "Piscina", href: "/proj-casas/ipe/28.png", index: 28 },
        { title: "Piscina", href: "/proj-casas/ipe/29.png", index: 29 },
        { title: "Piscina", href: "/proj-casas/ipe/30.png", index: 30 },
    ],
    [
        { title: "Piscina", href: "/proj-casas/ipe/31.png", index: 31 },
        { title: "Piscina", href: "/proj-casas/ipe/32.png", index: 32 },
        { title: "Piscina", href: "/proj-casas/ipe/33.png", index: 33 },
        { title: "Piscina", href: "/proj-casas/ipe/34.png", index: 34 },
        { title: "Piscina", href: "/proj-casas/ipe/35.png", index: 35 },
    ]
]

type ExpandedImage = {
    src: string
    alt: string
}


const expandedImages: ExpandedImage[] = [
    { src: "/proj-casas/ipe/expanded/1.png", alt: "Vista Aérea 01" },
    { src: "/proj-casas/ipe/expanded/2.png", alt: "Fachada 01" },
    { src: "/proj-casas/ipe/expanded/3.png", alt: "Fachada 01" },
    { src: "/proj-casas/ipe/expanded/4.png", alt: "Fachada 01" },
    { src: "/proj-casas/ipe/expanded/5.png", alt: "Fachada 01" },
    { src: "/proj-casas/ipe/expanded/6.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/7.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/8.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/9.png", alt: "Piscina" },
    { src: "/proj-casas/ipe/expanded/10.png", alt: "Vista Aérea 02" },
    { src: "/proj-casas/ipe/expanded/11.png", alt: "Fachada" },
    { src: "/proj-casas/ipe/expanded/12.png", alt: "Fachada" },
    { src: "/proj-casas/ipe/expanded/13.png", alt: "Área Externa" },
    { src: "/proj-casas/ipe/expanded/14.png", alt: "Área Externa" },
    { src: "/proj-casas/ipe/expanded/15.png", alt: "Suíte" },
    { src: "/proj-casas/ipe/expanded/16.png", alt: "Suíte" },
    { src: "/proj-casas/ipe/expanded/17.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/18.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/19.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/20.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/21.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/22.png", alt: "Área Externa" },
    { src: "/proj-casas/ipe/expanded/23.png", alt: "Vista Aérea 03" },
    { src: "/proj-casas/ipe/expanded/24.png", alt: "Suíte" },
    { src: "/proj-casas/ipe/expanded/25.png", alt: "Suíte" },
    { src: "/proj-casas/ipe/expanded/26.png", alt: "Área Externa" },
    { src: "/proj-casas/ipe/expanded/27.png", alt: "Área Externa" },
    { src: "/proj-casas/ipe/expanded/28.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/29.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/30.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/31.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/32.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/33.png", alt: "Área Social" },
    { src: "/proj-casas/ipe/expanded/34.png", alt: "Fachada" },
    { src: "/proj-casas/ipe/expanded/35.png", alt: "Fachada" },
]

const IpeGrid: React.FC = () => {
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
        <div className="flex flex-col items-center justify-center w-full h-full  py-8 px-12 relative  animate-fade animate-duration-[2000ms]">
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
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                {casasRows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex justify-center w-full gap-2 ${row.length === 5 ? "max-w-[90%]" : "max-w-[90%]"
                            }`}
                    >
                        {row.map((item, index) => (
                            <div
                                key={index}
                                className="relative w-[50%] aspect-[3/2] rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-300"
                                onClick={handleClickImage(item.index - 1)}
                            >
                                <Image
                                    src={item.href}
                                    alt={item.title}
                                    fill
                                    className="object-contain object-top"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IpeGrid
