import React from 'react';

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, required = false, children, error }) => {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label} {required && <span className="text-gray-900">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormField;