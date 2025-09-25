<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext } from 'svelte';
	import { type ComboboxContextType } from './types.js';
	import { baseVariant } from '$lib/style/base.js';
	import { TEXT_SIZE_WITH_PADDING } from '$lib/style/sizing.js';
	import type { ComboboxItemProps } from '$lib/types/index.js';
	import { Icon } from '$lib/ui/index.js';
	import Check from '@lucide/svelte/icons/check';
	let {
		children,
		uiSize,
		activeClass,
		data,
		checkMark,
		class: _class,
		...props
	}: ComboboxItemProps = $props();

	const context = getContext<ComboboxContextType>('comboboxContext');
	uiSize = context.uiSize;
	let style = tv({
		extend: baseVariant,
		base: `hover:bg-gray-200`,
		variants: {
			uiSize: TEXT_SIZE_WITH_PADDING
		},

		defaultVariants: {
			uiSize: 'sm'
		}
	});

	let element: HTMLElement;
	function handleClick() {
		// context.state.inputValue = null;
		context.clearInput();
		context.setSelected({ value: data.value, label: data.label });

		context.close();
		context.state.focusIndex = data.index;
	}
	$effect(() => {
		if (data.hasFocus) {
			context.state.highlightedElement = element;
		}
	});
	const finalClass = $derived(
		style({ uiSize, class: clsx(_class, data.hasFocus ? activeClass : '') })
	);
</script>

<li
	id={`option-${data.index}`}
	bind:this={element}
	role="option"
	class={finalClass}
	aria-selected="false"
	value={data.value}
	class:combobox_item_focus={data.hasFocus}
	tabindex="0"
	onclick={() => handleClick()}
	onkeydown={(e) => {
		if (e.key === 'Enter') {
			handleClick();
		}
	}}
	{...props}
>
	{data.label}
	{#if checkMark && context.state.selectedValue === data.value}
		<Icon icon={checkMark} class="float-right inline" />
	{:else if !checkMark && context.state.selectedValue === data.value}
		<Icon icon={Check} class="float-right inline" />
	{/if}
</li>
