import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'
import usePlay from '../hooks/usePlay';

const QuizGame = () => {
    const { handleExit } = usePlay();
    const location = useLocation();
    const { name } = location.state || {};

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isShowScore, setIsShowScore] = useState(false);

    const initialQuestions = [
        {
            id: 1,
            question: 'What does HTML stands for?',
            options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Text Managing Language'],
            answer: 'Hyper Text Markup Language'
        }, {
            id: 2,
            question: 'What does CSS stand for?',
            options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'],
            answer: 'Cascading Style Sheets'
        },
        {
            id: 3,
            question: 'What is JavaScript primarily used for?',
            options: ['Styling web pages', 'Building databases', 'Adding interactivity to web pages', 'Creating animations'],
            answer: 'Adding interactivity to web pages'
        },
        {
            id: 4,
            question: 'Which programming language is known as "the mother of all languages"?',
            options: ['Python', 'C', 'Java', 'Assembly'],
            answer: 'C'
        },
        {
            id: 5,
            question: 'What does IDE stand for?',
            options: ['Integrated Development Environment', 'Integrated Design Environment', 'Integrated Developer Environment', 'Initial Development Environment'],
            answer: 'Integrated Development Environment'
        },
        {
            id: 6,
            question: 'Which data structure operates on a Last-In-First-Out (LIFO) principle?',
            options: ['Queue', 'Stack', 'Array', 'Linked List'],
            answer: 'Stack'
        },
        {
            id: 7,
            question: 'What is the main purpose of version control systems like Git?',
            options: ['Storing backup copies of code', 'Managing collaborative coding projects', 'Creating databases', 'Running automated tests'],
            answer: 'Managing collaborative coding projects'
        },
        {
            id: 8,
            question: 'What does API stand for?',
            options: ['Application Programming Interface', 'Advanced Program Interface', 'Automated Program Integration', 'Application Process Integration'],
            answer: 'Application Programming Interface'
        },
        {
            id: 9,
            question: 'Which programming language is often used for machine learning and data analysis?',
            options: ['Java', 'JavaScript', 'Python', 'Ruby'],
            answer: 'Python'
        },
        {
            id: 10,
            question: 'What is the purpose of the "for" loop in programming?',
            options: ['Defining functions', 'Looping through arrays', 'Creating classes', 'Handling exceptions'],
            answer: 'Looping through arrays'
        }
    ]

    const [questions, setQuestions] = useState(initialQuestions);
    useEffect(() => {
        setQuestions(shuffledArray(questions))
    }, [])

    const shuffledArray = (array) => {
        let currentIndex = array.length;
        let randomIndex;

        while (randomIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            console.log(randomIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    const handleAnswerButtonClicked = (selectedOption) => {
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1)
        }

        const nextQuestionIndex = currentQuestionIndex + 1;

        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            setIsShowScore(true)
        }
    }

    const handleTryAgain = () => {
        setCurrentQuestionIndex(0);
        setIsShowScore(false);
        setScore(0);
        setQuestions(shuffledArray(questions))
    }

    return (
        <div className='h-screen flex items-center justify-center '>
            {isShowScore ? (
                <div>
                    <div className='text-2xl'>Congratiolations! {name} Your score is: {score}</div>
                    <button className='btn btn-primary w-full rounded-lg mt-3' onClick={handleTryAgain}>Try Again</button>
                    <button className='btn btn-error py-2 font-bold  w-full rounded-lg mt-3' onClick={handleExit}>Exit</button>
                </div>
            ) : (
                <div className='w-max px-2'>
                    <div className='flex justify-between gap-2 mb-4'>
                        <div className='font-bold'>{name}</div>
                        <div>{currentQuestionIndex + 1} / {questions.length}</div>
                    </div>
                    <div className='bg-gray-300 rounded-lg p-5 mb-4 select-none'>
                        {questions[currentQuestionIndex].question}
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {shuffledArray(questions[currentQuestionIndex].options).map((option, index) => (
                            <button key={index} className='px-4 ring-1 ring-slate-500 rounded-md py-2 select-none' onClick={() => handleAnswerButtonClicked(option)}>{option}</button>

                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default QuizGame