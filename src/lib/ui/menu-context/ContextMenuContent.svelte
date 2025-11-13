<script lang="ts">
	import { getContext, setContext, tick } from 'svelte';
	import { type ContextMenuContextType } from './types.ts';
	import { baseVariant } from '$lib/style/base.js';
	import clsx from 'clsx';
	import { tv } from 'tailwind-variants';
	import { menuContentTheme } from './theme.js';
	let { children, class: _class } = $props();

	let leftSpaced = $state(false);

	const contextMenuContentContext = {
		get leftSpaced() {
			return leftSpaced;
		},
		set leftSpaced(value: boolean) {
			leftSpaced = value;
		}
	};

	setContext('contextMenuContentContext', contextMenuContentContext);

	const contextMenuContext = getContext<ContextMenuContextType>('contextMenuContext');

	const clientX = $derived(contextMenuContext.ContextMenuState.menuPosition.x);
	const clientY = $derived(contextMenuContext.ContextMenuState.menuPosition.y);

	$inspect({ clientX, clientY });
	const id = contextMenuContext.menuId;

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
		contextMenuContext.ContextMenuState.close();
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
		if (menu && contextMenuContext.ContextMenuState.isOpen) {
			tick().then(() => {
				updateItems();
			});
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (!contextMenuContext.ContextMenuState.isOpen) return;

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
				contextMenuContext.ContextMenuState.close();
				break;

			case ' ':
			case 'Enter':
				contextMenuContext.ContextMenuState.focusTrigger();
				e.preventDefault();
				closeCurrentMenu();
				e.stopPropagation();
				break;
		}
	}

	// Close menu when clicking outside
	function handleClickOutside(e: MouseEvent) {
		if (menu && !menu.contains(e.target as Node)) {
			contextMenuContext.ContextMenuState.close();
		}
	}

	$effect(() => {
		if (contextMenuContext.ContextMenuState.isOpen) {
			document.addEventListener('click', handleClickOutside);
			// document.addEventListener('contextmenu', handleClickOutside);
			return () => {
				document.removeEventListener('click', handleClickOutside);
				// document.removeEventListener('contextmenu', handleClickOutside);
			};
		}
	});

	const style = tv({
		extend: baseVariant,
		base: `min-w-[8rem] mt-2 absolute ${menuContentTheme}`
	});

	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

{#if contextMenuContext.ContextMenuState.isOpen}
	<ul
		bind:this={menu}
		role="menu"
		id={'menu-' + id}
		aria-labelledby={'menu-trigger-' + id}
		onkeydown={handleKeyDown}
		style:position="absolute"
		style:top={`${clientY + 2}px`}
		style:left={`${clientX + 2}px`}
		class={finalClass}
	>
		{@render children?.()}
	</ul>
{/if}
