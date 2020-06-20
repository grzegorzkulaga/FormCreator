import { query, make } from "../utils";
import { Router } from "../components/Router";

import "../styles.css";
import DocumentList from "../components/DocumentList";

class App {
    constructor() {
        const content = query("#content");
        const id = Router.getParam('id');
        const documentList = new DocumentList();
        const document = documentList.getDocument(id)
        const textarea = make('textarea', {
            value: JSON.stringify(document, null, 2)
        })
        content.appendChild(textarea);
    }
}

window.onload = () => new App();
