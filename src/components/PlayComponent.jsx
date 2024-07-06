import React from 'react'
import usePlay from '../hooks/usePlay';
import ResponsiveLayout from './ResponsiveLayout';
import { FaGithub } from "react-icons/fa";
const PlayComponent = () => {
    const { handleIsPlaying } = usePlay();

    return (
        <ResponsiveLayout>
            <div className='bg-white  py-14  px-20 rounded-lg'>
                <div className='w-full max-w-2xl'>
                    <div className='flex justify-center items-center gap-4 mb-4'>
                        <div>
                            <h1 className=' text-6xl lg:text-6xl font-black text-center'>Quiz Game</h1>
                            <p className='text-center'>Created by Mark Mallari</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-primary w-full' onClick={handleIsPlaying}>Play</button>
                    </div>
                    <div className='flex justify-center pt-5'>
                        <a href="https://github.com/MarkMallari16/quiz-game-react" target='_blank'>
                            <FaGithub className='text-2xl' />
                        </a>
                    </div>
                </div>
            </div>
        </ResponsiveLayout>
    )
}

export default PlayComponent