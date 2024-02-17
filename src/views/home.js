//import { filterData } from "./../lib/dataFunctions.js";
import { renderItems, openMenu } from "../functions.js";
import data from "../data/dataset.js";

export const Home = () => {
  const viewHome = document.createElement("section");
  viewHome.id = "viewHome";
  //Pendiente Crear el header
  const banner = document.createElement("div");
  banner.id = "banner";
  const galery = document.createElement("h2");
  galery.textContent = "GALERIA";
  banner.appendChild(galery);
  //Crea la lista de artistas
  const artistList = []; //Crear array vacio
  for (const artwork of data) {
    const artistName = artwork.facts.artistName;
    if (!artistList.includes(artistName)) {
      //Incluye solo los nombres diferentes
      artistList.push(artistName); //Push para agregar en el array
    }
  }
  artistList.sort();

  //Crea la lista de Corrientes
  const movementList = []; //Crear array vacio
  for (const artwork of data) {
    const movement = artwork.facts.artMovement;
    if (!movementList.includes(movement)) {
      //Incluye solo las corrientes diferentes
      movementList.push(movement); //Push para agregar en el array
    }
  }
  movementList.sort();

  //Crear el menu de filtrado
  const article = document.createElement("article");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  const barMenu = document.createElement("div");
  barMenu.classList.add("bar-menu");
  const selectMenu = document.createElement("div");
  selectMenu.classList.add("select-menu");
  const buttonMenu = document.createElement("button");
  buttonMenu.id = "button-menu";
  const iconMenu = document.createElement("span");
  iconMenu.classList.add("material-symbols-outlined");
  iconMenu.textContent = "Menu";

  buttonMenu.appendChild(iconMenu);
  buttonMenu.appendChild(selectMenu);
  menuContainer.appendChild(buttonMenu);

  selectMenu.innerHTML = `
          <label for="artist-filter">Artista</label>
          <select data-testid="select-filter" name="artist-filter" id="artist-filter">
          <option disabled selected>Artistas</option>
          ${artistList
            .map((artist) => `<option value="${artist}">${artist}</option>`)
            .join("")}
          </select>
          <label for="artmovement-filter">Corrientes</label>
          <select data-testid="select-filter" id="artmovement-filter" name="artmovement-filter">
          <option disabled selected>Corrientes</option>
          ${movementList
            .map((move) => `<option value="${move}">${move}</option>`)
            .join("")}
           </select>
           <label for="alphabetical-order">Ordenar</label>
           <select data-testid="select-sort" id="alphabetical-order" name="alphabetical-order">
             <option value="Ordenar" disabled selected>Ordenar</option>
             <option value="asc">A - Z</option>
             <option value="desc">Z - A</option>
           </select>`;

  buttonMenu.appendChild(selectMenu);

  menuContainer.appendChild(barMenu);
  menuContainer.appendChild(buttonMenu);
  article.appendChild(menuContainer);

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");
  buttons.innerHTML = `
    <button data-testid="button-stats" id="button-stats">
     <span class="material-symbols-outlined">
         bar_chart
       </span>
     </button>
     <button data-testid="button-clear" id="button-clear">Limpiar
     </button>`;
  article.appendChild(buttons);

  const menuButton = document.getElementById("button-menu");
  console.log(menuButton);
  if (menuButton) {
    document.getElementById("button-menu").addEventListener("click", openMenu);
  }
  console.log(document.getElementById("button-menu"));
  // Genera las tarjetas a partir de renderItems
  const artWorkList = document.createElement("section");
  artWorkList.id = "cardBody";
  //let currentData = [...data];
  const shortCards = renderItems(data); // Agrega las tarjetas al elemento artWorkList
  artWorkList.appendChild(shortCards);

  banner.appendChild(article);
  viewHome.append(banner, artWorkList);
  return viewHome;
};

//Función de filtrar
//Por artista
// document
//   .querySelector("#artist-filter")
//   .addEventListener("change", function (event) {
//     const artistDisplay = event.target.value;
//     document.querySelector("artmovement-filter").value = "Corrientes";
//     document.querySelector("alphabetical-order").value = "Ordenar";
//     const artistCards = filterData(data, "artistName", artistDisplay);
//     //currentData = [...artistCards];
//     const filteredCards = renderItems(artistCards);
//     const clearScreen = document.querySelector("mainContainer");
//     clearScreen.innerHTML = "";
//     clearScreen.appendChild(filteredCards);
//   });
//   //Por movimiento
//   document
//     .querySelector("#artmovement-filter")
//     .addEventListener("change", function (event) {
//       const movementDisplay = event.target.value;
//       document.getElementById("artist-filter").value = "Artistas"; //Resetear filtro artistas
//       document.getElementById("alphabetical-order").value = "Ordenar";
//       // Filtrar y mostrar las tarjetas correspondientes
//       const filterMovement = filterData(data, "artMovement", movementDisplay);
//       currentData = [...filterMovement];
//       const filteredCards = renderItems(filterMovement);
//       const movementSelected = document.getElementById("cardContainer");
//       movementSelected.innerHTML = ""; // .innerHTML = "" :se limpia el contenedor antes de agregar nuevas tarjetas
//       movementSelected.appendChild(filteredCards); // Agregar las tarjetas filtradas al contenedor
//     });
//   return artWorkList;
// };
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
