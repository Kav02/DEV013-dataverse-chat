
export const Menuinfcomponent = () => {
  const articleMenu = document.createElement("article");
  articleMenu.id = "articleMenu";
  articleMenu.innerHTML = `
  <span class="material-symbols-outlined" id="icon-home">
  home </span>
  <span class="material-symbols-outlined" id="icon-chat">
  groups </span>
  `;
  return articleMenu;
};