import React, { useState } from 'react';
import EmotionInput from './EmotionInput';
import BodyFeelInput from './BodyFeelInput';
import EventInput from './EventInput';
import QuestionInput from './QuestionInput';
import ExtraNotesInput from './ExtraNotesInput';
import { EmotionLog } from '../types';
import { logEmotion, getQuestions } from '../utils/openAI';
import { saveToFile } from '../utils/fileSaver';

const EmotionLogger: React.FC = () => {
  const [emotionLog, setEmotionLog] = useState<EmotionLog>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmotionLog({
      ...emotionLog,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogEmotion = async () => {
    const response = await logEmotion(emotionLog);
    if (response.status === 200) {
      const questions = await getQuestions(emotionLog);
      setEmotionLog({
        ...emotionLog,
        questions,
      });
    }
  };

  const handleSaveToFile = () => {
    saveToFile(emotionLog);
  };

  return (
    <div>
      <EventInput onChange={handleInputChange} />
      <EmotionInput onChange={handleInputChange} />
      <BodyFeelInput onChange={handleInputChange} />
      <QuestionInput onChange={handleInputChange} />
      <ExtraNotesInput onChange={handleInputChange} />
      <button onClick={handleLogEmotion}>Log Emotion</button>
      <button onClick={handleSaveToFile}>Save to File</button>
    </div>
  );
};

export default EmotionLogger;