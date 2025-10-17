import React, { useState } from "react"
import Image from "next/image"

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
    videos?: boolean
    externas?: boolean
    imagens?: boolean
    plantas?: boolean
    onClick?: (key: string) => void
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({
    videos,
    externas,
    imagens,
    plantas,
    onClick,
}) => {
    const [buttonPressed, setButtonPressed] = useState<string>("")

    const handleButtonClick = (key: string) => {
        setButtonPressed((prev) => (prev === key ? "" : key))
        onClick && onClick(key)
    }

    // Filter buttons based on props passed
    const visibleButtons = buttons.filter((button) => {
        switch (button.key) {
            case "videos":
                return videos
            case "externas":
                return externas
            case "imagens":
                return imagens
            case "plantas":
                return plantas
            default:
                return false
        }
    })

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
