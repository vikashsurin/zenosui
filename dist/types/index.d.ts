import type { Snippet, Component } from 'svelte';
import type { SizePresetVariant, RoundedVariant, Variant, TextSizeVariant, ColorVariant, BorderVariant, BackgroundColor, ContentColor, PaddingVariant, SizeVariant } from '../style/types.js';
import type { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes, HTMLDialogAttributes, HTMLInputAttributes, HTMLLabelAttributes, HTMLLiAttributes } from 'svelte/elements';
export interface BaseProps {
    /**
     * The class name to apply to the component.
     * Children will be rendered inside the component.
     */
    children?: Snippet;
    /**
     * Below are the user defined props
     */
    ref?: any;
    uiBg?: BackgroundColor;
    uiColor?: ContentColor;
    uiSize?: SizePresetVariant;
    uiText?: TextSizeVariant;
    uiRounded?: RoundedVariant;
    uiVariant?: Variant;
    uiBorder?: BorderVariant;
    uiPadding?: PaddingVariant;
    uiColorPreset?: ColorVariant;
    activeClass?: string;
}
export interface BasePropsExtended extends BaseProps {
    class?: string;
}
export interface WithStateProps {
    active?: boolean;
    loading?: boolean;
    error?: boolean;
    success?: boolean;
    checked?: boolean;
    invalid?: boolean;
    readonly?: boolean;
}
export interface WithIconProps {
    icon?: Component;
    iconLeft?: Component;
    iconRight?: Component;
    uiIconSize?: SizeVariant;
    uiIconRotate?: string;
}
export interface DivProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface LabelProps extends BaseProps, HTMLLabelAttributes {
}
export interface ListItemProps extends BaseProps, WithIconProps, HTMLLiAttributes {
}
export interface HrProps extends BaseProps, HTMLAttributes<HTMLHRElement> {
}
export interface HeadingProps extends BaseProps, HTMLAttributes<HTMLHeadingElement> {
}
export interface LinkProps extends BaseProps, HTMLAnchorAttributes {
    href?: string;
}
type ButtonAsButton = BaseProps & WithStateProps & WithIconProps & HTMLButtonAttributes & {
    href?: undefined | null;
    label?: string;
};
type ButtonAsAnchor = BaseProps & WithStateProps & WithIconProps & HTMLAnchorAttributes & {
    href?: string;
    label?: string;
};
export type ButtonProps = ButtonAsButton | ButtonAsAnchor;
export interface IconProps extends BasePropsExtended {
    icon: Component;
    uiIconSize?: SizeVariant;
    uiIconRotate?: string;
}
export interface IconButtonProps extends BaseProps, HTMLButtonAttributes {
    icon: Component;
}
export interface SidebarProps extends BaseProps, HTMLAttributes<HTMLUListElement> {
}
export interface SidebarItemProps extends BaseProps, WithIconProps, HTMLAnchorAttributes {
    href?: string;
}
export interface TextInputProps extends BaseProps, WithIconProps, HTMLInputAttributes {
    invalid?: boolean;
}
export interface AlertDialogProps extends BaseProps, HTMLDialogAttributes {
    showModal?: boolean;
}
export interface AlertHeaderProps extends BaseProps, HTMLAttributes<HTMLElement> {
}
export interface AlertFooterProps extends BaseProps, HTMLAttributes<HTMLElement> {
}
export interface AlertTitleProps extends BaseProps, HTMLAttributes<HTMLHeadingElement> {
}
export interface AlertContentProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface DialogProps extends BaseProps, HTMLDialogAttributes {
    backdrop?: boolean;
}
export interface DialogContentProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface DialogFooterProps extends BaseProps, HTMLAttributes<HTMLElement> {
}
export interface DialogHeaderProps extends BaseProps, HTMLAttributes<HTMLElement> {
}
export interface ToastProps extends BasePropsExtended {
    id?: string;
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    dismissible?: boolean;
    position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
    action?: {
        label: string;
        handler: () => void;
    };
    onClose?: () => void;
}
export type placement = 'top' | 'bottom' | 'right' | 'left' | 'top-center' | 'bottom-center' | 'right-center' | 'left-center';
export interface MenuProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface MenuListProps extends BaseProps, HTMLAttributes<HTMLUListElement> {
    placement?: placement;
}
export interface MenuItemProps extends BaseProps, WithIconProps, HTMLLiAttributes {
    hasSubMenu?: boolean;
}
export type MenuTriggerProps = ButtonProps;
export interface NavigationMenuProps extends BaseProps, HTMLAttributes<HTMLElement> {
}
export interface NavigationMenuListProps extends BaseProps, HTMLAttributes<HTMLUListElement> {
    placement?: placement;
}
export interface NavigationMenuGroupProps extends BaseProps, HTMLLiAttributes {
}
export interface NavigationMenuItemProps extends BaseProps, WithIconProps, HTMLAnchorAttributes {
}
export interface NavigationMenuBarProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export type NavigationMenuTriggerProps = ButtonProps;
export interface NavigationListProps extends BaseProps, HTMLAttributes<HTMLUListElement> {
}
export interface NavigationListItemProps extends BaseProps, WithIconProps, HTMLAnchorAttributes {
    href?: string;
}
export interface RadioProps extends BaseProps, HTMLInputAttributes {
}
export interface CheckboxProps extends BaseProps, HTMLInputAttributes {
    checked?: boolean;
}
export interface AccordionProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface AccordionItemProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface AccordionTriggerProps extends BaseProps, WithIconProps, HTMLButtonAttributes {
    label?: string;
}
export interface AccordionContentProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface SelectProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface SelectTriggerProps extends BaseProps, WithIconProps, HTMLButtonAttributes {
    label?: string;
}
export interface SelectListProps extends BaseProps, HTMLAttributes<HTMLUListElement> {
    placement?: placement;
}
export interface SelectOptionProps extends BaseProps, HTMLLiAttributes {
    value: string;
}
export interface SwitchProps extends BaseProps, HTMLButtonAttributes {
    checked?: boolean;
    withBorder?: boolean;
}
export interface TooltipProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
    content?: string;
}
export interface TooltipPopupProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
    content?: string;
}
export interface TabTriggerProps extends BaseProps, WithStateProps, HTMLButtonAttributes {
}
export interface TabsProps extends DivProps {
}
export interface TabBarProps extends DivProps {
}
export interface TabContentProps extends DivProps {
}
export interface MeterProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface MeterTrackProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface MeterIndicatorProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
    min?: number;
    max?: number;
    value?: number;
}
export interface WindowSplitterProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
    initialSplitPosition?: number;
    minLeftSplitPosition?: number;
    maxRightSplitPosition?: number;
}
export interface WindowSeparatorHandleProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface WindowLeftPaneProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export interface WindowRightPaneProps extends BaseProps, HTMLAttributes<HTMLDivElement> {
}
export {};
