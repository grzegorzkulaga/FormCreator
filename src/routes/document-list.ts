import { query } from "../utils";
import DocumentList from "../components/DocumentList";

import "../styles.css";

class App {
    constructor() {
        const content = query("#content");

        const component = new DocumentList();
 
        component.render(content);
    }
}


window.onload = () => new App();
