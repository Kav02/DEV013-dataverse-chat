export const headerComponent = () => {
  const header = document.createElement("header");
  header.id = "header";

  // Crear un elemento de imagen
  const logoHeader = document.createElement("img");
  logoHeader.classList.add("logoHeader");
  logoHeader.id = "logoHeader";

  logoHeader.src = "./../Imagenes/logo.png";

  header.appendChild(logoHeader);

  header.innerHTML += `
    ART PLACE`; /* += : para concatenar */
  // console.log(header);
  return header;
};
