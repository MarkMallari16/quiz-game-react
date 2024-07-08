import React from 'react'
import useInfo from '../hooks/useInfo'
import ResponsiveLayout from '../components/ResponsiveLayout'

const Info = () => {
    const { nameValue, error, handleNameValue, handleStartGame } = useInfo()
    return (
        <ResponsiveLayout>
            <div className='bg-white p-10 rounded-lg'>
                <div className=''>
                    <div className='mb-2'>Before Getting Start Please enter your name</div>
                    <div >
                        <input type="text" value={nameValue} onChange={handleNameValue} className='input input-bordered block w-full mb-2' placeholder='Enter your name' />
                        {error && <span className='text-error'>{error}</span>}
                    </div>
                    <button className='btn btn-primary w-full mt-4'  onClick={handleStartGame}>Start Quiz</button>
                </div>
            </div>
        </ResponsiveLayout>
    )
}

export default Info