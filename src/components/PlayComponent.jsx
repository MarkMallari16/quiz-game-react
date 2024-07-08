import React from 'react'
import usePlay from '../hooks/usePlay';
import ResponsiveLayout from './ResponsiveLayout';
import { FaGithub } from "react-icons/fa";
import QuizLogo from '../assets/quiz.png'

const PlayComponent = () => {
    const { handleIsPlaying } = usePlay();

    return (
        <ResponsiveLayout>
            <div className='bg-white  py-14 px-16 lg:px-20 rounded-lg'>
                <div className='w-full max-w-2xl'>
                    <div className='flex justify-center items-center gap-4 mb-4'>
                        <div>
                            <div className='flex items-center gap-5'>
                                <img src={QuizLogo} className='w-28 select-none hidden lg:block' />
                                <h1 className=' text-5xl lg:text-8xl font-black text-center select-none'>
                                    <span className='block lg:hidden'>Quiz</span> Game
                                </h1>
                            </div>

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