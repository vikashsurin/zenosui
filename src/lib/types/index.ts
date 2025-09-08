import type { Snippet, Component } from 'svelte';

import type { HTMLAttributes } from 'svelte/elements';

export type sizeTokens =
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

export type colorTokens =
	| 'none'
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'success'
	| 'warning'
	| 'danger';
export type positionTokens =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right'
	| 'center';

export type variants =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'success'
	| 'warning'
	| 'danger';

export type ColorVariant = colorTokens;
export type FillVariant = 'none' | 'filled' | 'outline' | 'ghost';
export type SizeVariant = sizeTokens;
export type PaddingVariant = 'none' | sizeTokens;
export type RoundedVariant = 'none' | sizeTokens | 'full';
export type BorderVariant = 'none' | sizeTokens;
export type PositionVariant = positionTokens;
export type Variant = variants;

export interface UiProps {
	/**
	 * The class name to apply to the component.
	 * Children will be rendered inside the component.
	 */

	children?: Snippet;
	/**
	 * Below are the user defined props
	 */
	ref?: any;
	uiBg?: ColorVariant;
	uiColor?: ColorVariant;
	uiSize?: SizeVariant;
	uiText?: SizeVariant;
	uiRounded?: RoundedVariant;
	uiFill?: FillVariant;
	uiBorder?: BorderVariant;
	uiPadding?: PaddingVariant;
	uiColorPreset?: ColorVariant;
	uiTheme?: string;
	themed?: boolean;
	uiVariant?: Variant;
}
export interface ComponentProps extends UiProps, HTMLAttributes<HTMLElement> {}

export interface StateProps {
	active?: boolean;
	loading?: boolean;
	error?: boolean;
	success?: boolean;
	checked?: boolean;
	invalid?: boolean;
	readonly?: boolean;
	disabled?: boolean;
	activeClass?: string;
}

export interface IconProps {
	icon?: Component;
	iconLeft?: Component | Snippet | null;
	iconRight?: Component;
	iconRotation?: string;
	iconLeftRotation?: string;
	iconRightRotation?: string;
	uiIconSize?: SizeVariant;
}

//=======================
// ATOMS
//=======================
export interface DivProps extends UiProps, HTMLAttributes<HTMLDivElement> {}

export interface LabelProps extends UiProps, HTMLAttributes<HTMLLabelElement> {}

export interface ListItemProps extends UiProps, IconProps, HTMLAttributes<HTMLLIElement> {}

export interface HrProps extends UiProps, HTMLAttributes<HTMLHRElement> {}

export interface HeadingProps extends UiProps, HTMLAttributes<HTMLHeadingElement> {}

export interface LinkProps extends UiProps, HTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

// =======================
// MAIN COMPONENTS
// =======================

type ButtonAsButton = UiProps &
	StateProps &
	IconProps &
	HTMLAttributes<HTMLButtonElement> & {
		href?: never;
		label?: string;
	};

type ButtonAsAnchor = UiProps &
	StateProps &
	IconProps &
	HTMLAttributes<HTMLAnchorElement> & {
		href?: string;
		label?: string;
	};

/**  button accepts uiSize, uiRounded, uiFill, uiColor **/
export type ButtonProps = ButtonAsButton | ButtonAsAnchor;
// export type   ButtonProps = Component<ButtonAsButton | ButtonAsAnchor> {}

export interface IconCompProps extends ComponentProps {
	icon: Component | Snippet | null;
	uiIconSize?: SizeVariant;
	iconRotation?: string; // e.g., 'rotate-45'
}

export interface IconButtonProps extends UiProps, HTMLAttributes<HTMLButtonElement> {
	icon: Component;
}
export interface SidebarProps extends UiProps, HTMLAttributes<HTMLUListElement> {}

export interface SidebarItemProps extends UiProps, IconProps, HTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

// export interface SideExtrasProps extends UiProps, HTMLAttributes<HTMLDivElement> {}

export interface TextInputProps extends UiProps, IconProps, HTMLAttributes<HTMLInputElement> {
	invalid?: boolean;
}

export interface AlertDialogProps extends UiProps, HTMLAttributes<HTMLDialogElement> {
	showModal?: boolean;
}

export interface AlertHeaderProps extends UiProps, HTMLAttributes<HTMLElement> {}

export interface AlertFooterProps extends UiProps, HTMLAttributes<HTMLElement> {}

export interface AlertTitleProps extends UiProps, HTMLAttributes<HTMLHeadingElement> {}

export interface AlertContentProps extends UiProps, HTMLAttributes<HTMLDivElement> {}

export interface DialogProps extends UiProps, HTMLAttributes<HTMLDialogElement> {
	backdrop?: boolean;
}

export interface DialogContentProps extends UiProps, HTMLAttributes<HTMLDivElement> {}

export interface DialogFooterProps extends UiProps, HTMLAttributes<HTMLElement> {}

export interface DialogHeaderProps extends UiProps, HTMLAttributes<HTMLElement> {}

