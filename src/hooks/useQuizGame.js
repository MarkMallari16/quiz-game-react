import { useState, useEffect } from 'react'
import usePlay from './usePlay';
import useConfetti from './useConfetti';

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

        for (let index = array.length - 1; index > 0; index--) {
            const indexSecond = Math.floor(Math.random() * (index + 1));

            [array[index], array[indexSecond]] = [array[indexSecond], array[index]];

        }
        return array;
    }

    const initialCurrentQuestionIndex = () => {
        return Number(localStorage.getItem("index")) || 0;
    }
    const initialCurrentScore = () => {
        return Number(localStorage.getItem("score")) || 0
    }
    const initialIsShowScore = () => {
        return localStorage.getItem("showScore") === "true"
    }
    const initialFeedBack = () => {
        const storedFeedback = localStorage.getItem("feedback");
        return JSON.parse(storedFeedback) || ""
    }

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialCurrentQuestionIndex);
    const [score, setScore] = useState(initialCurrentScore);
    const [isShowScore, setIsShowScore] = useState(initialIsShowScore);
    const [feedback, setFeedback] = useState(initialFeedBack);
    const [timer, setTimer] = useState(10);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [questions, setQuestions] = useState(() => shuffledArray([...initialQuestions]));
    const [selectedOption, setSelectedOption] = useState("");

    const { showConfetti, setShowConfetti } = useConfetti();

    useEffect(() => {
        localStorage.setItem("index", currentQuestionIndex);
        localStorage.setItem("score", score);
        localStorage.setItem("showScore", isShowScore);
        localStorage.setItem("feedback", JSON.stringify(feedback));

    }, [currentQuestionIndex, score, isShowScore])

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

    const handleNextQuestion = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;

        if (nextQuestionIndex < questions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
            setSelectedOption('');
            setTimer(10);
            setIsShowScore(false);
        } else {
            setIsShowScore(true);
            setIsTimerRunning(false);
            setScore(score => {
                const newScore = score;
                checkScore(newScore);

                return newScore;
            })
        }

    };
    const handleAnswerButtonClicked = (selectedOption) => {
        setSelectedOption(selectedOption);
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        handleNextQuestion();
    }

    const checkScore = (finalScore) => {

        if (finalScore === 10) {
            setFeedback("Congratulations! You have a perfect score!");
            setShowConfetti(true);
        } else if (finalScore >= 7 && finalScore <= 9) {
            setFeedback("Great job! You did it!");
        } else if (finalScore >= 4 && finalScore <= 6) {
            setFeedback("Good effort! You tried your best!");
        } else if (finalScore >= 1 && finalScore <= 3) {
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
        setIsTimerRunning(true);
        setShowConfetti(false);
        localStorage.removeItem('index');
        localStorage.removeItem("score");
        localStorage.removeItem('showScore');
        localStorage.removeItem("feedback");
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
        handleNextQuestion,
        handleExit,
        selectedOption,
        feedback,
        timer,
        showConfetti
    }
}

export default useQuizGame