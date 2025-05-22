import React from 'react';

interface FormTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  maxLength?: number;
  currentLength?: number;
  rows?: number;
  hint?: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  value,
  onChange,
  placeholder,
  maxLength,
  currentLength = 0,
  rows = 5,
  hint,
}) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
        className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />
      {maxLength && (
        <div className="flex justify-end mt-1">
          <span className="text-xs text-gray-500">{currentLength} / {maxLength}</span>
        </div>
      )}
      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </div>
  );
};

export default FormTextarea;