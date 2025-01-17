//import { headerComponent } from "../components/Header.js";
import { navigateTo, queryStringToObject } from "../router.js";
import { setApiKey } from "./../lib/apiKey.js";

export const apiRegister = () => {
  const viewapiRegister = document.createElement("section");
  viewapiRegister.id = "viewapiRegister";

  //Crear header
  const headerRegister = document.createElement("header");
  headerRegister.classList.add("register-header");
  headerRegister.innerHTML = `
  <button class="arrow-back" id="arrow-back"><span class="arrow-icon"><img src="./../Imagenes/return header.svg"></span></button>
  <section class="header-title">
  <img class="logoHeader" src="./../Imagenes/logo.png" alt="Art Place Logo">
  <h1 id="header-name">ART PLACE</h1></section>
  `;
  viewapiRegister.append(headerRegister);
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
  const buttonBack = viewapiRegister.querySelector("#arrow-back");
  buttonBack.addEventListener("click", function (event) {
    event.preventDefault();
    window.history.back();
  });
  const apiKey = viewapiRegister.querySelector("#textapikey");
  const buttonGuardar = viewapiRegister.querySelector("#Guardar");
  buttonGuardar.addEventListener("click", function () {
    //Guardar el nombre de usuario
    const name = viewapiRegister.querySelector("#nombre");
    const nameValue = name.value;
    localStorage.setItem("userName", nameValue);
    const apiKeyValue = apiKey.value;
    setApiKey(apiKeyValue);
    const target = localStorage.getItem("apiKeyTarget");
    const previousPageParams = localStorage.getItem("previousQueryParams");
    const previousQueryParams = queryStringToObject(previousPageParams);
    const idCard = previousQueryParams.id;
    console.log(idCard);
    if (target === "viewGroupal") {
      navigateTo("/groupal");
    } else if (target === "viewIndividual") {
      navigateTo("/individual", { id: idCard });
    }
    // else if (previousPage.includes("/card?id=")) {
    //    window.history.back();
    //  }
    else {
      navigateTo("/home");
    }

    localStorage.removeItem("apiKeyTarget");
  });

  return viewapiRegister;
};
