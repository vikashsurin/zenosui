export const componentList: ({
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
})[];
