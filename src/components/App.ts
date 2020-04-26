import { make } from "../utils";

class App {
    constructor() {
        const div = make("div");
        div.innerHTML = "Hello :)";
        document.querySelector("body").appendChild(div);
    }
}

export default App;
