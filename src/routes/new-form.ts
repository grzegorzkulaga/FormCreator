import { query } from "../utils";
import FormCreator from "../components/FormCreator";

import "../styles.css";

class App {
    constructor() {
        const content = query("#content");

        const form = new FormCreator();
        form.newForm(content);
    }
}

window.onload = () => new App();
