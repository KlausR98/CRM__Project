import React from 'react'
import Image from 'next/image';
import { Arrow } from '@/public/dashboard/contactsContainer/Arrow-up-down.svg'
import { LineChart, Line } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];



const tableData = [
    {
        id: 1,
        fullName: "Hakeem Chan",
        email: "XxQp7@example.com",
        userID: "#1234",
        lastLoging: "03.26.2022",
        status: "Online",
    },
    {
        id: 2,
        fullName: "Orli J. Goodman",
        email: "pede@at.com",
        userID: "#1654",
        lastLoging: "08.02.2021",
        status: "Online",
    },
    {
        id: 3,
        fullName: "Halee P. Lane",
        email: "diam@nislNullaeu.net",
        userID: "#4445",
        lastLoging: "03.14.2021",
        status: "Inactive",
    },
    {
        id: 4,
        fullName: "Kimberly Salinas",
        email: "in.lobortis.tellus@faucibusorci.co.uk",
        userID: "#2391",
        lastLoging: "03.17.2021",
        status: "Online",
    },
    {
        id: 5,
        fullName: "Galena Oliver",
        email: "eleifend.nec@ligulaconsectetuerrhoncus.ca",
        userID: "#8987",
        lastLoging: "12.15.2021",
        status: "Inactive",
    },
    {
        id: 6,
        fullName: "Kelly Doyle",
        email: "urna.et@volutpatNulladignissim.org",
        userID: "#5898",
        lastLoging: "04.21.2022",
        status: "Busy",
    },
    {
        id: 7,
        fullName: "Keane Wyatt",
        email: "quam@Ut.org",
        userID: "#3431",
        lastLoging: "06.18.2022",
        status: "Online",
    },
    {
        id: 8,
        fullName: "Nasim Aguirre",
        email: "nisl@mollis.net",
        userID: "#6701",
        lastLoging: "10.18.2021",
        status: "Online",
    },
    {
        id: 9,
        fullName: "Kelly Doyleee",
        email: "urna.et@volutpatasdNulladignissim.org",
        userID: "#5822",
        lastLoging: "04.21.2022",
        status: "Inactive",
    },
    {
        id: 10,
        fullName: "Kimberly Salinaaas",
        email: "in.lobortis.tellaaass@faucibusorci.co.uk",
        userID: "#2311",
        lastLoging: "03.17.2021",
        status: "Online",
    },
]

const UsersTableData = () => {
    return (
        <>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
            <table className="table-auto">
                <thead className="bg-[#989EA6] bg-opacity-20 text-[#0E2238] 
            text-opacity-30 w-[1090px] text-[12px] font-bold leading-[18px]">
                    <tr className="w-[1090px]">
                        <td className="w-[64px]"></td>
                        <td className="">Full name </td>
                        <td className="">Email</td>
                        <td className="">User ID</td>
                        <td className="">Last Loging</td>
                        <td className="">Status</td>
                    </tr>
                </thead>
                <tbody >
                    {tableData.map(item => (
                        <tr className='border-b-[1px] flex justify-center items-center' key={item.id}>
                            <td className='border-r-[1px]'>
                                <input type='checkbox' />
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

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default UsersTableData
