/*import { filterData, sortData, computeStats } from "./../lib/dataFunctions.js";*/
import { renderItems } from "./../lib/view.js";
import data from "./../data/dataset.js";

export const Home = () => {
  // Genera las tarjetas a partir de renderItems
  const artWorkList = document.createElement("main");
  artWorkList.id = "mainCointainer";
  // let currentData = [...data];
  const shortCards = renderItems(data); // Agrega las tarjetas al elemento artWorkList
  artWorkList.appendChild(shortCards);
  return artWorkList;
};
// //Crea la lista de artistas
// const artistList = []; //Crear array vacio
// for (const artwork of data) {
//   const artistName = artwork.facts.artistName;
//   if (!artistList.includes(artistName)) {
//     //Incluye solo los nombres diferentes
//     artistList.push(artistName); //Push para agregar en el array
//     artistList.sort();
//   }
// }

// //Incluir lista en las opciones de filtrado
// const artistOptions = artistList.map(
//   //Una vez obtenidos los nombres de los artistas con map se rellenan las opciones
//   (artist) => `<option value="${artist}">${artist}</option>` //Crea cada opcion
// );
// const artistSelect = document.querySelector("#artist-filter"); //Inserta las opciones en el html
// artistSelect.innerHTML = `
//   <option disabled selected>Artistas</option>
//   ${artistOptions.join("")}`;

// //Crea la lista de Corrientes
// const movementList = []; //Crear array vacio
// for (const artwork of data) {
//   const movement = artwork.facts.artMovement;
//   if (!movementList.includes(movement)) {
//     //Incluye solo las corrientes diferentes
//     movementList.push(movement); //Push para agregar en el array
//     movementList.sort();
//   }
// }
// // Incluir lista en las opciones de filtrado
// const movementOptions = movementList.map(
//   (move) => `<option value="${move}">${move}</option>`
// );
// const movementSelect = document.getElementById("artmovement-filter");
// movementSelect.innerHTML = `<option disabled selected>Corrientes</option>
// ${movementOptions.join("")}`;

// //Función de filtrar
// //Por artista
// document
//   .querySelector("#artist-filter")
//   .addEventListener("change", function (event) {
//     const artistDisplay = event.target.value;
//     document.querySelector("artmovement-filter").value = "Corrientes";
//     document.querySelector("alphabetical-order").value = "Ordenar";
//     const artistCards = filterData(data, "artistName", artistDisplay);
//     currentData = [...artistCards];
//     const filteredCards = renderItems(artistCards);
//     const clearScreen = document.querySelector("cardContainer");
//     clearScreen.innerHTML = "";
//     clearScreen.appendChild(filteredCards);
//   });
// //Por movimiento
// movementSelect.addEventListener("change", function () {
//   document.getElementById("artist-filter").value = "Artistas"; //Resetear filtro artistas
//   document.getElementById("alphabetical-order").value = "Ordenar";
//   const selectedArtMovement = movementSelect.value; // Filtrar y mostrar las tarjetas correspondientes
//   const filterMovement = filterData(data, "artMovement", selectedArtMovement);
//   currentData = [...filterMovement];
//   const filteredCards = renderItems(filterMovement);
//   const cardContainerfilterMovement = document.getElementById("cardContainer");
//   cardContainerfilterMovement.innerHTML = ""; // .innerHTML = "" :se limpia el contenedor antes de agregar nuevas tarjetas
//   cardContainerfilterMovement.appendChild(filteredCards); // Agregar las tarjetas filtradas al contenedor
// });

// //Botón limpiar
// function clear_filters() {
//   const clearScreen = document.getElementById("cardContainer");
//   clearScreen.innerHTML = "";
//   clearScreen.appendChild(shortCards);
//   document.getElementById("artist-filter").value = "Artistas";
//   document.getElementById("artmovement-filter").value = "Corrientes";
//   document.getElementById("alphabetical-order").value = "Ordenar";
// }
// const buttonClear = document.querySelector('[data-testid="button-clear"]');
// buttonClear.addEventListener("click", clear_filters);

// //Ordenar alfabéticamente
// document
//   .querySelector("#alphabetical-order")
//   .addEventListener("change", function (event) {
//     const sortOrder = event.target.value;
//     const sortItems = sortData(currentData, "Ordenar", sortOrder);
//     const sortedCards = renderItems(sortItems);
//     const cardContainerSorted = document.getElementById("cardContainer");
//     cardContainerSorted.innerHTML = ""; // .innerHTML = "" :se limpia el contenedor antes de agregar nuevas tarjetas
//     cardContainerSorted.appendChild(sortedCards);
//   });

// //Estadística
// const dataStats = computeStats(data);
// const selectStats = document.getElementById("movementEstadistic");
// document.querySelector("#button-stats").addEventListener("click", function () {
//   if (selectStats.style.display === "flex") {
//     selectStats.style.display = "none";
//     // selectEstadistic.innerHTML = "";
//   } else {
//     selectStats.style.display = "flex";
//     const stats = document.getElementById("stats");
//     const graphs = document.getElementById("graphs");
//     if (stats.childElementCount === 0) {
//       Object.entries(dataStats).forEach(([key, value]) => {
//         const cardStats = document.createElement("div");
//         cardStats.id = "cardStats";
//         cardStats.innerHTML = `${key}: ${value} %`;

//         const graph = document.createElement("div");
//         graph.id = "graph";
//         graph.innerHTML = graphIcon(value);

//         stats.appendChild(cardStats);
//         graphs.appendChild(graph);
//       });
//     }
//   }
// });

// function graphIcon(count) {
//   let icon = "";
//   for (let i = 0; i < count; i++) {
//     icon += `<span class = "dots">■</span>`;
//   }
//   return icon;
// }
