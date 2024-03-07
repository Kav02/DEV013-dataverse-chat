import { setRoutes, setRootElement, onURLChange } from "./router.js";

import { Home } from "./views/home.js";
import { Error } from "./views/error.js";
import { Welcome } from "./views/welcome.js";
import { Card } from "./views/card.js";
import { apiRegister } from "./views/apiregister.js";
import { Individual } from "./views/individual.js";
import { Groupal } from "./views/groupal.js";

///1.- Definir rutas en router.
const routes = {
  "/": Welcome,
  "/error": Error,
  "/home": Home,
  "/card": Card,
  "/individual": Individual,
  "/groupal": Groupal,
  "/apiregister": apiRegister,
};

//Carga inicial
window.addEventListener("DOMContentLoaded", (e) => {
  // Establecer el elemento root
  const root = document.getElementById("root");
  setRootElement(root);
  setRoutes(routes);

  // invocar onURLChange
  onURLChange(e.currentTarget.location.pathname);
});
window.addEventListener("popstate", (event) => {
  onURLChange(event.currentTarget.location.pathname);
});
