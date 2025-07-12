import type { Snippet, Component } from 'svelte';
import type {
	SizePresetVariant,
	RoundedVariant,
	Variant,
	TextSizeVariant,
	ColorVariant,
	BorderVariant,
	BackgroundColor,
	ContentColor,
	PaddingVariant
} from './style/variant.js';
import type {
	HTMLAnchorAttributes,
	HTMLAttributes,
	HTMLButtonAttributes,
	HTMLInputAttributes,
	HTMLLiAttributes
} from 'svelte/elements';

export interface BaseProps {
	/**
	 * The class name to apply to the component.
	 * Children will be rendered inside the component.
	 */

	children?: Snippet<[]>;
	/**
	 * Below are the user defined props
	 */
	backgroundColor?: BackgroundColor;
	contentColor?: ContentColor;
	sizeVariant?: SizePresetVariant;
	textSize?: TextSizeVariant;
	roundedVariant?: RoundedVariant;
	variant?: Variant;
	border?: BorderVariant;
	padding?: PaddingVariant;
	colorVariant?: ColorVariant;
}

export interface BasePropsExtended extends BaseProps {
	class?: string;
}

export interface StatefulProps {
	active?: boolean;
}

export interface WithIcons {
	icon?: Component;
	iconLeft?: Component;
	iconRight?: Component;
}

type ButtonAsButton = BaseProps &
	StatefulProps &
	WithIcons &
	HTMLButtonAttributes & {
		href?: undefined | null;
		label?: string;
	};

type ButtonAsAnchor = BaseProps &
	StatefulProps &
	WithIcons &
	HTMLAnchorAttributes & {
		href?: string;
		label?: string;
	};

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export interface IconProps extends BasePropsExtended {
	icon: Component;
}

export interface IconButtonProps extends BaseProps, HTMLButtonAttributes {
	icon: Component;
}

export interface DropdownProps extends BaseProps, HTMLAttributes<HTMLDivElement> {}
export interface DropdownMenuProps extends BaseProps, HTMLAttributes<HTMLUListElement> {}
export interface DropdownItemProps extends BaseProps, WithIcons, HTMLLiAttributes {
	hasSubMenu?: boolean;
}

export interface SidebarProps extends BaseProps, HTMLAttributes<HTMLUListElement> {}
export interface SidebarItemProps extends BaseProps, WithIcons, HTMLAnchorAttributes {
	href?: string;
}
export interface SideExtrasProps extends BaseProps, HTMLAttributes<HTMLDivElement> {}

export interface TextInputProps extends BaseProps, WithIcons, HTMLInputAttributes {}
