import { headerComponent } from "../components/Header.js";
import { bannerComponent } from "../components/Banner.js";
import { renderCards } from "../functions.js";
import { navigateTo } from "../router.js";
import data from "../data/dataset.js";

export const Card = (props) => {
  const viewCard = document.createElement("section");
  viewCard.id = "viewCard";

  /*------HEADER ART PLACE-----------------------------*/
  const headerCard = headerComponent();
  viewCard.appendChild(headerCard);

  /*--------------------------------------------------*/
  const bannerCard = bannerComponent();
  viewCard.appendChild(bannerCard);

  // Obtener el nombre de la tarjeta seleccionada de los parámetros de la URL
  const selectedCardId = props.id;

  // Filtra los datos para obtener solo la tarjeta seleccionada
  const selectedPainting = data.find(
    (painting) => painting.id === selectedCardId
  );

  // Renderizar solo la tarjeta seleccionada
  if (selectedPainting) {
    const longCard = renderCards([selectedPainting]);
    viewCard.appendChild(longCard);
  } else {
    // Mensaje cuando no se encuentra la tarjeta
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Tarjeta no encontrada";
    viewCard.appendChild(errorMessage);
  }
  //Ir al chat individual
  const buttonIndChat = viewCard.querySelector("#button-chatInd");

  buttonIndChat.addEventListener("click", () =>
    navigateTo("/individual", { id: selectedCardId })
  );

  return viewCard;
};
