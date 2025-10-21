import Image from 'next/image'
import React from 'react'

const PlantaJabuticabeiraView = () => {
    return (
        <div className='flex flex-col items-center justify-center w-[full] h-full relative animate-fade animate-duration-[2000ms]'>
            <div className='w-[80%] h-[80%] relative'>
                <Image
                    src="/proj-casas/jabuticabeira/planta.png"
                    alt='PlantaJabuticabeira'
                    fill
                    className='object-contain'
                />
            </div>
        </div>
    )
}

export default PlantaJabuticabeiraView