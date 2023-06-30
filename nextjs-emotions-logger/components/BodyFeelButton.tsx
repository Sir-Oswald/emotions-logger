import React from 'react';

interface BodyFeelButtonProps {
  bodyFeel: string;
  onClick: (bodyFeel: string) => void;
}

const BodyFeelButton: React.FC<BodyFeelButtonProps> = ({ bodyFeel, onClick }) => {
  return (
    <button id={`bodyFeelButton-${bodyFeel}`} onClick={() => onClick(bodyFeel)}>
      {bodyFeel}
    </button>
  );
};

export default BodyFeelButton;