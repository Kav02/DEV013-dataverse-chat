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
  const prueba = async () => {
    const response = await fetch(communicateWithOpenAI(data));
    const result = await response.json();
    console.log(prueba);
    const respuesta = prueba;
    console.log(respuesta);
    chatBody.appendChild(respuesta);
    return result;
  };

  const chatInput = chatInputComponent();
  chatBody.appendChild(chatInput);
  chatContainer.appendChild(chatBody);
  viewGroupal.appendChild(chatContainer);
  return viewGroupal;
};
