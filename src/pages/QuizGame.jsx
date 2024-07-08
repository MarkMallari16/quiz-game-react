import React from 'react'
import Confetti from 'react-confetti';
import useQuizGame from '../hooks/useQuizGame';
import useConfetti from '../hooks/useConfetti';
import useInfo from '../hooks/useInfo';
import { useLocation } from 'react-router-dom';
import useCategory from '../hooks/useCategory';

const QuizGame = () => {
    const {
        name,
        questions,
        score,
        currentQuestionIndex,
        isShowScore,
        handleTryAgain,
        handleAnswerButtonClicked,
        feedback,
        handleExit,
        showConfetti,
        timer } = useQuizGame();

    const { dimensions } = useConfetti();

    return (
        <div className='h-screen flex items-center justify-center bg-blue-500 shadow-lg'>
            {isShowScore ? (
                <div className='bg-white p-10 lg:p-20 rounded-lg'>
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
                <div className='p-10 lg:p-20 bg-white rounded-xl shadow-lg'>
                    <div className='text-6xl font-bold text-center mb-5'> {timer}</div>
                    <div className='flex justify-between gap-2 mb-4'>

                        <div className='font-bold'>Name: {name}</div>

                        <div>{currentQuestionIndex + 1} / {questions.length}</div>
                    </div>
                    <div className='bg-slate-200 rounded-lg p-5 mb-4 select-none'>
                        {questions[currentQuestionIndex] && questions[currentQuestionIndex].question}
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                        {questions[currentQuestionIndex] && questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                className={`btn btn-outline select-none w-96`}
                                onClick={() => handleAnswerButtonClicked(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                </div>
            )}

            {showConfetti && (
                <div className='overflow-x-hidden'>
                    <Confetti
                        width={dimensions.width}
                        height={dimensions.height}
                        gravity={0.5}
                        numberOfPieces={500}
                    />
                </div>
            )}
        </div>
    )
}

export default QuizGame