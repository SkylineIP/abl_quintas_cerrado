"use client";

import React from "react";
import Menu from "../components/Menu";
import Submenu from "../components/Submenu";
import { useContextDefault } from "@/context/Context";
import ImplantacaoView from "./components/ImplantacaoView";
import PracaView from "./components/PracaView";
import VilaView from "./components/VilaView";

const ProjetoPage: React.FC = () => {
    const context = useContextDefault();
    const submenu = context?.submenu;
    return (
        <div className="w-full h-screen bg-background grid grid-cols-24 min-h-[800px] min-w-[1200px] grid-rows-24">
            <Menu />
            <div className="col-span-18 row-span-21 grid grid-rows-24 grid-cols-19 overflow-hidden animate-fade animate-duration-[2000ms] bg-impbg bg-cover">
                {submenu === "implantacao" && (
                    <ImplantacaoView />
                )}
                {submenu === "praca" && (
                    <PracaView />
                )}
                {submenu === "vila" && (
                    <VilaView />
                )}
                {submenu === "fogareu" && (
                    <PracaView />
                )}
            </div>
            <Submenu />
        </div>
    );
};

export default ProjetoPage;