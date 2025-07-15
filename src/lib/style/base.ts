import { tv } from 'tailwind-variants';
import {
	BACKGROUND_COLOR,
	BORDER,
	BORDER_COLOR,
	CONTENT_COLOR,
	PADDING,
	ROUNDED,
	TEXT_SIZE,
	VARIANT
} from './index.js';

export const baseVariant = tv({
	base: 'transition-all ease-in-out duration-200ms disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-400',
	variants: {
		uiVariant: VARIANT,
		uiText: TEXT_SIZE,
		uiRounded: ROUNDED,
		padding: PADDING,
		uiColor: CONTENT_COLOR,
		uiBg: BACKGROUND_COLOR,
		borderColor: BORDER_COLOR,
		border: BORDER
	}
});
