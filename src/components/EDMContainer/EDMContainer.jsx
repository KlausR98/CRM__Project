'use client';

import React from 'react';
import { Chart } from "react-google-charts";

const dataOld = [
    ["Name", "Popularity"],
    ["Cesar", 250],
    ["Rachel", 4200],
    ["Patrick", 2900],
    ["Eric", 8200],
];

const dataNew = [
    ["Name", "Popularity"],
    ["Cesar", 370],
    ["Rachel", 600],
    ["Patrick", 700],
    ["Eric", 1500],
];

const diffdata = {
    old: dataOld,
    new: dataNew,
};

const EDMContainer = () => {
    return (
        <div className=" bg-white h-[410px] w-[628px] shadow-lg rounded-lg ml-4">
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
                        <div className='w-[9px] h-[9px] rounded-full bg-[#F6F7F8]' />
                        <p className='text-[12px] opacity-[0.35]'>ACTUAL</p>
                    </div>
                </div>
            </div>
            <div className="flex m-1">
                <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="100%"
                    diffdata={diffdata}
                />
            </div>
        </div>
    )
}

export default EDMContainer
