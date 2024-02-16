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
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  if (typeof newRoutesValue === "object") {
    if (newRoutesValue['/error']) {
      // assign ROUTES
      ROUTES = newRoutesValue;
    }
  }
};

const renderView = (pathname, props = {}) => {
  //Renderiza una vista root especificado. Parametros: pathname que es el parte de window.location y props que es un objeto de datos que podemos pasar a la vista.
  // clear the root element
  const root = rootElement;
  rootElement.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/error"]());
  }
};
/* const pageView = new View(props);
  // render the correct view passing the value of props
  const viewContent = pageView.render();
  // add the view element to the DOM root element
  rootElement.appendChild(viewContent);*/

// in case not found render the error view

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  const URLvisited = window.location + pathname;
  history.pushState({}, "", URLvisited);
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(location); // En este caso no estamos pasando los dos parámetros a la función. Por eso al definir renderView se define props de una vez como un elemento vacío.
};


//const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
//};
