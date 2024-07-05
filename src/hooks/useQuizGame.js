import React, { useState, useEffect } from 'react'
import usePlay from './usePlay';

const useQuizGame = () => {
    const { handleExit: originalHandleExit } = usePlay();

    const initialQuestions = [
        {
            id: 1,
            question: 'What does HTML stands for?',
            options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'How To Make Lumpia'],
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

    const shuffledArray = (array) => {
        let currentIndex = array.length;
        let randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    const initialCurrentQuestionIndex = () => {
        return Number(localStorage.getItem("index")) || 0;
    }
    const initialIsShowScore = () => {
        return localStorage.getItem("showScore") === "true"
    }
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialCurrentQuestionIndex);
    const [score, setScore] = useState(0);
    const [isShowScore, setIsShowScore] = useState(initialIsShowScore);
    const [feedback, setFeedback] = useState("");
    const [timer, setTimer] = useState(10);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [questions, setQuestions] = useState(() => shuffledArray([...initialQuestions]));
    const [isHighlighAnswer, setIsHighlighAnswer] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        localStorage.setItem("index", currentQuestionIndex);
        localStorage.setItem("showScore", isShowScore);
    }, [currentQuestionIndex, isShowScore])



    useEffect(() => {
        let timerInterval;

        if (isTimerRunning && timer > 0) {
            timerInterval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1)
            }, 1000);
        } else if (timer === 0) {
            handleNextQuestion();
        }
        return () => clearInterval(timerInterval);

    }, [isTimerRunning, timer])

    const handleAnswerButtonClicked = (selectedOption) => {
        setSelectedOption(selectedOption);
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1)
        }
        setIsHighlighAnswer(true);


    }
    const handleNextQuestion = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;

        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
            setQuestions(shuffledArray([...questions])); // Ensure questions state updates correctly
            setIsHighlighAnswer(false);
            setSelectedOption('');
            setTimer(10);
        } else {
            setIsShowScore(true);
            checkScore(score);
        }
    };
    const checkScore = (finalScore) => {
        if (finalScore === 10) {
            setFeedback("Congratulations! You have a perfect score!");
        } else if (finalScore >= 7 && score <= 9) {
            setFeedback("Great job! You did it!");
        } else if (finalScore >= 4 && score <= 6) {
            setFeedback("Good effort! You tried your best!");
        } else if (finalScore >= 1) {
            setFeedback("Better luck next time.");
        } else {
            setFeedback("Keep practicing!");
        }
    }
    const resetState = () => {
        setQuestions(shuffledArray([...initialQuestions]));
        setCurrentQuestionIndex(0);
        setIsShowScore(false);
        setScore(0);
        setTimer(10);
        setIsHighlighAnswer(false)
        localStorage.removeItem('index');
        localStorage.removeItem('showScore');
    };

    const handleTryAgain = () => {
        resetState();
    }
    const handleExit = () => {
        resetState();
        originalHandleExit();
    }
    return {
        questions,
        score,
        currentQuestionIndex,
        isShowScore,
        handleTryAgain,
        shuffledArray,
        handleAnswerButtonClicked,
        isHighlighAnswer,
        selectedOption,
        handleNextQuestion,
        feedback,
        handleExit,
        timer
    }
}

export default useQuizGame