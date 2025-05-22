import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormField from './selectors/FormField';
import FormInput from './selectors/FormInput';

const PriceSection: React.FC = () => {
  const [price, setPrice] = useState('');

  // Only allow numeric input
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only digits (empty string is also allowed to clear the input)
    if (/^\d*$/.test(value)) {
      setPrice(value);
    }
  };

  return (
    <div className="border-b border-gray-200">
      <FormHeader title="SET A PRICE" />
      <div className="p-5">
        <div className="max-w-sm">
          <FormField label="Price" required>
            <FormInput
              value={price}
              onChange={handlePriceChange}
              prefix="₹"
              inputMode="numeric" // for mobile keyboards
            />
          </FormField>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
