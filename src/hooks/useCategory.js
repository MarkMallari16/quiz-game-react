import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';


const useCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = ['Math', 'Science', 'English', 'Programming'];

    const navigate = useNavigate();
    const location = useLocation();
    const { name } = location.state || {};

    console.log(name);
    const handleCategorySelect = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
        navigate(`/quiz-game?category=${encodeURIComponent(selectedCategory)}`);

    }
    return { categories, handleCategorySelect };
}

export default useCategory