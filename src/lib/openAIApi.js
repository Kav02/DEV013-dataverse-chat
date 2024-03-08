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
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content: `Eres la pintura famosa ${paintingName}, los usuarios te haran diversas preguntas sobre ti o cosas variadas, responde a sus preguntas con información real y  manera concisa y precisa sin dar informacion adicional a la solicitada`,
          },
          {
            role: "user",
            content: `${userInput}`,
          },
        ],
        max_tokens: 30,
      }),
    });
    // await new Promise(resolve => setTimeout(resolve, 21000)); 
    if (!response.ok) {
      throw new Error("Error en la solicitud a OpenAI");
    }

    const result = await response.json();

    return result.choices[0].message.content;
  } catch (error) {
    if (error.message.includes("Token Overflow")) {
      const Errormessage = 'Exceso de Tokens (Token Overflow). La entrada es demasiado larga.';
      alert(Errormessage);
      
    } else {
      const ErrorSreen = 'Error en la comunicación con OpenAI:'+ error.message;
      alert(ErrorSreen);
      // throw Error (ErrorSreen);
      
    }

    throw error; // Puedes decidir si quieres relanzar la excepción o manejarla de alguna otra manera
  }
};



// communicateWithOpenAI()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
