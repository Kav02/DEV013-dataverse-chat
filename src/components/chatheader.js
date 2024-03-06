export const chatHeaderComponent = () => {
  const chatHeader = document.createElement("header");
  chatHeader.classList.add("chat-header");
  chatHeader.innerHTML = `<section class="chat-user">
  <img class="smallLogo" src="./Imagenes/Small-Logo.png" alt="Art Place Logo">
  <h1 id="header-title">ART PLACE</h1></section>
  <section class= "chat-home"><button class="chat-menu-options">Inicio<img class="home-icon" src = "./Imagenes/homeheader.svg" alt="Inicio"></button></section> `;

  // const menuOptions = document.createElement("section");
  // menuOptions.id = "menu-options";
  // const homeTitle = document.createElement("button");
  // homeTitle.classList.add("chat-menu-options");
  // homeTitle.id = "home-title";
  // homeTitle.innerHTML = "Inicio";
  // const homeIcon = document.createElement("img");
  // homeIcon.id = "home-icon";
  // homeIcon.src = "./../Imagenes/homeheader.svg";
  // homeTitle.appendChild(homeIcon);
  // menuOptions.appendChild(homeTitle);

  // const logo = document.createElement("img");
  // logo.classList.add("smallLogo");
  // logo.src = "./Imagenes/Small-Logo.png";
  // chatHeader.appendChild(logo);
  // const headerTitle = document.createElement("h1");
  // headerTitle.id = "header-title";
  // headerTitle.innerHTML = "ART PLACE";
  // chatHeader.appendChild(headerTitle);

  // const homeIcon = document.createElement("img");
  // homeIcon.id = "home-icon";
  // homeIcon.src = "./Imagenes/homeheader.svg";
  // chatHeader.appendChild(homeIcon);

  return chatHeader;
};
