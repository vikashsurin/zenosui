import type { RoundedVariant, SizeVariant } from '$lib/types/index.ts';

export type ComboboxContextType = {
	state: {
		showCombobox: boolean;
		value: string;
		filterText: string;
		focusIndex: number;
		highlightedElement: HTMLElement | null | undefined;
	};
	filteredData: () => { value: string; label: string }[];
	uiSize: SizeVariant;
	uiRounded: RoundedVariant;
};
