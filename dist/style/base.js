import { tv } from 'tailwind-variants';
import {
	BACKGROUND_COLOR,
	BORDER,
	BORDER_COLOR,
	CONTENT_COLOR,
	PADDING,
	ROUNDED,
	TEXT_SIZE,
	TEXT_SIZE_WITH_HEIGHT,
	ICON_SIZE,
	COLOR_PRESET,
	FILL_VARIANT
} from './index.js';

export const baseVariant = tv({
	base: 'zu_base zu_base_transition',
	variants: {
		uiFill: FILL_VARIANT,
		uiText: TEXT_SIZE,
		uiTextWithHeight: TEXT_SIZE_WITH_HEIGHT,
		uiRounded: ROUNDED,
		uiIconSize: ICON_SIZE,
		uiPadding: PADDING,
		uiColor: CONTENT_COLOR,
		uiColorPreset: COLOR_PRESET,
		uiBg: BACKGROUND_COLOR,
		borderColor: BORDER_COLOR,
		border: BORDER
	}
});
