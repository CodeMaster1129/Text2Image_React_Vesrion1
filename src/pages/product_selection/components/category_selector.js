import React, { useState } from 'react';
import Checkbox from '../../../components/ui/common/Checkbox';

const categories = [
  { id: 1, name: 'Hoodies & Sweatshirts' },
  { id: 2, name: 'T-shirts & Tank Tops' },
  { id: 3, name: 'Pants' },
  { id: 4, name: 'Sports Clothing' },
  { id: 5, name: 'Outerwear & Jacket' }
];

const CategorySelector = () => {
  const [selectedCategories, setSelectedCategories] = useState([2]); // Default selected category as an array

  const toggleCategory = (id) => {
    setSelectedCategories(currentSelected => 
      currentSelected.includes(id)
        ? currentSelected.filter(categoryId => categoryId !== id)
        : [...currentSelected, id]
    );
  };

  return (
    <div className="p-4 border-b border-[#CAAC94]/50">
      {categories.map(category => (
        <div key={category.id} className="flex items-center mb-2">
          <Checkbox 
            id={`category-${category.id}`}
            checkedstatus={selectedCategories.includes(category.id)}
            onchange={() => toggleCategory(category.id)}
          />
          <label
            htmlFor={`category-${category.id}`}
            className={`ml-2 text-sm font-medium ${selectedCategories.includes(category.id) ? 'text-green-700' : 'text-gray-600'}`}
          >
            {category.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategorySelector;