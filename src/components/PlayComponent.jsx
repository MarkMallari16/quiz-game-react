import React from 'react'
import usePlay from '../hooks/usePlay';
import QuizImage from '../assets/quiz.png';

const PlayComponent = () => {
    const { handleIsPlaying } = usePlay();

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='w-96'>
                <div className='flex justify-center items-center gap-4 mb-4'>
             
                    <h1 className=' font-bold text-2xl'>Quiz Game</h1>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary w-full' onClick={handleIsPlaying}>Play</button>
                </div>
            </div>
        </div>
    )
}

export default PlayComponent