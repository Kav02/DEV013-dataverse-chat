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

    //response.ok es la propiedad de response que indica el resultado del request
    if (!response.ok) {
      throw new Error("Error en la solicitud a OpenAI");
    }

    const result = await response.json();
    console.log(result.choices[0].message.content);
    return result.choices[0].message.content;
  } catch (error) {
    const errorAlert = window.alert("Error en la solicitud a OpenAI");
    return errorAlert;
  }
};
