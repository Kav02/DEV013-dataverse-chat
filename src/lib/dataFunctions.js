import data from "./data/dataset.js";

const artistList = []; //Crear array vacio
for (const artwork of data) {
  const artistName = artwork.facts.artistName;
  if (!artistList.includes(artistName)) {
    //Incluye solo los nombres diferentes
    artistList.push(artistName); //Push para agregar en el array
    artistList.sort();
  }
}

//Incluir lista en las opciones de filtrado
const artistOptions = artistList.map(
  //Una vez obtenidos los nombres de los artistas con map se rellenan las opciones
  (artist) => `<option value="${artist}">${artist}</option>` //Crea cada opcion
);
const artistSelect = document.querySelector("#artist-filter"); //Inserta las opciones en el html
artistSelect.innerHTML = `
  <option disabled selected>Artistas</option>
  ${artistOptions.join("")}`;

//Crea la lista de Corrientes
const movementList = []; //Crear array vacio
for (const artwork of data) {
  const movement = artwork.facts.artMovement;
  if (!movementList.includes(movement)) {
    //Incluye solo las corrientes diferentes
    movementList.push(movement); //Push para agregar en el array
    movementList.sort();
  }
}
// Incluir lista en las opciones de filtrado
const movementOptions = movementList.map(
  (move) => `<option value="${move}">${move}</option>`
);
const movementSelect = document.querySelector("#artmovement-filter");
movementSelect.innerHTML = `<option disabled selected>Corrientes</option>
${movementOptions.join("")}`;

// Filtar
export const filterData = (data, filterBy, value) => {
  return data.filter((painting) => painting.facts[filterBy] === value);
};
  
export const sortData = (data, sortBy, sortOrder) => {
  const sortedCard = [];
  for (const list of data) {
    sortedCard.push(list);
  }
  if (sortOrder === "asc") {
    sortedCard.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else {
    sortOrder === "desc";
    sortedCard.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
  
  return sortedCard;
  
};

export const computeStats = (data) => {
  const movementTotal=data.length;
  const stats= data.reduce((acumulador,movementCount)=>{
    acumulador[movementCount.facts.artMovement]=(acumulador[movementCount.facts.artMovement]||0)+1;
    return acumulador;
  },
  {});
  const percentage = {};
  for (const Move in stats) {
    percentage[Move] = Number((stats[Move] / movementTotal) * 100);
  }
  return percentage;
};




















/*No se está usando
const artName = [];
for (const list of data) {
  const artworkName = list.name;
  artName.push(artworkName);
  artName.sort();
}
console.log(artName);*/
