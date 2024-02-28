export const bannerComponent = () => {
  const bannerGaleria = document.createElement("section");
  bannerGaleria.id = "bannerGaleria";

  bannerGaleria.innerHTML = `
    <h2 class="galeriabanner">GALERIA</h2>`;

  return bannerGaleria;
};
