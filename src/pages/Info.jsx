import React from 'react'
import useInfo from '../hooks/useInfo'

const Info = () => {
    const { nameValue, error, handleNameValue, handleStartGame } = useInfo()
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-96'>
                <div className='mb-2'>Before Getting Start Please enter your name</div>
                <div className='mb-3'>
                    <input type="text" value={nameValue} onChange={handleNameValue} className='input input-bordered block w-full mb-1' placeholder='Enter your name' />
                    {error && <span className='text-error'>{error}</span>}
                </div>
                <button className='btn btn-primary w-full' onClick={handleStartGame}>Start Quiz</button>
            </div>
        </div>
    )
}

export default Info