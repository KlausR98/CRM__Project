import React from "react";
import Image from "next/image";
import Link from "next/link";
import Notifications from "@/src/components/Notifications/Notifications";

const NavbarListButton = ({ item }) => {
    console.log(item);
    return (
        <Link href='#' className='flex flex-row gap-4 cursor-pointer pb-3 items-center justify-center'>
            <Image
                src={`/dashboard/navbar-icons/${item.image}.svg`}
                alt='Marketing logo'
                width={18}
                height={18}
            />
            <Link href='#' className='text-[14px] leading-[21px]'>
                {item.name}
            </Link>
            {item.notification && <Notifications content={item.notification} background={item.notificationBgColor} />}
        </Link>
    );
};

export default NavbarListButton;
