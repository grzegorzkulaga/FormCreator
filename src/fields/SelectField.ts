import { Field } from "../interfaces/Field";
import { FieldType } from "../interfaces/FieldType";
import { make } from "../utils";
import FieldLabel from "./FieldLabel";

class SelectField implements Field {
    type: FieldType = FieldType.Select;
    name: string;
    label: string;
    value: string;
    values: string[];

    field: HTMLSelectElement;

    constructor(
        name: string,
        label: string,
        value: string = "", 
        values: string[]
    ) {
        this.name = name;
        this.label = label;
        this.value = value;
        this.values = values;
    }



    getValue(): string {
        return this.field.options[this.field.selectedIndex].value;
    }

    render(target: HTMLElement): void {
        this.field = make("select", {
            value: this.value,
            name: this.name,
            id: this.name,
        }) as HTMLSelectElement;

        this.values.forEach((value) => {
            const option = make("option", {
                value,
                innerText: value,
                selected: value === this.value,
            });
            this.field.appendChild(option);
        });

        FieldLabel.render(target, this.field, this.label);
    }
}

export default SelectField;
