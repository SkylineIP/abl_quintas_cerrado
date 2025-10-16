import React from 'react'

interface LupaSvgProps {
    x: number;
    y: number;
}

const LupaSvg = ({ x, y }: LupaSvgProps) => {
    return (
        <svg width="1920" height="1890" viewBox="0 0 1920 1890" fill="none" className='absolute top-0 right-0 w-full h-full object-contain' xmlns="http://www.w3.org/2000/svg">
            <g transform={`translate(${x - 1234}, ${y - 353})`} style={{ transition: 'transform 0.4s ease' }} filter="url(#filter0_dd_696_179)">
                <g filter="url(#filter1_i_696_179)">
                    <path d="M1375 353.908C1375 276.312 1312.1 213 1234.5 213C1156.9 213 1094 276.312 1094 353.908C1094 431.504 1156.9 494.815 1234.5 494.815C1312.1 494.815 1375 431.504 1375 353.908Z" fill="black" fillOpacity="0.05" />
                </g>
                <path d="M1375 353.908C1375 276.312 1312.1 213 1234.5 213C1156.9 213 1094 276.312 1094 353.908C1094 431.504 1156.9 494.815 1234.5 494.815C1312.1 494.815 1375 431.504 1375 353.908Z" stroke="url(#paint0_linear_696_179)" strokeWidth="11.2726" />
            </g>
            <defs>
                <filter id="filter0_dd_696_179" x="-239.644" y="-239.644" width="2399.29" height="2369.29" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="119.822" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_696_179" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="25.5914" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_696_179" result="effect2_dropShadow_696_179" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_696_179" result="shape" />
                </filter>
                <filter id="filter1_i_696_179" x="1088.37" y="207.364" width="292.266" height="299.985" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="6.89681" />
                    <feGaussianBlur stdDeviation="107.935" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_696_179" />
                </filter>
                <linearGradient id="paint0_linear_696_179" x1="1375" y1="353.908" x2="1094" y2="353.908" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#D5ECF4" />
                    <stop offset="1" stopColor="#16555A" />
                </linearGradient>
            </defs>
        </svg>

    )
}

export default LupaSvg