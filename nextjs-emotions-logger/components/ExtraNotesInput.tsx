import React, { FC, useState } from 'react';

interface ExtraNotesInputProps {
  onExtraNotesChange: (notes: string) => void;
}

const ExtraNotesInput: FC<ExtraNotesInputProps> = ({ onExtraNotesChange }) => {
  const [notes, setNotes] = useState('');

  const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(event.target.value);
    onExtraNotesChange(event.target.value);
  };

  return (
    <div className="input-field">
      <label htmlFor="extraNotesInput">Extra Notes:</label>
      <textarea
        id="extraNotesInput"
        value={notes}
        onChange={handleNotesChange}
        placeholder="Enter any extra notes here..."
      />
    </div>
  );
};

export default ExtraNotesInput;