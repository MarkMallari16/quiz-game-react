import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useInfo = () => {
    const [nameValue, setNameValue] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleNameValue = (e) => {
        setNameValue(e.target.value);
    }
    
    const handleStartGame = () => {
        if (nameValue.trim() === "") {
            setError("Name is required!");
        } else {
            setError('');
            navigate('/category', { state: { name: nameValue } });
        }
    }
    return { nameValue, error, handleNameValue, handleStartGame };
}

export default useInfo