import { FieldType } from "./FieldType";

export interface Field {
    name: string;
    label: string;
    type: FieldType;
    value: string;
    render(target: HTMLElement): void;
}
