<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant, SIZE_PRESET } from '$lib/style/index.js';
	import type { RoundedVariant, SidebarItemProps, SizeVariant } from '$lib/types/index.js';
	import { Icon } from '$lib/ui/index.js';
	import { getContext } from 'svelte';

	let {
		href,
		children,
		uiRounded,
		themed = true,
		uiSize,
		iconLeft,
		iconRight,
		class: _class,
		...props
	}: SidebarItemProps = $props();

	const sidebarContext = getContext<{ uiSize: SizeVariant; uiRounded: RoundedVariant }>('sidebar');
	uiSize = uiSize ? uiSize : sidebarContext.uiSize;
	uiRounded = uiRounded ? uiRounded : sidebarContext.uiRounded;

	let style = tv({
		extend: baseVariant,
		base: ` px-3 hover:bg-gray-300  w-full  items-center inline-flex  `,
		variants: {
			uiSize: SIZE_PRESET
		},
		defaultVariants: {
			uiRounded: 'md',
			uiSize: 'sm'
		}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
</script>

<li role="navigation" class="zu_sidebar_item">
	<a data-themed={themed} class:interactive_list={themed} {href} class={finalClass} {...props}>
		{#if iconLeft}
			<Icon icon={iconLeft} {uiSize} />
		{/if}
		{#if children}
			{@render children?.()}
		{/if}
		<span role="tab" class="px-2"></span>
		{#if iconRight}
			<Icon icon={iconRight} {uiSize} />
		{/if}
	</a>
</li>
