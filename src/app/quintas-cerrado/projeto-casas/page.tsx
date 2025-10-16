import React from 'react'
import Menu from '../components/Menu'
import Submenu from '../components/Submenu'

const page = () => {
    return (
        <div className="w-full h-screen bg-background grid grid-cols-24 min-h-[800px] min-w-[1200px] grid-rows-24">
            <Menu />
            <div className="col-span-18 row-span-21 grid grid-rows-24 grid-cols-19 overflow-hidden animate-fade animate-duration-[2000ms]">

            </div>
            <Submenu />
        </div>
    )
}

export default page