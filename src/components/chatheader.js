export const chatHeaderComponent = () => {
  const chatHeader = document.createElement("header");
  chatHeader.classList.add("chat-header");
  chatHeader.innerHTML = `<section class="chat-user">
  <img class="smallLogo" src="./Imagenes/Small-Logo.png" alt="Art Place Logo">
  <h1 id="header-title">ART PLACE</h1></section>
  <section class= "chat-home"><button class="chat-menu-options">Inicio<img class="home-icon" src = "./Imagenes/homeheader.svg" alt="Inicio"></button></section> `;

  return chatHeader;
};
