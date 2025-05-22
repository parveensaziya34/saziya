import React from 'react';

const CategorySection: React.FC = () => {
  return (
    <div className="p-5 border-b border-gray-200">
      <h3 className="text-lg font-bold mb-4 text-gray-900">SELECTED CATEGORY</h3>
      <div className="flex items-center text-sm">
        <span className="text-gray-600">Properties / For Sale: Houses & Apartments</span>
        <button className="ml-2 text-blue-600 font-medium">Change</button>
      </div>
    </div>
  );
};

export default CategorySection;