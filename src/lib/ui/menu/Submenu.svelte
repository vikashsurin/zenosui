<script lang="ts">
	import { getContext, setContext, tick } from 'svelte';
	import type { MenuContextType, SubmenuContextType } from './types.ts';

	let { children } = $props();
	const id = crypto.randomUUID();

	const menuContext = getContext<MenuContextType>('menuContext');

	const state = $state({
		open: false
	});

	$effect(() => {
		if (state.open) {
			menuContext.state.isSubmenuOpen = true;
		} else {
			menuContext.state.isSubmenuOpen = false;
		}
	});

	let closeTimeout: number | null = null;

	function openSubmenu() {
		state.open = true;
		if (closeTimeout !== null) {
			clearTimeout(closeTimeout);
			closeTimeout = null;
		}
	}
	function closeSubmenu() {
		closeTimeout = window.setTimeout(() => {
			state.open = false;
		}, 300);
	}

	function handleMouseOver() {
		if (closeTimeout) {
			clearTimeout(closeTimeout);
		}
		state.open = true;
	}

	let submenu: HTMLElement;
	let submenuItems: NodeListOf<HTMLElement>;
	function handleKeyDown(e: KeyboardEvent) {
		// e.stopPropagation();
		// let arr = Array.from(submenuItems).findIndex((item) => item === e.target);
		switch (e.key) {
			case 'ArrowRight':
				e.preventDefault();
				openAndFocusFirst(e);
				break;
			case 'ArrowLeft':
				// e.stopPropagation();
				if (state.open) {
					e.stopPropagation();
				}
				e.preventDefault();
				state.open = false;
				const currentTarget = e.currentTarget as HTMLElement;
				(currentTarget.children[0] as HTMLElement).focus();

				break;
			case 'ArrowDown':
				e.preventDefault();
				if (state.open) {
					e.stopPropagation();
					const arr = Array.from(submenuItems);
					const idx = arr.findIndex((item) => item === e.target);

					if (idx !== -1) {
						const nextIndex = (idx + 1) % arr.length;
						arr[nextIndex].focus();
					}
				}
		}
	}

	// This function opens the submenu and awaits until the next tick to focus the first item of the submenu.
	async function openAndFocusFirst(e: KeyboardEvent) {
		e.preventDefault();
		state.open = true;
		await tick();
		submenuItems = submenu.querySelectorAll('[data-slot="submenu"] > li > [role="menuitem"]');
		const arr: HTMLElement[] = Array.from(submenuItems);
		arr[0].focus();
		console.log(document.activeElement);
	}
	setContext('submenuContext', { id, state, closeSubmenu, openSubmenu } as SubmenuContextType);
</script>

<li
	bind:this={submenu}
	role="none"
	onmouseover={() => handleMouseOver()}
	onmouseleave={() => closeSubmenu()}
	onfocus={() => (state.open = true)}
	class="relative flex items-center"
>
	{#if children}
		{@render children?.()}
	{/if}
</li>
<!-- onkeydown={(e: KeyboardEvent) => handleKeyDown(e)} -->
<!-- onfocusout={() => (state.open = false)} -->
