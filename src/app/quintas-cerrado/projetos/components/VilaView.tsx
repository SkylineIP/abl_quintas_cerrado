import Image from 'next/image'
import React, { useState } from 'react'
import ButtonsVilaSvg from '../svgs/ButtonsVilaSvg';

const VilaView = () => {
    const [showImage, setShowImage] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const pracaImages = [
        {
            id: 1,
            src: "/vila/1.png",
            alt: "Casarão"
        },
        {
            id: 2,
            src: "/vila/2.png",
            alt: "Salão de Eventos"
        },
        {
            id: 3,
            src: "/vila/3.png",
            alt: "Piscinas"
        },
        {
            id: 5,
            src: "/vila/5.png",
            alt: "Lago do Engenho"
        },
        {
            id: 6,
            src: "/vila/6.png",
            alt: "Fazendinha / Mini-haras"
        },
        {
            id: 8,
            src: "/vila/8.png",
            alt: "Capela Ecumênica"
        },
        {
            id: 10,
            src: "/vila/10.png",
            alt: "Lago Rosário"
        },
        {
            id: 11,
            src: "/vila/11.png",
            alt: "Decks de pesca"
        },
        {
            id: 12,
            src: "/vila/12.png",
            alt: "Play Talude"
        },
        {
            id: 15,
            src: "/vila/15.png",
            alt: "Playground"
        },
        {
            id: 17,
            src: "/vila/17.png",
            alt: "Fire Place"
        },
        
    ]
    const handleClickButton = (id: number) => {
        const image = pracaImages.find(img => img.id === id);
        if (image) {
            setSelectedImage(image.src);
            setShowImage(true);
        } else {
            setSelectedImage(null);
            setShowImage(false);
        }
    }

    const textToDisplay = selectedImage
        ? pracaImages.find(img => img.src === selectedImage)?.alt
        : null;

    return (
        <>
            <div className='col-span-19 row-span-24 relative'>
                <Image
                    src="/vila/bg.png"
                    alt="Background"
                    fill
                    className="animate-fade"
                />
                <ButtonsVilaSvg
                    onClickButton={handleClickButton}
                />
                {showImage && selectedImage && (
                    <div className='absolute top-0 left-0 w-full h-full bg-black/40 backdrop-blur-md flex items-center justify-center z-10 animate-fade'>
                        <div className='relative w-full h-full'>
                            <span className='absolute  z-10 top-10 right-0 uppercase font-black row-span-2 w-auto p-8 bg-[#E8DEC7] text-[#235458]'>
                                {textToDisplay}
                            </span>
                            <Image
                                src={selectedImage}
                                alt={selectedImage}
                                fill
                                className="object-contain"
                            />
                            <button
                                className='absolute bottom-4 left-4 rounded-full p-8 text-black'
                                onClick={() => setShowImage(false)}
                            >
                                <Image
                                    src="/praca/bvoltar.png"
                                    alt="Close"
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default VilaView