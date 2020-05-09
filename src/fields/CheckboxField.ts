import { Field } from "../interfaces/Field";
import { FieldType } from "../interfaces/FieldType";
import { make } from "../utils";
import FieldLabel from "./FieldLabel";

class CheckboxField implements Field {
    type: FieldType = FieldType.Checkbox;
    name: string;
    label: string;
    value: boolean;

    field: HTMLInputElement;

    constructor(name: string, label: string, value: boolean = false) {
        this.name = name;
        this.label = label;
        this.value = value;
    }

    getValue(): boolean {
        return this.field.checked;
    }

    render(target: HTMLElement): void {
        this.field = make("input", {
            type: "checkbox",
            checked: this.value,
            name: this.name,
            id: this.name,
        }) as HTMLInputElement;

        FieldLabel.render(target, this.field, this.label);
    }
}

export default CheckboxField;
