import { chatInputComponent } from "../components/chatinput.js";
import { renderCards } from "../functions.js";
import data from "../data/dataset.js";

export const Individual = (props) => {
  const viewIndividual = document.createElement("section");
  viewIndividual.id = "view-individual";
  const selectedCardId = props.id;
  console.log(selectedCardId);
  // Filtra los datos para obtener solo la tarjeta seleccionada
  const selectedPainting = data.find(
    (painting) => painting.id === selectedCardId
  );

  console.log(selectedPainting);
  //Header--------------
  const indChatHeader = document.createElement("header");
  indChatHeader.classList.add("chat-header");
  const profile = document.createElement("img");
  profile.src = `${selectedPainting.imageUrl}`;
  profile.alt = selectedPainting.name;
  profile.id = "profileImg";
  console.log(profile);

  indChatHeader.appendChild(profile);
  const headerTitle = document.createElement("h1");
  headerTitle.id = "header-title";
  headerTitle.innerHTML = `${selectedPainting.name}`;
  indChatHeader.appendChild(headerTitle);
  const homeIcon = document.createElement("img");
  homeIcon.id = "home-icon";
  homeIcon.src = "./Imagenes/homeheader.svg";
  indChatHeader.appendChild(homeIcon);
  viewIndividual.appendChild(indChatHeader);
  //Información de la obra
  const chatContainer = document.createElement("section");
  chatContainer.classList.add("chat-container");
  const paintingInfo = document.createElement("section");
  paintingInfo.id = "painting-info";
  chatContainer.appendChild(paintingInfo);
  //Area de Chat
  const chatBody = document.createElement("section");
  chatBody.classList.add("chat-body");
  const chatInput = chatInputComponent();
  chatBody.appendChild(chatInput);

  //paintingInfo.appendChild(longCard);
  chatContainer.appendChild(chatBody);
  viewIndividual.appendChild(chatContainer);
  return viewIndividual;
};
