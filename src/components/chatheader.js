import { navigateTo } from "../router.js";
export const chatHeaderComponent = () => {
  const chatHeader = document.createElement("header");
  chatHeader.classList.add("chat-header");
  chatHeader.innerHTML = `
  <section class="chat-user">
  <img class="smallLogo">
  <h1 id="header-title"></h1>`;

  const menuOptions =document.createElement("section");
  menuOptions.classList.add("chat-home");
  menuOptions.id = "menu-options";
  const buttonInicio=document.createElement("button");
  buttonInicio.classList.add("chat-menu-options");
  buttonInicio.id="home-title";
  buttonInicio.innerHTML=`Inicio`;
  buttonInicio.addEventListener("click", () => navigateTo("/home"));
  const imgInicio=document.createElement("img");
  imgInicio.id = "home-icon";
  imgInicio.src="./Imagenes/homeheader.svg";
  buttonInicio.appendChild(imgInicio);
  menuOptions.appendChild(buttonInicio);
  chatHeader.appendChild(menuOptions);


  return chatHeader;
};