export interface ToastProps extends ComponentProps {
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

// Menu
export type placement =
	| 'top'
	| 'bottom'
	| 'right'
	| 'left'
	| 'top-center'
	| 'bottom-center'
	| 'right-center'
	| 'left-center';

export interface MenuProps extends UiProps, HTMLAttributes<HTMLElement> {}

export interface MenuListProps extends UiProps, HTMLAttributes<HTMLUListElement> {
	placement?: placement;
}

export interface MenuItemProps extends UiProps, IconProps, HTMLAttributes<HTMLElement> {
	shortcut?: string;
	renderAsSubmenuTrigger?: boolean;
	value?: string;
	hasSubMenu?: boolean;
	label?: string;
	href?: string | null;
	checked?: boolean;
	type?: 'checkbox' | 'radio' | 'default';
}

export type MenuTriggerProps = ButtonProps;

export interface NavigationMenuProps extends UiProps, HTMLAttributes<HTMLElement> {}

export interface NavigationMenuListProps extends UiProps, HTMLAttributes<HTMLUListElement> {
	placement?: placement;
}

export interface NavigationMenuGroupProps extends UiProps, HTMLAttributes<HTMLLIElement> {}

export interface NavigationMenuItemProps
	extends UiProps,
		IconProps,
		HTMLAttributes<HTMLAnchorElement> {}

export interface NavigationMenuBarProps extends UiProps, HTMLAttributes<HTMLDivElement> {}

export type NavigationMenuTriggerProps = ButtonProps;

export interface NavigationListProps extends UiProps, HTMLAttributes<HTMLUListElement> {}

export interface NavigationListItemProps
	extends UiProps,
		StateProps,
		IconProps,
		HTMLAttributes<HTMLAnchorElement> {
	label?: string;
	hasList?: boolean;
	href?: string;
}
export interface RadioProps extends UiProps, HTMLAttributes<HTMLInputElement> {}
export interface RadioGroupProps extends UiProps, HTMLAttributes<HTMLDivElement> {}
export interface CheckboxProps extends UiProps, HTMLAttributes<HTMLInputElement> {
	checked?: boolean;
}
export interface AccordionProps extends UiProps, HTMLAttributes<HTMLDivElement> {}
export interface AccordionItemProps extends UiProps, HTMLAttributes<HTMLDivElement> {}
export interface AccordionTriggerProps
	extends UiProps,
		IconProps,
		HTMLAttributes<HTMLButtonElement> {
	label?: string;
}
export interface AccordionContentProps extends UiProps, HTMLAttributes<HTMLDivElement> {}

export interface SelectProps extends UiProps, HTMLAttributes<HTMLDivElement> {}
export interface SelectTriggerProps extends UiProps, IconProps, HTMLAttributes<HTMLButtonElement> {
	label?: string;
}

export interface SelectListProps extends UiProps, HTMLAttributes<HTMLUListElement> {
	placement?: placement;
}
export interface SelectOptionProps extends UiProps, HTMLAttributes<HTMLLIElement> {
	value: string;
}
export interface SwitchProps extends ComponentProps, StateProps {
	checked?: boolean;
	withBorder?: boolean;
}
export interface TooltipProps extends UiProps, HTMLAttributes<HTMLDivElement> {
	content?: string;
}

export interface TooltipPopupProps extends UiProps, HTMLAttributes<HTMLDivElement> {
	content?: string;
}

export type TabTriggerProps = ButtonProps;

export interface TabsProps extends DivProps {}
export interface TabBarProps extends DivProps {}
export interface TabContentProps extends DivProps {}

export interface MeterProps extends UiProps, HTMLAttributes<HTMLDivElement> {}
export interface MeterTrackProps extends UiProps, HTMLAttributes<HTMLDivElement> {}
export interface MeterIndicatorProps extends UiProps, HTMLAttributes<HTMLDivElement> {
	min?: number;
	max?: number;
	value?: number;
}
export interface WindowSplitterProps extends UiProps, HTMLAttributes<HTMLDivElement> {
	initialSplitPosition?: number; // Initial split position in percentage
	minLeftSplitPosition?: number; // Minimum left split position in percentage
	maxRightSplitPosition?: number; // Maximum right split position in percentage
}

export interface WindowSeparatorHandleProps extends UiProps, HTMLAttributes<HTMLDivElement> {}

export interface WindowLeftPaneProps extends UiProps, HTMLAttributes<HTMLDivElement> {}

export interface WindowRightPaneProps extends UiProps, HTMLAttributes<HTMLDivElement> {}

export interface ToasterProps extends UiProps, HTMLAttributes<HTMLUListElement> {
	position?: PositionVariant;
}

// PIN INPUT
export interface PinInputProps extends UiProps, HTMLAttributes<HTMLFormElement> {}

export interface PinInputControlProps extends UiProps, HTMLAttributes<HTMLDivElement> {}

export interface PinInputBoxProps extends UiProps, HTMLAttributes<HTMLDivElement> {
	value?: string | number;
}

// BREADCRUMB
export interface BreadcrumbProps extends UiProps, HTMLAttributes<HTMLElement> {}

export interface BreadcrumbListProps extends UiProps, HTMLAttributes<HTMLOListElement> {
	auto?: boolean;
	icon?: Component | Snippet | null;
	uiIconSize?: SizeVariant;
}
export interface BreadcrumbItemProps extends UiProps, HTMLAttributes<HTMLAnchorElement> {
	href?: string;
	separator?: Component | Snippet | null;
}
export interface BreadcrumbSeparatorProps extends ComponentProps {
	icon?: Component | Snippet | null;
	uiIconSize?: SizeVariant;
}
// COMBOBOX
export interface ComboboxProps extends UiProps {
	data: Array<{ value: string; label: string }>;
}
export interface ComboboxInputProps extends UiProps, HTMLAttributes<HTMLInputElement> {}
export interface ComboboxPopoverProps extends UiProps, HTMLAttributes<HTMLDivElement> {}
export interface ComboboxListProps extends UiProps, HTMLAttributes<HTMLUListElement> {
	children: any;
}

export interface ComboboxItemProps extends UiProps, HTMLAttributes<HTMLLIElement> {
	data: any;
	hasFocus?: boolean;
}
