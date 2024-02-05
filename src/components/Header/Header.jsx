import React from 'react'
import Image from 'next/image'
import Flag from '@/public/dashboard/header-icons/flags/fr.svg'
import Bellicon from '@/public/dashboard/header-icons/Bell-icon.svg'
import DayNightIcon from '@/public/dashboard/header-icons/Day-night-icon.svg'
import ExitIcon from '@/public/dashboard/header-icons/Exit-icon.svg'
import ProfileImage from '@/public/dashboard/header-icons/Profile-06.jpeg.png'
import SearchButtonIcon from '@/public/dashboard/header-icons/Search-button-icon.svg'
import SettingsIcon from '@/public/dashboard/header-icons/Settings-icon.svg'
import Notifications from '@/src/components/Notifications/Notifications'
import ActiveStatus from '@/src/components/ActiveStatus/ActiveStatus'
import HeaderButton from '@/src/components/HeaderButton/HeaderButton'

const Header = () => {
  return (
    <div className="bg-white flex flex-row justify-center items-center  h-[100px] ">
      <div className="flex flex-row justify-between max-h-[40px] gap-4 w-full">
        <div className="bg-[#F1F5F7] flex items-center justify-between min-h-[34px] w-[250px] rounded-[10px] ml-6">
          <input type="text" name="Search" className="bg-[#F1F5F7]" />
          {/* tu input przezroczysty bo div daje tlo */}
          <div className=" bg-[#00BAC7] flex w-[30px] h-[30px] rounded-[10px] justify-center items-center cursor-pointer">
            <Image
              src={SearchButtonIcon}
              alt="Search Button"
              width={18}
              height={18}
            />
          </div>
        </div>

        <div className='flex flex-row gap-4 pr-5'>
          <HeaderButton src={DayNightIcon} />
          <div className="w-[1px] h-[40px] bg-[#707070] opacity-10"></div>
          <HeaderButton src={Flag} />
          <div className="w-[1px] h-[40px] bg-[#707070] opacity-10"></div>
          <div className="relative ">
            <Notifications content={`+20`} background={`#D82C5B`} position={`absolute`} top={`0px`} right={`0px`} />
            <HeaderButton src={Bellicon} />
          </div>
          <HeaderButton src={ExitIcon} />
          <HeaderButton src={SettingsIcon} />
          <div className="w-[1px] h-[40px] bg-[#707070] opacity-10"></div>

          <div className="w-[40px] h-[40px] cursor-pointer">
            <Image
              src={ProfileImage}
              alt="ProfileImage"
              width={40}
              height={40}
            />
            <ActiveStatus background={`#31CF80`} />

          </div>
        </div>
      </div>
    </div >
  )
}

export default Header
