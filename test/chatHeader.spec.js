import { chatHeaderComponent } from "./../src/components/chatheader.js";
import * as router from "./../src/router.js"

describe("chatHeaderComponent", () => {
  it("chatHeaderComponent crea el componente correctamente", () => {
    const headerChat = chatHeaderComponent();
    const header = headerChat.querySelector(".chat-header");
    expect(header).toBeDefined();
  });
  it("navigaTo direcciona a la view home", () => {
    const headerChat = chatHeaderComponent();
    const pathname = "/home";

    const spyOn = jest.spyOn(router, "navigateTo");
    spyOn.mockImplementation((pathname) => {
      history.pushState({}, "", pathname);
    });
    headerChat.querySelector("#home-title").dispatchEvent(new Event("click"));

    expect(router.navigateTo).toHaveBeenCalledWith(pathname);

    //   // OTRA FORMA DE HACER EL TEST AL NAVIGATE TO

    //   const headerChat = chatHeaderComponent();
    //   const pathname = "/home";

    //   const router = require("../src/router.js");
    //   const spyOn = jest.spyOn(router, "navigateTo");
    //   spyOn.mockImplementation((pathname) => {
    //     history.pushState({}, "", pathname);
    //   });
    //   headerChat.querySelector("#home-title").dispatchEvent(new Event("click"));
    //   expect(window.location.pathname).toBe(pathname);
  });
});
