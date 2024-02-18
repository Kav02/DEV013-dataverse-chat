import { headerComponent } from "../components/Header.js";
import { Menuinfcomponent } from "../components/Menuinferior.js";

export const Apiregister = () => {
  const viewapiRegister = document.createElement("section");
  viewapiRegister.id = "viewapiRegister";
 
  const headerError=  headerComponent();
  const menuinfError=  Menuinfcomponent();
  viewapiRegister.append(headerError,menuinfError);

  const contentApi = document.createElement("section");
  contentApi.id = "contentApi"

  contentApi.innerHTML=`
  <form method="post" id="containerApi">
  <label for="nombre" class="text nombre">Nombre</label>
  <input type="text" class="input inputnombre" name="nombre" required>
  <label for="apikey" class="text apikey">Api Key</label>
  <input type="tel" class="input inputapikey" name="apikey" required>
  <input type="submit" value="Guardar" class="Guardar">
</form>
`;
  /*method="post" : se usa para que no se registre los datos puestos en la url */

  viewapiRegister.append(contentApi);
  return viewapiRegister ;
};

//   contentApi.innerHTML = 
// <article class="conteinerApi"> 
// <form id="registroApi">
//   <label for="nombre">Nombre</label>
//   <input type="text" id="nombre" name="nombre" required>
//   <br>
//   <label for="telefono">Api Key</label>
//   <input type="tel" id="apikey" name="apikey" required>
//   <br>
//   <input type="submit" value="Guardar">
// </form>
// </article>
// `;

