import { headerComponent } from "../components/Header.js";

export const Error = () => {
  const viewError = document.createElement("section");
  viewError.id = "viewError";

  const sectionError = headerComponent();
  viewError.appendChild(sectionError);

  const contentError = document.createElement("section");
  contentError.id = "contentError";

  contentError.innerHTML = `
<h1 class=titleError> Error </h1>
<br>
<p class=textEror> Pagina no encontrada </p>`;

  const articleMenu = document.createElement("article");
  articleMenu.id = "articleMenu";
  articleMenu.innerHTML = `
  <span class="material-symbols-outlined" id="icon-home">
  home </span>
  <span class="material-symbols-outlined" id="icon-chat">
  groups </span>
  `;
  viewError.append(contentError, articleMenu);
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
