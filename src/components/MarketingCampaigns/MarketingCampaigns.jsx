import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import TableData from '../TableData/TableData';

const MarketingCampaigns = () => {
  return (
    <div className=" bg-white h-[410px] w-[477px] shadow-lg rounded-lg ml-4">
      <div className="flex flex-row justify-between items-center h-[61px] 
      mt-1 mx-4">
        <p className=" text-[#0E2238] font-bold leading-[20px] text-[14px] ">
          MARKETING CAMPAIGNS
        </p>
        <BsThreeDotsVertical className="text-[#9EA9B4] cursor-pointer" />
      </div>
      <div className="flex flex-row w-[469px] m-1">
        <TableData />
      </div>
    </div>
  )
}

export default MarketingCampaigns
