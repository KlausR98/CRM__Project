import React from 'react'
import Image from 'next/image';
import Notifications from '../Notifications/Notifications';
// import StatusIcon from '@/src/components/StatusIcon/StatusIcon'
// import AlibabaIcon from '@/public/dashboard/marketing-campaigns-container/Alibaba-icon.svg'
// import BuragoIcon from '@/public/dashboard/marketing-campaigns-container/Burago-icon.svg'
// import EbayIcon from '@/public/dashboard/marketing-campaigns-container/Ebay-icon.svg'
// import RichmondIcon from '@/public/dashboard/marketing-campaigns-container/Richmond-icon.svg'
// import ExpandIcon from '@/public/dashboard/marketing-campaigns-container/Expand-icon.svg'
// import UnderArmourIcon from '@/public/dashboard/marketing-campaigns-container/Under-armour-icon.svg'

const tableData = [
    {
        id: 1,
        name: 'Alibaba',
        image: "",
        projectManager: "Jon Richardson",
        status: "Completed"
    },
    {
        id: 2,
        name: 'Under Armour',
        image: "",
        projectManager: "Alba Monday",
        status: "Completed"
    },
    {
        id: 3,
        name: 'Burago',
        image: "",
        projectManager: "Rose Watson",
        status: "In progress"
    },
    {
        id: 4,
        name: 'Richmond',
        image: "",
        projectManager: "Levente Kosa",
        status: "In progress"
    },
    {
        id: 5,
        name: 'eBay',
        image: "",
        projectManager: "Andy Webb",
        status: "Outdated"
    }
];


const TableData = () => {
    return (
        <table className="table-auto">
            <thead className="bg-[#989EA6] bg-opacity-20 text-[#0E2238] 
            text-opacity-30 w-[469px] text-[12px] font-bold leading-[18px]">
                <tr className="">
                    <td className="w-[48px]">#</td>
                    <td className="w-[176px] px-2">Name</td>
                    <td className="w-[135px] px-2">Project manager</td>
                    <td className="w-[110px] px-8">Status</td>
                </tr>
            </thead>
            <tbody >
                {tableData.map(item => (
                    <tr className='border-b-[1px]' key={item.id}>
                        <td className='border-r-[1px]'>
                            {item.id}
                        </td>
                        <td className='flex flex-row py-4 gap-[7px] items-center border-r-[1px]'>
                            <Image
                                src='https://placehold.co/30x30'
                                alt="logo"
                                width={30}
                                height={30}
                            />
                            {item.name}
                        </td>
                        <td className='text-[#0E2238] opacity-[0.35] border-r-[1px]'>
                            {item.projectManager}
                        </td>
                        <td >
                            <Notifications
                                background={`${item.status === 'Completed'
                                    ? '#31CF80' : item.status === 'Outdated'
                                        ? '#D82C5B' : item.status === 'In progress'
                                            ? '#EBCF4F' : '#000'}`} content={item.status}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}

export default TableData
