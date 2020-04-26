export const make = (tagName, options = {}, base?): HTMLElement => {
    const element = document.createElement(tagName, base);
    Object.keys(options).forEach((key) => {
        element[key] = options[key];
    });

    return element;
};

export const query = (selector) => document.querySelector(selector);
export const queryAll = (selector) => document.querySelector(selector);
export const nodesToArr = (nodeList: NodeList[]) =>
    Array.prototype.slice.call(nodeList);

export function getFormValues(form: HTMLElement): string {
    let data = {};
    let inputs: (
        | HTMLInputElement
        | HTMLTextAreaElement
    )[] = (Array as any).from(form.querySelectorAll("input,textarea")) as (
        | HTMLInputElement
        | HTMLTextAreaElement
    )[];

    inputs.forEach((input) => {
        data[input.name] = input.type === 'checkbox' ? (input as any).checked : input.value;
    });

    return JSON.stringify(data, null, 2);
}
