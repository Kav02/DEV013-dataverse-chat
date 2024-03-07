import { headerComponent } from "../components/Header.js";
import { navigateTo, queryStringToObject } from "../router.js";
import { setApiKey } from "./../lib/apiKey.js";

export const apiRegister = () => {
  const viewapiRegister = document.createElement("section");
  viewapiRegister.id = "viewapiRegister";

  const headerError = headerComponent();
  viewapiRegister.append(headerError);

  const contentApi = document.createElement("section");
  contentApi.id = "contentApi";

  contentApi.innerHTML = `
  <p class="textapi"> Para poder conversar con tus obras favoritas, por favor a continuación agrega tu Api Key.</p>
  <form  id="containerApi">
  <label for="nombre" class="text nombre">Nombre</label>
  <input type="text" class="input inputnombre" id="nombre" required>
  <label for="apikey" class="text apikey">Api Key</label>
  <input type="text" class="input inputapikey" id="textapikey" required>
  <button class="Guardar" id="Guardar"> Guardar</button>
</form>
`;

  /*method="post" : se usa para que no se registre los datos puestos en la url */

  viewapiRegister.append(contentApi);

  const apiKey = viewapiRegister.querySelector("#textapikey");
  const buttonGuardar = viewapiRegister.querySelector("#Guardar");
  buttonGuardar.addEventListener("click", function () {
    const apiKeyValue = apiKey.value;
    setApiKey(apiKeyValue);
    const target = localStorage.getItem("apiKeyTarget");
    const currentLocation = location.href;
    console.log(currentLocation);
    if (currentLocation === "/home" && target === null) {
      navigateTo("/home");
    } else if (target === "viewGroupal") {
      navigateTo("/groupal");
    } else if (target === "viewIndividual") {
      const queryString = currentLocation.search;
      const urlParams = new URLSearchParams(queryString);
      const queryParams = urlParams.toString(); // Convertir los parámetros de consulta a una cadena
      const newUrl = `/individual?${queryParams}`;
      navigateTo(newUrl);
    } else if (currentLocation.includes("/card?id=")) {
      const currentQueryParams = new URLSearchParams(location.search);
      const id = currentQueryParams.get("id");
      const newUrl = `/card?id=${id}`;
      navigateTo(newUrl);
    }
    // else {
    //   navigateTo("/home");
    // }

    localStorage.removeItem("apiKeyTarget");
  });

  return viewapiRegister;
};
