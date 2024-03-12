import { chatInputComponent } from "../src/components/chatinput";
import { bannerComponent } from "../src/components/Banner";

describe("chatInputComponent", () => {
  it("debería tener un elemento input", () => {
    const chatInputContainer = chatInputComponent();
    const inputElement = chatInputContainer.querySelector("input");
    expect(inputElement).toBeDefined();
  });
});

describe("bannerComponent", () => {
  it("debería tener un elemento h2", () => {
    const bannerContainer = bannerComponent();
    const bannerElement = bannerContainer.querySelector("h2");
    expect(bannerElement).toBeDefined();
  });
});
