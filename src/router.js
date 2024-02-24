let ROUTES = {}; //Almacena la información sobre las rutas
let rootElement = ""; //Referencia el root donde se renderizan las vistas. Elemento DOM

export const setRootElement = (newRootElementValue) => {
  //Una función para establecer el elemento raíz del router.
  rootElement = newRootElementValue;
  //validar si es un objeto html
  //validar que exista
};

//Esta función asigna el valor del parámetro routes al objeto ROUTES
export const setRoutes = (newRoutesValue) => {
  // verifica que routes sea un objeto
  // verifica que haya manejo de error
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue["/error"]) {
      // asigna ROUTES
      ROUTES = newRoutesValue;
    }
  }
};

const renderView = (pathname, props = {}) => {
  //en este caso props es un nombre convencional para referirse a los datos adicionales en este caso la función relacionada a la vista
  //Renderiza una vista root especificado. Parametros: pathname que es el parte de window.location y props: Home, Error, etc.
  // Limpiar root
  const root = rootElement;
  root.innerHTML = "";
  // buscar en ROUTES el view para ese path
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/error"]());
  }
};

export const navigateTo = (pathname, props = {}) => {
  const URLvisited = pathname;
  //Parámetros de pushState: state, title, URL. El estado se pasa vacío porque no interesa asociarlo a nada.
  window.history.pushState({}, "", URLvisited);
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(location); // En este caso no estamos pasando los dos parámetros a la función. Por eso al definir renderView se define props de una vez como un elemento vacío.
};

// const queryStringToObject = (queryString) => {

// // convert query string to URLSearchParams
// // convert URLSearchParams to an object
// // return the object
// };

// const pageView = new View(props);
//   // render the correct view passing the value of props
//   const viewContent = pageView.render();
//   // add the view element to the DOM root element
//   rootElement.appendChild(viewContent);
