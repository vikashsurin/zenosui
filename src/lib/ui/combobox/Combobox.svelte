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
		filterText: '',
		showCombobox: false,
		focusIndex: -1,
		highlightedElement: null
	});

	$inspect('s', state.highlightedElement);

	let filteredData = $derived.by(() =>
		state.filterText
			? data.filter((option: { value: string; label: string }) =>
					option.label.toLowerCase().includes(state.filterText.toLowerCase())
				)
			: data
	);

	setContext('comboboxContext', {
		state,
		filteredData: () => filteredData,
		uiSize,
		uiRounded
	} as ComboboxContextType);

	function onclickOutside() {
		state.showCombobox = false;
	}
</script>

<div use:clickOutside={onclickOutside} class="w-fit">
	{#if children}
		{@render children?.()}
	{/if}
</div>
