// export type AccordionStateType = {
// 	// openId: string | null;
// 	expanded: boolean;
// };

import type { RoundedVariant, SizeVariant, ThemeVariant } from '$lib/types/index.ts';
export type AccordionContextType = {
	uiSize: SizeVariant;
	uiRounded: RoundedVariant;
	uiTheme: ThemeVariant;
};

export type AccordionItemContextType = {
	state: {
		expanded: boolean;
		iconRightRotation: string;
	};
	uiSize: SizeVariant;
	uiRounded: RoundedVariant;
	uiTheme: ThemeVariant;
};
