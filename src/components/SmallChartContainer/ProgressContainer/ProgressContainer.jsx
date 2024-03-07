'use client';

import React from 'react'
import Image from 'next/image'
import { Chart } from "react-google-charts";
import ProgressArrowIcon from '@/public/dashboard/ProgressContainer/ProgressArrowIcon.svg'

const data = [
    ["Year", "Sales"],
    ["2023-01", 1245],
    ["2023-02", 2100],
    ["2023-03", 3425],
    ["2023-04", 3345],
    ["2024-05", 2725],
    ["2023-06", 4187],
    ["2023-07", 5542],
    ["2023-08", 7185],
    ["2023-09", 7289],
    ["2023-10", 9012],
];

const options = {
    height: 70,
    width: 118,
    chartArea: {
        color: '#00BAC7',
    },
    legend: {
        position: "none",
    },
    series: {
        0: { color: '#00BAC7' },
    }
};

const ProgressContainer = () => {
    return (
        <div className="flex flex-column w-[308px] h-[110px] bg-white rounded-lg shadow-lg">
            <div className="flex flex=column gap-10">
                <div className=" mx-6">
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
                <div className="flex mx-6 my-5">
                    <Chart
                        chartType="AreaChart"
                        width="100%"
                        height="100%"
                        data={data}
                        options={options}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProgressContainer
