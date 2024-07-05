import React from 'react'
import usePlay from '../hooks/usePlay';
import QuizImage from '../assets/quiz.png';
import ResponsiveLayout from './ResponsiveLayout';

const PlayComponent = () => {
    const { handleIsPlaying } = usePlay();

    return (
        <ResponsiveLayout>
            <div className='bg-white p-20 rounded-lg'>
                <div className='w-full max-w-2xl'>
                    <div className='flex justify-center items-center gap-4 mb-4'>
                        <div>
                            <h1 className=' text-7xl lg:text-6xl font-black'>Quiz Game</h1>
                            <p className='text-center'>Created by Mark Mallari</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary w-full' onClick={handleIsPlaying}>Play</button>
                    </div>
                </div>
            </div>
        </ResponsiveLayout>
    )
}

export default PlayComponent