import {
	BACKGROUND_COLOR,
	BORDER,
	BORDER_COLOR,
	COLOR,
	CONTENT_COLOR,
	OUTLINE_COLOR,
	PADDING,
	VARIANT,
	ROUNDED,
	SIZE_PRESET,
	COLOR_PRESET
} from './index.js';

export type SizeVariant =
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl';

export type TextSizeVariant = SizeVariant;

export type ColorVariant = keyof typeof COLOR;
export type Variant = keyof typeof VARIANT;
export type SizePresetVariant = keyof typeof SIZE_PRESET;
export type RoundedVariant = keyof typeof ROUNDED;
// export type TextSizeVariant = keyof typeof TEXT_SIZE;
export type BorderVariant = keyof typeof BORDER;
export type BackgroundColor = keyof typeof BACKGROUND_COLOR;
export type ContentColor = keyof typeof CONTENT_COLOR;
export type BorderColor = keyof typeof BORDER_COLOR;
export type PaddingVariant = keyof typeof PADDING;
export type OutlineColor = keyof typeof OUTLINE_COLOR;
export type colorPreset = keyof typeof COLOR_PRESET;
