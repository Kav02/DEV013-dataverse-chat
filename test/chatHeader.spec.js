import { chatHeaderComponent } from "./../src/components/chatheader.js";
// import { navigateTo } from "./../src/router.js";
import { router} from "./../src/router.js"
import {expect, jest} from '@jest/globals';
describe("chatHeaderComponent", () => {
  it("chatHeaderComponent crea el componente correctamente", () => {
    const headerChat = chatHeaderComponent();
    const header = headerChat.querySelector(".chat-header");
    expect(header).toBeDefined();
  });
  it("navigaTo direcciona a la view home", () => {
    const headerChat = chatHeaderComponent();
    const button = headerChat.querySelector("#opcionInicio");
    
    button.dispatchEvent(new Event("click"));
    const navigateSpy = jest.spyOn(router, "navigateTo");
    expect(navigateSpy).toHaveBeenCalledWith(["/home"]);
  });
});

