import { NextApiRequest, NextApiResponse } from 'next';
import { EmotionLog } from '../../components/EmotionLogger';
import { saveToFile } from '../../utils/fileSaver';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const emotionLog: EmotionLog = req.body;
    try {
      await saveToFile(emotionLog);
      res.status(200).json({ message: 'Emotion logged successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Error logging emotion.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}