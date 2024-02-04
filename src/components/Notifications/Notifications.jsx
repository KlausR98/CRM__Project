import React from 'react'

const Notifications = ({ content, background, position, top, right }) => {

    return (
        <div className={`flex justify-center items-center pt-[1px] w-[35px] h-[15px] text-[10px] text-white leading-[10px] rounded`}
            style={{
                background: background,
                position: position,
                top: top,
                right: right,
            }}
        >
            {content}
        </div>
    )
}

export default Notifications

// {`klasy bg-${zmienna}`}