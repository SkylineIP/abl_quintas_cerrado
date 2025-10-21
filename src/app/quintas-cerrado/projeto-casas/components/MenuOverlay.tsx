import React, { useEffect, useState } from "react"
import Image from "next/image"
import { useContextDefault } from "@/context/Context"
type OverlayButton = {
    key: "videos" | "externas" | "imagens" | "plantas"
    pressed: string
    released: string
    title: string
}

const buttons: OverlayButton[] = [
    {
        key: "videos",
        pressed: "/proj-casas/overlay/playpressed.png",
        released: "/proj-casas/overlay/playreleased.png",
        title: "Vídeos",
    },
    {
        key: "externas",
        pressed: "/proj-casas/overlay/externaspressed.png",
        released: "/proj-casas/overlay/externasreleased.png",
        title: "Externas",
    },
    {
        key: "imagens",
        pressed: "/proj-casas/overlay/imagenspressed.png",
        released: "/proj-casas/overlay/imagensreleased.png",
        title: "Imagens",
    },
    {
        key: "plantas",
        pressed: "/proj-casas/overlay/plantaspressed.png",
        released: "/proj-casas/overlay/plantasreleased.png",
        title: "Plantas",
    },
]

type MenuOverlayProps = {
    onClick?: (key: string) => void
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({
    onClick,
}) => {
    const context = useContextDefault()
    const submenu = context?.submenu
    const [buttonPressed, setButtonPressed] = useState<string>("videos")
    useEffect(() => {
        setButtonPressed("videos")
    }, [submenu])

    const handleButtonClick = (key: string) => {
        setButtonPressed((prev) => (prev === key ? "" : key))
        if (onClick) {
            onClick(key)
        }
    }

    const submenuButtons: Record<string, ("videos" | "externas" | "imagens" | "plantas")[]> = {
        cedro: ["videos", "externas", "imagens", "plantas"],
        jabuticabeira: ["videos", "externas", "imagens", "plantas"],
        angico: ["videos", "externas", "plantas"],
        jatoba: ["videos", "externas", "plantas"],
        aroeira: ["videos", "externas", "plantas"],
        baru: ["videos", "externas", "plantas"],
        angelin: ["videos", "externas"],
        ipe: ["videos", "externas", "plantas"],
    }

    const visibleKeys = submenu ? submenuButtons[submenu] || [] : []

    const visibleButtons = buttons.filter((b) => visibleKeys.includes(b.key))

    return (
        <div
            className="absolute z-10 h-full w-full flex flex-col items-center justify-center gap-6 p-4"
            style={{
                gridColumn: "18 / 20",
                gridRow: "1 / 25",
            }}
        >
            {visibleButtons.map((button) => {
                const isPressed = buttonPressed === button.key
                const imgSrc = isPressed ? button.pressed : button.released

                return (
                    <button
                        key={button.key}
                        onClick={() => handleButtonClick(button.key)}
                        className="transition-transform duration-150 active:scale-95 w-[100%]"
                    >
                        <div className="relative w-full aspect-square">
                            <Image
                                src={imgSrc}
                                alt={button.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </button>
                )
            })}
        </div>
    )
}

export default MenuOverlay
