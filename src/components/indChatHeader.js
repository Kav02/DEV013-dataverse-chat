export const indChatHeaderComponent = () => {
  const indChatHeader = document.createElement("header");
  indChatHeader.classList.add("chat-header");
  const profile = document.createElement("img");
  profile.classList.add("smallLogo");
  profile.src = "./Imagenes/blank-profile-picture.svg";
  indChatHeader.appendChild(profile);
  const headerTitle = document.createElement("h1");
  headerTitle.id = "header-title";
  headerTitle.innerHTML = "Painting";
  indChatHeader.appendChild(headerTitle);
  const homeIcon = document.createElement("img");
  homeIcon.id = "home-icon";
  homeIcon.src = "./Imagenes/homeheader.svg";
  indChatHeader.appendChild(homeIcon);

  return indChatHeader;
};
