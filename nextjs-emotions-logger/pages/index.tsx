```tsx
import { useState } from 'react';
import EmotionLogger from '../components/EmotionLogger';
import { EmotionLog } from '../types';
import { logEmotion, getQuestions, saveToFile } from '../utils';

export default function Home() {
  const [emotionLogs, setEmotionLogs] = useState<EmotionLog[]>([]);

  const handleLogEmotion = async (emotionLog: EmotionLog) => {
    const newEmotionLog = await logEmotion(emotionLog);
    setEmotionLogs([...emotionLogs, newEmotionLog]);
  };

  const handleGetQuestions = async (emotionLog: EmotionLog) => {
    const questions = await getQuestions(emotionLog);
    return questions;
  };

  const handleSaveToFile = () => {
    saveToFile(emotionLogs);
  };

  return (
    <div>
      <h1>Emotions Logger</h1>
      <EmotionLogger
        onLogEmotion={handleLogEmotion}
        onGetQuestions={handleGetQuestions}
        onSaveToFile={handleSaveToFile}
      />
    </div>
  );
}
```