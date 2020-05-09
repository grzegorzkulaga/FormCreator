import { query } from "../utils";
import Form from "./Form";

class App {
    constructor() {
        const content = query("#content");
        const results = query("#result");

        const form = new Form();

        form.render(content);
        form.form.onsubmit = (event) => {
            event.preventDefault();
            results.innerHTML = `<textarea readonly>${JSON.stringify(form.getValue(), null, 2)}</textarea>`;
        };
    }
}

export default App;
