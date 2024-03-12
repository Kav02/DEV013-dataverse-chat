import { headerComponent } from "./../src/components/Header.js";
describe("headerComponent", () => {
  it('chatHeaderComponent debe crear el componente correctamente', () => {
    // Llama a la función que quieres probar
    const chatHeader = headerComponent();
  
    // Verifica que el elemento se haya creado correctamente
    // expect(chatHeader.tagName).toBe('HEADER');
    const header = chatHeader.querySelector('#header');
    expect(header).toBeDefined();
    const logoHeader = chatHeader.querySelector('#logoHeader');
    expect(logoHeader).toBeDefined();
  
  });
});