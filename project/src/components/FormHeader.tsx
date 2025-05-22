import React from 'react';

interface FormHeaderProps {
  title: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title }) => {
  return (
    <div className="py-4 px-2 border-b border-gray-200">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    </div>
  );
};

export default FormHeader;