import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = async (userInput, selectedPainting) => {
  const apiKey = getApiKey();
  const paintingName = selectedPainting.name;
  const url = "https://api.openai.com/v1/chat/completions";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Eres la pintura famosa ${paintingName},los usuarios te haran diversas preguntas sobre ti o cosas variadas, responde solo a sus preguntas de manera concisa y precisa`,
        },
        {
          role: "user",
          content: `${userInput}`,
        },
      ],
      max_tokens: 30,
    }),
  });

  if (!response.ok) {
    throw new Error("Error en la solicitud a OpenAI");
  }

  const result = await response.json();
  return result.choices[0].message.content;
};

// communicateWithOpenAI()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
