<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import {
		baseVariant,
		SIZE_PRESET,
		type RoundedVariant,
		type SizeVariant
	} from '$lib/style/index.js';
	import type { DropdownItemProps } from '$lib/types.js';
	import { Icon } from '$lib/ui/index.js';
	import { getContext, setContext } from 'svelte';

	let {
		hasSubMenu,
		children,
		uiRounded,
		uiSize,
		iconLeft,
		iconRight,
		class: _class,
		...props
	}: DropdownItemProps = $props();

	const ddmenucontext = getContext<{
		open: boolean;
		uiSize: SizeVariant;
		uiRounded: RoundedVariant;
	}>('dropdown');
	uiRounded = uiRounded ? uiRounded : ddmenucontext.uiRounded;
	uiSize = uiSize ? uiSize : ddmenucontext.uiSize;
	let submenu = $state({
		open: false
	});

	setContext('submenu', submenu);

	let style = tv({
		extend: baseVariant,
		base: `zu_menu_item px-3 hover:bg-gray-300 overflow-visible items-center justify-between inline-flex relative word-wrap`,
		variants: {
			uiSize: SIZE_PRESET
		},
		defaultVariants: {
			uiRounded: 'md',
			uiSize: 'sm'
		}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
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
		<Icon icon={iconLeft} {uiSize} />
	{/if}
	{#if children}
		{@render children?.()}
	{/if}
	<span role="tab" class="px-2"></span>
	{#if iconRight}
		<Icon icon={iconRight} {uiSize} />
	{/if}
</li>
