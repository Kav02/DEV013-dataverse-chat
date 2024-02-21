import { headerComponent } from "../components/Header.js";
import { bannerComponent } from "../components/Banner.js";
import { renderCards } from "../functions.js";
import data from "../data/dataset.js";

export const Card = () => {
  const viewCard = document.createElement("section");
  viewCard.id = "viewCard";
  /*------HEADER ART PLACE-----------------------------*/
  const headerCard = headerComponent();
  viewCard.appendChild(headerCard);
  /*--------------------------------------------------*/
  const bannerCard = bannerComponent();
  viewCard.appendChild(bannerCard);

  const longCard = renderCards(data);
  viewCard.appendChild(longCard);

  return viewCard;
};

// import { headerComponent } from "../components/Header.js";
// import { bannerComponent } from "../components/Banner.js";
// import { renderCards } from "../functions.js";
// import { data } from "../data.js"; // Asegúrate de importar tu arreglo de datos

// export const Card = (params) => {
//   const viewCard = document.createElement("section");
//   viewCard.id = "viewCard";

//   // Obtén el nombre de la tarjeta seleccionada de los parámetros de la URL
//   const selectedCardName = params && params.name;

//   /*------HEADER ART PLACE-----------------------------*/
//   const headerCard = headerComponent();
//   viewCard.appendChild(headerCard);

//   /*--------------------------------------------------*/
//   const bannerCard = bannerComponent();
//   viewCard.appendChild(bannerCard);

//   // Filtra los datos para obtener solo la tarjeta seleccionada
//   const selectedPainting = data.find(
//     (painting) => painting.name === selectedCardName
//   );

//   // Renderiza solo la tarjeta seleccionada
//   if (selectedPainting) {
//     const longCard = renderCards([selectedPainting]);
//     viewCard.appendChild(longCard);
//   } else {
//     // Puedes mostrar un mensaje o manejar la situación cuando no se encuentra la tarjeta
//     const errorMessage = document.createElement("p");
//     errorMessage.textContent = "Tarjeta no encontrada";
//     viewCard.appendChild(errorMessage);
//   }

//   return viewCard;
// };