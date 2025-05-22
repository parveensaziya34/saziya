import React, { useRef, useState } from 'react';

const CameraIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#999"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 7h16v12H4z" />
    <path d="M9 7l1-2h4l1 2" />
    <circle cx="12" cy="13" r="3" />
    <line x1="19" y1="3" x2="19" y2="7" />
    <line x1="17" y1="5" x2="21" y2="5" />
  </svg>
);

const PhotoUploadSection: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files)
        .slice(0, 20 - images.length) // Max 20 images
        .map((file) => URL.createObjectURL(file));
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const handleAddPhotoClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-6">
      {/* Header */}
      <h2 className="font-bold text-[15px] mb-3">UPLOAD UP TO 20 PHOTOS</h2>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleImageChange}
      />

      {/* Grid */}
      <div className="grid grid-cols-4 gap-x-[1px] gap-y-[2px] w-[410px]">
        {/* Add Photo Box */}
        {images.length < 20 && (
          <div
            onClick={handleAddPhotoClick}
            className="border-2 border-black w-[90px] h-[90px] flex flex-col items-center justify-center cursor-pointer"
          >
            <CameraIcon className="w-6 h-6 text-black" />
            <span className="text-blue-700 underline text-[11px] mt-[2px]">Add Photo</span>
          </div>
        )}

        {/* Thumbnails */}
        {images.map((src, index) => (
          <div
            key={index}
            className="border border-gray-400 w-[90px] h-[90px] overflow-hidden flex items-center justify-center"
          >
            <img src={src} alt={`uploaded ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Remaining Empty Boxes */}
        {Array(Math.max(0, 20 - images.length - (images.length < 20 ? 1 : 0)))
          .fill(0)
          .map((_, index) => (
            <div
              key={`empty-${index}`}
              className="border border-gray-300 w-[90px] h-[90px] flex items-center justify-center"
            >
              <CameraIcon />
            </div>
          ))}
      </div>

      {/* Error */}
      <p className="text-red-600 text-[11px] mt-3">This field is mandatory</p>
    </div>
  );
};

export default PhotoUploadSection;
