export type subMenuContextType = {
	subMenuState: {
		get subMenuId(): string;
		get isOpen(): boolean;
		get focusFirstMenuItem(): boolean;
		open(): void;
		close(): void;
		setFirstMenuItemFocus(value: boolean): void;
		get focusSubMenuTrigger(): boolean;
		setSubMenuTriggerFocus(value: boolean): void;
	};
};

export type DropdownMenuContextType = {
	menuId: string;
	dropdownMenuState: {
		get isOpen(): boolean;
		open(): void;
		close(): void;
		toggleOpen(): void;
		focusTrigger(): void;
	};
};
export type DropdownMenuContentContextType = {
	get leftSpaced(): boolean;
	set leftSpaced(value: boolean);
};
export type MenuBarContextType = {
	menuBarState: {
		get activeMenuId(): string | null;
		get anyOpen(): boolean;
		openMenuId(id: string): void;
		closeMenuId(id: string): void;
		closeAll(): void;
		isOpen(id: string): boolean;
		focusNextTrigger(): void;
		focusPrevTrigger(): void;
		focusRecentTrigger(): void;
	};
};

export type MenuRadioGroupContextType = {
	radioGroupState: {
		get value(): string | number | string[] | null | undefined;
		setValue(val: string | number | string[] | null | undefined): void;
		get name(): string | null | undefined;
	};
};
