import { getApiKey } from "./apiKey.js";

const apiKey = getApiKey();
console.log(apiKey);
export const communicateWithOpenAI = async () => {
  const apiKey = getApiKey();

  const url = "https://api.openai.com/v1/chat/completions";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: "dime un n umero del 1 al 10" }],
      max_tokens: 30,
    }),
  });

  if (!response.ok) {
    throw new Error("Error en la solicitud a OpenAI");
  }

  const result = await response.json();
  return result.choices[0].message.content;
};

communicateWithOpenAI()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
