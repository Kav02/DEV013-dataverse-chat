import { communicateWithOpenAI } from "./../src/lib/openAIApi.js";
import { setApiKey } from "../src/lib/apiKey.js";

//Test mensaje y respuesta
describe("communicateWithOpenAI", () => {
  const selectedPainting = { id: "viva-la-vida", name: "Viva la Vida" };
  // test("deberia responder al mensaje", async () => {
  //   const respuesta = {
  //     choices: [
  //       {
  //         message: {
  //           content: "Esto es una prueba",
  //         },
  //       },
  //     ],
  //     ok: true,
  //   };
  //   console.log(respuesta.choices);
  //   global.fetch = jest.fn(() => {
  //     Promise.resolve({
  //       ok: true,
  //       json: () => Promise.resolve(respuesta),
  //     });
  //   });
  //   const input = "Hola";
  //   const prueba = await communicateWithOpenAI(input, selectedPainting);
  //   console.log(prueba);
  //   expect(typeof prueba).toEqual("string");
  // });

  //Test error----------
  test("deberia enviar un error ", async () => {
    global.alert = jest.fn(() => Promise.resolve(window.alert));
    try {
      await communicateWithOpenAI("Cuanto es 2+2", selectedPainting);
    } catch (error) {
      expect(error).toEqual(window.alert);
    }
  });
  //Test clave invalida

  setApiKey("api-key-invalida");

  test("deberia indicar que la clave es inválida", async () => {
    try {
      await communicateWithOpenAI("Hola", selectedPainting);
    } catch (error) {
      expect(error.message).toEqual("Error en la solicitud a OpenAI");
    }
  });
});
