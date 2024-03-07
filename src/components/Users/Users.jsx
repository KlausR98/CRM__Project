'use client'

import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import UsersTableData from '@/src/components/UsersTableData/UsersTableData';

const Users = () => {
  return (
    <div className=" bg-white h-[678px] w-[1140px] shadow-lg rounded-lg ml-4">
      <div className="flex flex-row justify-between items-center h-[61px] 
    mt-1 mx-4">
        <p className=" text-[#0E2238] font-bold leading-[20px] text-[14px] ">
          CONTACTS
        </p>
        <BsThreeDotsVertical className="text-[#9EA9B4] cursor-pointer" />
      </div>
      <div className="flex flex-row w-[469px] m-1">
        <UsersTableData />
      </div>
    </div >
  )
}

export default Users
