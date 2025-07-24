import type { RoundedVariant, SizeVariant } from '$lib/style/index.js';

export type SelectContextType = {
	uiSize: SizeVariant;
	uiRounded: RoundedVariant;
	open: boolean;
	value: string | null;
};
