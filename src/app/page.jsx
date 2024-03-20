import React from 'react';
import LoginLogo from '@/public/login/logo-rev.svg';
import Image from 'next/image';


export default function Page() {
    return (
        <div className='flex justify-center items-center  h-full w-full  bg-[#F4F4F4] rounded-[3px]'>
            <div className=' h-full w-3/5 bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col items-center justify-center'>
                <div className='bg-[#FFFFFF] w-3/5 flex flex-col items-center justify-center py-[22px]'>
                    <Image
                        src={LoginLogo}
                        width={152}
                        height={60}
                        alt="LogoLogin"
                    />
                    <div className='mt-28 py-4'>
                        <p className='font-semibold text-[15px] leading-6 text-[#5E5E5E]'>Sign In</p>
                    </div>
                    <div className='flex flex-col justify-start w-full px-[43px]'>
                        <p className='font-semibold text-[15px] leading-6 text-[#5E5E5E]'>Email address</p>
                        <p className=' text-[14px] leading-5 text-[#A7A7A7]'>Sign in with your HC email address</p>
                        <input type="text" name="Email" className=' border-[1px]  h-[40px] mt-1 rounded-[3px] pl-4' />
                    </div>
                    <div className='flex flex-col justify-start w-full px-[43px]'>
                        <p className='font-semibold text-[15px] leading-6 text-[#5E5E5E]'>Password</p>
                        <input type="password" name="Password" className=' border-[1px]  h-[40px] mt-1 rounded-[3px] pl-4' />
                        <p className='font-semibold text-[13px] leading-6 text-[#777777] px-[30px] pt-[30px] cursor-pointer'>Remember me</p>
                    </div>
                    <button className='bg-[#1662DD] opacity-[0.61] w-[153px] h-[50px]  my-4 rounded-[3px] text-[#fff]'>Sign In</button>
                    <div className='flex flex-row flex-wrap px-[43px] pt-[30px]  text-[13px] leading-6 text-[#777777]'>
                        <button >Can't login</button>
                        <p className='px-[2px]'>|</p>
                        <button >Sign Up!</button>
                        <p className='px-[2px]'>|</p>
                        <button >Privacy policy</button>
                        <p className='px-[2px]'>|</p>
                        <button >Deploy</button>
                        <p className='px-[2px]'>|</p>
                        <button >Customer Support</button>
                    </div>
                </div>
            </div>
        </div>
    )
}








// import { Chart } from "react-google-charts";

// const data = [
//     ["Year", "Sales", "Expenses", "Profit"],
//     ["2014", 1000, 400, 200],
//     ["2015", 1170, 460, 250],
//     ["2016", 660, 1120, 300],
//     ["2017", 1030, 540, 350],
// ];

// const options = {
//     chart: {
//         title: "Company Performance",
//         subtitle: "Sales, Expenses, and Profit: 2014-2017",
//     },
// };




{/* <div>
<Chart
    chartType="Bar"
    width="100%"
    height="400px"
    data={data}
    options={options}
/>
</div> */}