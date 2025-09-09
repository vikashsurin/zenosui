<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext } from 'svelte';
	import { type ComboboxContextType } from './types.ts';
	import type { ComboboxListProps, ComboboxPopoverProps } from '$lib/types/index.ts';

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
</script>

<ul id="combobox-options" class={finalClass} role="listbox" {...props}>
	{#each filteredData() as data, index}
		{@render children?.({ ...data, index, hasFocus: context.state.focusIndex === index })}
	{/each}
</ul>
