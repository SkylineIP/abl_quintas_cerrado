import React, { MouseEventHandler, useState } from "react"
import Image from "next/image"

type CasaItem = {
    title: string
    href: string
    index: number
}

const casasRows: CasaItem[][] = [
    [
        { title: "Sala", href: "/proj-casas/cedro/interna/1.png", index: 1 },
        { title: "Sala", href: "/proj-casas/cedro/interna/2.png", index: 2 },
        { title: "Sala", href: "/proj-casas/cedro/interna/3.png", index: 3 },
        { title: "Gourmet", href: "/proj-casas/cedro/interna/4.png", index: 4 },
    ],
    [
        { title: "Gourmet", href: "/proj-casas/cedro/interna/5.png", index: 5 },
        { title: "Gourmet", href: "/proj-casas/cedro/interna/6.png", index: 6 },
        { title: "Gourmet", href: "/proj-casas/cedro/interna/7.png", index: 7, },
        { title: "Suíte", href: "/proj-casas/cedro/interna/8.png", index: 8 },
    ],
    [
        { title: "Suíte", href: "/proj-casas/cedro/interna/9.png", index: 9 },
        { title: "Suíte", href: "/proj-casas/cedro/interna/10.png", index: 10 },
        { title: "Banho", href: "/proj-casas/cedro/interna/11.png", index: 11 },
        { title: "Banho", href: "/proj-casas/cedro/interna/12.png", index: 12 },
    ],
    [
        { title: "Suíte", href: "/proj-casas/cedro/interna/13.png", index: 13 },
        { title: "Suíte", href: "/proj-casas/cedro/interna/14.png", index: 14 },
        { title: "Suíte", href: "/proj-casas/cedro/interna/15.png", index: 15 },
    ]
]

type ExpandedImage = {
    src: string
    alt: string
}


const expandedImages: ExpandedImage[] = [
    { src: "/proj-casas/cedro/interna/expanded/1.jpg", alt: "Sala" },
    { src: "/proj-casas/cedro/interna/expanded/2.jpg", alt: "Sala" },
    { src: "/proj-casas/cedro/interna/expanded/3.jpg", alt: "Sala" },
    { src: "/proj-casas/cedro/interna/expanded/4.jpg", alt: "Gourmet" },
    { src: "/proj-casas/cedro/interna/expanded/5.jpg", alt: "Gourmet" },
    { src: "/proj-casas/cedro/interna/expanded/6.jpg", alt: "Gourmet" },
    { src: "/proj-casas/cedro/interna/expanded/7.jpg", alt: "Gourmet" },
    { src: "/proj-casas/cedro/interna/expanded/8.jpg", alt: "Suíte" },
    { src: "/proj-casas/cedro/interna/expanded/9.jpg", alt: "Suíte" },
    { src: "/proj-casas/cedro/interna/expanded/10.jpg", alt: "Suíte" },
    { src: "/proj-casas/cedro/interna/expanded/11.jpg", alt: "Banho" },
    { src: "/proj-casas/cedro/interna/expanded/12.jpg", alt: "Banho" },
    { src: "/proj-casas/cedro/interna/expanded/14.jpg", alt: "Suíte" },
    { src: "/proj-casas/cedro/interna/expanded/15.jpg", alt: "Suíte" },
    { src: "/proj-casas/cedro/interna/expanded/13.jpg", alt: "Suíte" },
]

const CasaCedroGridInternas: React.FC = () => {
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
        <div className="flex flex-col items-center justify-center w-full h-full py-8 px-12 gap-2 relative animate-fade animate-duration-[2000ms]">
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
                    className={`flex justify-around w-full ${row.length === 5 ? "max-w-[90%]" : "max-w-[90%]"
                        }`}
                >
                    {row.map((item, index) => (
                        <div
                            key={index}
                            className="relative w-[30%] aspect-video rounded-2xl overflow-hidden hover:scale-[1.01]  transition-transform duration-300"
                            onClick={handleClickImage(item.index - 1)}
                        >
                            <Image
                                src={item.href}
                                alt={item.title}
                                fill
                                className="object-contain rounded-2xl"
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default CasaCedroGridInternas
