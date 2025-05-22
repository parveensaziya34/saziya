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
      {options.map((option) => {
        // Determine if the current option is one of the specified ones
        const isWideOption = ['bhk', 'bathroom', 'car_parking'].includes(option.value.toLowerCase());

        return (
          <button
            key={option.value}
            className={`px-4 py-2 text-sm border rounded-md transition-colors duration-200
              border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600
              ${isWideOption ? 'min-w-[120px]' : ''}
            `}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default OptionSelector;
