import React from 'react'

const StatusIcon = ({ content, background }) => {
    return (
        <div className=" w-[68px] h-[16px] rounded-[8px]"
            style={{
                background: background,
            }}
        >
            {content}
        </div>
    )
}

export default StatusIcon
