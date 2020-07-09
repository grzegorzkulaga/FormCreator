import { Field } from "../interfaces/Field";
import InputField from "../fields/InputField";
import { make } from "../utils";
import EmailField from "../fields/EmailField";
import CheckboxField from "../fields/CheckboxField";
import TextareaField from "../fields/TextAreaField";
import SelectField from "../fields/SelectField";
import LocStorage from "../LocStorage";
import DateField from "../fields/DateField";

const specializations = ["Programowanie aplikacji mobilnych i webowych", "Informatyka"];

class Form {
    id: string = null;
    formId: string = null;

    fields: Field[];
    form?: HTMLElement;
    localStorage: LocStorage;

    constructor(formId: string, id: string = null, document: Record<string, any> = {}) {
        this.localStorage = new LocStorage();

        this.save = this.save.bind(this);

        this.formId = formId;
        this.id = id;

        const form = this.localStorage.loadForm(formId);

        this.fields = form.map(({ name, type, label, defaultValue, extra }) => {
            if (type === 'Select') {
                return new SelectField(name, label, document[name] || defaultValue, extra.split(','))
            }

            const Field: any = this.getField(type);

            return new Field(name, label, document[name] || defaultValue);
        })
    }

    getField(type) {
        if (type === "Email") {
            return EmailField;
        }

        if (type === "Date") {
            return DateField;
        }

        if (type === "Checkbox") {
            return CheckboxField;
        }

        if (type === "Textarea") {
            return TextareaField;
        }

        return InputField;
    }

    getValue() {
        const data = {
            formId: this.formId
        };
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
        this.form = make("form", {
            onsubmit: (e) => e.preventDefault()
        });

        this.fields.forEach((field) => {
            const wrapper = make("div", {
                className: "field",
            });
            field.render(wrapper);

            this.form.appendChild(wrapper);
        });

        const back = make("button", {
            innerText: "Wstecz",
            onclick: () => window.history.back(),
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
