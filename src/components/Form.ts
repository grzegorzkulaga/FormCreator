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
    localStorage: LocStorage;

    fields: Field[] = [
        new InputField("name", "Imię", ""),
        new InputField("surname", "Nazwisko", ""),
        new EmailField("email", "Email", ""),
        new SelectField(
            "specialization",
            "Kierunek studiów",
            "",
            specializations
        ),
        new CheckboxField("elearning", "Czy preferujesz elearning", false),
        new TextareaField("notes", "Uwagi", ""),
    ];

    form?: HTMLElement;

    constructor() {
        this.localStorage = new LocStorage();

        this.save = this.save.bind(this);
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

        this.localStorage.saveDocument(this.getValue());

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
