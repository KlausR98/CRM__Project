import React from 'react'
import Image from 'next/image'
import MarketingAndContacticon from '@public/Dashboard/NavbarIcons/MarketingAndContacticon.svg'

const NavbarListButton = () => {
  return (
    <div>
    <a>
    <Image
      src={MarketingAndContacticon}
      alt="Marketing logo"
    />
    <button>Marketing</button>
    </a>
    </div>
  )
}

export default NavbarListButton
