import  { useState } from 'react'

const useCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState();

    const categories = ['Math', 'Science', 'English', 'Programming'];

  
    return { categories, selectedCategory, setSelectedCategory };
}

export default useCategory