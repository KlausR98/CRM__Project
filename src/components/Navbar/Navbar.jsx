
import React from 'react'

const Navbar = () => {
  return (
<div class="bg-blue-400 flex flex-col p-10 gap-5 h-full">
    <button>Marketing</button>
    <button>Marketing</button>
    <button>Marketing</button>
    <button>Marketing</button>
    <button>Marketing</button>
    <button>Marketing</button>
    <button>Marketing</button>
    <button>Marketing</button>
    {/* <div class="relative flex-col justify-start items-start flex">
        <div class="w-[193px] h-[981.73px] relative">
            <div class="w-[253px] h-[640.19px] left-[-30px] top-0 absolute">
                <div class="pl-[8.18px] pt-[16.65px] pb-[53.35px] left-[-0.18px] top-[114.14px] absolute justify-end items-center inline-flex">
                    <div class="w-[253px] self-stretch flex-col justify-end items-start inline-flex">
                        <div class="w-[253px] h-[29.59px] relative flex-col justify-start items-start flex">
                            <div class="w-px h-[5px] bg-zinc-950 bg-opacity-30"></div>
                            <div class="pl-9 pr-[89px] pt-1.5 pb-[11.59px] bg-black bg-opacity-0 rounded-tr-[30px] rounded-br-[30px] justify-start items-end gap-4 inline-flex">
                                <div class="w-1.5 h-1.5 bg-green-900 rounded-md"></div>
                                <div class="w-[76px] h-3 text-white text-xs font-semibold font-['Open Sans'] leading-[18px]">Profile</div>
                            </div>
                        </div>
                        <div class="self-stretch h-[59.19px] pb-[0.59px] flex-col justify-center items-start inline-flex">
                            <div class="w-[253px] h-[29.59px] relative flex-col justify-start items-start flex">
                                <div class="w-px h-[5px] bg-zinc-950 bg-opacity-30"></div>
                                <div class="pl-9 pr-[57px] pt-1.5 pb-[6.59px] rounded-tr-[30px] rounded-br-[30px] justify-start items-center gap-4 inline-flex">
                                    <div class="w-1.5 h-1.5 bg-green-900 rounded-md"></div>
                                    <div class="w-[108px] h-[17px] text-white text-xs font-semibold font-['Open Sans'] leading-[18px]">Edit Details</div>
                                </div>
                            </div>
                            <div class="w-[223px] h-[29.59px] relative rounded-tr-[30px] rounded-br-[30px]"></div>
                        </div>
                    </div>
                </div>
                <div class="w-[237px] h-[58px] left-[8px] top-[214.78px] absolute bg-neutral-950 bg-opacity-0 rounded-tr-[30px] rounded-br-[30px]">
                    <div class="w-[19.13px] h-[18px] left-[31.88px] top-[16px] absolute"></div>
                    <div class="w-[18px] h-[18px] left-[23px] top-[20px] absolute justify-center items-center inline-flex">
                        <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
                    </div>
                    <div class="w-[86.33px] h-[19px] left-[57.64px] top-[20.50px] absolute text-black text-sm font-semibold font-['Open Sans'] leading-[21px]">Marketing </div>
                </div>
                <div class="pl-[35px] pt-[13px] pb-[19px] left-[-5.18px] top-[76.14px] absolute bg-black bg-opacity-25 rounded-tr-[30px] rounded-br-[30px] justify-end items-end gap-[22px] inline-flex">
                    <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
                    <div class="w-[157px] h-[15px] text-black text-sm font-semibold font-['Open Sans'] leading-[21px]">Home</div>
                </div>
                <div class="h-[50px] pl-[30px] pr-[60.18px] pt-[15.95px] pb-4 left-[0.82px] top-[273.14px] absolute rounded-tr-[30px] rounded-br-[30px] justify-start items-start gap-[9.82px] inline-flex">
                    <div class="w-[18px] self-stretch justify-center items-center inline-flex">
                        <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
                    </div>
                    <div class="w-[105px] h-[18px] text-black text-sm font-semibold font-['Open Sans'] leading-[21px]">Workflow</div>
                </div>
                <div class="h-[50px] pl-[30px] pr-[104.07px] py-[15.50px] left-[-0.18px] top-[316.14px] absolute rounded-tr-[30px] rounded-br-[30px] justify-start items-start gap-2.5 inline-flex">
                    <div class="w-[18px] self-stretch justify-center items-center inline-flex">
                        <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
                    </div>
                    <div class="w-[60.93px] h-[19px] text-black text-sm font-semibold font-['Open Sans'] leading-[21px]">Calendar</div>
                </div>
                <div class="w-[223px] h-[50px] pl-[30px] pr-[127.71px] py-[15.50px] left-[-0.18px] top-[357.14px] absolute rounded-tr-[30px] rounded-br-[30px] justify-start items-start gap-2.5 inline-flex">
                    <div class="w-[18px] self-stretch justify-center items-center inline-flex">
                        <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
                    </div>
                    <div class="w-[37.29px] h-[19px] text-black text-sm font-semibold font-['Open Sans'] leading-[21px]">EDM</div>
                </div>
                <div class="pl-[30px] pr-[0.18px] pt-[15.95px] pb-4 left-[0.82px] top-[399.14px] absolute rounded-tr-[30px] rounded-br-[30px] justify-end items-start gap-[9.82px] inline-flex">
                    <div class="w-[18px] h-[18px] justify-center items-center inline-flex">
                        <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex">
                            <div class="w-[9px] h-[9px] relative">
                            </div>
                        </div>
                    </div>
                    <div class="w-[165px] h-[13px] text-black text-sm font-semibold font-['Open Sans'] leading-[21px]">Customer profiling</div>
                </div>
                <div class="w-[223px] h-[50px] left-[-0.18px] top-[440.14px] absolute rounded-tr-[30px] rounded-br-[30px]">
                    <div class="w-[18px] h-[18px] left-[30px] top-[16px] absolute justify-center items-center inline-flex">
                        <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
                    </div>
                    <div class="w-[151px] h-[18px] left-[57.82px] top-[15.95px] absolute text-black text-sm font-semibold font-['Open Sans'] leading-[21px]">Documentation</div>
                    <div class="w-[37.03px] h-[15.11px] pl-[7.55px] pr-[7.35px] pt-[0.52px] pb-[0.59px] left-[203.97px] top-[17.45px] absolute bg-emerald-400 rounded-[800px] justify-center items-center inline-flex">
                        <div class="w-[22.12px] h-3.5 text-center text-white text-[10.08px] font-semibold font-['Open Sans'] leading-[10.08px]">New</div>
                    </div>
                </div>
                <div class="w-[253px] h-[61px] left-[1px] top-[562.78px] absolute">
                    <div class="pl-[30px] pr-[8.18px] pt-[15.95px] pb-4 left-[-3.18px] top-[4.95px] absolute rounded-tr-[30px] rounded-br-[30px] justify-end items-start gap-[9.82px] inline-flex">
                        <div class="w-[18px] h-[18px] justify-center items-center inline-flex">
                            <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
                        </div>
                        <div class="w-[157px] h-[15px] text-black text-sm font-semibold font-['Open Sans'] leading-[21px]">Contracts</div>
                    </div>
                </div>
                <div class="h-[50px] pl-[30px] pt-[15.95px] pb-[15.05px] left-[-5px] top-[501.78px] absolute rounded-tr-[30px] rounded-br-[30px] justify-end items-start gap-[9.82px] inline-flex">
                    <div class="w-[18px] self-stretch justify-center items-center inline-flex">
                        <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
                    </div>
                    <div class="w-[200px] h-[19px] text-black text-sm font-semibold font-['Open Sans'] leading-[21px]">Customer support </div>
                </div>
            </div>
            <div class="w-[223px] h-[50px] left-[-33px] top-[614.78px] absolute rounded-tr-[30px] rounded-br-[30px]">
                <div class="w-[18px] h-[18px] left-[30px] top-[16px] absolute justify-center items-center inline-flex">
                    <div class="w-[18px] h-[18px] relative flex-col justify-start items-start flex"></div>
                </div>
                <div class="w-[105.69px] h-[19px] left-[58px] top-[15.50px] absolute text-black text-sm font-semibold font-['Open Sans'] leading-[21px]">Reports</div>
                <div class="w-[34.79px] h-[15.11px] pl-[7.55px] pr-[7.35px] pt-[0.52px] pb-[0.59px] left-[168.21px] top-[17.45px] absolute bg-green-900 rounded-[800px] justify-center items-center inline-flex">
                    <div class="w-[19.88px] h-3.5 text-center text-white text-[10.08px] font-semibold font-['Open Sans'] leading-[10.08px]">v1.2</div>
                </div>
            </div>
        </div>
    </div> */}
</div>
  )
}

export default Navbar
