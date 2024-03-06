export const headerSecondaryComponent = () => {
  const headerSecondary = document.createElement("header");
  headerSecondary.id = "headerSecondary";

  const logoHeader = document.createElement("img");
  logoHeader.id = "logoHeader";
  logoHeader.src = "./Imagenes/logo.png";
  // Crear un elemento de imagen

  headerSecondary.appendChild(logoHeader);

  headerSecondary.innerHTML += `
      ART PLACE`; /* += : para concatenar */
  // console.log(header);

  return headerSecondary;
};
