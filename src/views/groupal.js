export const Groupal = () => {
  const viewGroupal = document.createElement("section");
  viewGroupal.id = "view-groupal";
  //-------------------Header-----------------------------------
  const chatHeader = document.createElement("header");
  chatHeader.id = "chat-header";
  const logo = document.createElement("img");
  logo.id = "smallLogo";
  logo.src = "./Imagenes/Small-Logo.png";
  chatHeader.appendChild(logo);
  const headerTitle = document.createElement("h1");
  headerTitle.id = "header-title";
  headerTitle.innerHTML = "ART PLACE";
  chatHeader.appendChild(headerTitle);
  //--------------------- Fin del header-------------------
  const chatBody = document.createElement("section");
  chatBody.id = "chat-body";
  //--------------Footer-----
  const chatInput = document.createElement("section");
  chatInput.id = "chat-input";

  //------------Fin----------
  viewGroupal.append(chatHeader, chatBody);

  return viewGroupal;
};
