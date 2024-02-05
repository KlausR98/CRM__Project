import React from 'react'

const ActiveStatus = ({ background }) => {
    return (
        <div className="absolute h-[8px] w-[8px] rounded-full" style={{
            background: background,
        }}>

        </div>
    )
}

export default ActiveStatus
