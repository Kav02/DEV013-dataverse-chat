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

const queryStringToObject = (queryString) => {
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
export const navigateTo = (pathname, props = {}) => {
  if (props.id) {
    const newURL = `${pathname}?id=${props.id}`;

    //console.log(newURL);
    //Parámetros de pushState: state, title, URL. El estado se pasa vacío porque no interesa asociarlo a nada.
    window.history.pushState({}, "", newURL);
  } else {
    window.history.pushState({}, "", pathname);
  }
  // render the view with the pathname and props
  renderView(pathname, props);
};

export const onURLChange = (location) => {
  // Renderizar la vista con el pathname y los parámetros de búsqueda
  renderView(location.pathname);
};
