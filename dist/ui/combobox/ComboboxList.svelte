<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext } from 'svelte';
	import { type ComboboxContextType } from './types.js';
	import type { ComboboxListProps, ComboboxPopoverProps } from '../../types/index.js';
	import { PADDING } from '../../style/spacing.js';
	import { clickOutside } from '../../utils/index.js';
	let { children, class: _class, ...props }: ComboboxListProps = $props();
	const context = getContext<ComboboxContextType>('comboboxContext');
	let style = tv({
		base: ` overflow-y-auto `,
		variants: {},
		defaultVariants: {}
	});
	const filteredData = context.filteredData;
	const finalClass = $derived(style({ class: clsx(_class) }));

	$effect(() => {
		// To keep the focus element in view
		context.state.highlightedElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
	});

	const noMatchStyle = tv({
		base: `hover:bg-gray-200 cursor-pointer w-full flex items-center gap-2 py-4 flex items-center justify-center`,
		variants: {
			uiPadding: PADDING
		},
		defaultVariants: {}
	});
</script>

<ul id="combobox-options" class={finalClass} role="listbox" {...props}>
	<!-- <li class={noMatchStyle({ uiPadding: context.uiSize })}>
		<Icon icon={Search} uiSize={context.uiSize} class="float-left inline" />
		<input type="text" placeholder="search" />
	</li> -->
	{#each filteredData() as data, index}
		{@render children?.({ ...data, index, hasFocus: context.state.focusIndex === index })}
	{/each}

	{#if filteredData().length === 0}
		<li class={noMatchStyle()}>No results</li>
	{/if}
</ul>

<style>
	ul::-webkit-scrollbar {
		width: 10px;
	}
	ul::-webkit-scrollbar-track {
		background: #f2f2f2;
		border-radius: 5px;
	}
	ul::-webkit-scrollbar-thumb {
		background-color: gray;
		border-radius: 10px;
	}
	ul::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
</style>
