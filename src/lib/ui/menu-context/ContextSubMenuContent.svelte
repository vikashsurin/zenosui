<script lang="ts">
	import { getContext, tick } from 'svelte';
	import type { subMenuContextType } from './types.ts';
	let { children } = $props();

	const subMenuContext = getContext<subMenuContextType>('subMenuContext');
	const subMenuId = subMenuContext.subMenuState?.subMenuId;

	let subMenu = $state<HTMLElement>();
	let items: HTMLElement[] = $state([]);

	function updateItems() {
		if (subMenu) {
			items = Array.from(
				subMenu.querySelectorAll(':scope > li > [role="menuitem"]:not([disabled])')
			);
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

	$effect(() => {
		if (subMenu && subMenuContext.subMenuState.isOpen) {
			tick().then(() => {
				updateItems();
			});
		}
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowLeft') {
			subMenuContext.subMenuState.close();
			subMenuContext.subMenuState.setSubMenuTriggerFocus(true);
			subMenuContext.subMenuState.setFirstMenuItemFocus(false);
			e.stopPropagation();
		}

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			e.stopPropagation();
			focusNextItem();
		}
		if (e.key === 'ArrowUp') {
			e.preventDefault();
			e.stopPropagation();
			focusPrevItem();
		}
	}

	function focusFirstItem() {
		if (items.length > 0) {
			items[0].focus();
		}
	}

	$effect(() => {
		if (subMenuContext.subMenuState.isOpen && subMenuContext.subMenuState.focusFirstMenuItem) {
			focusFirstItem();
		}
	});

	function handleMouseEnter() {
		subMenuContext.subMenuState.open();
	}

	function handleMouseLeave() {
		subMenuContext.subMenuState.close();
	}
</script>

{#if subMenuContext.subMenuState.isOpen}
	<ul
		bind:this={subMenu}
		role="menu"
		id={'subMenu-' + subMenuId}
		aria-labelledby={'subMenu-trigger-' + subMenuId}
		onkeydown={(e) => handleKeyDown(e)}
		onmouseenter={() => handleMouseEnter()}
		onmouseleave={() => handleMouseLeave()}
		class="absolute top-0 left-[100%] ml-2 w-max"
	>
		{@render children?.()}
	</ul>
{/if}
