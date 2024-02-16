export const Error = () => {
  const viewError = document.createElement("section");
  viewError.id = "viewError";

  const header = document.createElement("section");
  header.id = "sectionHeader";

  // Crear un elemento de imagen
  const logoHeader = document.createElement("img");
  logoHeader.id = "logoHeader";
  logoHeader.src = "./Imagenes/logo.png";
  // logoHeader.alt = "logo de la pagina";

  header.appendChild(logoHeader);

  header.innerHTML += "ART PLACE"; /* += : para concatenar */

  const contentError = document.createElement("section");
  contentError.id = "contentError";

  contentError.innerHTML = `
<h1 class=titleError> Error </h1>
<br>
<p class=textError> Pagina no encontrada </p>`;

  // const imgBackground = document.createElement("img");
  // imgBackground.src = "./Imagenes/BackgroundError.jpg";
  // // logoHeader.alt = "logo de la pagina";
  // contentError.appendChild(imgBackground);

  const articleMenu = document.createElement("article");
  articleMenu.id = "articleMenu";
  articleMenu.innerHTML = `
  <span class="material-symbols-outlined" id="icon-key">
  vpn_key </span>
  <span class="material-symbols-outlined" id="icon-home">
  home </span>
  <span class="material-symbols-outlined" id="icon-chat">
  groups </span>
  `;
  viewError.append(header, contentError, articleMenu);

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
