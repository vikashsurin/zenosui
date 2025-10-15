import type { Snippet, Component } from 'svelte';

import type * as Type from 'svelte/elements';

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

export type roundTokens =
	| 'none'
	| 'xs'
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| 'full';
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

export type variants = 'solid' | 'filled' | 'outlined' | 'dashed' | 'ghost' | 'link';

export type ColorVariant = colorTokens;
export type FillVariant = 'none' | 'filled' | 'outline' | 'ghost';
export type SizeVariant = sizeTokens;
export type PaddingVariant = 'none' | sizeTokens;
export type RoundedVariant = roundTokens;
export type BorderVariant = 'none' | sizeTokens;
export type PositionVariant = positionTokens;
export type Variant = variants;
export type ThemeVariant = 'light' | 'dark';
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
	uiColor?: ColorVariant | string;
	uiSize?: SizeVariant;
	uiText?: SizeVariant;
	uiRounded?: RoundedVariant;
	uiFill?: FillVariant;
	uiBorder?: BorderVariant;
	uiPadding?: PaddingVariant;
	uiColorPreset?: ColorVariant;
	uiTheme?: ThemeVariant;
	themed?: boolean;
	uiVariant?: Variant;
}
export interface ComponentProps extends UiProps, Type.HTMLAttributes<HTMLElement> {}

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
export interface DivProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}

export interface LabelProps extends UiProps, Type.HTMLAttributes<HTMLLabelElement> {}

export interface ListItemProps extends UiProps, IconProps, Type.HTMLAttributes<HTMLLIElement> {
	label?: string;
}

export interface HrProps extends UiProps, Type.HTMLAttributes<HTMLHRElement> {}

export interface HeadingProps extends UiProps, Type.HTMLAttributes<HTMLHeadingElement> {}

export interface LinkProps extends UiProps, Type.HTMLAttributes<HTMLAnchorElement> {
	href?: string;
}
export interface InputProps extends UiProps, Type.HTMLInputAttributes {}
// =======================
// MAIN COMPONENTS
// =======================

type ButtonAsButton = UiProps &
	StateProps &
	IconProps &
	Type.HTMLAttributes<HTMLButtonElement> & {
		href?: never;
		label?: string;
	};

type ButtonAsAnchor = UiProps &
	StateProps &
	IconProps &
	Type.HTMLAttributes<HTMLAnchorElement> & {
		href?: string;
		label?: string;
	};

/**  button accepts uiSize, uiRounded, uiFill, uiColor **/
export type ButtonProps = ButtonAsButton | ButtonAsAnchor;
// export type   ButtonProps = Component<ButtonAsButton | ButtonAsAnchor> {}

export interface IconCompProps extends ComponentProps {
	icon: Component | Snippet | null | undefined;
	uiIconSize?: SizeVariant;
	iconRotation?: string; // e.g., 'rotate-45'
}

export interface IconButtonProps extends UiProps, Type.HTMLAttributes<HTMLButtonElement> {
	icon: Component;
}
export interface SidebarProps extends UiProps, Type.HTMLAttributes<HTMLUListElement> {}

export interface SidebarItemProps
	extends UiProps,
		IconProps,
		Type.HTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

// export interface SideExtrasProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}

export interface TextInputProps extends UiProps, IconProps, Type.HTMLInputAttributes {
	invalid?: boolean;
}

export interface AlertDialogProps extends UiProps, Type.HTMLInputAttributes {
	showModal?: boolean;
	open?: boolean;
}

export interface AlertHeaderProps extends UiProps, Type.HTMLAttributes<HTMLElement> {}

export interface AlertFooterProps extends UiProps, Type.HTMLAttributes<HTMLElement> {}

export interface AlertTitleProps extends UiProps, Type.HTMLAttributes<HTMLHeadingElement> {}

export interface AlertContentProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}

export interface DialogProps extends UiProps, Type.HTMLAttributes<HTMLDialogElement> {
	backdrop?: boolean;
	open?: boolean;
}

export interface DialogContentProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}

export interface DialogFooterProps extends UiProps, Type.HTMLAttributes<HTMLElement> {}

export interface DialogHeaderProps extends UiProps, Type.HTMLAttributes<HTMLElement> {}

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

export interface MenuProps extends UiProps, Type.HTMLAttributes<HTMLElement> {}

export interface MenuListProps extends UiProps, Type.HTMLAttributes<HTMLUListElement> {
	placement?: placement;
}

export interface MenuItemProps extends UiProps, IconProps, Type.HTMLAttributes<HTMLElement> {
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

export interface NavigationMenuProps extends UiProps, Type.HTMLAttributes<HTMLElement> {}

export interface NavigationMenuListProps extends UiProps, Type.HTMLAttributes<HTMLUListElement> {
	placement?: placement;
}

export interface NavigationMenuGroupProps extends UiProps, Type.HTMLAttributes<HTMLLIElement> {}

export interface NavigationMenuItemProps
	extends UiProps,
		IconProps,
		Type.HTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

export interface NavigationMenuBarProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}

export type NavigationMenuTriggerProps = ButtonProps;

// export interface NavigationListProps extends UiProps, Type.HTMLAttributes<HTMLUListElement> {}

