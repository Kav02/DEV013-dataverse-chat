export const chatInputComponent = () => {
  const chatInputContainer = document.createElement("section");
  chatInputContainer.id = "chat-input-container";
  const chatInput = document.createElement("input");
  chatInput.setAttribute = ("type", "text");
  chatInput.id = "chat-input";
  const arrow = document.createElement("img");
  arrow.id = "arrow";
  arrow.src = "./../Imagenes/right.png";
  chatInputContainer.append(chatInput);
  chatInputContainer.appendChild(arrow);
  return chatInputContainer;
};
