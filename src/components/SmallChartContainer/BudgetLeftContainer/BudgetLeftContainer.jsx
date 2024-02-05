import React from 'react'
import BudgetLefticon from '@/public/dashboard/BudgetLeftContainer/Budget-left-icon.svg'
import Image from 'next/image'
import ActiveStatus from '@/src/components/ActiveStatus/ActiveStatus'

const BudgetLeftContainer = () => {
    return (
        <div className="flex flex-column w-[210px] h-[110px] bg-white rounded-lg shadow-lg ">
            <div className="flex flex=column gap-7">
                <div className=" ml-6">
                    <div className="flex flex-row items-center h-4 mt-4 ">
                        <ActiveStatus background={`#D82C5B`} />
                        <span className="text-[#0E2238] opacity-[0.35] font-semibold text-xs leading-[16px] pl-3">BUDGET LEFT</span>
                    </div>
                    <div className="pt-[7.5px]">
                        <h1 className=" text-[#0E2238] text-[22px] leading-[30px] font-bold">$1,500</h1>
                        <h2 className=" text-[#0E2238] opacity-[0.35] text-[10px] leading-[15px] font-regular">+$6,50 bak charges fee</h2>
                    </div>
                </div>
                <div className="flex items-start mt-5">
                    <Image
                        src={BudgetLefticon}
                        alt="BudgetLefticon"
                        width={32}
                        height={32}
                    />
                </div>
            </div>
        </div>
    )
}

export default BudgetLeftContainer
