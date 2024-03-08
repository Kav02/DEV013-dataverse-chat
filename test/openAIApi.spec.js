// test/openAIApi.spec.js

import { communicateWithOpenAI } from "./../src/lib/openAIApi.js";
jest.mock("./../src/lib/openAIApi.js");
beforeEach(() => {
  communicateWithOpenAI.mockClear();
});
describe("communicateWithOpenAI", () => {
  test("deberia responder al mensaje", async () => {
    const selectedPainting = {
      id: "viva-la-vida",
      name: "Viva la Vida",
      shortDescription: "Composición surrealista con elementos simbólicos",
      description:
        "Viva la Vida es un cuadro significativo y reconocido como la última obra de Frida Kahlo. A pesar de enfrentar una salud deteriorada, el título de esta pintura rinde un emotivo homenaje a la vida. Las frutas y la forma en que están representadas despiertan una emotividad especial, destacando el color rojo de las sandías. La frase que la artista escribió añade una capa adicional de profundidad y significado a la obra, convirtiéndola en un testimonio conmovedor de la conexión entre el arte y la existencia, marcando así un hito importante en la carrera de Kahlo.",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/Kav02/DEV013-dataverse/src/Imagenes/Viva-la-Vida.jpg",
      relatedimageUrl: "https://i.ibb.co/cYFd3Qr/Viva-la-vida-IR.jpg",
      facts: {
        artistName: "Frida Kahlo",
        creationYear: 1954,
        artMovement: "Surrealismo",
      },
      additionalInformation: {
        style: "Realismo Mágico",
        technique: "Óleo sobre madera",
      },
    };
    communicateWithOpenAI.mockReturnValueOnce({ content: "4" });
    const prueba = await communicateWithOpenAI(
      "Cuanto es 2+2",
      selectedPainting
    );
    expect(prueba.content).toBe("4");
  });
  //Test error----------
  test("deberia enviar un error ", async () => {
    const selectedPainting = {
      id: "viva-la-vida",
      name: "Viva la Vida",
      shortDescription: "Composición surrealista con elementos simbólicos",
      description:
        "Viva la Vida es un cuadro significativo y reconocido como la última obra de Frida Kahlo. A pesar de enfrentar una salud deteriorada, el título de esta pintura rinde un emotivo homenaje a la vida. Las frutas y la forma en que están representadas despiertan una emotividad especial, destacando el color rojo de las sandías. La frase que la artista escribió añade una capa adicional de profundidad y significado a la obra, convirtiéndola en un testimonio conmovedor de la conexión entre el arte y la existencia, marcando así un hito importante en la carrera de Kahlo.",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/Kav02/DEV013-dataverse/src/Imagenes/Viva-la-Vida.jpg",
      relatedimageUrl: "https://i.ibb.co/cYFd3Qr/Viva-la-vida-IR.jpg",
      facts: {
        artistName: "Frida Kahlo",
        creationYear: 1954,
        artMovement: "Surrealismo",
      },
      additionalInformation: {
        style: "Realismo Mágico",
        technique: "Óleo sobre madera",
      },
    };
    communicateWithOpenAI.mockReturnValueOnce({
      content: null,
      json: () => Promise.reject(new Error("Error en la solicitud a OpenAI")),
    });
    try {
      await communicateWithOpenAI("Cuanto es 2+2", selectedPainting);
    } catch (error) {
      expect(error.message).toEqual("Error en la solicitud a OpenAI");
    }
  });
});
