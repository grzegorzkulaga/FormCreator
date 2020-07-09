import { query } from "../utils";
import { Router } from "../components/Router";

import DocumentList from "../components/DocumentList";
import Form from "../components/Form";

import "../styles.css";

class App {
    constructor() {
        const content = query("#content");

        const formId = Router.getParam('formId');
        const id = Router.getParam('id');
        const documentList = new DocumentList();
        const document = documentList.getDocument(id);

        const form = new Form(formId, id, document);

        form.render(content);
    }
}

window.onload = () => new App();
