import Image from 'next/image'
import React, { useState } from 'react'

const PlantasJatoba = () => {
    const plantas = [
        "/proj-casas/jatoba/planta1.png",
        "/proj-casas/jatoba/planta2.png"
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % plantas.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + plantas.length) % plantas.length)
    }

    return (
        <div className='flex flex-col items-center justify-center w-[full] h-full relative animate-fade animate-duration-[2000ms]'>
            <div className='w-[80%] h-[80%] relative'>
                <Image
                    src={plantas[currentIndex]}
                    alt='PlantaCedro'
                    fill
                    className='object-contain'
                />
                <div className="absolute bottom-0 left-0 flex flex-col items-center z-20">
                    <button
                        className="relative w-24 h-24 hover:scale-110 transition-transform"
                        onClick={handleNext}
                    >
                        <Image
                            src="/proj-casas/cedro/expanded/prox.svg"
                            fill
                            alt="Próximo Button"
                        />
                    </button>
                    <button
                    onClick={handlePrev}
                        className="relative w-24 h-24 hover:scale-110 transition-transform"
                    >
                        <Image
                            src="/proj-casas/cedro/expanded/anterior.svg"
                            fill
                            alt="Anterior Button"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlantasJatoba