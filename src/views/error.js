import {headerComponent} from "../components/Header.js";
import {Menuinfcomponent} from "../components/Menuinferior.js";


export const Error = () => {
  const viewError = document.createElement("section");
  viewError.id = "viewError";
 
  const headerError=  headerComponent();
  const menuinfError=  Menuinfcomponent();
  viewError.append(headerError,menuinfError);

  const contentError = document.createElement("section");
  contentError.id = "contentError"

  contentError.innerHTML=`
<h1 class=titleError> Error </h1>
<br>
<p class=textEror> Pagina no encontrada </p>`;

  // const menuinfError=  Menuinfcomponent();
  // viewError.appendChild(menuinfError);
  
  viewError.append(contentError);
  return viewError;
};





