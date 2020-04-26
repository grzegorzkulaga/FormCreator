import { Field } from "../interfaces/Field";
import InputField from "../fields/InputField";
import { make, getFormValues } from "../utils";
import EmailField from "../fields/EmailField";
import CheckboxField from "../fields/CheckboxField";
import TextareaField from "../fields/TextAreaField";
import SelectField from "../fields/SelectField";

const specializations = ["Programowanie aplikacji mobilnych i webowych", "Informatyka"];

class Form {
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
        new CheckboxField("elearning", "Czy preferujesz elearning", ""),
        new TextareaField("notes", "Uwagi", ""),
    ];

    form?: HTMLElement;

    getValue(target: HTMLElement) {
        return this.form ? getFormValues(target) : JSON.stringify({});
    }

    render(target: HTMLElement) {
        target.innerHTML = "";
        this.form = make("form");

        this.fields.forEach((field) => {
            const wrapper = make("div");
            field.render(wrapper);

            (this.form as HTMLElement).appendChild(wrapper);
        });

        const submit = make("button", {
            type: "submit",
            innerText: "Wyślij",
        });

        this.form.appendChild(submit);

        target.appendChild(this.form);
    }
}

export default Form;
