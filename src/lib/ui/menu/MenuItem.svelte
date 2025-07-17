<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import {
		baseVariant,
		type RoundedVariant,
		SIZE_PRESET,
		type SizeVariant
	} from '$lib/style/index.js';
	import type { MenuItemProps } from '$lib/types.js';
	import { Icon } from '$lib/ui/index.js';
	import { getContext, setContext } from 'svelte';

	let {
		hasSubMenu,
		children,
		uiRounded,
		iconLeft,
		iconRight,
		uiSize,
		onclick,
		class: _class,
		...props
	}: MenuItemProps = $props();

	const menuContext = getContext<{
		open: boolean;
		uiSize: SizeVariant;
		uiRounded: RoundedVariant;
		toggleMenu: () => boolean;
	}>('dropdown');
	uiRounded = uiRounded ? uiRounded : menuContext.uiRounded;
	uiSize = uiSize ? uiSize : menuContext.uiSize;

	let style = tv({
		extend: baseVariant,
		base: `zu_menu_item px-3 hover:bg-gray-300 overflow-visible items-center justify-between inline-flex relative text-nowrap `,
		variants: {
			uiSize: SIZE_PRESET
		},
		defaultVariants: {
			uiRounded: 'none',
			uiSize: 'md'
		}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));

	let submenu = $state({
		open: false
	});

	setContext('submenu', submenu);

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

	function customFunc() {
		console.log('i was called');
		menuContext.toggleMenu();
	}
</script>

<li
	role="menuitem"
	class={finalClass}
	onmouseenter={handleOpenSubmenu}
	onmouseleave={handleCloseSubmenu}
	onclick={(e) => {
		customFunc();
		onclick?.(e);
	}}
	{...props}
>
	{#if iconLeft}
		<Icon icon={iconLeft} {uiSize} />
	{/if}
	{#if children}
		{@render children?.()}
	{/if}
	{#if iconRight}
		<Icon icon={iconRight} {uiSize} />
	{/if}
</li>
