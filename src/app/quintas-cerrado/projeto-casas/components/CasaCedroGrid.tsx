import React from "react"
import Image from "next/image"

type CasaItem = {
  title: string
  href: string
}

const casasRows: CasaItem[][] = [
  [
    { title: "Fachada", href: "/proj-casas/cedro/1.png" },
    { title: "Fachada", href: "/proj-casas/cedro/2.png" },
    { title: "Fachada", href: "/proj-casas/cedro/3.png" },
    { title: "Fachada", href: "/proj-casas/cedro/4.png" },
  ],
  [
      { title: "Lago", href: "/proj-casas/cedro/5.png" },
      { title: "Lago", href: "/proj-casas/cedro/6.png" },
      { title: "Lago", href: "/proj-casas/cedro/7.png" },
      { title: "Lago", href: "/proj-casas/cedro/8.png" },
  ],
  [
    { title: "Fachada", href: "/proj-casas/cedro/10.png" },
    { title: "Fachada", href: "/proj-casas/cedro/11.png" },
    { title: "Fachada", href: "/proj-casas/cedro/12.png" },
    { title: "Fachada", href: "/proj-casas/cedro/13.png" },
    { title: "Fachada", href: "/proj-casas/cedro/1.png" },
  ],
]

const CasaCedroGrid: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-full p-4">
      {casasRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex justify-center w-full ${
            row.length === 5 ? "max-w-[95%]" : "max-w-[90%]"
          }`}
        >
          {row.map((item, index) => (
            <div
              key={index}
              className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={item.href}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CasaCedroGrid
