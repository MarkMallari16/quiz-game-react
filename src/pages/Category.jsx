import React, { useState } from 'react'
import ResponsiveLayout from '../components/ResponsiveLayout';
import useCategory from '../hooks/useCategory';

const Category = () => {

    const { categories, handleCategorySelect } = useCategory();

    return (
        <ResponsiveLayout>
            <div className=' bg-white rounded-lg p-20 w-96'>
                <p className='font-medium mb-2'>Select Category</p>
                <div className='flex flex-col gap-3 w-full'>
                    {categories.map((category) => (
                        <button key={category} className='btn btn-outline w-full' onClick={() => handleCategorySelect(category)}>{category}</button>
                    ))}
                </div>
            </div>
        </ResponsiveLayout>
    )
}

export default Category