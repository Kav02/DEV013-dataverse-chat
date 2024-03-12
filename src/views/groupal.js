import { chatHeaderComponent } from "./../components/chatheader.js";
import { chatInputComponent } from "./../components/chatinput.js";
import { renderChatParticipants } from "./../functions.js";
import data from "./../data/dataset.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";

export const Groupal = () => {
  //Crear el contenedor principal
  const viewGroupal = document.createElement("section");
  viewGroupal.id = "view-groupal";
  //Encabezado
  const chatHeader = chatHeaderComponent();
  viewGroupal.appendChild(chatHeader);

  //Contenedor general
  const chatContainer = document.createElement("section");
  chatContainer.classList.add("chat-container");
  //Informacion de los participantes
  const groupInfo = document.createElement("section");
  groupInfo.id = "group-info";
  const participants = renderChatParticipants(data);
  groupInfo.appendChild(participants);
  chatContainer.appendChild(groupInfo);
  //Area del chat
  const getName = localStorage.getItem("userName");
  const chatBody = document.createElement("section");
  chatBody.classList.add("chat-body");
  const chatMessage = document.createElement("article");
  chatMessage.id = "chatMessage";
  const messageHello = document.createElement("div");
  messageHello.id = "messageHello";
  messageHello.innerHTML = `
    <p>¡Hola ${getName}!<br> Bienvenido al chat de pinturas famosas! ¿En qué podemos ayudarte?</p>`;
  chatMessage.appendChild(messageHello);
  chatBody.appendChild(chatMessage);
  //Chat input
  const chatInput = chatInputComponent();
  chatBody.appendChild(chatInput);
  //Insertar los componentes a la vista
  chatContainer.appendChild(chatBody);
  viewGroupal.appendChild(chatContainer);

  const messageSending = async () => {
    const userInput = document.getElementById("chat-input").value;
    const userMessageElement = document.createElement("div");
    userMessageElement.classList.add("user-message");
    userMessageElement.innerHTML = `<p>${userInput}</p>`;
    chatMessage.appendChild(userMessageElement);

    //Renderizar la respuesta del chat
    for (const selectedPainting of data) {
      const paintingName = selectedPainting.name;
      const response = await communicateWithOpenAI(userInput, selectedPainting);
      const responseElement = document.createElement("div");
      responseElement.classList.add("chat-response");
      responseElement.innerHTML = `<p class= "paintingName">${paintingName}<p>${response}</p>`;
      //Limpiar el input
      chatInput.querySelector("#chat-input").value = "";
      chatMessage.appendChild(responseElement);
    }
  };
  // Funcion para activar el chat--------------------
  const sendMessageButton = chatBody.querySelector("#send-button");
  sendMessageButton.addEventListener("click", messageSending);
  const sendMessage = chatBody.querySelector("#chat-input");
  sendMessage.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      messageSending();
    }
  });

  return viewGroupal;
};
