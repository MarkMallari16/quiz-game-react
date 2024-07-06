import { useEffect, useState } from 'react'

const useConfetti = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {

        setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }, []);


    return { showConfetti, dimensions, setShowConfetti };
}

export default useConfetti