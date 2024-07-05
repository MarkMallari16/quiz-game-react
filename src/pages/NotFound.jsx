import React from 'react'
import usePlay from '../hooks/usePlay'

const NotFound = () => {
  const { handleExit } = usePlay();
  return (
    <div className='h-screen flex  justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-6xl font-black mb-4'>404 Not Found!</h1>
        <button className='btn btn-primary w-full' onClick={handleExit}>Go back to main page</button>
      </div>
    </div>
  )
}

export default NotFound