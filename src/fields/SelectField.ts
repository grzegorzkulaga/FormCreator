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

    render(target: HTMLElement): void {
        const select = make("select", {
            value: this.value,
            name: this.name,
            id: this.name,
        });

        this.values.forEach((value) => {
            const option = make("option", {
                value,
                innerText: value,
            });
            select.appendChild(option);
        });

        FieldLabel.render(target, select, this.label);
    }
}

export default SelectField;
