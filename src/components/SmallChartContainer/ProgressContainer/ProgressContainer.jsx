import React from 'react'
import BudgetLefticon from '@/public/dashboard/BudgetLeftContainer/Budget-left-icon.svg'
import Image from 'next/image'
import ProgressArrowIcon from '@/public/dashboard/ProgressContainer/ProgressArrowIcon.svg'


const ProgressContainer = () => {
    return (
        <div className="flex flex-column w-[308px] h-[110px] bg-white rounded-lg shadow-lg">
            <div className="flex flex=column gap-7">
                <div className=" ml-6">
                    <div className="flex flex-row items-center h-4 mt-4 ">
                        <span className="text-[#0E2238] opacity-[0.35] font-semibold text-xs leading-[16px] ">PROGRESS</span>
                    </div>
                    <div className="pt-[7.5px]">
                        <h1 className=" text-[#0E2238] text-[22px] leading-[30px] font-bold">%</h1>
                        <div className="flex justify-center items-center pt-[1px] w-[50px] h-[15px] text-[10px] text-[#31CF80] bg-[#E4F9EE] leading-[10px] rounded">
                            <Image
                                src={ProgressArrowIcon}
                                alt="ProgressArrowIcon"
                                width={10}
                                height={10}
                            />
                            <p className="font-bold text-[10px] leading-[10px]">12%</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start mt-5">
                    <Image
                        src={ProgressArrowIcon}
                        alt="ProgressArrowIcon"
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProgressContainer
