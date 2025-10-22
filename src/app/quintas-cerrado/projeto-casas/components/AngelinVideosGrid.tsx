import React, { MouseEventHandler, useState } from "react"
import Image from "next/image"
import Videos from "@/app/components/Video"

type CasaItem = {
    title: string
    href: string
    index: number
}

const casasRows: CasaItem[][] = [
    [
        { title: "Fachada", href: "/proj-casas/angelin/videos/1.png", index: 1 },
        { title: "Fachada", href: "/proj-casas/angelin/videos/2.png", index: 2 },
    ]
]

type ExpandedVideo = {
    src: string
    alt: string
    thumb: string
}


const expandedVideos: ExpandedVideo[] = [
    { src: "https://skylineip.s3.sa-east-1.amazonaws.com/Programa%C3%A7%C3%A3o/ABL-Quintas/angelin-opcao-1-1.mp4", alt: "Opcao 01", thumb: "" },
    { src: "https://skylineip.s3.sa-east-1.amazonaws.com/Programa%C3%A7%C3%A3o/ABL-Quintas/angelin-opcao-1-2.mp4", alt: "Opcao 01", thumb: "" },
]

const AngelinVideosGrid: React.FC = () => {
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
            setImageIndex((prev) => (prev === 0 ? expandedVideos.length - 1 : prev - 1));
        } else if (name === "next") {
            setImageIndex((prev) => (prev === expandedVideos.length - 1 ? 0 : prev + 1));
        } else if (name === "close") {
            setIsExpanded(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full  py-8 gap-2 px-12 relative  animate-fade animate-duration-[2000ms]">
            {isExpanded && (
                <div className=" w-full h-full z-10 bg-black/50 backdrop-blur-3xl absolute">
                    <Videos
                        thumb={expandedVideos[imageIndex].thumb}
                        videoSrc={expandedVideos[imageIndex].src}
                    />
                    <div className="absolute top-10 right-0 flex items-center z-20">
                        <span className=" bg-[#FAEDD4] text-[#16555A] px-8 py-4 uppercase font-bold tracking-widest">
                            {expandedVideos[imageIndex].alt}
                        </span>
                    </div>
                    <div className="absolute bottom-36 left-6 flex items-center z-20">
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
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 ">
                {casasRows.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className={`flex justify-center w-full gap-2 ${row.length === 5 ? "max-w-[90%]" : "max-w-[90%]"
                            }`}
                    >
                        {row.map((item, index) => (
                            <div
                                key={index}
                                className="relative w-[48%] aspect-square rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform duration-300"
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

export default AngelinVideosGrid
