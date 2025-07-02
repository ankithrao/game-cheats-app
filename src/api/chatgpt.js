import axios from 'axios';

const API_KEY = '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'

export const fetchGameCheats = async (game, platforms) => {
  const prompt = `Cheat codes for "${game}" on ${platforms.join(', ')}.`;
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-r1:free",
      messages: [{ role: "user", content: prompt }]
    })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "Error");
  return data.choices[0].message.content;
};

