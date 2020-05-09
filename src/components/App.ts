import { make, query } from "../utils";
import Form from "./Form";

class App {
    constructor() {
        const content = query("#content");
        const results = query("#result");

        const form = new Form();

        form.render(content);
        form.form.onsubmit = (event) => {
            event.preventDefault();
            console.log("form", form.getValue(content));
            results.innerHTML = `<textarea readonly>${form.getValue(
                content
            )}</textarea>`;
        };
    }
}

export default App;
