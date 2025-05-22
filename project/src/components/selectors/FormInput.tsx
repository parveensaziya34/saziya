import React from 'react';

interface FormInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  maxLength?: number;
  currentLength?: number;
  prefix?: string;
  hint?: string;
}

const FormInput: React.FC<FormInputProps> = ({ 
  value, 
  onChange, 
  placeholder, 
  maxLength,
  currentLength = 0,
  prefix,
  hint
}) => {
  return (
    <div>
      <div className="relative">
        {prefix && (
          <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none border-r border-gray-300">
            <span className="text-gray-500">{prefix}</span>
          </div>
        )}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            prefix ? 'pl-10' : ''
          }`}
        />
      </div>
      {maxLength && (
        <div className="flex justify-end mt-1">
          <span className="text-xs text-gray-500">{currentLength} / {maxLength}</span>
        </div>
      )}
      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
};

export default FormInput;