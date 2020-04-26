import { Field } from "../interfaces/Field";
import { FieldType } from "../interfaces/FieldType";
import { make } from "../utils";
import FieldLabel from "./FieldLabel";

class DateField implements Field {
    type: FieldType = FieldType.Date;
    name: string;
    label: string;
    value: string;

    constructor(name: string, label: string, value: string = "") {
        this.name = name;
        this.label = label;
        this.value = value;
    }

    render(target: HTMLElement): void {
        const input = make("input", {
            type: "date",
            value: this.value,
            name: this.name,
            id: this.name,
        });

        FieldLabel.render(target, input, this.label);
    }
}

export default DateField;
