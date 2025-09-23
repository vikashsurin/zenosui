import type { RoundedVariant, SizeVariant } from '../../types/index.ts';
export type ComboboxContextType = {
    state: {
        isExpanded: boolean;
        inputValue: string | null;
        inputLabel: string | null;
        selectedValue: string | null;
        selectedLabel: string | null;
        filterText: string | null;
        focusIndex: number;
        highlightedElement: HTMLElement | null | undefined;
    };
    filteredData: () => {
        value: string;
        label: string;
    }[];
    setFilter: (text: string) => void;
    clearFilter: () => void;
    clearInput: () => void;
    toggleExpand: () => void;
    open: () => void;
    close: () => void;
    setSelected: ({ value, label }: {
        value: string | number | null;
        label: string | null;
    }) => void;
    setInput: ({ value, label }: {
        value: string | number | null;
        label: string | null;
    }) => void;
    uiSize: SizeVariant;
    uiRounded: RoundedVariant;
};
