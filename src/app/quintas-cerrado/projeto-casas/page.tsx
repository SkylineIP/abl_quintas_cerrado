'use client'
import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu'
import Submenu from '../components/Submenu'
import MenuOverlay from './components/MenuOverlay'
import Videos from '@/app/components/Video'
import { useContextDefault } from '@/context/Context';
import CasaCedroGrid from './components/CasaCedroGrid'
import CasaCedroGridInternas from './components/CasaCedroGridInternas'
import PlantasView from './components/PlantasView'
import JabuticabeiraGrid from './components/JabuticabeiraGrid'
import JabuticabeiraGridInternas from './components/JabuticabeiraGridInternas'
import PlantaJabuticabeiraView from './components/PlantaJabuticabeiraView'
import AngicoGrid from './components/AngicoGrid'
import PlantasAngico from './components/PlantasAngico'
import JatobaGrid from './components/JatobaGrid'
import PlantasJatoba from './components/PlantasJatoba'
import AroeiraVideosGrid from './components/AroeiraVideosGrid'
import AroeiraGrid from './components/AroeiraGrid'
import PlantasAroeira from './components/PlantasAroeira'
import BaruVideosGrid from './components/BaruVideosGrid'
import BaruGrid from './components/BaruGrid'
import PlantasBaru from './components/PlantasBaru'
import AngelinVideosGrid from './components/AngelinVideosGrid'
import AngelinExternas from './components/AngelinExternas'
import IpeVideosGrid from './components/IpeVideosGrid'
import IpeGrid from './components/IpeGrid'
import PlantasIpe from './components/PlantasIpe'

const ProjetoCasasPage = () => {
    const context = useContextDefault()
    const submenu = context?.submenu;
    const [currentView, setCurrentView] = useState("videos")
    useEffect(() => {
        setCurrentView("videos")
    }, [submenu])
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
                        <CasaCedroGrid />
                    )}
                    {submenu === "cedro" && currentView === "imagens" && (
                        <CasaCedroGridInternas />
                    )}
                    {submenu === "cedro" && currentView === "plantas" && (
                        <PlantasView />
                    )}
                    {submenu === "jabuticabeira" && currentView === "videos" && (
                        <Videos
                            thumb="/proj-casas/thumbjabu.png"
                            videoSrc="/proj-casas/videojabuticabeira.mp4"
                        />
                    )}
                    {submenu === "jabuticabeira" && currentView === "externas" && (
                        <JabuticabeiraGrid />
                    )}
                    {submenu === "jabuticabeira" && currentView === "imagens" && (
                        <JabuticabeiraGridInternas />
                    )}
                    {submenu === "jabuticabeira" && currentView === "plantas" && (
                        <PlantaJabuticabeiraView />
                    )}
                    {submenu === "angico" && currentView === "videos" && (
                        <Videos
                            thumb="/proj-casas/thumbjabu.png"
                            videoSrc="/proj-casas/videoangico.mp4"
                        />
                    )}
                    {submenu === "angico" && currentView === "externas" && (
                        <AngicoGrid />
                    )}
                    {submenu === "angico" && currentView === "plantas" && (
                        <PlantasAngico />
                    )}
                    {submenu === "jatoba" && currentView === "videos" && (
                        <Videos
                            thumb="/proj-casas/thumbjabu.png"
                            videoSrc="/proj-casas/videojatoba.mp4"
                        />
                    )}
                    {submenu === "jatoba" && currentView === "externas" && (
                        <JatobaGrid />
                    )}
                    {submenu === "jatoba" && currentView === "plantas" && (
                        <PlantasJatoba />
                    )}
                    {submenu === "aroeira" && currentView === "videos" && (
                        <AroeiraVideosGrid />
                    )}
                    {submenu === "aroeira" && currentView === "externas" && (
                        <AroeiraGrid />
                    )}
                    {submenu === "aroeira" && currentView === "plantas" && (
                        <PlantasAroeira />
                    )}
                    {submenu === "baru" && currentView === "videos" && (
                        <BaruVideosGrid />
                    )}
                    {submenu === "baru" && currentView === "externas" && (
                        <BaruGrid />
                    )}
                    {submenu === "baru" && currentView === "plantas" && (
                        <PlantasBaru />
                    )}
                    {submenu === "angelin" && currentView === "videos" && (
                        <AngelinVideosGrid />
                    )}
                    {submenu === "angelin" && currentView === "externas" && (
                        <AngelinExternas />
                    )}
                    {submenu === "ipe" && currentView === "videos" && (
                        <IpeVideosGrid />
                    )}
                    {submenu === "ipe" && currentView === "externas" && (
                        <IpeGrid />
                    )}
                    {submenu === "ipe" && currentView === "plantas" && (
                        <PlantasIpe />
                    )}
                </div>
                <MenuOverlay onClick={(key) => setCurrentView(key)} />

            </div>

            <Submenu />
        </div>
    )
}

export default ProjetoCasasPage