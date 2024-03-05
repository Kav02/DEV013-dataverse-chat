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
      messages: [{ role: "system", content: "Dime un numero del 1 al 10." }],
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

//   import OpenAI from "openai";

//   const openai = new OpenAI();

//   async function main() {
//     const completion = await openai.chat.completions.create({
//       messages: [{ role: "system", content: "You are a helpful assistant." }],
//       model: "gpt-3.5-turbo",
//     });

//     console.log(completion.choices[0]);
//   }

//   main();
