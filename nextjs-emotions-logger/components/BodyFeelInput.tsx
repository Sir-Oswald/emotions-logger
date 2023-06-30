import React, { useState } from 'react';

interface BodyFeelInputProps {
  onBodyFeelChange: (bodyFeel: string) => void;
}

const bodyFeelList = ['shaky', 'flushed', 'churning stomach', 'tingly'];

const BodyFeelInput: React.FC<BodyFeelInputProps> = ({ onBodyFeelChange }) => {
  const [bodyFeel, setBodyFeel] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBodyFeel(event.target.value);
    onBodyFeelChange(event.target.value);
  };

  const handleButtonClick = (bodyFeel: string) => {
    setBodyFeel(bodyFeel);
    onBodyFeelChange(bodyFeel);
  };

  return (
    <div>
      <label htmlFor="bodyFeelInput">Body Feels:</label>
      <input
        type="text"
        id="bodyFeelInput"
        value={bodyFeel}
        onChange={handleInputChange}
      />
      <div>
        {bodyFeelList.map((bodyFeel) => (
          <button
            key={bodyFeel}
            onClick={() => handleButtonClick(bodyFeel)}
          >
            {bodyFeel}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BodyFeelInput;