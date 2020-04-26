import { Field } from "../interfaces/Field";
import InputField from "../fields/InputField";
import { make, getFormValues } from "../utils";

class Form {
    fields: Field[] = [
        new InputField('name', 'Imię', ''),
    ];

    form?: HTMLElement;

    getValue(target: HTMLElement) {
        return this.form ? getFormValues(target) : JSON.stringify({});
    }

    render(target: HTMLElement,) {
        target.innerHTML = '';
        this.form = make('form');

        this.fields.forEach(field => {
            const wrapper = make('div');
            field.render(wrapper);

            (this.form as HTMLElement).appendChild(wrapper);
        });

        const submit = make('button', {
            type: 'submit',
            innerText: 'Wyślij'
        });
        
        this.form.appendChild(submit);

        target.appendChild(this.form);
    }
}

export default Form;