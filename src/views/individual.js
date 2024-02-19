import { indChatHeaderComponent } from "./../components/indChatHeader.js";
import { chatInputComponent } from "../components/chatinput.js";

export const Individual = () => {
  const viewIndividual = document.createElement("section");
  viewIndividual.id = "view-individual";
  const indChatHeader = indChatHeaderComponent();
  viewIndividual.appendChild(indChatHeader);

  const chatBody = document.createElement("section");
  chatBody.classList.add("chat-body");
  viewIndividual.appendChild(chatBody);
  const chatInput = chatInputComponent();
  viewIndividual.appendChild(chatInput);

  return viewIndividual;
};
