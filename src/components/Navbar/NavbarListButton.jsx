import React from 'react'
import Image from 'next/image'

const NavbarListButton = ({ item }) => {
    return (
        <a className='flex flex-row gap-4 cursor-pointer pb-3'>
            <Image
                src={`/dashboard/navbar-icons/${item.image}.svg`}
                alt="Marketing logo"
                width={18}
                height={18}
            />
            <a className="text-[14px] leading-[21px]">
                {item.name}
            </a>
        </a>
    )
}

export default NavbarListButton


