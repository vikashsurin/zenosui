export function getPrev(): {
    label: string;
    href: string;
    submenu?: undefined;
} | {
    label: string;
    href: string;
    submenu: {
        label: string;
        href: string;
    }[];
};
export function getNext(): {
    label: string;
    href: string;
    submenu?: undefined;
} | {
    label: string;
    href: string;
    submenu: {
        label: string;
        href: string;
    }[];
};
export namespace docStore {
    let index: number;
}
