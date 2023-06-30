import axios from 'axios';

const OPEN_AI_API = 'https://api.openai.com/v1/engines/davinci-codex/completions';

export const getQuestions = async (input: string) => {
  try {
    const response = await axios.post(
      OPEN_AI_API,
      {
        prompt: input,
        max_tokens: 60,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPEN_AI_KEY}`,
        },
      }
    );

    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].text.trim();
    } else {
      throw new Error('No response from OpenAI API');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};