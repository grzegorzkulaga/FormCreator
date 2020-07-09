import { query } from "../utils";
import Form from "../components/Form";
import { Router } from "../components/Router";

import "../styles.css";

class App {
    constructor() {
        const content = query("#content");

        const formId = Router.getParam('formId');

        const form = new Form(formId);

        form.render(content);
    }
}

window.onload = () => new App();
