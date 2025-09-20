<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { setContext } from 'svelte';
	import type { ComboboxContextType } from './types.ts';
	import { clickOutside } from '$lib/utils/utils.ts';
	import type { ComboboxProps } from '$lib/types/index.ts';

	let { children, data, uiSize, uiRounded }: ComboboxProps = $props();
	let state = $state<{
		inputValue: string | null;
		inputLabel: string | null;
		selectedValue: string | number | null;
		selectedLabel: string | null;
		filterText: string | null;
		isExpanded: boolean;
		focusIndex: number;
		highlightedElement: HTMLElement | null | undefined;
	}>({
		inputValue: null,
		inputLabel: null,
		selectedValue: null,
		selectedLabel: null,
		filterText: null,
		isExpanded: false,
		focusIndex: -1,
		highlightedElement: null
	});

;

	function clearFilter() {
		state.filterText = null;
	}
	function setFilter(text: string) {
		state.focusIndex = 0;
		state.filterText = text;
	}
	function clearInput() {
		console.log('clear input called');
		state.inputValue = null;
		state.inputLabel = null;
	}
	function open() {
		state.isExpanded = true;
	}
	function close() {
		state.isExpanded = false;
	}
	function toggleExpand() {
		state.isExpanded = !state.isExpanded;
	}
	function setSelected({ value, label }: { value: string | number | null; label: string | null }) {
		state.selectedValue = value;
		state.selectedLabel = label;
	}

	function setInput({ value, label }: { value: string | null; label: string | null }) {
		state.inputValue = value;
		state.inputLabel = label;
	}
;
	let filteredData = $derived.by(() =>
		state.filterText
			? data.filter((option: { value: string; label: string }) =>
					option.label.toLowerCase().includes(state.filterText?.toLowerCase() ?? '')
				)
			: data
	);

	setContext('comboboxContext', {
		state,
		filteredData: () => filteredData,
		clearFilter,
		setFilter,
		clearInput,
		toggleExpand,
		open,
		close,
		setSelected,
		setInput,
		uiSize,
		uiRounded
	} as ComboboxContextType);

	function onclickOutside() {
		state.isExpanded = false;
	}
</script>

<div use:clickOutside={onclickOutside} class="w-fit">
	{@render children?.()}
</div>
