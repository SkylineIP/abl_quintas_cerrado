import Image from 'next/image'
import React from 'react'

const PlantasView = () => {
    return (
        <div className='flex flex-col items-center justify-center w-[full] h-full relative animate-fade animate-duration-[2000ms]'>
            <div className='w-[80%] h-[80%] relative'>
                <Image
                    src="/proj-casas/cedro/planta.png"
                    alt='PlantaCedro'
                    fill
                    className='object-contain'
                />
            </div>
        </div>
    )
}

export default PlantasView