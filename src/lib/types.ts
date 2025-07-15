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
} from './style/types.js';

import type {
	HTMLAnchorAttributes,
	HTMLAttributes,
	HTMLButtonAttributes,
	HTMLDialogAttributes,
	HTMLInputAttributes,
	HTMLLabelAttributes,
	HTMLLiAttributes
} from 'svelte/elements';
//
// export type UiPropTypes =
// 	| 'uiSize' // Component size preset
// 	| 'uiVariant' // Style variant (outline, filled, ghost)
// 	| 'uiText' // Text size
// 	| 'uiColor' // Text color
// 	| 'uiBg' // Background color
// 	| 'uiBorder' // Border width
// 	| 'uiBorderColor' // Border color
// 	| 'uiRounded' // Border radius
// 	| 'uiPadding' // Padding
// 	| 'uiMargin' // Margin
// 	| 'uiGap' // Gap for flex/grid
// 	| 'uiShadow' // Box shadow
// 	| 'uiOpacity' // Opacity level
// 	| 'uiIconSize' // Icon sizing
// 	| 'uiDuration' // Animation duration
// 	| 'uiDisplay' // Display type
// 	| 'uiPosition' // Position type
// 	| 'uiZIndex' // Z-index
// 	| 'uiCursor' // Cursor type
// 	| 'uiOverflow'; // Overflow behavior

export interface BaseProps {
	/**
	 * The class name to apply to the component.
	 * Children will be rendered inside the component.
	 */

	children?: Snippet;
	/**
	 * Below are the user defined props
	 */
	uiBg?: BackgroundColor;
	uiColor?: ContentColor;
	uiSize?: SizePresetVariant;
	uiText?: TextSizeVariant;
	uiRounded?: RoundedVariant;
	uiVariant?: Variant;
	border?: BorderVariant;
	padding?: PaddingVariant;
	uiColorPreset?: ColorVariant;
}

export interface BasePropsExtended extends BaseProps {
	class?: string;
}

export interface WithStateProps {
	active?: boolean;
	loading?: boolean;
	disabled?: boolean;
	error?: boolean;
	success?: boolean;
	checked?: boolean;
	invalid?: boolean;
	readonly?: boolean;
	autofocus?: boolean;
}

export interface WithIconsProps {
	icon?: Component;
	iconLeft?: Component;
	iconRight?: Component;
}

//=======================
// ATOMS
//=======================
export interface DivProps extends BaseProps, HTMLAttributes<HTMLDivElement> {}

export interface LabelProps extends BaseProps, HTMLLabelAttributes {}

export interface ListItemProps extends BaseProps, HTMLLiAttributes {}

export interface HrProps extends BaseProps, HTMLAttributes<HTMLHRElement> {}

export interface HeadingProps extends BaseProps, HTMLAttributes<HTMLHeadingElement> {}

export interface LinkProps extends BaseProps, HTMLAnchorAttributes {
	href?: string;
}

// =======================
// MAIN COMPONENTS
// =======================

type ButtonAsButton = BaseProps &
	WithStateProps &
	WithIconsProps &
	HTMLButtonAttributes & {
		href?: undefined | null;
		label?: string;
	};

type ButtonAsAnchor = BaseProps &
	WithStateProps &
	WithIconsProps &
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

export interface DropdownItemProps extends BaseProps, WithIconsProps, HTMLLiAttributes {
	hasSubMenu?: boolean;
}

export interface SidebarProps extends BaseProps, HTMLAttributes<HTMLUListElement> {}

export interface SidebarItemProps extends BaseProps, WithIconsProps, HTMLAnchorAttributes {
	href?: string;
}

// export interface SideExtrasProps extends BaseProps, HTMLAttributes<HTMLDivElement> {}

export interface TextInputProps extends BaseProps, WithIconsProps, HTMLInputAttributes {
	invalid?: boolean;
}

export interface AlertDialogProps extends BaseProps, HTMLDialogAttributes {
	showModal?: boolean;
}

export interface AlertHeaderProps extends BaseProps, HTMLAttributes<HTMLElement> {}

export interface AlertFooterProps extends BaseProps, HTMLAttributes<HTMLElement> {}

export interface AlertTitleProps extends BaseProps, HTMLAttributes<HTMLHeadingElement> {}

export interface AlertContentProps extends BaseProps, HTMLAttributes<HTMLDivElement> {}

export interface DialogProps extends BaseProps, HTMLDialogAttributes {
	backdrop?: boolean;
}

export interface DialogContentProps extends BaseProps, HTMLAttributes<HTMLDivElement> {}

export interface DialogFooterProps extends BaseProps, HTMLAttributes<HTMLElement> {}

export interface DialogHeaderProps extends BaseProps, HTMLAttributes<HTMLElement> {}

export interface ToastProps extends BasePropsExtended {
	id?: string;
	message: string;
	type?: 'success' | 'error' | 'warning' | 'info';
	duration?: number;
	dismissible?: boolean;
	position?:
		| 'top-left'
		| 'top-right'
		| 'top-center'
		| 'bottom-left'
		| 'bottom-right'
		| 'bottom-center';
	action?: {
		label: string;
		handler: () => void;
	};
	onClose?: () => void;
}
