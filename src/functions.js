export const renderItems = (data) => {
  const artCard = document.createElement("ul"); //itemscope se utiliza para especificar que el elemento y sus hijos contienen información sobre un solo ítem.
  artCard.setAttribute("itemscope", "");

  data.forEach((painting) => {
    const listItem = document.createElement("section");

    /* ` se utiliza para delimitar las plantillas de cadena, y ${}` se utiliza para insertar expresiones en esas plantillas de cadena.
    dt: description term y dd: description details. El dt está vacio porque no queremos mostrar el nombre de la caracteristica solo el dato*/
    listItem.innerHTML += `<li class="cardHome" id="${painting.id}" itemscope itemtype="painting">
    <dl id="cardContainer" class="cardContainer">
    <img itemprop="image" src="${painting.imageUrl}" alt="${painting.name}"></dd>
          <dt class="contenedor1"></dt><dd itemprop="name">${painting.name}</dd>
          <dt class="contenedor1"></dt><dd itemprop="artistName">${painting.facts.artistName}</dd>
          <dt class="contenedor1"></dt><dd itemprop="artMovement">${painting.facts.artMovement}</dd>
          <dt class="contenedor1"></dt><dd itemprop="creationYear">${painting.facts.creationYear}</dd>
          <dt class="contenedor1"></dt><dd itemprop="shortDescription">${painting.shortDescription}</dd>
        </dl>
        </li>`;
    artCard.appendChild(listItem); //Esta coloca todos los valores en la tarjeta
  });
  return artCard;
};
export const renderCards = (data) => {
  const longCard = document.createElement("ul");
  longCard.id = "tarjeta";
  longCard.setAttribute("itemscope", "");

  data.forEach((painting) => {
    const listCard = document.createElement("li");
    listCard.setAttribute("itemscope", "");
    listCard.setAttribute("itemtype", "");
    const dlElement = document.createElement("dl");
    dlElement.id = "ContenedorDetails";

    // Crear un div para agrupar elementos (excepto la imagen)
    const divContent = document.createElement("div");
    divContent.id = "textDetails"; // Agrega el id al div

    // Crear un div para la imagen
    const divImage = document.createElement("div");
    divImage.id = "imagenDetails"; // Agrega el id al div de la imagen

    // Crear la imagen y agregarla al divImage
    const imageElement = document.createElement("img");

    imageElement.setAttribute("itemprop", "imageDetails");
    imageElement.src = painting.imageUrl;
    imageElement.alt = painting.name;
    imageElement.id = "imageElementCard";

    // Agregar la imagen al divImage
    divImage.appendChild(imageElement);

    // Agregar divImage al dl antes que el divContent
    dlElement.appendChild(divImage);

    // Contenido del div (excluyendo la imagen)
    divContent.innerHTML = `
      <dt></dt><dd itemprop="nameDetails">${painting.name}</dd>
      <dt></dt><dd itemprop="artistNameDetails" class="contenedor2">Artista: ${painting.facts.artistName}</dd>
      <dt></dt><dd itemprop="artMovementDetails" class="contenedor2">Corriente: ${painting.facts.artMovement}</dd>
      <dt></dt><dd itemprop="creationYearDetails" class="contenedor2">Año: ${painting.facts.creationYear}</dd>
      <dt></dt><dd itemprop="descriptionDetails">${painting.description}</dd>
      <dt></dt><dd itemprop="styleDetails" class="contenedor3">Estilo: ${painting.additionalInformation.style}</dd>
      <dt></dt><dd itemprop="techniqueDetails" class="contenedor3">Técnica: ${painting.additionalInformation.technique}</dd>
      <button data-target = "viewIndividual" class="cardButtonChat">Ir a chat  
      <img id="iconbuttoncard"src="./Imagenes/iconbuttoncard.svg"/>
      </button>
      
    `;

    // Agregar el div al dl después de divImage
    dlElement.appendChild(divContent);
    // Agregar listCard al contenedor principal
    longCard.appendChild(dlElement);
  });

  return longCard;
};

//Generar la tarjeta con estadística
export const renderStats = (percentages) => {
  for (const artMovement in percentages) {
    const listMove = document.createElement("li");
    listMove.textContent = `${artMovement}: ${percentages[artMovement]}`;
  }
};

//Generar el chat grupal
export const renderChatParticipants = (data) => {
  const participantElement = document.createElement("section");
  data.forEach((participant) => {
    const contParticipants = document.createElement("article");
    contParticipants.id = "contParticipants";
    const participantImg = document.createElement("img");
    participantImg.src = participant.imageUrl;
    participantImg.alt = participant.name;
    participantImg.id = "participant-image";
    const participantName = document.createElement("div");
    participantName.id = "participant-name";
    participantName.innerHTML = `${participant.name}`;
    contParticipants.append(participantImg, participantName);
    participantElement.appendChild(contParticipants);
  });

  return participantElement;
};

// export const renderChatMessage = (data) => {
//   const participantList = [];
//   for (const artwork of data) {
//     const paintingName = artwork.name;
//     participantList.push(paintingName); //Push para agregar en el array
//   }
//   console.log(participantList);
//   return participantList;
// };
