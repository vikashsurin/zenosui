import type { RoundedVariant, SizeVariant, ThemeVariant } from '../../types/index.ts';
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
