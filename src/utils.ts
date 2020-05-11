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
