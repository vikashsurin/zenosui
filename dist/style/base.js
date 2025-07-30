import { tv } from 'tailwind-variants';
import { BACKGROUND_COLOR, BORDER, BORDER_COLOR, CONTENT_COLOR, PADDING, ROUNDED, TEXT_SIZE, TEXT_SIZE_WITH_HEIGHT, VARIANT, ICON_SIZE, COLOR_PRESET } from './index.ts';
export const baseVariant = tv({
    base: 'transition-all ease-in-out duration-200ms disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-400',
    variants: {
        uiVariant: VARIANT,
        uiText: TEXT_SIZE,
        uiTextWithHeight: TEXT_SIZE_WITH_HEIGHT,
        uiRounded: ROUNDED,
        uiIconSize: ICON_SIZE,
        padding: PADDING,
        uiColor: CONTENT_COLOR,
        uiColorPreset: COLOR_PRESET,
        uiBg: BACKGROUND_COLOR,
        borderColor: BORDER_COLOR,
        border: BORDER
    }
});
