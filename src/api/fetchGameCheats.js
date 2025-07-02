import { OPENAI_API_KEY } from '@env';

export const fetchGameCheats = async (query, platforms) => {
  const platformString = platforms.join(', ');
  const prompt = `Give me cheat codes for the game "${query}" on the following platforms: ${platformString}. Format them nicely.`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await response.json();
  console.log(data,"cheats")
  return data.choices?.[0]?.message?.content || 'No cheats found.';
};
