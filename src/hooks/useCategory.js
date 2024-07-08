import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';


const useCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = ['Math', 'Science', 'English', 'Programming'];

    const navigate = useNavigate();
    const location = useLocation();
    const { name } = location.state || {};


    const handleCategorySelect = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
        navigate(`/quiz-game?category=${encodeURIComponent(selectedCategory)}`, { state: { name: name } });
    }   

    return { categories, handleCategorySelect };
}

export default useCategory