import React, { useState } from 'react';

interface EventInputProps {
  onEventChange: (event: string) => void;
}

const EventInput: React.FC<EventInputProps> = ({ onEventChange }) => {
  const [event, setEvent] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEvent(e.target.value);
    onEventChange(e.target.value);
  };

  return (
    <div id="eventInput">
      <label htmlFor="event">Event:</label>
      <input
        type="text"
        id="event"
        name="event"
        value={event}
        onChange={handleInputChange}
        placeholder="What happened?"
      />
    </div>
  );
};

export default EventInput;