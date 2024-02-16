export const Welcome = () => {
  const welcomeMain = document.createElement("main");
  welcomeMain.id = "welcomeMain";
  welcomeMain.innerHTML = `
 <section class="welcomeSection">
 <h1>ART PLACE</h1>
 <h2>GALERIA</h2>
 <div class=containerWelcome> 
 <h3>Se mas de tus obras favoritas y chatea con ellas</h3>
 </div>
 
</section>`;
  return welcomeMain;
}