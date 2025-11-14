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

export type ContextMenuContextType = {
	menuId: string;
	ContextMenuState: {
		get isOpen(): boolean;
		get menuPosition(): { x: number; y: number };
		open(): void;
		close(): void;
		toggleOpen(): void;
		focusTrigger(): void;
		setMenuPosition(position: { x: number; y: number }): void;
	};
};

export type ContextMenuContentContextType = {
	get leftSpaced(): boolean;
	set leftSpaced(value: boolean);
};

export type MenuRadioGroupContextType = {
	radioGroupState: {
		get value(): string | number | string[] | null | undefined;
		setValue(val: string | number | string[] | null | undefined): void;
		get name(): string | null | undefined;
	};
};
