import type { RoundedVariant, SizeVariant } from '$lib/types/index.ts';

export type ComboboxContextType = {
	state: {
		isExpanded: boolean;
		value: string | null;
		checkedValue: string | null;
		filterText: string | null;
		focusIndex: number;
		highlightedElement: HTMLElement | null | undefined;
	};
	filteredData: () => { value: string; label: string }[];
	uiSize: SizeVariant;
	uiRounded: RoundedVariant;
};
