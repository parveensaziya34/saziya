import React, { useState } from 'react';
import FormHeader from './FormHeader';
import FormField from './selectors/FormField';
import OptionSelector from './selectors/OptionSelector';
import FormInput from './selectors/FormInput';
import FormTextarea from './selectors/FormTextarea';
import FormSelect from './selectors/FormSelect';

const propertyTypes = [
  { value: 'flats', label: 'Flats / Apartments' },
  { value: 'independent', label: 'Independent / Builder Floors' },
];

const propertyTypes2 = [
  { value: 'farmhouse', label: 'Farm House' },
  { value: 'house', label: 'House & Villa' },
];

const bhkOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '4+', label: '4+' },
];

const bathroomOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '4+', label: '4+' },
];

const furnishingOptions = [
  { value: 'furnished', label: 'Furnished' },
  { value: 'semi-furnished', label: 'Semi-Furnished' },
  { value: 'unfurnished', label: 'Unfurnished' },
];

const projectStatusOptions = [
  { value: 'new-launch', label: 'New Launch' },
  { value: 'ready-to-move', label: 'Ready to Move' },
  { value: 'under-construction', label: 'Under Construction' },
];

const listedByOptions = [
  { value: 'builder', label: 'Builder' },
  { value: 'dealer', label: 'Dealer' },
  { value: 'owner', label: 'Owner' },
];

const parkingOptions = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '3+', label: '3+' },
];

const facingOptions = [
  { value: 'north', label: 'North' },
  { value: 'south', label: 'South' },
  { value: 'east', label: 'East' },
  { value: 'west', label: 'West' },
  { value: 'north-east', label: 'North East' },
  { value: 'north-west', label: 'North West' },
  { value: 'south-east', label: 'South East' },
  { value: 'south-west', label: 'South West' },
];

