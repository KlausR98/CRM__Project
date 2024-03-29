import React from 'react'
import RegressArrowIcon from '@/public/dashboard/InteractionsContainer/RegressArrowIcon.svg'
import InfoIcon from '@/public/dashboard/InteractionsContainer/Info-icon.svg'
import Image from 'next/image'

const InteractionsContainer = () => {
    return (
        <div className="flex flex-column w-[308px] h-[110px] bg-white rounded-lg shadow-lg">
            <div className="flex flex=column gap-7">
                <div className=" ml-6">
                    <div className="flex flex-row items-center h-4 mt-4 ">
                        <span className="text-[#0E2238] opacity-[0.35] font-semibold text-xs leading-[16px] pr-1">INTERACTIONS</span>
                        <Image
                            src={InfoIcon}
                            alt="InfoIcon"
                            width={15}
                            height={15}
                        />
                    </div>
                    <div className="pt-[7.5px]">
                        <h1 className=" text-[#0E2238] text-[22px] leading-[30px] font-bold">123,598</h1>
                        <div className="flex flex-row ">
                            <div className="flex justify-center items-center pt-[1px] w-[50px] h-[15px] text-[10px] text-[#D82C5B] bg-[#FAE4EA] leading-[10px] rounded">
                                <Image
                                    src={RegressArrowIcon}
                                    alt="RegressArrowIcon"
                                    width={10}
                                    height={10}
                                />
                                <p className="font-bold text-[10px] leading-[10px]">9,2%</p>
                            </div>
                            <p className="text=[#0E2238] text-[10px] leading-[15px] opacity-[0.35]">from 134,969</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start mt-5">
                    <Image
                        src={RegressArrowIcon}
                        alt="RegressArrowIcon"
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        </div>
    )
}

export default InteractionsContainer
