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
