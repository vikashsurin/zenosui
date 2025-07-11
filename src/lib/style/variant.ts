import { tv } from 'tailwind-variants';

export const COLOR = {
	none: '',
	primary: 'bg-blue-500 text-white',
	secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
	tertiary: 'bg-gray-300 text-gray-800',
	danger: 'bg-red-500 text-white',
	warning: 'bg-yellow-500 text-white',
	success: 'bg-green-500 text-white'
};

export const SIZE = {
	xs: 'w-4 h-4',
	sm: 'w-6 h-6',
	md: 'w-8 h-8',
	lg: 'w-10 h-10',
	xl: 'w-12 h-12',
	'2xl': 'w-14 h-14',
	'3xl': 'w-16 h-16',
	'4xl': 'w-20 h-20',
	'5xl': 'w-24 h-24',
	'6xl': 'w-28 h-28',
	'7xl': 'w-32 h-32',
	'8xl': 'w-36 h-36'
};

export const TEXT_SIZE = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': ' text-3xl',
	'4xl': ' text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl',
	'7xl': 'text-7xl',
	'8xl': 'text-8xl'
};

export const PADDING = {
	none: '',
	xs: 'p-1',
	sm: 'p-2',
	md: 'p-3',
	lg: 'p-4',
	xl: 'p-5',
	'2xl': 'p-6',
	'3xl': 'p-7',
	'4xl': 'p-8',
	'5xl': 'p-9',
	'6xl': 'p-10',
	'7xl': 'p-11',
	'8xl': 'p-12'
};

export const ROUNDED = {
	none: '',
	xs: 'rounded-xs',
	sm: 'rounded-sm',
	md: 'rounded-md',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	'2xl': 'rounded-2xl',
	'3xl': 'rounded-3xl',
	'4xl': 'rounded-4xl',
	full: 'rounded-full'
};

export const VARIANT = {
	none: '',
	outline: 'border  border-gray-500',
	filled: 'filled',
	ghost: 'ghost'
};

export const SIZE_PRESET = {
	xs: 'text-xs px-2 h-6 gap-0.75',
	sm: 'text-sm px-3 h-8 gap-1',
	md: 'text-base px-4 h-10 gap-1.5',
	lg: 'text-lg px-5 h-12 gap-2',
	xl: 'text-xl px-6 h-14 gap-2.5',
	'2xl': 'text-2xl px-7 h-16 gap-3',
	'3xl': 'text-3xl px-8 h-20 gap-3.5',
	'4xl': 'text-4xl px-9 h-24 gap-4',
	'5xl': 'text-5xl px-10 h-28 gap-4.5',
	'6xl': 'text-6xl px-11 h-32 gap-5',
	'7xl': 'text-7xl px-12 h-36 gap-5.5',
	'8xl': 'text-8xl px-13 h-40 gap-6'
};

export const ICON_SIZE = {
	xs: '[&>svg]:w-3 [&>svg]:h-3',
	sm: '[&>svg]:w-4 [&>svg]:h-4',
	md: '[&>svg]:w-5 [&>svg]:h-5',
	lg: '[&>svg]:w-6 [&>svg]:h-6',
	xl: '[&>svg]:w-7 [&>svg]:h-7',
	'2xl': '[&>svg]:w-8 [&>svg]:h-8',
	'3xl': '[&>svg]:w-10 [&>svg]:h-10',
	'4xl': '[&>svg]:w-12 [&>svg]:h-12',
	'5xl': '[&>svg]:w-16 [&>svg]:h-16',
	'6xl': '[&>svg]:w-20 [&>svg]:h-20',
	'7xl': '[&>svg]:w-24 [&>svg]:h-24',
	'8xl': '[&>svg]:w-28 [&>svg]:h-28'
};

export const baseVariant = tv({
	base: 'inline-flex transition-all ease-in-out duration-200ms',
	variants: {
		colorVariant: COLOR,
		variant: VARIANT,
		textSize: TEXT_SIZE,
		rounded: ROUNDED,
		padding: PADDING
	}
});

export type ColorVariant = keyof typeof COLOR;
export type Variant = keyof typeof VARIANT;
export type SizePresetVariant = keyof typeof SIZE_PRESET;
export type RoundedVariant = keyof typeof ROUNDED;
export type TextSizeVariant = keyof typeof TEXT_SIZE;
export type SizeVariant = keyof typeof SIZE;
