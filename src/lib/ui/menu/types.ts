import type { RoundedVariant, SizeVariant } from '$lib/types/index.js';
import type { UUID } from 'crypto';

export type MenuContextType = {
	state: {
		menuId: string;
		open: boolean;
	};
	uiRounded?: RoundedVariant;
	uiSize?: SizeVariant;
};

export type MenuBarContextType = {
	state: {
		isMenuBarActive: boolean;
		openMenuId: string | UUID | null;
	};
	uiRounded?: RoundedVariant;
	uiSize?: SizeVariant;
};

export type RadioMenuContextType = {
	value: string | number | string[] | null | undefined;
	setRadioValue: (v: string | number | string[] | null | undefined) => void;
};
