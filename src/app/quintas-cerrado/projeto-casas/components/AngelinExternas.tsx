import React from "react"
import Image from "next/image"

const AngelinExternas = () => {
  const pdfExported = Array.from(
    { length: 67 },
    (_, i) => `/proj-casas/angelin/pdf/img (${i + 1}).png`,
  )
  return (
    <div className="w-full h-full px-40 py-10 overflow-y-scroll no-scrollbar animate-fade animate-duration-[2000ms]">
      <div className="grid grid-cols-1 gap-4">
        {pdfExported.map((src, index) => (
          <div key={index} className="relative w-full aspect-[16/9] ">
            <Image src={src} alt={`Página ${index + 1}`} fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default AngelinExternas