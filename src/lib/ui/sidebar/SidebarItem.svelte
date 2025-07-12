<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import {
		baseVariant,
		SIZE_PRESET,
		type RoundedVariant,
		type SizeVariant
	} from '$lib/style/variant.js';
	import type { SidebarItemProps } from '$lib/types.js';
	import { Icon } from '$lib/ui/index.js';
	import { getContext } from 'svelte';

	let {
		href,
		children,
		roundedVariant,
		sizeVariant,
		iconLeft,
		iconRight,
		class: _class,
		...props
	}: SidebarItemProps = $props();

	const sidebarContext = getContext<{ sizeVariant: SizeVariant; roundedVariant: RoundedVariant }>('sidebar');
	sizeVariant = sizeVariant ? sizeVariant : sidebarContext.sizeVariant;
	roundedVariant = roundedVariant ? roundedVariant : sidebarContext.roundedVariant;

	let style = tv({
		extend: baseVariant,
		base: ` px-3 hover:bg-gray-300  w-full  items-center inline-flex  `,
		variants: {
			sizeVariant: SIZE_PRESET
		},
		defaultVariants: {
			roundedVariant: 'md',
			sizeVariant: 'sm'
		}
	});
	const finalClass = $derived(style({ sizeVariant, roundedVariant, class: clsx(_class) }));
</script>

<li role="navigation">
	<a {href} class={finalClass} {...props}>
		{#if iconLeft}
			<Icon icon={iconLeft} {sizeVariant} />
		{/if}
		{#if children}
			{@render children?.()}
		{/if}
		<span role="tab" class="px-2"></span>
		{#if iconRight}
			<Icon icon={iconRight} {sizeVariant} />
		{/if}
	</a>
</li>
