import type { RoundedVariant, SizeVariant } from '$lib/types/index.ts';

export type NavigationListContextType = {
	childHasLeftIcon: boolean;
	uiSize: SizeVariant;
	uiRounded: RoundedVariant;
	openId: string | null;
};
