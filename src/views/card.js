
import { headerComponent } from "../components/Header.js";
import { bannerComponent } from "../components/Banner.js";


export const Card = () => {
  const viewCard = document.createElement("section");
  viewCard.id = "viewCard";
  /*------HEADER ART PLACE-----------------------------*/
  const headerCard = headerComponent();
  viewCard.appendChild(headerCard);
  /*--------------------------------------------------*/

  const bannerCard = bannerComponent();
  viewCard.appendChild(bannerCard);

  return viewCard;
};
