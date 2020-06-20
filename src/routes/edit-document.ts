import { query, make } from "../utils";
import { Router } from "../components/Router";

import "../styles.css";
import DocumentList from "../components/DocumentList";
import Form from "../components/Form";

class App {
    constructor() {
        const content = query("#content");

        const id = Router.getParam('id');
        const documentList = new DocumentList();
        const document = documentList.getDocument(id);

        const form = new Form(id, document);

        form.render(content);
    }
}

window.onload = () => new App();
