import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface OptionSelectorProps {
  options: Option[];
  selected: string;
  onChange: (value: string) => void;
}

const OptionSelector: React.FC<OptionSelectorProps> = ({ options, selected, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          className={`px-4 py-1 text-sm border rounded-md transition-colors duration-200 ${
            selected === option.value
              ? 'bg-white border-gray-300 text-black-500'  // No bg-blue-50, just white bg and blue border/text
              : 'border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600'
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default OptionSelector;
