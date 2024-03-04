export const chatInputComponent = () => {
  const chatInputContainer = document.createElement("section");
  chatInputContainer.id = "chat-input-container";
  const chatInput = document.createElement("input");
  chatInput.setAttribute = ("type", "text");
  chatInput.id = "chat-input";
  const sendButton = document.createElement("button");
  sendButton.id = "send-button";
  const arrow = document.createElement("img");
  arrow.id = "arrow";
  arrow.src = "./../Imagenes/right.png";
  sendButton.appendChild(arrow);
  chatInputContainer.append(chatInput);
  chatInputContainer.appendChild(sendButton);
  return chatInputContainer;
};
