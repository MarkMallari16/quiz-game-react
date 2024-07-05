import React from 'react'
import useInfo from '../hooks/useInfo'

const Info = () => {
    const { nameValue, error, handleNameValue, handleStartGame } = useInfo()
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-96'>
                <div className='mb-2'>Before Getting Start Please enter your name</div>
                <div>
                    <input type="text" value={nameValue} onChange={handleNameValue} className='block w-full py-2 ps-3' placeholder='Enter your name' />
                    {error && <span className='text-red-500'>{error}</span>}
                </div>
                <button onClick={handleStartGame} className='mt-4 w-full bg-green-500 rounded-lg py-3 font-bold'>Start Quiz</button>
            </div>
        </div>
    )
}

export default Info