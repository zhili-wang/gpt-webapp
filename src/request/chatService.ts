import Openai from 'openai-api';

const openai = new Openai(process.env.REACT_APP_OPENAI_API_KEY || '');

export async function createChat(apiKey: string, message: string): Promise<string> {
  // openai.setApiKey(apiKey);
  const response = await openai.complete({
    engine: 'davinci',
    prompt: message,
    maxTokens: 150,
    temperature: 0.7,
    topP: 1,
    frequencyPenalty: 0,
    presencePenalty: 0,
    stop: '\n',
  });
  return response.data.choices[0].text.trim();
}
