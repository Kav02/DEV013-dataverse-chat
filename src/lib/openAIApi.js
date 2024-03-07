import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = async (userInput, selectedPainting) => {
  try {
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
            content: `Eres la pintura famosa ${paintingName}, los usuarios te escriben para saber mas de ti, quién te pintó, a qué corriente artistica perteneces, y otros datos relevantes. Responde de manera concisa y precisa a sus preguntas`,
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

    
  } catch (error) {
    if (error.message.includes("Token Overflow")) {
      console.error(
        "Error: Exceso de Tokens (Token Overflow). La entrada es demasiado larga."
      );
    } else {
      console.error("Error en la comunicación con OpenAI:", error.message);
    }

    // throw error; // Puedes decidir si quieres relanzar la excepción o manejarla de alguna otra manera
  }
};



// communicateWithOpenAI()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
