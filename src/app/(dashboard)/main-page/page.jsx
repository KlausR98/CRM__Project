import React from 'react'
import SmallChartContainer from '@/src/components/SmallChartContainer/SmallChartContainer'
import MarketingCampaigns from '@/src/components/MarketingCampaigns/MarketingCampaigns'
import EDMContainer from '@/src/components/EDMContainer/EDMContainer'
import Users from '@/src/components/Users/Users'

export default function Page() {
    return (

        <div className=' '>
            <h1 className='font-bold text-[22px] leading-5 ml-4'>Home</h1>
            <SmallChartContainer />
            <div className='flex flex-column h-[440px]'>
                <MarketingCampaigns />
                <EDMContainer />
            </div>
            <Users />
        </div>

    )
}


