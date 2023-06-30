import React, { useState } from 'react';

interface EmotionInputProps {
  onEmotionChange: (emotion: string) => void;
}

const EmotionInput: React.FC<EmotionInputProps> = ({ onEmotionChange }) => {
  const [emotion, setEmotion] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmotion = event.target.value;
    setEmotion(newEmotion);
    onEmotionChange(newEmotion);
  };

  return (
    <div className="input-field">
      <label htmlFor="emotionInput">Emotion: </label>
      <input
        type="text"
        id="emotionInput"
        value={emotion}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default EmotionInput;