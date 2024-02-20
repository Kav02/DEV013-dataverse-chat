export const Individual = () => {
  const viewIndividual = document.createElement("section");
  viewIndividual.id = "viewIndividual";
  //-------------------Header-----------------------------------
  const chatHeader = document.createElement("header");
  chatHeader.id = "chatHeader";
  const logo = document.createElement("img");
  logo.id = "smallLogo";
  logo.src = "./Imagenes/Small-Logo.png";
  chatHeader.appendChild(logo);
  chatHeader.innerHTML += "ART PLACE"; /* += : para concatenar */
  //--------------------- Fin del header-------------------

  viewIndividual.append(chatHeader);

  console.log(chatHeader);
  return viewIndividual;
};
