import React from 'react'
import NavbarListButton from './NavbarListButton'
import HomeIcon from '@/public/dashboard/navbar-icons/Home.svg'
import LogoHC from '@/public/dashboard/navbar-icons/LogoHC.svg'
import Image from 'next/image'

const menuItems = [
    {
        name: "Marketing",
        link: "/",
        image: "marketing"
    },
    {
        name: "Workflow",
        link: "/",
        image: "Workflow"
    },
    {
        name: "Calendar",
        link: "/",
        image: "Calendar"
    },
    {
        name: "EDM",
        link: "/",
        image: "EDM"
    },
    {
        name: "Customer profiling",
        link: "/",
        image: "Customer-profile"
    },
    {
        name: "Documentation",
        link: "/",
        image: "Documentation"
    },
    {
        name: "Customer support",
        link: "/",
        image: "Customer-support"
    },
    {
        name: "Reports",
        link: "/",
        image: "Reports"
    },
]

const Navbar = () => {
    return (
        <div className="bg-[#74B6FF] flex flex-col p-10 gap-5 h-full">
            <div className="pl-0">
                <Image
                    src={LogoHC}
                    alt="Home logo"
                    width={157}
                    height={100}
                />
            </div>
            <div className="cursor-pointer flex flex-row gap-6 justify-start items-start">
                <Image
                    src={HomeIcon}
                    alt="Home logo"
                    width={18}
                    height={18}
                />
                <a>
                    Home
                </a>
            </div>
            <a className="relative text-white before:w-[1px] before:h-[15px] before:bg-black before:absolute before:left-[5px] before:-top-[15px] after:absolute after:w-[5px] after:h-[5px] after:bg-black after:rounded-full after:left-[3px] after:top-[3px] pl-4 ">
                <span className="cursor-pointer">Profile</span>
            </a>
            <a className=" text-white relative text-white before:w-[1px] before:h-[15px] before:bg-black before:absolute before:left-[5px] before:-top-[15px] after:absolute after:w-[5px] after:h-[5px] after:bg-black after:rounded-full after:left-[3px] after:top-[3px] pl-4 pb-5">
                <span className="cursor-pointer">Edit Details</span>
            </a>
            <div className="flex flex-col justify-start	items-start ">
                {menuItems.map((item, index) => {
                    return <NavbarListButton key={index} item={item} />
                })}
            </div>
        </div>
    )
}

export default Navbar
