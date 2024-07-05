import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const usePlay = () => {
    const navigate = useNavigate();

    const handleIsPlaying = () => {
        navigate('/info')
    }
    const handleIsStopPlaying = () => {
        navigate('/')
    }
    return { handleIsPlaying, handleIsStopPlaying };
}

export default usePlay