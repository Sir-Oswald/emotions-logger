import fs from 'fs';
import { EmotionLog } from '../types';

export const saveToFile = (emotionLog: EmotionLog) => {
  const data = `${emotionLog.event},${emotionLog.emotion},${emotionLog.bodyFeel},${emotionLog.question1},${emotionLog.question2},${emotionLog.question3},${emotionLog.extraNotes}\n`;

  fs.appendFile('emotionLogs.csv', data, (err) => {
    if (err) {
      console.error('Error saving to file:', err);
    } else {
      console.log('Emotion log saved successfully.');
    }
  });
};