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

    getEntry(value: string) {
        const tr = make("tr");
        const td = make("td", {
            innerHTML: value,
        });

        tr.appendChild(td);

        return tr;
    }

    render(target: HTMLElement) {
        this.getDocuments();

        const table = make("table");
        table.appendChild(this.getEntry("id dokumentu"));

        this.idList.forEach((id) => {
            table.appendChild(this.getEntry(id));
        });

        target.appendChild(table);
    }
}

export default DocumentList;
