import { query } from "../utils";
import Form from "../components/Form";

import "../styles.css";

class App {
    constructor() {
        const content = query("#content");

        const form = new Form();

        form.render(content);
    }
}

window.onload = () => new App();
