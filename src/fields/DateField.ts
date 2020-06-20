import { Field } from "../interfaces/Field";
import { FieldType } from "../interfaces/FieldType";
import { make } from "../utils";
import FieldLabel from "./FieldLabel";

class DateField implements Field {
    type: FieldType = FieldType.Date;
    name: string;
    label: string;
    value: string;

    field: HTMLInputElement;

    constructor(name: string, label: string, value: string = "") {
        this.name = name;
        this.label = label;
        this.value = value;
    }

    getValue(): string {
        return this.field.value;
    }

    render(target: HTMLElement): void {
        this.field = make("input", {
            type: "date",
            value: this.value,
            name: this.name,
            id: this.name,
        }) as HTMLInputElement;

        FieldLabel.render(target, this.field, this.label);
    }
}

export default DateField;
