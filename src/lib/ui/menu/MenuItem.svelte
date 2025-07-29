<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import {
		baseVariant,
		ICON_PLACEHOLDER_SIZE,
		type RoundedVariant,
		SIZE_PRESET,
		type SizeVariant
	} from '$lib/style/index.js';
	import type { MenuItemProps } from '$lib/types/index.js';
	import { Icon } from '$lib/ui/index.js';
	import { getContext, setContext } from 'svelte';
	import { type MenuContextType } from './types.js';

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

	const menuContext = getContext<MenuContextType>('menuContext');
	uiRounded = uiRounded ? uiRounded : menuContext.uiRounded;
	uiSize = uiSize ? uiSize : menuContext.uiSize;

	let style = tv({
		extend: baseVariant,
		base: `zu_menu_item px-3 hover:bg-gray-300 overflow-visible items-center  inline-flex relative text-nowrap `,
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

	setContext('subMenuContext', submenu);

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

	function handleClick(e: MouseEvent) {
		e.stopPropagation();

		// if (!hasSubMenu) menuContext.toggleMenu();
	}

	let iconPlaceholder = tv({
		base: ``,
		variants: {
			size: ICON_PLACEHOLDER_SIZE
		},

		defaultVariants: {
			size: uiSize
		}
	});

	let finalIconPlaceholder = $derived(iconPlaceholder({ size: uiSize }));
</script>

<li
	role="menuitem"
	class={finalClass}
	onmouseenter={handleOpenSubmenu}
	onmouseleave={handleCloseSubmenu}
	onclick={(e) => {
		handleClick(e);
		onclick?.(e);
	}}
	{...props}
>
	{#if iconLeft}
		<Icon icon={iconLeft} {uiSize} />
	{:else}
		<div class={finalIconPlaceholder}></div>
	{/if}

	{#if children}
		{@render children?.()}
	{/if}
	{#if iconRight}
		<Icon icon={iconRight} {uiSize} class="ml-auto" />
	{:else}
		<div class={`${finalIconPlaceholder} ml-auto`}></div>
	{/if}
</li>
