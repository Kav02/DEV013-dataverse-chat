export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  if (key.trim() !== "") {
    localStorage.setItem("apiKey", key);
  } else {
    alert("Debes ingresar un Api key)");
  }
  console.log(key);
};

export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage

  const getKey = localStorage.getItem("apiKey");
  console.log(getKey);
  return getKey;
};
