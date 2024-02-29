import { headerComponent } from "../components/Header.js";
import { navigateTo } from "../router.js";
import { setApiKey } from "./../lib/apiKey.js";

export const Apiregister = () => {
  const viewapiRegister = document.createElement("section");
  viewapiRegister.id = "viewapiRegister";

  const headerError = headerComponent();
  viewapiRegister.append(headerError);

  const contentApi = document.createElement("section");
  contentApi.id = "contentApi";

  contentApi.innerHTML = `
  <p> Para poder conversar con tus obras favoritas, por favor a continuación agrega tu Api Key.</p>
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
    console.log(target);
    if (target === "chatIndividual") {
      window.location.href = "/individual";
    } else if (target === "viewGroupal") {
      const pathname = "/grupal";
      navigateTo(pathname);
    }
  });

  return viewapiRegister;
};
