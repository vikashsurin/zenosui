<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant, ICON_PLACEHOLDER_SIZE, SIZE_PRESET } from '$lib/style/index.js';
	import type { MenuItemProps, SizeVariant } from '$lib/types/index.js';
	import { Icon } from '$lib/ui/index.js';
	import { getContext, setContext, type Component } from 'svelte';
	import {
		type MenuBarContextType,
		type MenuContextType,
		type RadioMenuContextType
	} from './types.js';
	import Check from '@lucide/svelte/icons/check';
	import Dot from '@lucide/svelte/icons/dot';

	let {
		themed = true,
		renderAsSubmenuTrigger = false,
		type = 'default',
		children,
		shortcut,
		uiRounded,
		iconLeft,
		checked = $bindable(),
		iconRight,
		value: radioValue,
		label,
		uiSize,
		href,
		class: _class,
		...props
	}: MenuItemProps = $props();
	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	const menuContext = getContext<MenuContextType>('menuContext');

	uiSize = uiSize ? uiSize : menuContext.uiSize;
	uiRounded = uiRounded ? uiRounded : menuContext.uiRounded;

	const radioMenuContext = getContext<RadioMenuContextType>('radioMenuContext');

	let style = tv({
		extend: baseVariant,
		base: `zu_menu_item px-3 hover:bg-gray-300   overflow-visible items-center inline-flex  relative text-nowrap w-full `,
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
		// if (hasSubMenu) {
		submenu.open = true;
		// }
	}

	function handleCloseSubmenu() {
		// if (hasSubMenu) {
		submenu.open = false;
		// }
	}
	let active = $state(false);
	function handleClick(e: MouseEvent) {
		active = true;
		menuContext.closeMenu();
		if (menuBarContext) {
			menuBarContext.state.openMenuId = null;
			menuBarContext.state.isMenuBarActive = false;
		}
		// e.stopPropagation();
		// console.log('I was called');
		// menuContext.setActiveMenu({ _id: null, type: 'click' });
		// if (!hasSubMenu) menuContext.toggleMenu();
	}
	$effect(() => {
		if (children !== null) {
		}
	});
	function isChecked(e: MouseEvent) {
		if (type !== 'default') {
			checked = !checked;
		}
	}

	let iconPlaceholder = tv({
		base: `rounded-full`,
		variants: {
			size: ICON_PLACEHOLDER_SIZE
		},

		defaultVariants: {
			size: uiSize
		}
	});
	// function handlePointerDown(e: MouseEvent) {
	// 	e.stopPropagation();
	// 	active = true;
	// }
	// function handlePointerUp(e: MouseEvent) {
	// 	e.stopPropagation();
	// 	active = false;
	// }

	function setRadioValue(e: MouseEvent) {
		// console.log('set radio called');
		// console.log('radioValue ', radioValue);
		// console.log('radioValue ctx', radioMenuContext.value);
		if (radioMenuContext) {
			radioMenuContext.setRadioValue(radioValue);
		}
	}

	const role: 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' =
		type === 'default' ? 'menuitem' : type === 'checkbox' ? 'menuitemcheckbox' : 'menuitemradio';

	let finalIconPlaceholder = $derived(iconPlaceholder({ size: uiSize }));
</script>

{#if renderAsSubmenuTrigger}
	{@render menuitemSnippet({ href })}
{:else}
	<li role="none" class="flex">
		{@render menuitemSnippet({ href })}
	</li>
{/if}

{#snippet menuitemSnippet({ href }: { href?: string | null })}
	{@const as = !href ? 'button' : 'a'}
	<svelte:element
		this={as}
		{role}
		{href}
		data-themed={themed}
		data-checked={checked}
		data-value={radioValue}
		class={finalClass}
		class:list={themed}
		onmouseenter={handleOpenSubmenu}
		onmouseleave={handleCloseSubmenu}
		onclick={(e: MouseEvent) => {
			handleClick(e);
			setRadioValue(e);
			isChecked(e);
		}}
		{...props}
	>
		{#if iconLeft && type === 'default'}
			<Icon icon={iconLeft} {uiSize} />
		{:else if type === 'checkbox' && checked}
			<Icon icon={Check} {uiSize} class="" />
		{:else if type === 'radio' && radioMenuContext.value === radioValue}
			<Icon icon={Dot} class="scale-130" {uiSize} />
		{:else}
			<span class={`${finalIconPlaceholder} `}></span>
		{/if}
		<!-- render children -->
		{@render children?.()}
		{#if shortcut}
			<span class="ml-auto text-inherit opacity-50">{shortcut}</span>
		{:else if iconRight}
			<Icon icon={iconRight} {uiSize} class="ml-auto flex items-center" />
		{:else}
			<div class={`${finalIconPlaceholder} ml-auto`}></div>
		{/if}
	</svelte:element>
{/snippet}

<!-- onpointerdown={(e) => handlePointerDown(e)}
onpointerup={(e) => handlePointerUp(e)} -->
