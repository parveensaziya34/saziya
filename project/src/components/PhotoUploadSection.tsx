import React, { useRef, useState } from 'react';

const CameraIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#999"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 7h16v12H4z" />
    <path d="M9 7l1-2h4l1 2" />
    <circle cx="12" cy="13" r="3" />
    {/* Plus sign bigger and bottom shifted */}
    <line x1="18" y1="16" x2="18" y2="22" />
    <line x1="15" y1="19" x2="21" y2="19" />
  </svg>
);

const PhotoUploadSection: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files)
        .slice(0, 20 - images.length)
        .map((file) => URL.createObjectURL(file));
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const handleBoxClick = () => {
    if (images.length < 20) {
      fileInputRef.current?.click();
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const firstEmptyIndex = images.length;

  // Price box width assumed as 360px
  const containerWidth = 360;
  const gapPx = 4;
  const columns = 4;
  const totalGapWidth = gapPx * (columns - 1);
  const boxWidth = (containerWidth - totalGapWidth) / columns; // about 87px

  return (
    <div className="p-6">
      <h2 className="font-bold text-[15px] mb-3">UPLOAD UP TO 20 PHOTOS</h2>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleImageChange}
      />

      <div
        className="grid grid-cols-4"
        style={{
          width: containerWidth,
          gap: `${gapPx}px`,
          paddingTop: gapPx,
          paddingBottom: gapPx,
        }}
      >
        {Array(20)
          .fill(0)
          .map((_, index) => {
            const isFilled = images[index] !== undefined;
            const showAddText = !isFilled && index === firstEmptyIndex;

            return (
              <div
                key={index}
                className={`relative overflow-hidden flex items-center justify-center cursor-pointer
                  ${
                    isFilled
                      ? 'border-2 border-gray-400'
                      : index === 0
                      ? 'border-2 border-black'
                      : 'border-2 border-gray-300'
                  }
                `}
                style={{ width: boxWidth, height: boxWidth }}
                onClick={handleBoxClick}
              >
                {isFilled ? (
                  <>
                    <img
                      src={images[index]}
                      alt={`uploaded ${index}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage(index);
                      }}
                      className="absolute top-0 right-0 bg-white text-black text-xs px-1 rounded-bl"
                    >
                      ✕
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <CameraIcon />
                    {showAddText && (
                      <span className="text-black underline text-[11px] mt-[2px]">
                        Add Photo
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
      </div>

      <p className="text-red-600 text-[11px] mt-3">This field is mandatory</p>
    </div>
  );
};

export default PhotoUploadSection;