// export interface NavigationListItemProps
// 	extends UiProps,
// 		StateProps,
// 		IconProps,
// 		Type.HTMLAttributes<HTMLAnchorElement> {
// 	label?: string;
// 	hasList?: boolean;
// 	href?: string;
// }
export interface RadioProps extends UiProps, Type.HTMLInputAttributes {}
export interface RadioGroupProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}
export interface CheckboxProps extends UiProps, Type.HTMLInputAttributes {
	checked?: boolean;
}
export interface AccordionProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}
export interface AccordionItemProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}
export interface AccordionTriggerProps
	extends UiProps,
		IconProps,
		Type.HTMLAttributes<HTMLButtonElement> {
	label?: string;
	iconRightOpen?: Snippet | Component | undefined;
	iconRightClose?: Snippet | Component | undefined;
}
export interface AccordionContentProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}

export interface SelectProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}
export interface SelectTriggerProps
	extends UiProps,
		IconProps,
		Type.HTMLAttributes<HTMLButtonElement> {
	label?: string;
}

export interface SelectListProps extends UiProps, Type.HTMLAttributes<HTMLUListElement> {
	placement?: placement;
}
export interface SelectOptionProps extends UiProps, Type.HTMLAttributes<HTMLLIElement> {
	value: string;
}
export interface SwitchProps extends ComponentProps, StateProps {
	checked?: boolean;
	withBorder?: boolean;
}
export interface TooltipProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {
	content?: string;
}

export interface TooltipPopupProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {
	content?: string;
}

export type TabTriggerProps = ButtonProps;

export interface TabsProps extends DivProps {}
export interface TabBarProps extends DivProps {}
export interface TabContentProps extends DivProps {}

export interface MeterProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}
export interface MeterTrackProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}
export interface MeterIndicatorProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {
	min?: string | number;
	max?: string | number;
	value?: string | number;
}
export interface WindowSplitterProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {
	initialSplitPosition?: number; // Initial split position in percentage
	minLeftSplitPosition?: number; // Minimum left split position in percentage
	maxRightSplitPosition?: number; // Maximum right split position in percentage
}

export interface WindowSeparatorHandleProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}

export interface WindowLeftPaneProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}

export interface WindowRightPaneProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}

export interface ToasterProps extends UiProps, Type.HTMLAttributes<HTMLUListElement> {
	position?: PositionVariant;
}

// PIN INPUT
export interface PinInputProps extends UiProps, Type.HTMLAttributes<HTMLFormElement> {}

export interface PinInputControlProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {
	onlyNumbers?: boolean;
}

export interface PinInputBoxProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {
	value?: string | number;
}

// BREADCRUMB
export interface BreadcrumbProps extends UiProps, Type.HTMLAttributes<HTMLElement> {}

export interface BreadcrumbListProps extends UiProps, Type.HTMLAttributes<HTMLOListElement> {
	auto?: boolean;
	icon?: Component | Snippet | null;
	uiIconSize?: SizeVariant;
}
export interface BreadcrumbItemProps extends UiProps, Type.HTMLAttributes<HTMLAnchorElement> {
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
// export interface ComboboxInputProps extends UiProps, Type.HTMLInputAttributes {}
export interface ComboboxInputProps extends UiProps, Type.HTMLInputAttributes {
	editable?: boolean;
}

export interface ComboboxPopoverProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}
export interface ComboboxListProps extends UiProps, Type.HTMLAttributes<HTMLUListElement> {
	children: any;
}

export interface ComboboxItemProps extends UiProps, StateProps, Type.HTMLAttributes<HTMLLIElement> {
	data: any;
	checkMark?: Snippet | Component;
}

// Input Range
export interface RangeInputProps extends UiProps, Type.HTMLInputAttributes {
	uiTrackBg?: string;
	uiThumbBg?: string;
}

// Tree view
export interface TreeViewProps extends UiProps, Type.HTMLAttributes<HTMLUListElement> {
	uiIndent?: SizeVariant;
}
export interface TreeviewItemProps extends UiProps, Type.HTMLLiAttributes {
	label?: string;
	iconLeftOpen?: Snippet | Component;
	iconLeftClose?: Snippet | Component;
	iconRightOpen?: Snippet | Component;
	iconRightClose?: Snippet | Component;
}

//CARD
export interface CardProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}
export interface CardHeaderProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}
export interface CardBodyProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends UiProps, Type.HTMLAttributes<HTMLDivElement> {}

//  CHIP
export interface ChipProps extends UiProps, IconProps, Type.HTMLAttributes<HTMLDivElement> {
	label?: string;
}

// NAVIGATION LIST
export interface NavigationListProps extends UiProps, Type.HTMLAttributes<HTMLUListElement> {}

export interface NavigationListItemProps
	extends UiProps,
		StateProps,
		IconProps,
		Type.HTMLAnchorAttributes {
	iconLeftOpen?: Snippet | Component;
	iconLeftClose?: Snippet | Component;
	iconRightOpen?: Snippet | Component;
	iconRightClose?: Snippet | Component;
	label?: string;
	href?: string;
}
