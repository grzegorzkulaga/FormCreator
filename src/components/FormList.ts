import LocStorage from "../LocStorage";
import { make } from "../utils";

class FormList {
    localStorage: LocStorage;
    idList: string[];

    constructor() {
        this.localStorage = new LocStorage();
    }

    getForms(): string[] {
        this.idList = this.localStorage.getForms();

        return this.idList;
    }

    getForm(id) {
        return this.localStorage.loadForm(id);
    }

    removeForm(id) {
        this.localStorage.removeForm(id);
        
        window.location.reload();
    }

    getHeader() {
        const tr = make("tr");
        const form = make("td", {
            innerHTML: "Formularz"
        })
        const options = make("td", {
            innerHTML: "Opcje"
        })

        tr.appendChild(form);
        tr.appendChild(options);

        return tr;
    }

    getEntry(value: string) {
        const tr = make("tr");

        const titleTd = make("td", {
            innerText: value
        });

        const optionsTd = make("td");
        const remove = make("a", {
            innerHTML: 'Usuń',
            href: "#",
            onclick: () => this.removeForm(value)
        });
        const fill = make("a", {
            innerHTML: 'Wypełnij',
            href: `new-document.html?formId=${value}`,
        });

        optionsTd.appendChild(remove);
        optionsTd.appendChild(make('br'));
        optionsTd.appendChild(fill);

        tr.appendChild(titleTd);
        tr.appendChild(optionsTd);

        return tr;
    }

    render(target: HTMLElement) {
        this.getForms();

        const table = make("table");
        table.appendChild(this.getHeader());

        this.idList.forEach((id) => {
            table.appendChild(this.getEntry(id));
        });

        target.appendChild(table);
    }
}

export default FormList;
