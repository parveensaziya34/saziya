import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormInput from './selectors/FormInput';
import { Camera } from 'lucide-react';

const UserDetailsSection: React.FC = () => {
  const [name, setName] = useState('Saziya parveen');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className="border-b border-gray-200">
      <FormHeader title="REVIEW YOUR DETAILS" />
      <div className="p-5">
        <div className="flex items-center mb-6">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-semibold">
              S
            </div>
            <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-gray-300 cursor-pointer">
              <Camera className="w-3 h-3 text-gray-600" />
            </div>
          </div>
          <div className="ml-4 flex-1 max-w-xs">
            <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <FormInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={30}
              currentLength={name.length}
            />
          </div>
        </div>

        <div className="mb-5">
          <h3 className="text-lg font-medium mb-2">Let's verify your account</h3>
          <p className="text-sm text-gray-600 mb-4">
            We will send you a confirmation code by sms on the next step.
          </p>

          <div className="max-w-sm">
            <label className="block mb-4 text-sm font-medium text-gray-900">
              Mobile Phone Number <span className="text-gray-900">*</span>
            </label>
            <FormInput
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              prefix="+91"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsSection;