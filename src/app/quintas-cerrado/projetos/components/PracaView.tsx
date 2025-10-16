import Image from 'next/image'
import React, { useState } from 'react'
import ButtonsPracaSvg from '../svgs/ButtonsPracaSvg'

const PracaView = () => {
    const [showImage, setShowImage] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const pracaImages = [
        {
            id: 1,
            src: "/praca/1.png",
            alt: "Quadra de tênis"
        },
        {
            id: 2,
            src: "/praca/2.png",
            alt: "Quadras de beach tennis"
        },
        {
            id: 3,
            src: "/praca/3.png",
            alt: "Academia Indoor"
        },
        {
            id: 4,
            src: "/praca/4.png",
            alt: "Academia ao ar livre"
        },
        {
            id: 7,
            src: "/praca/7.png",
            alt: "Redário"
        },
        {
            id: 8,
            src: "/praca/8.png",
            alt: "Playground"
        },
        {
            id: 10,
            src: "/praca/10.png",
            alt: "Banheiro e Bebedouro"
        }
    ]
    const handleClickButton = (id: number) => {
        console.log(`Button ${id} clicked`);
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
                    src="/praca/bgpraca.png"
                    alt="Background"
                    fill
                    className="object-contain animate-fade"
                />
                <ButtonsPracaSvg
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
                                    className="object-contain"
                                />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default PracaView