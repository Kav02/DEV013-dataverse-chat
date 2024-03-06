import { chatInputComponent } from "../components/chatinput.js";
import { navigateTo } from "../router.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";
import data from "../data/dataset.js";

export const Individual = (props) => {
  const viewIndividual = document.createElement("section");
  viewIndividual.id = "view-individual";
  const selectedCardId = props.id;
  // Filtra los datos para obtener solo la tarjeta seleccionada
  const selectedPainting = data.find(
    (painting) => painting.id === selectedCardId
  );

  //Header--------------
  //Contenedor
  const indChatHeader = document.createElement("header");
  indChatHeader.classList.add("chat-header");
  //Sección del Perfil
  const paintingChat = document.createElement("section");
  paintingChat.id = "painting-chat";
  const profile = document.createElement("img");
  profile.src = `${selectedPainting.imageUrl}`;
  profile.alt = selectedPainting.name;
  profile.id = "profileImg";
  const headerTitle = document.createElement("h1");
  headerTitle.id = "header-title";
  headerTitle.innerHTML = `${selectedPainting.name}`;
  paintingChat.appendChild(profile);
  paintingChat.appendChild(headerTitle);
  indChatHeader.appendChild(paintingChat);

  //Sección menú
  const menuOptions = document.createElement("section");
  menuOptions.id = "menu-options";
  const homeTitle = document.createElement("button");
  homeTitle.classList.add("chat-menu-options");
  homeTitle.id = "home-title";
  homeTitle.innerHTML = "Inicio";
  const homeIcon = document.createElement("img");
  homeIcon.classList.add("home-icon");
  homeIcon.src = "./../Imagenes/homeheader.svg";
  homeTitle.appendChild(homeIcon);
  menuOptions.appendChild(homeTitle);
  const groupTitle = document.createElement("button");
  groupTitle.classList.add("chat-menu-options");
  groupTitle.id = "group-title";
  groupTitle.innerHTML = "Chat Grupal";
  const groupIcon = document.createElement("img");
  groupIcon.id = "group-icon";
  groupIcon.src = "./../Imagenes/groupchat.png";
  groupTitle.appendChild(groupIcon);
  menuOptions.appendChild(groupTitle);
  indChatHeader.appendChild(menuOptions);
  viewIndividual.appendChild(indChatHeader);
  //Información de la obra
  const chatContainer = document.createElement("section");
  chatContainer.classList.add("chat-container");
  const paintingInfo = document.createElement("section");
  paintingInfo.id = "painting-info";
  paintingInfo.innerHTML = `
  <p class="autorchat">${selectedPainting.facts.artistName} </p>
  <div class="containerPicturetwo">
  <img class="picturetwo" src="${selectedPainting.imageUrl}">
  </div>
  <div class="containerPictureone">
  <img class="pictureone" src="${selectedPainting.relatedimageUrl}">
  </div>
  
  <p class="chat">Artista: ${selectedPainting.facts.artistName}</p>
  <p class="chat">Corriente: ${selectedPainting.facts.artMovement}</p>
  <p class="chat">Año: ${selectedPainting.facts.creationYear}</p>
  
  `;
  chatContainer.appendChild(paintingInfo);

  //Area de Chat
  const chatBody = document.createElement("section");
  chatBody.classList.add("chat-body");
  const chatMessage = document.createElement("article");
  chatMessage.id = "chatMessage";
  chatBody.appendChild(chatMessage);
  //Chat input
  const chatInput = chatInputComponent();
  chatBody.appendChild(chatInput);
  //Insertar los componentes a la vista
  chatContainer.appendChild(chatBody);
  viewIndividual.appendChild(chatContainer);

  const messageSending = async () => {
    const userInput = document.getElementById("chat-input").value;
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("user-message");
    userMessageElement.innerHTML = `<p>${userInput}</p>`;
    chatMessage.appendChild(userMessageElement);

    //Renderizar la respuesta del chat
    const response = await communicateWithOpenAI(userInput, selectedPainting);
    const responseElement = document.createElement("div");
    responseElement.classList.add("chat-response");
    responseElement.innerHTML = `<p>${response}</p>`;
    //Limpiar el input
    chatInput.querySelector("#chat-input").value = "";
    chatMessage.appendChild(responseElement);
  };

  //paintingInfo.appendChild(longCard);
  chatContainer.appendChild(chatBody);
  viewIndividual.appendChild(chatContainer);

  // Funcion para activar el chat
  const sendMessageButton = chatBody.querySelector("#send-button");
  sendMessageButton.addEventListener("click", messageSending);
  const sendMessage = chatBody.querySelector("#chat-input");
  sendMessage.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      messageSending();
    }
  });

  //Navegar al Inicio y al Chat Groupal
  const homeButton = viewIndividual.querySelector("#home-title");
  homeButton.addEventListener("click", () => navigateTo("/home"));
  const groupButton = viewIndividual.querySelector("#group-title");
  groupButton.addEventListener("click", () => navigateTo("/groupal"));

  return viewIndividual;
};
