import type { RoundedVariant, SizeVariant } from '../../style/index.js';
export type MenuContextType = {
    menuState: {
        menuId: string;
        openMenuId: string | null;
    };
    openMenuId: () => string | null;
    setActiveMenu: ({ _id, type }: {
        _id: string | null;
        type: string;
    }) => void;
    uiRounded?: RoundedVariant;
    uiSize?: SizeVariant;
};
export type MenuBarContextType = {
    activeMenu: {
        id: string | null;
    };
    setActiveMenu: (id: string | null) => void;
};
