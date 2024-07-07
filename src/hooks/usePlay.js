import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const usePlay = () => {
    const navigate = useNavigate();

    const handleIsPlaying = () => {
        navigate('/info')
    }
    const handleExit = () => {
        navigate('/')
    }

    return { handleIsPlaying, handleExit };
}

export default usePlay