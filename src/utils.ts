export const make = (tagName, options?) =>
    document.createElement(tagName, options);
export const query = (selector) => document.querySelector(selector);
export const queryAll = (selector) => document.querySelector(selector);
export const nodesToArr = (nodeList: NodeList[]) =>
    Array.prototype.slice.call(nodeList);

export function getFormValues(form: HTMLElement): string {
    let data = {};
    let inputs: (HTMLInputElement | HTMLTextAreaElement)[] = Array.from(
        form.querySelectorAll("input,textarea")
    ) as (HTMLInputElement | HTMLTextAreaElement)[];

    inputs.forEach((input) => {
        data[input.name] = input.value;
    });

    return JSON.stringify(data);
}
