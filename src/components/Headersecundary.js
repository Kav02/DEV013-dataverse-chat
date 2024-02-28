export const headersecundaryComponent = () => {
    const headerSecundary = document.createElement("header");
    headerSecundary.id = "headerSecundary";
  
    const logoHeader = document.createElement("img");
    logoHeader.id = "logoHeader";
    logoHeader.src = "./Imagenes/logo.png";
    // Crear un elemento de imagen
    const logoReturn = document.createElement("img");
    logoReturn.id = "logoReturn";
    logoReturn.src = "./Imagenes/return header.svg";
    headerSecundary.appendChild(logoReturn);
    headerSecundary.appendChild(logoHeader);

    headerSecundary.innerHTML += `
      ART PLACE`; /* += : para concatenar */
    // console.log(header);
    
    return headerSecundary;
  };
  