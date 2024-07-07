import { useState, useEffect } from 'react'
import usePlay from './usePlay';
import useConfetti from './useConfetti';
import Category from '../pages/Category';
import useCategory from './useCategory';

const useQuizGame = () => {
    const { handleExit: originalHandleExit } = usePlay();
    const { selectedCategory } = useCategory();

    const initialQuestions = {
        Programming: [
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
            },
        ],
        Math: [
            //Math Questions
            {
                id: 11,

                question: 'What is the value of Pi (π) to two decimal places?',
                options: ['3.14', '2.17', '1.62', '4.13'],
                answer: '3.14'
            },
            {
                id: 12,

                question: 'What is the square root of 144?',
                options: ['12', '14', '16', '18'],
                answer: '12'
            },
            {
                id: 13,

                question: 'What is 15% of 200?',
                options: ['30', '25', '35', '40'],
                answer: '30'
            },
            {
                id: 14,

                question: 'What is the value of the expression 2 + 3 * 4?',
                options: ['14', '20', '18', '12'],
                answer: '14'
            },
            {
                id: 15,

                question: 'What is 1 + 1?',
                options: ['2', '11', 'Magellan'],
                answer: 'πr^2'
            },
        ],
        // Science Questions

        Science: [
            {
                id: 16,

                question: 'What is the chemical symbol for water?',
                options: ['H2O', 'HO2', 'O2H', 'OH2'],
                answer: 'H2O'
            },
            {
                id: 17,

                question: 'What planet is known as the Red Planet?',
                options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
                answer: 'Mars'
            },
            {
                id: 18,

                question: 'What is the powerhouse of the cell?',
                options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'],
                answer: 'Mitochondria'
            },
            {
                id: 19,

                question: 'What gas do plants absorb from the atmosphere?',
                options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
                answer: 'Carbon Dioxide'
            },
            {
                id: 20,

                question: 'What force keeps us on the ground?',
                options: ['Magnetism', 'Gravity', 'Inertia', 'Friction'],
                answer: 'Gravity'
            }
        ],
        English: [
            // English Questions
            {
                id: 21,
                category: 'English',
                question: 'Which word is a synonym for "happy"?',
                options: ['Sad', 'Joyful', 'Angry', 'Tired'],
                answer: 'Joyful'
            },
            {
                id: 22,
                category: 'English',
                question: 'What is the past tense of "run"?',
                options: ['Run', 'Ran', 'Running', 'Runs'],
                answer: 'Ran'
            },
            {
                id: 23,
                category: 'English',
                question: 'Which sentence is correct?',
                options: ['He go to school.', 'She goes to school.', 'They goes to school.', 'We goes to school.'],
                answer: 'She goes to school.'
            },
            {
                id: 24,
                category: 'English',
                question: 'What is the plural form of "child"?',
                options: ['Childs', 'Childes', 'Children', 'Childrens'],
                answer: 'Children'
            },
            {
                id: 25,
                category: 'English',
                question: 'Which is an example of an adjective?',
                options: ['Quickly', 'Run', 'Happy', 'On'],
                answer: 'Happy'
            }
        ]
    }
    const initialQuestionsFiltered = initialQuestions[selectedCategory] || [];
    
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
    const [questions, setQuestions] = useState(() => shuffledArray([...initialQuestionsFiltered]));
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
        setQuestions(shuffledArray([...initialQuestionsFiltered]));
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