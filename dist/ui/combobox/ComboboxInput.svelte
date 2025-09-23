<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	import { getContext } from 'svelte';
	import { type ComboboxContextType } from './types.ts';
	import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
	import { baseVariant } from '../../style/base.js';
	import { TEXT_SIZE } from '../../style/sizing.js';
	import { Icon, PADDING_X } from '../../index.js';
	import type { ComboboxInputProps } from '../../types/index.ts';
	import Search from '@lucide/svelte/icons/search';

	let {
		children,
		uiSize,
		uiRounded,
		editable,
		class: _class,
		...props
	}: ComboboxInputProps = $props();

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

		context.setInput({ value: target.value, label: null });

		context.setFilter(target.value);
	}
	let searchInput = $state<HTMLInputElement>();

	function handleClick(event: MouseEvent) {
		event.preventDefault();
		context.toggleExpand();
		context.clearFilter();
	}

	$effect(() => {
		if (!editable && context.state.isExpanded) {
			searchInput?.focus();
		}
	});
	function handleKeyDown(event: KeyboardEvent) {
		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();

				if (context.state.isExpanded === false) {
					context.open();
					context.state.focusIndex = 0;
					return;
				}

				if (context.state.focusIndex >= context.filteredData().length - 1) return;
				context.state.focusIndex += 1;
				context.setInput({
					value: context.filteredData()[context.state.focusIndex].value,
					label: context.filteredData()[context.state.focusIndex].label
				});
				break;
			case 'ArrowUp':
				event.preventDefault();
				if (context.state.focusIndex <= 0) return;
				context.state.focusIndex -= 1;

				context.setInput({
					value: context.filteredData()[context.state.focusIndex].value,
					label: context.filteredData()[context.state.focusIndex].label
				});

				break;
			case 'Enter':
				// Select the focused option

				event.preventDefault();
				if (context.filteredData().length === 0) {
					console.log('zero');
					// context.setInput({
					// 	value: context.state.filterText,
					// 	label: context.state.filterText
					// });
					context.setSelected({
						value: null,
						label: null
					});
				} else if (context.state.isExpanded && context.state.focusIndex >= 0) {
					context.setSelected({
						value: context.filteredData()[context.state.focusIndex].value,
						label: context.filteredData()[context.state.focusIndex].label
					});
					context.clearFilter();
					context.clearInput();
				}

				context.toggleExpand();
				break;
			case 'Escape':
				event.preventDefault();
				context.state.isExpanded = false;
				break;
			default:
				break;
		}
	}
	const labelStyle = tv({
		extend: baseVariant,
		base: `combobox-input-container focus-within:ring-2 flex items-center  border border-gray-300`,
		variants: {
			uiPadding: PADDING_X
		}
	});
	const searchLabelStyle = tv({
		extend: baseVariant,
		base: ` gap-2 opacity-50  flex items-center `,
		variants: {
			uiPadding: PADDING_X
		}
	});
	const searchInputStyle = tv({
		extend: baseVariant,
		base: `border-none focus:ring-0  outline-0`,
		variants: {
			uiSize: TEXT_SIZE
		}
	});
</script>

<label class={labelStyle({ uiRounded, uiPadding: uiSize })}>
	<input
		type="text"
		value={context.state.inputValue ?? context.state.selectedValue}
		hidden
		name={props.name}
	/>
	<input
		readonly={!editable}
		role="combobox"
		aria-activedescendant={context.state.highlightedElement?.getAttribute('id')}
		aria-expanded={context.state.isExpanded}
		aria-haspopup="listbox"
		aria-controls="combobox-options"
		autocomplete="off"
		class={finalClass}
		type="text"
		value={context.state.inputLabel ?? context.state.selectedLabel ?? context.state.filterText}
		oninput={(event) => handleInput(event)}
		onclick={(event) => handleClick(event)}
		onkeydown={(event) => handleKeyDown(event)}
		{...props}
	/>

	<button class="text-xl" tabindex="-1" onclick={(event) => handleClick(event)}>
		<Icon icon={ChevronsUpDown} {uiSize} />
	</button>
</label>

{#if !editable && context.state.isExpanded}
	<label class={searchLabelStyle({ uiRounded, uiPadding: uiSize })}>
		<Icon icon={Search} {uiSize} />
		<input
			bind:this={searchInput}
			autocapitalize="on"
			autocomplete="off"
			class={searchInputStyle({ uiSize })}
			type="text"
			placeholder="Type to search..."
			value={context.state.inputLabel}
			oninput={(event) => handleInput(event)}
			onkeydown={(event) => handleKeyDown(event)}
			{...props}
		/>
	</label>
{/if}

<style>
	input:focus {
		outline: none;
	}
</style>
