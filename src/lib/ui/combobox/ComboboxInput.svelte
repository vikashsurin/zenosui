<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	import { getContext } from 'svelte';
	import { type ComboboxContextType } from './types.ts';
	import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
	import { baseVariant } from '$lib/style/base.js';
	import { TEXT_SIZE_WITH_PADDING } from '$lib/style/sizing.js';
	import { IconButton } from '$lib/index.js';
	import type { ComboboxInputProps } from '$lib/types/index.ts';

	let { children, uiSize, uiRounded, class: _class, ...props }: ComboboxInputProps = $props();

	const context = getContext<ComboboxContextType>('comboboxContext');
	uiSize = context.uiSize;
	uiRounded = context.uiRounded;
	let style = tv({
		extend: baseVariant,
		base: ``,
		variants: {
			uiSize: TEXT_SIZE_WITH_PADDING
		},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
	function handleInput(event: Event) {
		event.preventDefault();
		const target = event.target as HTMLInputElement;
		context.state.filterText = target.value;
	}

	function handleClick(event: MouseEvent) {
		context.state.focusIndex = -1;
		event.preventDefault();
		const target = event.currentTarget as HTMLElement;
		const parentElement = target.parentElement;
		let input = parentElement?.querySelector('input');
		input?.focus();

		context.state.showCombobox = !context.state.showCombobox;
	}
	function handleKeyDown(event: KeyboardEvent) {
		console.log('keydown');
		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				// if (context.state.showCombobox === false) {
				// 	context.state.showCombobox = true;
				// 	context.state.focusIndex = 0;
				// 	return;
				// }
				if (context.state.focusIndex >= context.filteredData().length - 1) return;
				context.state.focusIndex += 1;
				context.state.value = context.filteredData()[context.state.focusIndex].label;
				// context.state.value
				// Focus the next option
				break;
			case 'ArrowUp':
				event.preventDefault();
				if (context.state.focusIndex <= 0) return;
				context.state.focusIndex -= 1;
				context.state.value = context.filteredData()[context.state.focusIndex].label;
				// Focus the previous option
				break;
			case 'Enter':
				// Select the focused option

				event.preventDefault();
				context.state.showCombobox = !context.state.showCombobox;
				break;
		}
	}
	const contStyle = tv({
		extend: baseVariant,
		base: `combobox-input-container flex items-center  border border-gray-300`
	});
</script>

<div class={contStyle({ uiRounded })}>
	<input
		class={finalClass}
		list="combobox-options"
		type="text"
		value={context.state.value}
		oninput={(event) => handleInput(event)}
		onclick={(event) => handleClick(event)}
		onkeydown={(event) => handleKeyDown(event)}
		{...props}
	/>
	<span class="pr-2">
		<IconButton
			{uiSize}
			tabIndex={-1}
			{uiRounded}
			icon={ChevronsUpDown}
			onclick={(event) => handleClick(event)}
		></IconButton>
	</span>
</div>

<style>
	.combobox-input-container:focus-within {
		outline: 2px solid blue;
	}
	input:focus {
		outline: none;
		/* box-shadow: 0 0 0 2px blue; */
	}
</style>
