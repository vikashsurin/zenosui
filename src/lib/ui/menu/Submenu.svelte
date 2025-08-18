<script lang="ts">
	import { setContext } from 'svelte';
	import type { SubmenuContextType } from './types.ts';

	let { children } = $props();
	const id = crypto.randomUUID();

	const state = $state({
		open: false
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
	setContext('submenuContext', { id, state, closeSubmenu, openSubmenu } as SubmenuContextType);
</script>

<li
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
<!-- onfocusout={() => (state.open = false)} -->
