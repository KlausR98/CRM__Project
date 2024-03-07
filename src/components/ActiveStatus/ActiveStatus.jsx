import React from 'react'

const ActiveStatus = ({ background, className }) => {
    return (
        <div className={`${className} absolute h-[8px] w-[8px] rounded-full`} style={{
            background: background,
        }}>

        </div>
    )
}

export default ActiveStatus
