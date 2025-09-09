<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { setContext } from 'svelte';
	import type { ComboboxContextType } from './types.ts';
	import { clickOutside } from '$lib/utils/utils.ts';
	import type { ComboboxProps } from '$lib/types/index.ts';

	let { children, data, uiSize, uiRounded }: ComboboxProps = $props();
	let state = $state({
		value: '',
		checked: {
			value: null,
			label: null
		},
		filterText: '',
		isExpanded: false,
		focusIndex: -1,
		highlightedElement: null
	});
	// $effect(() => {
	// 	if (!state.isExpanded) {
	// 		state.highlightedElement = null;
	// 	}
	// });
	$inspect({ state });
	let filteredData = $derived.by(() =>
		state.filterText
			? data.filter((option: { value: string; label: string }) =>
					option.label.toLowerCase().includes(state.filterText.toLowerCase())
				)
			: data
	);
	$inspect('state value', state.value);
	setContext('comboboxContext', {
		state,
		filteredData: () => filteredData,
		uiSize,
		uiRounded
	} as ComboboxContextType);

	function onclickOutside() {
		state.isExpanded = false;
	}
</script>

<div use:clickOutside={onclickOutside} class="w-fit">
	{#if children}
		{@render children?.()}
	{/if}
</div>
