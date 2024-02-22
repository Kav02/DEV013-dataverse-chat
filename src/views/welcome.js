import { navigateTo } from "../router.js";

export const Welcome = () => {
  const viewWelcome = document.createElement("main");
  viewWelcome.id = "welcomeMain";
  viewWelcome.innerHTML = `
 <section class="welcomeSection">
 <h1>ART PLACE</h1>
 <h2 class="galeriaWelcome">GALERIA</h2>
 <div class="containerWelcome"> 
 <h3>Se mas de tus obras favoritas y chatea con ellas</h3>
 </div>
</section>
<button id="buttoncontinuar"> Continuar 
<span>
<img id="iconocontinuar"src="./Imagenes/icono-continuar.svg">
</span>
</button>
`;
  const buttoncontinuar = viewWelcome.querySelector("#buttoncontinuar");
  buttoncontinuar.addEventListener("click", () => navigateTo("/home"));
  return viewWelcome;
};
