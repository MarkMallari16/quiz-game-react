import React from 'react'

const ResponsiveLayout = ({ children }) => {
    return (
        <div className='h-screen flex justify-center items-center bg-blue-500'>
            {children}
        </div>
    )
}

export default ResponsiveLayout