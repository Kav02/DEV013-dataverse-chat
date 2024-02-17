import { chatHeaderComponent } from "./../components/chatheader.js";

export const Groupal = () => {
  const viewGroupal = document.createElement("section");
  viewGroupal.id = "view-groupal";

  const chatHeader = chatHeaderComponent();
  viewGroupal.appendChild(chatHeader);

  const chatBody = document.createElement("section");
  chatBody.id = "chat-body";
  //--------------Input-----
  const chatInput = document.createElement("section");
  chatInput.id = "chat-input";

  //------------Fin----------
  viewGroupal.append(chatBody, chatInput);

  return viewGroupal;
};
