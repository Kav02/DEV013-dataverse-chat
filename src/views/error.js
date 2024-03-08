import { headerSecondaryComponent } from "./../components/Headersecundary.js";
import { navigateTo } from "../router.js";
export const Error = () => {
  const viewError = document.createElement("section");
  viewError.id = "viewError";

  const headerError = headerSecondaryComponent();
  const contentError = document.createElement("section");
  contentError.id = "contentError";

  contentError.innerHTML = `
<h1 class=titleError> Error </h1>
<br>
<p class=textError> Página no encontrada </p>
<button class="buttonReturn"> Ir a inicio </button>`;

  const buttonReturn = contentError.querySelector(".buttonReturn")
  buttonReturn.addEventListener("click", () => navigateTo("/home")
  );

  // const menuinfError=  Menuinfcomponent();
  // viewError.appendChild(menuinfError);

  viewError.append(headerError, contentError);
  return viewError;
};

// export const error = () => {
//   const viewError =  document.createElement("section")
//   const header = document.createElement("h1"); /*despues se cambia por el header de home*/
//   header.innerHTML = "ART PLACE";

//   const sectionMenu = document.createElement("article");
//   sectionMenu.innerHTML =`
//   <span class="material-symbols-outlined-key">
//   vpn_key </span>
//   <span class="material-symbols-outlined-home">
//   home </span>
//   <span class="material-symbols-outlined-chat">
//   groups </span>
//   `;
//   viewError.append(header,sectionMenu);
// };
