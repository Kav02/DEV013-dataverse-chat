import { headerComponent } from "../components/Header.js";
import { navigateTo } from "../router.js";
import { setApiKey } from "./../lib/apiKey.js";

export const Apiregister = () => {
  const viewapiRegister = document.createElement("section");
  viewapiRegister.id = "viewapiRegister";

  const headerError = headerComponent();
  viewapiRegister.append(headerError);

  const contentApi = document.createElement("section");
  contentApi.id = "contentApi";

  contentApi.innerHTML = `
  <form  id="containerApi">
  <label for="nombre" class="text nombre">Nombre</label>
  <input type="text" class="input inputnombre" id="nombre" required>
  <label for="apikey" class="text apikey">Api Key</label>
  <input type="text" class="input inputapikey" id="textapikey" required>
  <button class="Guardar" id="Guardar"> Guardar</button>
</form>
`;

  /*method="post" : se usa para que no se registre los datos puestos en la url */

  viewapiRegister.append(contentApi);

  const apiKey = viewapiRegister.querySelector("#textapikey");
  const buttonGuardar = viewapiRegister.querySelector("#Guardar");
  buttonGuardar.addEventListener("click", function () {
    const apiKeyValue = apiKey.value;
    setApiKey(apiKeyValue);
  });

  return viewapiRegister;
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
