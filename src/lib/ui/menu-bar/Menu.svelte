<script lang="ts">
	import { getContext, setContext } from 'svelte';

	let { children } = $props();

	let menuId = crypto.randomUUID();
	const menuBarContext = getContext('menuBarContext');

	let state = $state({
		triggerElement: null
	});

	const isOpen = $derived(menuBarContext.menuBarState.isOpen(menuId));

	function closeMenu() {
		menuBarContext.menuBarState.closeMenuId(menuId);
	}
	setContext('menuContext', {
		state,
		menuId,
		close: () => closeMenu(),
		isOpen: () => isOpen
	});
</script>

<li role="none" class="relative border">
	{@render children?.()}
</li>
