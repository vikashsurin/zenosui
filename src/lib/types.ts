import type { Snippet, Component } from 'svelte';
import type {
	SizePresetVariant,
	RoundedVariant,
	Variant,
	TextSizeVariant,
	ColorVariant
} from './style/variant.js';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

export interface BaseProps {
	/**
	 * The class name to apply to the component.
	 * Children will be rendered inside the component.
	 */

	children?: Snippet<[]>;
	/**
	 * Below are the user defined props
	 */
	size?: SizePresetVariant;
	textSize?: TextSizeVariant;
	rounded?: RoundedVariant;
	variant?: Variant;
	colorVariant?: ColorVariant;
}

export interface BasePropsExtended extends BaseProps {
	class?: string;
}

export interface StatefulProps {
	active?: boolean;
}

type ButtonAsButton = BaseProps &
	StatefulProps &
	HTMLButtonAttributes & {
		href?: undefined | null;
		label?: string;
		iconLeft?: Component;
		iconRight?: Component;
	};

type ButtonAsAnchor = BaseProps &
	StatefulProps &
	HTMLAnchorAttributes & {
		href?: string;
		label?: string;
		iconLeft?: Component;
		iconRight?: Component;
	};

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export interface IconProps extends BasePropsExtended {
	icon: Component;
}

export interface IconButtonProps extends BasePropsExtended {
	icon: Component;
}
