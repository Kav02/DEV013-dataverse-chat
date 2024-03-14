let ROUTES = {}; //Almacena la información sobre las rutas
let rootElement = ""; //Referencia el root donde se renderizan las vistas. Elemento DOM

export const setRootElement = (newRootElementValue) => {
  //Una función para establecer el elemento raíz del router.
  rootElement = newRootElementValue;
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
  const queryString = location.search;
  // Convertir la cadena de consulta a un objeto
  const urlParams = queryStringToObject(queryString);
  // Combinar los parámetros de consulta con las propiedades existentes
  const combinedProps = { ...props, ...urlParams };

  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](combinedProps);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES["/error"]());
  }
};

export const queryStringToObject = (queryString) => {
  // Convertir la cadena de consulta a URLSearchParams
  const urlParams = new URLSearchParams(queryString);
  // Convertir URLSearchParams a un objeto
  const queryParams = {};
  for (const [key, value] of urlParams) {
    queryParams[key] = value;
  }
  // Devolver el objeto
  return queryParams;
};
// Función para capitalizar la primera letra de una cadena
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Función para quitar el '/' al principio de una cadena
function removeLeadingSlash(string) {
  return string.startsWith("/") ? string.substring(1) : string;
}
export const navigateTo = (pathname, props = {}) => {
  if (props.id) {
    const newURL = `${pathname}?id=${props.id}`;

    //Parámetros de pushState: state, title, URL. El estado se pasa vacío porque no interesa asociarlo a nada.
    window.history.pushState({}, "", newURL);
  } else {
    window.history.pushState({}, "", pathname);
  }
  const cleanPathname = capitalizeFirstLetter(removeLeadingSlash(pathname));
  document.title = `Art Place ${cleanPathname}`;
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (pathname) => {
  // Renderizar la vista con el pathname y los parámetros de búsqueda
  // console.log(location);
  const urlSearch = window.location.search;
  const newProps = queryStringToObject(urlSearch);
  //const newUrlSearch = `${location}${urlSearch}`;
  //window.history.pushState({}, "", newUrlSearch);
  renderView(pathname, newProps);
};
