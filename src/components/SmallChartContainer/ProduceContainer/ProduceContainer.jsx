import React from 'react'
import ProduceIcon from '@/public/dashboard/ProduceContainer/Produce-icon.svg'
import Image from 'next/image'
import ActiveStatus from '@/src/components/ActiveStatus/ActiveStatus'

const ProduceContainer = () => {
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-lg p-2">
            <div className="flex flex-row gap-7">
                <div className="">
                    <div className="flex flex-row items-center h-4 mt-4 ">
                        <ActiveStatus background={`#31CF80`} />
                        <span className="text-[#0E2238] opacity-[0.35] font-semibold text-xs leading-[16px] pl-3">PRODUCE</span>
                    </div>
                    <div className="pt-[7.5px]">
                        <h1 className=" text-[#0E2238] text-[22px] leading-[30px] font-bold">$3,240</h1>
                        <h2 className=" text-[#0E2238] opacity-[0.35] text-[10px] leading-[15px] font-regular">No additional income</h2>
                    </div>
                </div>
                <div className="flex items-start mt-5">
                    <Image
                        src={ProduceIcon}
                        alt="ProduceIcon"
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProduceContainer
