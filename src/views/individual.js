import { indChatHeaderComponent } from "./../components/indChatHeader.js";
import { chatInputComponent } from "../components/chatinput.js";

export const Individual = () => {
  const viewIndividual = document.createElement("section");
  viewIndividual.id = "view-individual";
  const indChatHeader = indChatHeaderComponent();
  viewIndividual.appendChild(indChatHeader);
  const chatContainer = document.createElement("section");
  chatContainer.classList.add("chat-container");
  const paintingInfo = document.createElement("section");
  paintingInfo.id = "painting-info";
  chatContainer.appendChild(paintingInfo);
  const chatBody = document.createElement("section");
  chatBody.classList.add("chat-body");
  chatContainer.appendChild(chatBody);
  viewIndividual.appendChild(chatContainer);
  const chatInput = chatInputComponent();
  viewIndividual.appendChild(chatInput);

  return viewIndividual;
};
