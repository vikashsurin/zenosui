/**
 * @param {HTMLDivElement | HTMLUListElement} node
 * @param {{ (): void; (): void; (): void; (): void; (): void; }} callback
 */
export function clickOutside(node: HTMLDivElement | HTMLUListElement, callback: {
    (): void;
    (): void;
    (): void;
    (): void;
    (): void;
}): {
    destroy(): void;
};
