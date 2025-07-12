<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import {
		baseVariant,
		SIZE_PRESET,
		type RoundedVariant,
		type SizeVariant
	} from '$lib/style/variant.js';
	import type { DropdownItemProps } from '$lib/types.js';
	import { Icon } from '$lib/ui/index.js';
	import { getContext, setContext } from 'svelte';

	let {
		hasSubMenu,
		children,
		roundedVariant,
		sizeVariant,
		iconLeft,
		iconRight,
		class: _class,
		...props
	}: DropdownItemProps = $props();

	const ddmenucontext = getContext<{ open: boolean; sizeVariant: SizeVariant; roundedVariant: RoundedVariant }>(
		'dropdown'
	);
	roundedVariant = roundedVariant ? roundedVariant : ddmenucontext.roundedVariant;
	sizeVariant = sizeVariant ? sizeVariant : ddmenucontext.sizeVariant;
	let submenu = $state({
		open: false
	});

	setContext('submenu', submenu);

	let style = tv({
		extend: baseVariant,
		base: `zu_menu_item px-3 hover:bg-gray-300 overflow-visible items-center justify-between inline-flex relative word-wrap`,
		variants: {
			sizeVariant: SIZE_PRESET
		},
		defaultVariants: {
			roundedVariant: 'md',
			sizeVariant: 'sm'
		}
	});
	const finalClass = $derived(style({ sizeVariant, roundedVariant, class: clsx(_class) }));
	function handleOpenSubmenu() {
		if (hasSubMenu) {
			submenu.open = true;
		}
	}
	function handleCloseSubmenu() {
		if (hasSubMenu) {
			submenu.open = false;
		}
	}
</script>

<li
	role="menuitem"
	class={finalClass}
	{...props}
	onmouseenter={handleOpenSubmenu}
	onmouseleave={handleCloseSubmenu}
>
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
</li>
