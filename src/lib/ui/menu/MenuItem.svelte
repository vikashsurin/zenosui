<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant, ICON_PLACEHOLDER_SIZE, SIZE_PRESET } from '$lib/style/index.js';
	import type { MenuItemProps, SizeVariant } from '$lib/types/index.js';
	import { Icon } from '$lib/ui/index.js';
	import { getContext, setContext, tick, type Component } from 'svelte';
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
		base: `zu_menu_item px-3 hover:bg-gray-300 overflow-visible items-center inline-flex  relative text-nowrap w-full `,
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
		submenu.open = true;
	}

	function handleCloseSubmenu() {
		submenu.open = false;
	}
	let active = $state(false);

	function handleClick() {
		active = true;
		menuContext.closeMenu();
		if (menuBarContext) {
			menuBarContext.state.openMenuId = null;
			menuBarContext.state.isMenuBarActive = false;
		}
		// e.stopPropagation();
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
		if (radioMenuContext) {
			radioMenuContext.setRadioValue(radioValue);
		}
	}
	let menuitem: HTMLElement | undefined;
	let menu: HTMLElement | undefined | null;
	async function handleKeyDown(e: KeyboardEvent) {
		e.preventDefault();

		menu = menuitem?.closest('[role="menu"][data-menu-type="main"]');
		const menuItems: NodeListOf<HTMLElement> | undefined =
			menu?.querySelectorAll('[role="menuitem"]');

		if (!menuItems) return;
		const menuItemsArray: HTMLElement[] = Array.from(menuItems);
		const currentIndex = menuItemsArray.findIndex((item) => item === menuitem);
		switch (e.key) {
			case 'ArrowDown':
				handleArrowDown(menuitem);
				break;
			case 'ArrowUp':
				handleArrowUp(menuitem);
				break;
			case 'Enter':
				focusFirstSubmenuItem(menuitem);
				break;
			case ' ':
				menuitem?.click();
				break;
			case 'ArrowRight':
				if (menuitem?.hasAttribute('data-submenu-trigger')) {
					focusFirstSubmenuItem(menuitem);
					return;
				} else {
					const menuTriggers = getMenuTriggers(menuitem);
					const menuTriggerArray = Array.from(menuTriggers!);
					const currentTriggerIndex = getCurrentIndex(menuTriggerArray);
					const nextIndex = (currentTriggerIndex + 1) % menuTriggerArray.length;
					menuTriggerArray[nextIndex].focus();
				}
				break;
			case 'ArrowLeft':
				if (await handleArrowLeft(menuitem)) {
					return;
				}

				const menuTriggers = getMenuTriggers(menuitem);
				const menuTriggerArray = Array.from(menuTriggers!);
				const currentIdx = getCurrentIndex(menuTriggerArray);
				const prevTriggerIndex =
					(currentIdx - 1 + menuTriggerArray.length) % menuTriggerArray.length;
				menuTriggerArray[prevTriggerIndex].focus();
				break;
			case 'Escape':
				const currentTrigger: HTMLElement | null | undefined = getCurrentTrigger();
				if (currentTrigger) {
					currentTrigger.focus();
					currentTrigger.click();
				}
		}
	}
	const handleArrowDown = async (menuitem: HTMLElement | undefined) => {
		const menu = menuitem?.closest('[role="menu"]');
		const menuItems: NodeListOf<HTMLElement> | undefined = menu?.querySelectorAll(
			':scope > li > [role="menuitem"]'
		);
		const itemsArray: HTMLElement[] = Array.from(menuItems!);
		const currentIndex = itemsArray.findIndex((item) => item === menuitem);
		const nextIndex = (currentIndex + 1) % itemsArray.length;
		itemsArray[nextIndex].focus();
	};

	const handleArrowUp = async (menuitem: HTMLElement | undefined) => {
		const menu = menuitem?.closest('[role="menu"]');
		const menuItems: NodeListOf<HTMLElement> | undefined = menu?.querySelectorAll(
			':scope > li > [role="menuitem"]'
		);
		const itemsArray: HTMLElement[] = Array.from(menuItems!);
		const currentIndex = itemsArray.findIndex((item) => item === menuitem);
		const prevIndex = (currentIndex - 1 + itemsArray.length) % itemsArray.length;
		itemsArray[prevIndex].focus();
	};
	const handleArrowLeft = async (menuitem: HTMLElement | undefined) => {
		if (!menuitem) return;
		const submenu = menuitem.closest('[role="menu"][data-menu-type="sub"]');
		await tick();
		if (submenu) {
			const submenuTrigger: HTMLElement = submenu.previousElementSibling as HTMLElement;
			if (submenuTrigger) {
				submenuTrigger?.focus();

				console.log(submenuTrigger);
				submenuTrigger?.click();
			}
			return true;
		}
		return false;
	};

	const focusFirstSubmenuItem = async (menuitem: HTMLElement | undefined) => {
		if (!menuitem) return;
		menuitem.click();
		await tick();
		const submenu = menuitem.nextElementSibling;
		const submenuItems: NodeListOf<HTMLElement> | undefined =
			submenu?.querySelectorAll('[role="menuitem"]');
		submenuItems?.[0]?.focus();
	};

	const getMenuTriggers = (menuitem: HTMLElement | undefined) => {
		const menubar = menuitem?.closest('[role="menubar"]');
		const menuTriggers: NodeListOf<HTMLElement> | undefined = menubar?.querySelectorAll(
			'[role="menuitem"][data-menu-trigger]'
		);
		return menuTriggers;
	};

	const getCurrentIndex = (menuTriggerArray: HTMLElement[]) => {
		const currentTrigger = getCurrentTrigger();
		const index = menuTriggerArray.findIndex((item) => item === currentTrigger);
		return index;
	};
	const getCurrentTrigger = () => {
		return menu?.parentElement?.querySelector(
			'[role="menuitem"][data-menu-trigger]'
		) as HTMLElement;
	};

	const role: 'menuitem' | 'menuitemcheckbox' | 'menuitemradio' =
		type === 'default' ? 'menuitem' : type === 'checkbox' ? 'menuitemcheckbox' : 'menuitemradio';

	let finalIconPlaceholder = $derived(iconPlaceholder({ size: uiSize }));

	const submenuContext = getContext('submenuContext');
	const isSubmenuItem = submenuContext !== undefined ? true : false;

	const dataMenuLevel = isSubmenuItem ? '1' : '0';
