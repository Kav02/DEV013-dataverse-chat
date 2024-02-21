import {
  setRoutes,
  navigateTo,
  setRootElement,
  onURLChange,
} from "./router.js";
import { Home } from "./views/home.js";
import { Error } from "./views/error.js";
import { Welcome } from "./views/welcome.js";
import { Card } from "./views/card.js";
import { Apiregister } from "./views/apiregister.js";
import { Individual } from "./views/individual.js";
import { Groupal } from "./views/groupal.js";

///1.- Definir rutas en router.
const routes = {
  "/welcome": Welcome,
  "/error": Error,
  "/home": Home,
  "/card": Card,
  "/individual": Individual,
  "/groupal": Groupal,
  //   "/chatkey": Chat_key,
};

//2.- Pasar "root element" a router.
const root = document.getElementById("root");
setRootElement(root);
setRoutes(routes);

//3.- Invocar el router para renderizar la vista correcta.
document.addEventListener("DOMContentLoaded", (event) => {
  onURLChange(event.target.location.pathname);
});

//Carga inicial
window.addEventListener("DOMContentLoaded", () => {
  // Establecer el elemento root
  const root = document.getElementById("root");
  setRootElement(root);
  //Accesar la url inicial
  const pathname = window.location.pathname;
  //Navegacion inicial
  navigateTo(pathname); // Use your router's navigation function
  // invocar onURLChange
  window.addEventListener("popstate", (event) => {
    onURLChange(event.location);
  });
});
