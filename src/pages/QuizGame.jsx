import React from 'react'

import { useLocation } from 'react-router-dom'

const QuizGame = () => {

    const location = useLocation();
    const { name } = location.state || {}

    return (
        <div className='h-screen flex items-center justify-center '>
            <div className='w-96'>
                <div className='flex justify-between gap-2 mb-4'>
                    <div className='font-bold'>{name}</div>
                    <div>1 / out of 5 questions</div>
                </div>
                <div className='bg-gray-300 rounded-lg p-5 mb-4'>
                    Sino Pumatay kay Lapu Lapu?
                </div>

                <div className='flex flex-col gap-4'>
                    <button className='px-4 ring-1 ring-slate-500 rounded-md py-2'>Ikaw</button>
                    <button className='px-4 ring-1 ring-slate-500 rounded-md py-2'>Ikaw</button>
                    <button className='px-4 ring-1 ring-slate-500 rounded-md py-2'>Ikaw</button>
                    <button className='px-4 ring-1 ring-slate-500 rounded-md py-2'>Ikaw</button>
                </div>
            </div>
        </div>
    )
}

export default QuizGame