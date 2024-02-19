export const chatHeaderComponent = () => {
  const chatHeader = document.createElement("header");
  chatHeader.classList.add("chat-header");
  const logo = document.createElement("img");
  logo.classList.add("smallLogo");
  logo.src = "./Imagenes/Small-Logo.png";
  chatHeader.appendChild(logo);
  const headerTitle = document.createElement("h1");
  headerTitle.id = "header-title";
  headerTitle.innerHTML = "ART PLACE";
  chatHeader.appendChild(headerTitle);
  const homeIcon = document.createElement("img");
  homeIcon.id = "home-icon";
  homeIcon.src = "./Imagenes/homeheader.svg";
  chatHeader.appendChild(homeIcon);

  return chatHeader;
};
