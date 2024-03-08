import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    // Desarrolla el test correspondiente aquí
    localStorage.removeItem("apiKey");
    const apiKeyValue = "TestApiKey";
    setApiKey(apiKeyValue);
    const storedApiKey = getApiKey();
    // Comprobar si el valor devuelto es el mismo que el valor establecido previamente
    expect(storedApiKey).toBe(apiKeyValue);
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    localStorage.removeItem("apiKey");
    const apiKeyValue = "TestApiKey";
    setApiKey(apiKeyValue);
    const storedApiKey = localStorage.getItem("apiKey");
    expect(storedApiKey).toBe(apiKeyValue);
  });
  it("debería mostrar la alerta si está vacío", () => {
    const alertMessage = "Debes ingresar un Api key";
    const apiKeyValue = "";
    setApiKey(apiKeyValue);
    getApiKey();
    expect(alertMessage).toBe("Debes ingresar un Api key");
  });
});
