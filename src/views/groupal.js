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
  const chatBody = document.createElement("section");
  chatBody.classList.add("chat-body");
  const chatMessage = document.createElement("article");
  chatMessage.id = "chatMessage";
  chatBody.appendChild(chatMessage);
  //Insertar los componentes a la vista
  chatContainer.appendChild(chatBody);
  viewGroupal.appendChild(chatContainer);

  const renderChatResponse = async (data) => {
    const response = await fetch(communicateWithOpenAI(data));
    const result = await response.json();

    // Contenedor para la respuesta
    const responseElement = document.createElement("div");
    responseElement.classList.add("chat-response");
    const chatResponse = `<p>${result.choices[0].text}</p>`;

    responseElement.innerHTML = chatResponse;
    chatBody.appendChild(responseElement);
  };

  const sendMessageButton = chatContainer.getElementById("send-button");

  sendMessageButton.addEventListener("click", () => {
    const userInput = document.getElementById("chat-input").value;
    renderChatResponse(userInput);

    return viewGroupal;
  });
};
