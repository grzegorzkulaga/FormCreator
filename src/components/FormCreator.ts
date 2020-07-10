
import { Field } from "../interfaces/Field";
import InputField from "../fields/InputField";
import { make } from "../utils";
import SelectField from "../fields/SelectField";
import LocStorage from "../LocStorage";
import { FieldCreator } from "../interfaces/FieldCreator";

const FIELD_TYPES = [
    "Checkbox",
    "Date",
    "Email",
    "Input",
    "Select",
    "Textarea",
];

class FormCreator {
    fields: FieldCreator[] = [];
    fieldsWrapper: HTMLElement;
    form?: HTMLElement;
    localStorage: LocStorage;
    
    constructor(data?: Record<string, string>[]) {
        this.localStorage = new LocStorage();

        if (data) {
            data.forEach(({ name, type, label, defaultValue, extra }) => this.addField(name, type, label, defaultValue, extra))
        }

        this.renderField = this.renderField.bind(this);
        this.saveForm = this.saveForm.bind(this);
        this.addField = this.addField.bind(this);
    }

    getValue() {
        const data = this.fields.map((field) => {
            const fieldData = {};
            Object.keys(field).forEach(key => {
                fieldData[key] = field[key].getValue();
            })

            return fieldData;
        });

        return data;
    }

    addField(name = "", type = "", label = "", defaultValue = "", extra = "") {
        const fieldCreator: FieldCreator = {
            name: new InputField("name", "Nazwa", name),
            type: new SelectField("type", "Typ pola", type, FIELD_TYPES),
            label: new InputField("label", "Etykieta", label),
            defaultValue: new InputField("defaultValue", "Domylna wartość", defaultValue),
            extra: new InputField('extra', 'Dodatkowe dane (opcjonalne)', extra),
        }

        this.fields.push(fieldCreator);

        return fieldCreator;
    }

    renderField(fieldCreator: FieldCreator) {
        const wrapper = make("div", {
            className: "field-creator",
        });

        Object.keys(fieldCreator).forEach(key => fieldCreator[key].render(wrapper));

        this.fieldsWrapper.appendChild(wrapper);
    }

    newForm(target: HTMLElement) {
        target.innerHTML = "";
        this.form = make("form", {
            onsubmit: (e) => e.preventDefault()
        });

        this.fieldsWrapper = make('div');

        this.fields.forEach(fieldCreator => this.renderField(fieldCreator));

        this.form.appendChild(this.fieldsWrapper);

        const addField = make("button", {
            innerText: "Nowe pole",
            onclick: () => this.renderField(this.addField()),
        });

        const submit = make("button", {
            innerText: "Zapisz",
            onclick: this.saveForm,
        });

        const back = make("button", {
            innerText: "Wstecz",
            onclick: () => window.history.back(),
        });

        this.form.appendChild(addField);
        this.form.appendChild(back);
        this.form.appendChild(submit);

        target.appendChild(this.form);
    }

    saveForm(event: MouseEvent) {
        event.preventDefault();

        this.localStorage.saveForm(this.getValue());

        window.location.href = "/index.html";
    }
}

export default FormCreator;