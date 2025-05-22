import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormField from './selectors/FormField';
import FormInput from './selectors/FormInput';

const PriceSection: React.FC = () => {
  const [price, setPrice] = useState('');

  return (
    <div className="border-b border-gray-200">
      <FormHeader title="SET A PRICE" />
      <div className="p-5">
        <div className="max-w-sm">
          <FormField label="Price" required>
            <FormInput
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              prefix="₹"
            />
          </FormField>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;