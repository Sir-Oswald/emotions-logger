import React from 'react';

interface EmotionButtonProps {
  emotion: string;
  onClick: (emotion: string) => void;
}

const EmotionButton: React.FC<EmotionButtonProps> = ({ emotion, onClick }) => {
  return (
    <button id={`emotionButton-${emotion}`} onClick={() => onClick(emotion)}>
      {emotion}
    </button>
  );
};

export default EmotionButton;