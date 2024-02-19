export const chatInputComponent = () => {
  const chatContainer = document.createElement("section");
  chatContainer.id = "chat-container";
  const chatInput = document.createElement("input");
  chatInput.setAttribute = ("type", "text");
  chatInput.id = "chat-input";
  const arrow = document.createElement("img");
  arrow.id = "arrow";
  arrow.src = "./../Imagenes/right.png";
  chatContainer.append(chatInput);
  chatContainer.appendChild(arrow);
  return chatContainer;
};
