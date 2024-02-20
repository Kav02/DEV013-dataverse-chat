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

//COMO PONER LA INFO EN LOCAL STORAGE
// Obtener el formulario dentro del contenido dinámico
// const formulario = contentApi.querySelector('#containerApi');

// // Manejar el evento de envío del formulario
// formulario.addEventListener('submit', function (event) {
//     // Evitar que el formulario se envíe normalmente (recargando la página)
//     event.preventDefault();

//     // Obtener los valores del formulario
//     const nombre = formulario.querySelector('[name="nombre"]').value;
//     const apiKey = formulario.querySelector('[name="apikey"]').value;

//     // Almacenar los valores en el Local Storage
//     localStorage.setItem('nombre', nombre);
//     localStorage.setItem('apiKey', apiKey);

//     // Puedes mostrar un mensaje de confirmación o realizar otras acciones aquí
//     alert('Datos guardados');
// });

// // Agregar el contenido dinámico al documento (por ejemplo, al body)
// document.body.appendChild(contentApi);
