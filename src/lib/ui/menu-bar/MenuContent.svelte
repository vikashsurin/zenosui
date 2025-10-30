<script lang="ts">
	import { getContext, tick } from 'svelte';
	import { type MenuBarContextType, type MenuContextType } from './types.ts';
	let { children } = $props();

	const menuContext = getContext<MenuContextType>('menuContext');
	const menuBarContext = getContext<MenuBarContextType>('menuBarContext');
	const id = menuContext.menuId;

	let menu = $state<HTMLElement>();
	let items: HTMLElement[] = $state([]);

	function updateItems() {
		if (menu) {
			items = Array.from(menu.querySelectorAll(':scope > li > [role="menuitem"]:not([disabled])'));
		}
	}

	function focusFirstItem() {
		if (items.length > 0) {
			items[0].focus();
			menuBarContext?.menuBarState.resetFirstMenuItemFocus();
		}
	}

	function focusLastItem() {
		if (items.length > 0) {
			items[items.length - 1].focus();
		}
	}

	function focusNextItem() {
		if (items.length === 0) return;

		const currentIndex = items.findIndex((item) => item === document.activeElement);
		const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % items.length;
		items[nextIndex].focus();
	}

	function focusPrevItem() {
		if (items.length === 0) return;

		const currentIndex = items.findIndex((item) => item === document.activeElement);
		const prevIndex =
			currentIndex === -1 ? items.length - 1 : (currentIndex - 1 + items.length) % items.length;
		items[prevIndex].focus();
	}

	function hasSubmenu(element: HTMLElement): boolean {
		return element.hasAttribute('aria-haspopup') || element.hasAttribute('data-has-submenu');
	}

	function openSubmenu(element: HTMLElement) {
		// console.log('opening submenu');
		// Trigger submenu open - this depends on your submenu implementation
		// You might need to dispatch a custom event or call a method
		const submenuId = element.getAttribute('data-submenu-id');
		console.log({ submenuId });
		if (submenuId) {
			console.log('opening submenu');
			element.click(); // or whatever opens your submenu
			// After opening, focus should move to first item of submenu
		}
	}

	function closeCurrentMenu() {
		menuContext.close();
	}

	function isTopLevelMenu(): boolean {
		// Check if this is a top-level menu (attached to menubar) or a submenu
		return menuBarContext !== null && menuBarContext !== undefined;
	}

	// Typeahead search functionality
	let searchString = $state('');
	let searchTimeout: ReturnType<typeof setTimeout> | null = null;

	function searchByCharacter(char: string) {
		searchString += char.toLowerCase();

		if (searchTimeout) clearTimeout(searchTimeout);
		searchTimeout = setTimeout(() => {
			searchString = '';
		}, 500);

		const currentIndex = items.findIndex((item) => item === document.activeElement);
		const startIndex = currentIndex + 1;

		for (let i = 0; i < items.length; i++) {
			const index = (startIndex + i) % items.length;
			const item = items[index];
			const text = item.textContent?.toLowerCase() || '';

			if (text.startsWith(searchString)) {
				item.focus();
				return;
			}
		}
	}

	$effect(() => {
		if (menu && menuContext.isOpen()) {
			tick().then(() => {
				updateItems();

				if (menuBarContext?.menuBarState.focusFirstMenuItem) {
					focusFirstItem();
				}
			});
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (!menuContext.isOpen()) return;

		const focusedElement = document.activeElement as HTMLElement;

		// Handle printable characters for typeahead
		if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
			e.preventDefault();
			searchByCharacter(e.key);
			return;
		}

		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault();
				focusNextItem();
				break;

			case 'ArrowUp':
				e.preventDefault();
				focusPrevItem();
				break;

			case 'ArrowRight':
				// If current item has a submenu, open it
				if (focusedElement && hasSubmenu(focusedElement)) {
					e.preventDefault();
					e.stopPropagation(); // Prevent menubar from handling this
					// openSubmenu(focusedElement);
					return;
				}
				// Otherwise, let it bubble up to menubar (for top-level menus)
				// or do nothing (for submenus)
				else if (!isTopLevelMenu()) {
					e.preventDefault(); // Prevent bubbling in submenus
				}
				break;

			case 'ArrowLeft':
				// If this is a submenu, close it and return focus to parent
				if (!isTopLevelMenu()) {
					e.preventDefault();
					e.stopPropagation();
					closeCurrentMenu();
				}
				// Otherwise let it bubble to menubar to go to previous menu
				break;

			case 'Home':
				e.preventDefault();
				focusFirstItem();
				break;

			case 'End':
				e.preventDefault();
				focusLastItem();
				break;

			case 'Tab':
				menuContext.close();
				break;

			case ' ':
			case 'Enter':
				e.preventDefault();
				if (focusedElement) {
					// If has submenu, open it
					if (hasSubmenu(focusedElement)) {
						openSubmenu(focusedElement);
					} else {
						// Otherwise trigger the menu item
						focusedElement.click();
					}
				}
				break;

			case 'Escape':
				e.preventDefault();
				e.stopPropagation();
				closeCurrentMenu();
				break;
		}
	}

	// Close menu when clicking outside
	function handleClickOutside(e: MouseEvent) {
		if (menu && !menu.contains(e.target as Node)) {
			const trigger = document.querySelector(`[data-menu-id="${id}"]`);
			if (trigger && !trigger.contains(e.target as Node)) {
				menuContext.close();
			}
		}
	}

	$effect(() => {
		if (menuContext.isOpen()) {
			document.addEventListener('click', handleClickOutside);
			return () => {
				document.removeEventListener('click', handleClickOutside);
			};
		}
	});
</script>

{#if menuContext.isOpen()}
	<ul
		bind:this={menu}
		role="menu"
		id={'menu-' + id}
		aria-labelledby={'menu-trigger-' + id}
		onkeydown={handleKeyDown}
		class="absolute"
	>
		{@render children?.()}
	</ul>
{/if}
