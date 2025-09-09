<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	import { getContext } from 'svelte';
	import { type ComboboxContextType } from './types.ts';
	import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
	import { baseVariant } from '$lib/style/base.js';
	import { TEXT_SIZE } from '$lib/style/sizing.js';
	import { Icon, PADDING_X } from '$lib/index.js';
	import type { ComboboxInputProps } from '$lib/types/index.ts';

	let { children, uiSize, uiRounded, class: _class, ...props }: ComboboxInputProps = $props();

	const context = getContext<ComboboxContextType>('comboboxContext');
	uiSize = context.uiSize;
	uiRounded = context.uiRounded;
	let style = tv({
		extend: baseVariant,
		base: ``,
		variants: {
			uiSize: TEXT_SIZE
		},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
	function handleInput(event: Event) {
		event.preventDefault();
		context.state.isExpanded = true;
		const target = event.target as HTMLInputElement;
		context.state.filterText = target.value;
	}

	function handleClick(event: MouseEvent) {
		event.preventDefault();
		console.log('hello');
		context.state.isExpanded = !context.state.isExpanded;
	}
	function handleKeyDown(event: KeyboardEvent) {
		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				if (context.state.isExpanded === false) {
					context.state.isExpanded = true;
					context.state.focusIndex = 0;
					return;
				}
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
				if (context.state.isExpanded) {
					context.state.checkedValue = context.filteredData()[context.state.focusIndex].value;
					context.state.value = null;
				}
				context.state.isExpanded = !context.state.isExpanded;
				break;
		}
	}
	const labelStyle = tv({
		extend: baseVariant,
		base: `combobox-input-container flex items-center  border border-gray-300`,
		variants: {
			uiPadding: PADDING_X
		}
	});
</script>

<label class={labelStyle({ uiRounded, uiPadding: uiSize })}>
	<input
		role="combobox"
		aria-activedescendant={context.state.highlightedElement?.getAttribute('id')}
		aria-expanded={context.state.isExpanded}
		aria-haspopup="listbox"
		aria-controls="combobox-options"
		autocomplete="off"
		class={finalClass}
		type="text"
		value={context.state.value ?? context.state.checkedValue}
		oninput={(event) => handleInput(event)}
		onclick={(event) => handleClick(event)}
		onkeydown={(event) => handleKeyDown(event)}
		{...props}
	/>

	<button class="text-xl" tabindex="-1" onclick={(event) => handleClick(event)}>
		<Icon icon={ChevronsUpDown} {uiSize} />
	</button>
</label>

<style>
	.combobox-input-container:focus-within {
		outline: 2px solid blue;
	}
	input:focus {
		outline: none;
		/* box-shadow: 0 0 0 2px blue; */
	}
</style>
