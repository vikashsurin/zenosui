export type subMenuContextType = {
	subMenuState: {
		get subMenuId(): string;
		get isOpen(): boolean;
		get shouldFocusFirstItem(): boolean;
		open(): void;
		close(): void;
		requestFocusFirstItem(value: boolean): void;
		get shouldFocusTrigger(): boolean;
		requestFocusTrigger(value: boolean): void;
	};
};

export type MenuContextType = {
	menuId: string;
	close: () => void;
	isOpen: () => boolean;
};

export type MenuContentContextType = {
	get leftSpaced(): boolean;
	set leftSpaced(value: boolean);
};

export type MenubarContextType = {
	menuBarState: {
		get activeMenuId(): string | null;
		get hasOpenMenu(): boolean;
		openMenuId(id: string): void;
		closeMenuId(id: string): void;
		closeAll(): void;
		isOpen(id: string): boolean;
		focusNextTrigger(): void;
		focusPrevTrigger(): void;
		focusLastFocusedTrigger(): void;
	};
};

export type MenuRadioGroupContextType = {
	radioGroupState: {
		get value(): string | number | string[] | null | undefined;
		setValue(val: string | number | string[] | null | undefined): void;
		get name(): string | null | undefined;
	};
};
