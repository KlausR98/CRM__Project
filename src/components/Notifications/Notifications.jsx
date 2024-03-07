import React from 'react'

const Notifications = ({ content, background, isTopBar }) => {

    return (
        <div className={` flex ${isTopBar ? 'absolute left-[30px] top-1' : 'relative'} justify-center items-center py-[2px] px-[4px] text-[10px] text-white leading-[10px] rounded`}
            style={{
                background: background,
            }}
        >
            {content}
        </div>
    )
}

export default Notifications

// {`klasy bg-${zmienna}`}