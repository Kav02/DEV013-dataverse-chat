import { chatHeaderComponent } from "./../components/chatheader.js";
import { chatInputComponent } from "../components/chatinput.js";
export const Groupal = () => {
  const viewGroupal = document.createElement("section");
  viewGroupal.id = "view-groupal";

  const chatHeader = chatHeaderComponent();

  viewGroupal.appendChild(chatHeader);
  const chatBody = document.createElement("section");
  chatBody.classList.add("chat-body");
  viewGroupal.appendChild(chatBody);
  const chatInput = chatInputComponent();
  viewGroupal.appendChild(chatInput);

  return viewGroupal;
};
