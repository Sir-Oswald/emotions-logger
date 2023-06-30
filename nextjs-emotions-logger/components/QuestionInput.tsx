import React, { useState } from 'react';

interface QuestionInputProps {
  onQuestionChange: (value: string) => void;
}

const QuestionInput: React.FC<QuestionInputProps> = ({ onQuestionChange }) => {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value);
    onQuestionChange(event.target.value);
  };

  return (
    <div className="input-group">
      <label htmlFor="questionInput">Questions</label>
      <textarea
        id="questionInput"
        value={question}
        onChange={handleQuestionChange}
        placeholder="Enter your questions here..."
      />
    </div>
  );
};

export default QuestionInput;