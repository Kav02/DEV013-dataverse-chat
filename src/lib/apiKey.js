export const setApiKey = async (key) => {
  if (key.trim() !== "") {
    //const apiKey = key;

    // const keyValid = await validateKey(apiKey);
    // if (keyValid === true) {
    localStorage.setItem("apiKey", key);
    // } else {
    //   alert("La clave de API ingresada no es válida.");
    // }
  } else {
    alert("Debes ingresar una clave de API.");
  }
};

export const getApiKey = () => {
  const getKey = localStorage.getItem("apiKey");
  console.log(getKey);
  return getKey;
};

// const validateKey = async (key) => {
//   try {
//     const url = "https://api.openai.com/v1/chat/completions";

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${key}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "system", content: "dime un n umero del 1 al 10" }],
//         max_tokens: 30,
//       }),
//     });
//     console.log("Response:", response);

//     if (!response.ok) {
//       throw new Error("Error en la solicitud a OpenAI");
//     }

//     if (typeof data === "undefined") {
//       throw new Error("La respuesta no contiene datos válidos");
//     }

//     return true;
//   } catch (error) {
//     return false;
//   }
// };
