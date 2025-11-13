<script lang="ts">
	import { getContext, setContext, tick } from 'svelte';
	import { type DropdownMenuContextType } from './types.ts';
	import { baseVariant } from '$lib/style/base.js';
	import { tv } from 'tailwind-variants';
	import { menuContentTheme } from './theme.js';
	import clsx from 'clsx';
	let { children, class: _class } = $props();

	const dropdownMenuContext = getContext<DropdownMenuContextType>('dropdownMenuContext');

	const id = dropdownMenuContext.menuId;
	let leftSpaced = $state(false);

	const dropdownMenuContentContext = {
		get leftSpaced() {
			return leftSpaced;
		},
		set leftSpaced(value: boolean) {
			leftSpaced = value;
		}
	};

	setContext('dropdownMenuContentContext', dropdownMenuContentContext);

	let menu = $state<HTMLElement>();
	let items: HTMLElement[] = $state([]);

	function updateItems() {
		if (menu) {
			items = Array.from(menu.querySelectorAll(':scope  [data-menu-item]:not([disabled])'));
		}
	}

	function focusFirstItem() {
		if (items.length > 0) {
			items[0].focus();
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

	function closeCurrentMenu() {
		dropdownMenuContext.dropdownMenuState.close();
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
		if (menu && dropdownMenuContext.dropdownMenuState.isOpen) {
			tick().then(() => {
				updateItems();
			});
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (!dropdownMenuContext.dropdownMenuState.isOpen) return;

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
				e.stopPropagation();
				focusNextItem();
				break;

			case 'ArrowUp':
				e.preventDefault();
				e.stopPropagation();
				focusPrevItem();
				break;

			case 'ArrowRight':
				// If current item has a submenu, open it
				if (focusedElement && hasSubmenu(focusedElement)) {
					e.preventDefault();
					e.stopPropagation(); // Prevent menubar from handling this
					return;
				}

				break;

			case 'ArrowLeft':
				return;

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
				dropdownMenuContext.dropdownMenuState.close();
				break;

			case ' ':
			case 'Enter':
				dropdownMenuContext.dropdownMenuState.focusTrigger();
				e.preventDefault();
				closeCurrentMenu();
				e.stopPropagation();
				break;
		}
	}

	// Close menu when clicking outside
	function handleClickOutside(e: MouseEvent) {
		if (menu && !menu.contains(e.target as Node)) {
			const trigger = document.querySelector(`[data-menu-id="${id}"]`);
			if (trigger && !trigger.contains(e.target as Node)) {
				dropdownMenuContext.dropdownMenuState.close();
			}
		}
	}

	$effect(() => {
		if (dropdownMenuContext.dropdownMenuState.isOpen) {
			document.addEventListener('click', handleClickOutside);
			return () => {
				document.removeEventListener('click', handleClickOutside);
			};
		}
	});

	const style = tv({
		extend: baseVariant,
		base: `min-w-[8rem] mt-2 absolute ${menuContentTheme}`
	});

	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

{#if dropdownMenuContext.dropdownMenuState.isOpen}
	<ul
		bind:this={menu}
		role="menu"
		id={'menu-' + id}
		aria-labelledby={'menu-trigger-' + id}
		onkeydown={handleKeyDown}
		class={finalClass}
	>
		{@render children?.()}
	</ul>
{/if}
