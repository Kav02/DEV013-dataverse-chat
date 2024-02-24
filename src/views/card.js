import { headerComponent } from "../components/Header.js";
import { bannerComponent } from "../components/Banner.js";
import { renderCards } from "../functions.js";
import data from "../data/dataset.js";

export const Card = (params) => {
  const viewCard = document.createElement("main");
  viewCard.id = "viewCard";

  /*------HEADER ART PLACE-----------------------------*/
  const headerCard = headerComponent();
  viewCard.appendChild(headerCard);

  /*--------------------------------------------------*/
  const bannerCard = bannerComponent();
  viewCard.appendChild(bannerCard);

  const conteinerIndividualCard = document.createElement("section");
  conteinerIndividualCard.id ="conteinerIndividualCard";
  
  // Obtén el nombre de la tarjeta seleccionada de los parámetros de la URL
  const selectedCardId = params.id;
  console.log(selectedCardId);
  // Filtra los datos para obtener solo la tarjeta seleccionada
  const selectedPainting = data.find(
    (painting) => painting.id === selectedCardId
  );

  // Renderiza solo la tarjeta seleccionada
  if (selectedPainting) {
    const longCard = renderCards([selectedPainting]);
    conteinerIndividualCard.appendChild(longCard);
  } else {
    // Puedes mostrar un mensaje o manejar la situación cuando no se encuentra la tarjeta
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Tarjeta no encontrada";
    viewCard.appendChild(errorMessage);
  }
  viewCard.appendChild(conteinerIndividualCard);

  return viewCard;
};
