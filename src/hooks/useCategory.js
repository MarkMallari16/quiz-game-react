import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = ['Math', 'Science', 'English', 'Programming'];

    const navigate = useNavigate();

    const handleCategorySelect = (selectedCategory) => {
        setSelectedCategory(selectedCategory);
        navigate(`/quiz-game?category=${encodeURIComponent(selectedCategory)}`);

    }
    return { selectedCategory, categories, handleCategorySelect };
}

export default useCategory