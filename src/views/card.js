import { headerComponent } from "../components/Header.js";
import { bannerComponent } from "../components/Banner.js";
import { renderCards } from "../functions.js";

export const Card = ({ cardData }) => {
  const viewCard = document.createElement("section");
  viewCard.id = "viewCard";
  /*------HEADER ART PLACE-----------------------------*/
  const headerCard = headerComponent();
  viewCard.appendChild(headerCard);
  /*--------------------------------------------------*/
  const bannerCard = bannerComponent();
  viewCard.appendChild(bannerCard);

  const longCard = renderCards([cardData]);
  viewCard.appendChild(longCard);

  return viewCard;
};
