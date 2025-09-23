import type { RoundedVariant, SizeVariant } from '../../types/index.ts';
export type AccordionContextType = {
    uiSize: SizeVariant;
    uiRounded: RoundedVariant;
};
export type AccordionItemContextType = {
    state: {
        expanded: boolean;
        iconRightRotation: string;
    };
    uiSize: SizeVariant;
    uiRounded: RoundedVariant;
};
