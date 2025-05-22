import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormSelect from './selectors/FormSelect';

const stateOptions = [
  { value: 'delhi', label: 'Delhi' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'tamil-nadu', label: 'Tamil Nadu' },
  { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
];

const LocationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [state, setState] = useState('');
  const [stateError, setStateError] = useState<string | null>(null);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
    if (e.target.value) {
      setStateError(null);
    } else {
      setStateError('This field is mandatory');
    }
  };

  return (
    <div className="border-b border-gray-200">
      <FormHeader title="CONFIRM YOUR LOCATION" />
      <div className="p-5">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'list'
                ? 'text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('list')}
          >
            LIST
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'current'
                ? 'text-blue-700 border-b-2 border-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('current')}
          >
            CURRENT LOCATION
          </button>
        </div>

        <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900">
        State <span className="text-gray-900">*</span>
        </label>
        <div className="max-w-sm">
      <FormSelect
      options={stateOptions}
      value={state}
      onChange={handleStateChange}
      placeholder="Select state"
    />
  </div>
  {stateError && <p className="mt-1 text-sm text-red-500">{stateError}</p>}
</div>

      </div>
    </div>
  );
};

export default LocationSection;