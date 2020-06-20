import { query } from "../utils";
import FormCreator from "../components/FormCreator";

import "../styles.css";
import LocStorage from "../LocStorage";

class App {
    constructor() {
        const content = query("#content");

        // const form = new FormCreator((new LocStorage()).loadForm("form-1590347839539"));
        const form = new FormCreator();
        form.newForm(content);
    }
}

window.onload = () => new App();
