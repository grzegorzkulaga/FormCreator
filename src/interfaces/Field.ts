import { FieldType } from "./FieldType";

export interface Field {
    name: string;
    label: string;
    type: FieldType;
    value: string | boolean;
    getValue(): string | boolean;
    render(target: HTMLElement): void;
}
