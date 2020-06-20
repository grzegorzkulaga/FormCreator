import { FieldType } from "./FieldType";
import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";

export interface FieldCreator {
    name: InputField;
    label: InputField;
    type: SelectField;
    defaultValue: InputField;
}