import type { RoundedVariant, SizeVariant } from '$lib/types/index.js';
import type { UUID } from 'crypto';

export type MenuContextType = {
	state: {
		menuId: string;
		open: boolean;
		isSubmenuOpen: boolean;
	};
	toggleMenu: () => void;
	openMenu: () => void;
	closeMenu: () => void;
	uiRounded?: RoundedVariant;
	uiSize?: SizeVariant;
};

export type MenuBarContextType = {
	state: {
		isMenuBarActive: boolean;
		openMenuId: string | UUID | null;
	};
	handleFocusRightSibling: (element: HTMLElement | null) => void;
	handleFocusLeftSibling: (element: HTMLElement | null) => void;
	uiRounded?: RoundedVariant;
	uiSize?: SizeVariant;
};

export type RadioMenuContextType = {
	value: string | number | string[] | null | undefined;
	setRadioValue: (v: string | number | string[] | null | undefined) => void;
};
export type SubmenuContextType = {
	id: string;
	closeSubmenu: () => void;
	openSubmenu: () => void;
	state: {
		open: boolean;
	};
};
