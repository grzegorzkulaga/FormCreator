import { Field } from "../interfaces/Field";
import InputField from "../fields/InputField";
import { make } from "../utils";
import EmailField from "../fields/EmailField";
import CheckboxField from "../fields/CheckboxField";
import TextareaField from "../fields/TextAreaField";
import SelectField from "../fields/SelectField";
import LocStorage from "../LocStorage";

const specializations = ["Programowanie aplikacji mobilnych i webowych", "Informatyka"];

class Form {
    id: string = null;
    fields: Field[];
    form?: HTMLElement;
    localStorage: LocStorage;

    constructor(id: string = null, document: Record<string, any> = {}) {
        this.localStorage = new LocStorage();

        this.save = this.save.bind(this);

        this.id = id;
        this.fields = [
            new InputField("name", "Imię", document["name"] || ""),
            new InputField("surname", "Nazwisko", document["surname"] || ""),
            new EmailField("email", "Email", document["email"] || ""),
            new SelectField(
                "specialization",
                "Kierunek studiów",
                document["specialization"] || "",
                specializations
            ),
            new CheckboxField("elearning", "Czy preferujesz elearning", document["elearning"] || false),
            new TextareaField("notes", "Uwagi", document["notes"] || ""),
        ]
    }

    getValue() {
        const data = {};
        this.fields.forEach((field) => {
            data[field.name] = field.getValue();
        });

        return data;
    }

    save(event: MouseEvent) {
        event.preventDefault();

        this.localStorage.saveDocument(this.getValue(), this.id);

        window.location.href = "/index.html";
    }

    render(target: HTMLElement) {
        target.innerHTML = "";
        this.form = make("form");

        this.fields.forEach((field) => {
            const wrapper = make("div", {
                className: "field",
            });
            field.render(wrapper);

            this.form.appendChild(wrapper);
        });

        const back = make("button", {
            innerText: "Wstecz",
            onclick: () => (window.location.href = "/index.html"),
        });

        const submit = make("button", {
            innerText: "Zapisz",
            onclick: this.save,
        });

        this.form.appendChild(back);
        this.form.appendChild(submit);

        target.appendChild(this.form);
    }
}

export default Form;
