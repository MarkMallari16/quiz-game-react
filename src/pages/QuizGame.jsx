import React from 'react'

import { useLocation } from 'react-router-dom'
import useQuizGame from '../hooks/useQuizGame';

const QuizGame = () => {

    const location = useLocation();
    const { name } = location.state || {};
    const { questions, score, currentQuestionIndex, isShowScore, handleTryAgain, handleAnswerButtonClicked, isHighlightAnswer, handlePrevQuestion, handleNextQuestion, feedback, handleExit, timer } = useQuizGame();


    return (
        <div className='h-screen flex items-center justify-center bg-blue-500 shadow-lg'>
            {isShowScore ? (
                <div className='bg-white p-10 lg:p-24 rounded-lg'>
                    <div className='text-2xl font-black uppercase'>
                        {name}, your score is:
                    </div>
                    <div className='font-black text-center text-6xl  my-6'>
                        {score} / {questions.length}
                    </div>
                    <div className='text-center font-medium'>{feedback}</div>
                    <div className='mt-4'>
                        <button className='btn btn-primary w-full rounded-lg mt-3 font-bold' onClick={handleTryAgain}>Take new quiz</button>
                        <button className='btn btn-error py-2 font-bold  w-full rounded-lg mt-3' onClick={handleExit}>Exit</button>
                    </div>
                </div>
            ) : (
                <div className='p-10 lg:p-24 bg-white rounded-xl shadow-lg'>
                    <div className='text-6xl font-bold text-center mb-5'> {timer}</div>
                    <div className='flex justify-between gap-2 mb-4'>

                        <div className='font-bold'>Name: {name}</div>

                        <div>{currentQuestionIndex + 1} / {questions.length}</div>
                    </div>
                    <div className='bg-slate-200 rounded-lg p-5 mb-4 select-none'>
                        {questions[currentQuestionIndex].question}
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                className={`btn ${isHighlightAnswer
                                    ? option === questions[currentQuestionIndex].answer
                                        ? 'btn-success'
                                        : 'btn-error'
                                    : 'btn-outline'
                                    } rounded-md py-2 select-none opacity-100`}
                                onClick={() => handleAnswerButtonClicked(option)}
                                disabled={isHighlightAnswer}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className='flex justify-between items-center mt-5'>
                        <button onClick={handlePrevQuestion} className='btn btn-primary'>Prev</button>
                        <div>Github</div>
                        <button onClick={handleNextQuestion} className='btn btn-primary'>Next</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default QuizGame