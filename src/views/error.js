import { headerComponent } from "../components/Header.js";

export const Error = () => {
  const viewError = document.createElement("section");
  viewError.id = "viewError";

  const headerError = headerComponent();
  viewError.appendChild(headerError);

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
