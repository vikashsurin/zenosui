<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { innerHeight } from 'svelte/reactivity/window';
	import { baseVariant } from '$lib/style/index.js';
	import type { MenuProps } from '$lib/types/index.js';
	import { getContext, setContext, tick } from 'svelte';
	import { type MenuBarContextType, type MenuContextType } from './types.ts';

	let { children, uiSize, uiRounded, class: _class, ...props }: MenuProps = $props();

	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	uiRounded = uiRounded ? uiRounded : menuBarContext?.uiRounded;
	uiSize = uiSize ? uiSize : menuBarContext?.uiSize;

	const id = crypto.randomUUID();

	type MenuStateType = {
		menuId: string;
		open: boolean;
		isSubmenuOpen: boolean;
	};

	const state: MenuStateType = $state({
		menuId: id,
		open: false,
		isSubmenuOpen: false
	});

	function openMenu() {
		state.open = true;
	}

	function closeMenu() {
		state.open = false;
	}
	function toggleMenu() {
		state.open = !state.open;
	}
	let menu: HTMLElement;
	setContext('menuContext', {
		state,
		toggleMenu,
		openMenu,
		closeMenu,
		uiRounded,
		uiSize,
		menu
	} as MenuContextType);

	$effect(() => {
		if (menuBarContext) {
			menuBarContext.state.openMenuId !== id ? closeMenu() : openMenu();
		}
	});

	let style = tv({
		extend: baseVariant,
		base: `relative  w-fit`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));

	// $effect(() => {
	// 	const screenHeight =
	// 		innerHeight.current !== undefined
	// 			? innerHeight.current
	// 			: typeof window !== 'undefined'
	// 				? window.innerHeight
	// 				: 0;
	//
	// 	const dd = menu_cont.querySelector('.zu_menu') as HTMLUListElement | null;
	// 	if (dd && dd.parentNode instanceof HTMLElement) {
	// 		const parentSize = dd.parentNode.getBoundingClientRect();
	// 		if (parentSize.bottom + dd.clientHeight > screenHeight) {
	// 			dd.style.top = 'auto';
	// 			dd.style.bottom = '100%';
	// 		} else {
	// 			dd.style.top = '100%';
	// 			dd.style.bottom = 'auto';
	// 		}
	// 	}
	// });

	let menuTriggers: NodeListOf<HTMLElement> | undefined;
	let menuItems: NodeListOf<HTMLElement> | undefined;
	let menuItemsArray: HTMLElement[];
	$effect(() => {
		menuTriggers = menu.parentElement?.querySelectorAll('li >[role="menuitem"]');
	});

	$effect(() => {
		if (state.open) {
			shouldFocusFirstItem();
		}
	});

	async function shouldFocusFirstItem() {
		menuItems = menu.querySelectorAll('[role="menu"] > li > [role="menuitem"]');
		menuItemsArray = Array.from(menuItems);
		menuItemsArray[0].focus();
	}

	function handleKeyDown(e: KeyboardEvent) {
		console.log(e);
		e.preventDefault();

		const target = e.target as HTMLElement;
		const menuTriggerArray = Array.from(menuTriggers!);
		const menuItemsCount = menuItemsArray?.length || 0;
		console.log('ee');
		// Early return if no menu triggers
		// if (!menuTriggerArray.length) return;

		// Determine current element type and index
		const triggerIndex = menuTriggerArray.findIndex((item) => item === target);
		const isMenuTrigger = triggerIndex !== -1;

		let itemIndex = -1;
		let isMenuItem = false;
		if (menuItemsArray) {
			itemIndex = menuItemsArray.findIndex((item) => item === target);
			isMenuItem = itemIndex !== -1;
		}

		// Helper functions
		const focusNextTrigger = (currentIndex: number) => {
			const nextIndex = (currentIndex + 1) % menuTriggerArray.length;
			menuTriggerArray[nextIndex].focus();
		};

		const focusPrevTrigger = (currentIndex: number) => {
			const prevIndex = (currentIndex - 1 + menuTriggerArray.length) % menuTriggerArray.length;
			menuTriggerArray[prevIndex].focus();
		};

		const getTriggerIndexFromMenuItem = (): number => {
			const menuId = target.getAttribute('data-menu-item');
			const currentTrigger = menuTriggerArray.find(
				(item) => item.getAttribute('data-menu-trigger') === menuId
			);
			return currentTrigger ? menuTriggerArray.indexOf(currentTrigger) : -1;
		};

		switch (e.key) {
			case 'ArrowRight': {
				if (isMenuItem) {
					if (target.hasAttribute('aria-haspopup')) return;
					const currentTriggerIndex = getTriggerIndexFromMenuItem();
					if (currentTriggerIndex !== -1) {
						focusNextTrigger(currentTriggerIndex);
					}
				} else if (isMenuTrigger) {
					focusNextTrigger(triggerIndex);
				}
				break;
			}

			case 'ArrowLeft': {
				if (isMenuItem) {
					const currentTriggerIndex = getTriggerIndexFromMenuItem();
					if (currentTriggerIndex !== -1) {
						focusPrevTrigger(currentTriggerIndex);
					}
				} else if (isMenuTrigger) {
					focusPrevTrigger(triggerIndex);
				}
				break;
			}

			case 'Enter': {
				target.click();
				console.log('clicked');
				break;
			}

			case ' ': {
				target.click();
				break;
			}

			case 'ArrowDown': {
				console.log('arrow donw');

				// Open menu if closed
				if (!state.open && isMenuTrigger) {
					target.click();
					return;
				}

				// Navigate within menu items
				if (isMenuItem && menuItemsCount > 0) {
					const nextIndex = (itemIndex + 1) % menuItemsCount;
					menuItemsArray[nextIndex].focus();
				}
				break;
			}

			case 'ArrowUp': {
				// Navigate within menu items
				if (isMenuItem && menuItemsCount > 0) {
					const prevIndex = (itemIndex - 1 + menuItemsCount) % menuItemsCount;
					menuItemsArray[prevIndex].focus();
				}
				break;
			}
		}
	}
	// async function openMenuAndFocusFirstItem() {
	// 	await tick();
	// 	menuItems = menu.querySelectorAll('[role="menu"] > li > [role="menuitem"]');
	// 	menuItemsArray = Array.from(menuItems);
	// 	menuItemsArray[0].focus();
	// }
</script>

{#if menuBarContext}
	<li role="none" {id} class={finalClass} {...props} bind:this={menu}>
		{@render children?.()}
	</li>
{:else}
	<ul class={finalClass} {...props}>
		<li bind:this={menu}>
			{#if children}
				{@render children?.()}
			{/if}
		</li>
	</ul>
{/if}

<!-- onkeydown={(e: KeyboardEvent) => handleKeyDown(e)} -->
