import React from 'react';
import CategorySection from './CategorySection';
import DetailsSection from './DetailsSection';
import PriceSection from './PriceSection';
import PhotoUploadSection from './PhotoUploadSection';
import LocationSection from './LocationSection';
import UserDetailsSection from './UserDetailsSection';
import SubmitButton from './SubmitButton';

const PropertyListingForm: React.FC = () => {
  return (
    <form className="max-w-3xl mx-auto bg-white rounded-lg shadow-md my-8">
      <div className="text-center p-5 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">POST YOUR AD</h1>
      </div>
      <CategorySection />
      <DetailsSection />
      <PriceSection />
      <PhotoUploadSection />
      <LocationSection />
      <UserDetailsSection />
      <SubmitButton />
    </form>
  );
};

export default PropertyListingForm;