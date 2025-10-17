import React, { useState } from 'react'
import Image from 'next/image'
import BgSvg from '../svgs/BgSvg'
import LupaSvg from '../svgs/LupaSvg'


const ImplantacaoView = () => {
    const [selectedCircle, setSelectedCircle] = useState<{ id: number; x: number; y: number } | null>({
        id: 1,
        x: 1228.5,
        y: 357.5
    });
    const [selectedTextImage, setSelectedTextImage] = useState<number | null>(1);
    const textImagesToDisplay = [
        {
            id: 1,
            subtitle: "/implantacao/sub1.png",
            images: ["/implantacao/img1.png", "/implantacao/img2.png"]
        },
        {
            id: 2,
            subtitle: "/implantacao/sub2.png",
            images: ["/implantacao/img3.png", "/implantacao/img4.png"]
        },
        {
            id: 3,
            subtitle: "/implantacao/sub3.png",
            images: ["/implantacao/img5.png"]
        },
        {
            id: 4,
            subtitle: "/implantacao/sub4.png",
            images: ["/implantacao/img6.png", "/implantacao/img7.png", "/implantacao/img8.png", "/implantacao/img9.png"]
        },
        {
            id: 5,
            subtitle: "/implantacao/sub5.png",
            images: ["/implantacao/img10.png", "/implantacao/img11.png", "/implantacao/img12.png", "/implantacao/img13.png"]
        },
        {
            id: 6,
            subtitle: "/implantacao/sub6.png",
            images: ["/implantacao/img14.png", "/implantacao/img15.png", "/implantacao/img16.png", "/implantacao/img17.png"]
        }
    ]
    const handleCircleClick = (id: number, x: number, y: number) => {
        setSelectedCircle({ id, x, y });
        setSelectedTextImage(id);
    };

    const selectedData = selectedTextImage
        ? textImagesToDisplay.find(t => t.id === selectedTextImage)
        : null;
    return (
        <>
            <div className="col-span-13 row-span-24 relative animate-fade">
                <BgSvg
                    onCircleClick={(coords) => handleCircleClick(coords.id, coords.x, coords.y)}
                />
                <Image
                    src="/implantacao/implantacao.png"
                    alt="Implantação"
                    fill
                    className="object-contain"
                />
                {selectedCircle && (
                    <LupaSvg
                        x={selectedCircle.x}
                        y={selectedCircle.y}
                    />
                )}
            </div>
            <div className="col-span-6 row-span-24 grid grid-rows-24 grid-cols-6">
                <div className="col-span-6 row-span-7  rounded-bl-[48px] relative grid grid-cols-6 grid-rows-7 bg-[#E8DEC7]">
                    {selectedData ? (
                        <div className="row-span-5 col-span-4 relative col-start-2 row-start-2">
                            <Image
                                src={selectedData.subtitle}
                                alt="Subtitle"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ) : (
                        <span className="text-[#16555A] text-center text-xl row-span-5 col-span-4 relative col-start-2 row-start-2">Selecione um ponto</span>
                    )}
                </div>
                <div className="col-span-6 row-span-18 rounded-tl-[48px]">
                    <div className="w-full h-full relative">
                        {selectedData ? (
                            <div className="flex flex-col">
                                {selectedData.images.map((imgSrc, index) => (
                                    <Image
                                        key={index}
                                        src={imgSrc}
                                        alt={`Detail ${index + 1}`}
                                        width={960}        // fixed width
                                        height={1500}       // fixed height
                                        className="object-contain"
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="w-full h-full flex justify-center items-center">
                                <span className="text-white text-xl">Nenhum ponto selecionado</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImplantacaoView