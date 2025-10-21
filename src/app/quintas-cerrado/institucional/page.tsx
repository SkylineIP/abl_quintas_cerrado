"use client"
import React from 'react'
import Menu from '../components/Menu'
import Image from "next/image"
import Submenu from '../components/Submenu'
import { useContextDefault } from "@/context/Context"

const InstitucionalPage = () => {
  const context = useContextDefault()
  const submenu = context?.submenu
  const imageMap: Record<string, string> = {
    abl: "/institucional/abl.png",
    consciente: "/institucional/consciente.png",
  }
  const imageSrc = imageMap[submenu ?? ""] || imageMap.consciente
  return (
    <div className="w-full h-screen bg-background grid grid-cols-24 grid-rows-24 min-h-[800px] min-w-[1200px]">
      <Menu />
      <div className="col-span-18 row-span-21 grid grid-rows-24 relative grid-cols-19 overflow-hidden animate-fade animate-duration-[2000ms] bg-impbg bg-cover">
        {/* Only render when submenu is defined */}
        {submenu && (
          <Image
            src={imageSrc}
            fill
            className="object-cover transition-opacity duration-700"
            alt={submenu}
          />
        )}
      </div>
      <Submenu />
    </div>
  )
}

export default InstitucionalPage