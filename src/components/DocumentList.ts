import LocStorage from "../LocStorage";
import { make } from "../utils";

class DocumentList {
    localStorage: LocStorage;
    idList: string[];

    constructor() {
        this.localStorage = new LocStorage();
    }

    getDocuments(): string[] {
        this.idList = this.localStorage.getDocuments();

        return this.idList;
    }

    getDocument(id) {
        return this.localStorage.loadDocument(id);
    }

    removeDocument(id) {
        this.localStorage.removeDocument(id);
        
        window.location.reload();
    }

    getHeader() {
        const tr = make("tr");
        const document = make("td", {
            innerHTML: "Dokument"
        })
        const options = make("td", {
            innerHTML: "Opcje"
        })

        tr.appendChild(document);
        tr.appendChild(options);

        return tr;
    }

    getEntry(value: string) {
        const tr = make("tr");

        const anchorTd = make("td");
        const anchor = make("a", {
            href: `edit-document.html?id=${value}`,
            innerHTML: value
        });

        const optionsTd = make("td");
        const options = make("a", {
            innerHTML: 'Usuń',
            href: "#",
            onclick: () => this.removeDocument(value)
        });

        anchorTd.appendChild(anchor);
        optionsTd.appendChild(options);
        tr.appendChild(anchorTd);
        tr.appendChild(optionsTd);

        return tr;
    }

    render(target: HTMLElement) {
        this.getDocuments();

        const table = make("table");
        table.appendChild(this.getHeader());

        this.idList.forEach((id) => {
            table.appendChild(this.getEntry(id));
        });

        target.appendChild(table);
    }
}

export default DocumentList;
