export const headersecundaryComponent = () => {
    const headerSecundary = document.createElement("header");
    headerSecundary.id = "headerSecundary";
  
    // Crear un elemento de imagen
    const logoHeader = document.createElement("img");
    logoHeader.id = "logoHeader";
    logoHeader.src = "./Imagenes/logo.png";
  
    headerSecundary.appendChild(logoHeader);
  
    headerSecundary.innerHTML += `
      ART PLACE`; /* += : para concatenar */
    // console.log(header);
    headerSecundary.innerHTML += `<span class="material-symbols-outlined" id="icon-home">
    home </span>`
    
    return headerSecundary;
  };
  