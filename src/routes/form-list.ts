import { query } from "../utils";
import FormList from "../components/FormList";

import "../styles.css";

class App {
    constructor() {
        const content = query("#content");

        const component = new FormList();

        component.render(content);
    }
}

window.onload = () => new App();
