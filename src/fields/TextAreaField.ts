import { Field } from "../interfaces/Field";
import { FieldType } from "../interfaces/FieldType";
import { make } from "../utils";
import FieldLabel from "./FieldLabel";

class TextareaField implements Field {
    type: FieldType = FieldType.Textarea;
    name: string;
    label: string;
    value: string;

    field: HTMLTextAreaElement;

    constructor(name: string, label: string, value: string = "") {
        this.name = name;
        this.label = label;
        this.value = value;
    }

    getValue(): string {
        return this.field.value;
    }

    render(target: HTMLElement): void {
        this.field = make("textarea", {
            innerHTML: this.value,
            name: this.name,
            id: this.name,
        }) as HTMLTextAreaElement;

        FieldLabel.render(target, this.field, this.label);
    }
}

export default TextareaField;