const DetailsSection: React.FC = () => {
  const [propertyType, setPropertyType] = useState('flats');
  const [bhk, setBhk] = useState('2');
  const [bathrooms, setBathrooms] = useState('2');
  const [furnishing, setFurnishing] = useState('unfurnished');
  const [projectStatus, setProjectStatus] = useState('ready-to-move');
  const [listedBy, setListedBy] = useState('owner');
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [carpetArea, setCarpetArea] = useState('');
  const [maintenance, setMaintenance] = useState('');
  const [totalFloors, setTotalFloors] = useState('');
  const [floorNo, setFloorNo] = useState('');
  const [parking, setParking] = useState('1');
  const [facing, setFacing] = useState('');
  const [projectName, setProjectName] = useState('');
  const [adTitle, setAdTitle] = useState('');
  const [description, setDescription] = useState('');

  // Errors state
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Helper for digit-only input
  const handleDigitInput = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (/^\d*$/.test(e.target.value)) {
      setter(e.target.value);
    }
  };

  // Validate fields
  const validate = () => {
    const newErrors: Record<string, string> = {};

    // Required
    if (!propertyType) newErrors.propertyType = 'Property Type is required.';
    if (!builtUpArea) newErrors.builtUpArea = 'Super BuiltUp area is required.';
    if (!carpetArea) newErrors.carpetArea = 'Carpet Area is required.';
    if (!adTitle.trim()) newErrors.adTitle = 'Ad Title is required.';
    if (!description.trim()) newErrors.description = 'Description is required.';

    // Numeric validations (only digits allowed and > 0)
    if (builtUpArea && (!/^\d+$/.test(builtUpArea) || Number(builtUpArea) === 0)) {
      newErrors.builtUpArea = 'Enter a valid area in digits greater than 0.';
    }
    if (carpetArea && (!/^\d+$/.test(carpetArea) || Number(carpetArea) === 0)) {
      newErrors.carpetArea = 'Enter a valid area in digits greater than 0.';
    }
    if (maintenance && !/^\d+$/.test(maintenance)) {
      newErrors.maintenance = 'Maintenance must be digits only.';
    }
    if (totalFloors && !/^\d+$/.test(totalFloors)) {
      newErrors.totalFloors = 'Total Floors must be digits only.';
    }
    if (floorNo && !/^\d+$/.test(floorNo)) {
      newErrors.floorNo = 'Floor No must be digits only.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Example submit handler (you removed submit button)
  // const handleSubmit = () => {
  //   if (validate()) {
  //     alert('Form is valid! Submitting...');
  //   } else {
  //     alert('Please fix validation errors first.');
  //   }
  // };

  return (
    <div className="border-b border-gray-200">
      <FormHeader title="INCLUDE SOME DETAILS" />
      <div className="p-5 space-y-6">
        <FormField label="Type" required error={errors.propertyType}>
          <div className="space-y-2">
            <OptionSelector
              options={propertyTypes}
              selected={propertyType}
              onChange={setPropertyType}
            />
            <OptionSelector
              options={propertyTypes2}
              selected={propertyType}
              onChange={setPropertyType}
            />
          </div>
        </FormField>

        <FormField label="BHK">
          <OptionSelector options={bhkOptions} selected={bhk} onChange={setBhk} />
        </FormField>

        <FormField label="Bathrooms">
          <OptionSelector options={bathroomOptions} selected={bathrooms} onChange={setBathrooms} />
        </FormField>

        <FormField label="Furnishing">
          <OptionSelector options={furnishingOptions} selected={furnishing} onChange={setFurnishing} />
        </FormField>

        <FormField label="Project Status">
          <OptionSelector options={projectStatusOptions} selected={projectStatus} onChange={setProjectStatus} />
        </FormField>

        <FormField label="Listed by">
          <OptionSelector options={listedByOptions} selected={listedBy} onChange={setListedBy} />
        </FormField>

        <div className="space-y-4 max-w-xs">
          <FormField label="Super BuiltUp area sqft" required error={errors.builtUpArea}>
            <FormInput
              value={builtUpArea}
              onChange={handleDigitInput(setBuiltUpArea)}
            />
          </FormField>

          <FormField label="Carpet Area sqft" required error={errors.carpetArea}>
            <FormInput
              value={carpetArea}
              onChange={handleDigitInput(setCarpetArea)}
            />
          </FormField>

          <FormField label="Maintenance (Monthly)" error={errors.maintenance}>
            <FormInput
              value={maintenance}
              onChange={handleDigitInput(setMaintenance)}
            />
          </FormField>

          <FormField label="Total Floors" error={errors.totalFloors}>
            <FormInput
              value={totalFloors}
              onChange={handleDigitInput(setTotalFloors)}
            />
          </FormField>

          <FormField label="Floor No" error={errors.floorNo}>
            <FormInput
              value={floorNo}
              onChange={handleDigitInput(setFloorNo)}
            />
          </FormField>

          <FormField label="Car Parking">
            <OptionSelector
              options={parkingOptions}
              selected={parking}
              onChange={setParking}
            />
          </FormField>

          <FormField label="Facing">
            <FormSelect
              options={facingOptions}
              value={facing}
              onChange={(e) => setFacing(e.target.value)}
            />
          </FormField>

          <FormField label="Project Name">
            <FormInput
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              maxLength={70}
              currentLength={projectName.length}
            />
          </FormField>

          <FormField label="Ad title" required error={errors.adTitle}>
            <FormInput
              value={adTitle}
              onChange={(e) => setAdTitle(e.target.value)}
              maxLength={70}
              currentLength={adTitle.length}
              hint="Mention the key features of your item (e.g. brand, model, age, type)"
              hintClassName="whitespace-nowrap"  // This forces hint text in one line
              className="w-full max-w-md"         // Slightly wider input box
            />
          </FormField>

          <FormField label="Description" required error={errors.description}>
            <FormTextarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={4096}
              currentLength={description.length}
              hint="Include condition, features and reason for selling"
            />
          </FormField>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
