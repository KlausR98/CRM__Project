import React from 'react'
import Image from 'next/image'

const HeaderButton = ({ src }) => {
    return (
        <>
            <div className="flex w-[40px] h-[40px] rounded-full shadow-lg items-center justify-center cursor-pointer">
                <Image
                    src={src}
                    alt="DayNightIcon"
                    width={18}
                    height={18}
                />
            </div>
        </>
    )
}

export default HeaderButton
