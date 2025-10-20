'use client'
import React, { useState } from 'react'
import Menu from '../components/Menu'
import Submenu from '../components/Submenu'
import MenuOverlay from './components/MenuOverlay'
import Videos from '@/app/components/Video'
import { useContextDefault } from '@/context/Context';
import CasaCedroGrid from './components/CasaCedroGrid'
import CasaCedroGridInternas from './components/CasaCedroGridInternas'
import PlantasView from './components/PlantasView'

const ProjetoCasasPage = () => {
    const context = useContextDefault()
    const submenu = context?.submenu;
    const [currentView, setCurrentView] = useState("")
    return (
        <div className="w-full h-screen bg-background grid grid-cols-24 grid-rows-24 min-h-[800px] min-w-[1200px]">
            <Menu />

            {/* Main content area */}
            <div className="col-span-18 row-span-21 grid grid-rows-24 grid-cols-19 relative overflow-hidden animate-fade bg-impbg animate-duration-[2000ms]">
                <div className='col-span-20 row-span-24 '>
                    {submenu === "cedro" && currentView === "videos" && (
                        <Videos
                            thumb="/proj-casas/thumb.png"
                            videoSrc="/proj-casas/video.mp4"
                        />
                    )}
                    {submenu === "cedro" && currentView === "externas" && (
                        <CasaCedroGrid/>
                    )}
                    {submenu === "cedro" && currentView === "imagens" && (
                        <CasaCedroGridInternas/>
                    )}
                    {submenu === "cedro" && currentView === "plantas" && (
                        <PlantasView/>
                    )}
                </div>
                <MenuOverlay
                    videos
                    externas
                    imagens
                    plantas
                    onClick={(key) => setCurrentView(key)}
                />

            </div>

            <Submenu />
        </div>
    )
}

export default ProjetoCasasPage