</script>

{#if renderAsSubmenuTrigger}
	{@render menumenuItemsnippet({ href })}
{:else}
	<li role="none" class="flex">
		{@render menumenuItemsnippet({ href })}
	</li>
{/if}

{#snippet menumenuItemsnippet({ href }: { href?: string | null })}
	{@const as = !href ? 'button' : 'a'}
	<svelte:element
		this={as}
		data-menu-level={dataMenuLevel}
		bind:this={menuitem}
		{role}
		{href}
		data-themed={themed}
		data-checked={checked}
		data-value={radioValue}
		class={finalClass}
		class:list={themed}
		onmouseenter={handleOpenSubmenu}
		onmouseleave={handleCloseSubmenu}
		onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
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
			<span style={`width:1em; height:1em;`}></span>
		{/if}
		<!-- render children -->
		{@render children?.()}
		{#if shortcut}
			<span class="ml-auto text-inherit opacity-50">{shortcut}</span>
		{:else if iconRight}
			<Icon icon={iconRight} {uiSize} class="menuItems-center ml-auto flex" />
		{:else}
			<span style="width:1em; height:1em, margin-left:auto;"></span>
		{/if}
	</svelte:element>
{/snippet}

<!-- onpointerdown={(e) => handlePointerDown(e)}
onpointerup={(e) => handlePointerUp(e)} -->
