'use client';

import React from 'react';
import { Chart } from "react-google-charts";

const data = [
    ["Month", "Projections", "Actual"],
    ["Jan", 12450, 15234],
    ["Feb", 14987, 16567],
    ["Mar", 8956, 10021],
    ["Apr", 11232, 14236],
    ["May", 8567, 9765],
    ["Jun", 13231, 14236],
    ["Jul", 14094, 15645],
    ["Aug", 14875, 17543],
    ["Sep", 17564, 21452],
    ["Oct", 14567, 18745],
    ["Nov", 6532, 8745],
    ["Dec", 14235, 25654],
];

const options = {
    height: 320,
    width: 620,
    chartArea: {
        width: "85%",
        height: "85%",
    },
    isStacked: true,
    vAxis: { minValue: 0 },
    legend: {
        position: "none",
    },
    series: {
        0: { color: '#00BAC7' },
        1: { color: '#D5DDE4' },
    },
    vAxis: {
        viewWindow: {
            min: 0
        },
        baselineColor: '#F6F7F8',
        gridlines: {
            color: '#F6F7F8'
        },
    }
};

const EDMContainer = () => {
    return (
        <div className=" bg-white h-[410px] w-[640px] shadow-lg rounded-lg ml-4">
            <div className="flex flex-row justify-between items-center h-[61px] 
        mt-1 mx-4">
                <p className=" text-[#0E2238] font-bold leading-[20px] text-[14px] ">
                    EDM
                </p>
                <div className='flex flex-row gap-6'>
                    <div className='flex flex-row items-center gap-2'>
                        <div className='w-[9px] h-[9px] rounded-full bg-[#00BAC7]' />
                        <p className='text-[12px] opacity-[0.35]'>PROJECTIONS</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <div className='w-[9px] h-[9px] rounded-full bg-[#D5DDE4]' />
                        <p className='text-[12px] opacity-[0.35]'>ACTUAL</p>
                    </div>
                </div>
            </div>
            <div className="flex m-3">
                <Chart
                    chartType="ColumnChart"
                    data={data}
                    options={options}
                />
            </div>
        </div>
    )
}

export default EDMContainer