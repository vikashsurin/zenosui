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

export type MenuContextType = {
	menuId: string;
	close: () => void;
	isOpen: () => boolean;
};

export type MenuBarContextType = {
	menuBarState: {
		activeMenuId: string;
		openMenuId(id: string): void;
		closeMenuId(id: string): void;
		closeAll(): void;
		isOpen(id: string): boolean;
		get focusFirstMenuItem(): boolean;
		setFirstMenuItemFocus(): void;
		resetFirstMenuItemFocus(): void;
	};
};
