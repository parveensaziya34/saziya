import React from 'react';

const SubmitButton: React.FC = () => {
  return (
    <div className="p-5">
      <button 
        className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors"
        type="submit"
      >
        Post now
      </button>
    </div>
  );
};

export default SubmitButton;