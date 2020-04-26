import { make } from "../utils";

class FieldLabel {
    static render(target: HTMLElement, input: HTMLElement, label: string) {
        const wrapper = make("div");
        const labelElement = make("label", {
            htmlFor: input.id,
            innerHTML: `${label}: `,
        }) as HTMLLabelElement;

        wrapper.appendChild(labelElement);
        wrapper.appendChild(input);

        target.appendChild(wrapper);
    }
}

export default FieldLabel;
