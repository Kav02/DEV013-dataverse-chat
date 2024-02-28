import { headersecundaryComponent } from "../components/Headersecundary.js";
import { bannerComponent } from "../components/Banner.js";
import { renderCards } from "../functions.js";
import { navigateTo } from "../router.js";
import data from "../data/dataset.js";

export const Card = (props) => {
  const viewCard = document.createElement("section");
  viewCard.id = "viewCard";


  /*------HEADER ART PLACE-----------------------------*/
  const headerCard = headersecundaryComponent();
  viewCard.appendChild(headerCard);

  /*--------------------------------------------------*/
  const bannerCard = bannerComponent();
  viewCard.appendChild(bannerCard);

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  buttons.innerHTML = `
     <button class= "menu" id="button-homeCard"> Home <span class="iconKey"><img src="./../Imagenes/icon-home.svg"></span>
     </button>
     <button class= "menu" id="button-key">API-Key <span class="iconKey"><img src="./../Imagenes/key.svg"></span>
     </button>
     <button class= "menu" id="button-group">Chat Grupal <span class="iconKey"><img src="./../Imagenes/groupchat.svg"></span>
     </button>
     `;
     viewCard.appendChild(buttons);

  const buttonApiKey = viewCard.querySelector("#button-key");
  buttonApiKey.addEventListener("click", () => navigateTo("/apiregister"));
  const buttonGroup = viewCard.querySelector("#button-group");
  buttonGroup.addEventListener("click", () => navigateTo("/groupal"));
  const buttonHomeCard = viewCard.querySelector("#button-homeCard");
  buttonHomeCard.addEventListener("click", () => navigateTo("/home"));


  const containerIndividualCard = document.createElement("section");
  containerIndividualCard.id = "containerIndividualCard";

  // Obtén el nombre de la tarjeta seleccionada de los parámetros de la URL
  const selectedCardId = props.id;
  console.log(selectedCardId);
  // Filtra los datos para obtener solo la tarjeta seleccionada
  const selectedPainting = data.find(
    (painting) => painting.id === selectedCardId
  );

  // Renderizar solo la tarjeta seleccionada
  if (selectedPainting) {
    const longCard = renderCards([selectedPainting]);
    containerIndividualCard.appendChild(longCard);
    console.log(longCard);
  } else {
    // Mensaje cuando no se encuentra la tarjeta
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Tarjeta no encontrada";
    viewCard.appendChild(errorMessage);
  }
  //Ir al chat individual
  const buttonIndChat =
    containerIndividualCard.querySelector(".cardButtonChat");
  console.log(buttonIndChat);
  buttonIndChat.addEventListener("click", () =>
    navigateTo("/individual", { id: selectedCardId })
  );

  viewCard.appendChild(containerIndividualCard);
  return viewCard;
};
