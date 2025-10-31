<script lang="ts">
	let { children, props, onclick, href } = $props();

	function handleKeyDown(e: KeyboardEvent) {
		const target = e.target as HTMLElement;
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			console.log('from menu item');
			target.click();
		}
	}
	function handleClick(e: MouseEvent) {
		// e.preventDefault();
		// onclick();

		console.log('clicked');
	}

	let el = $state('button');
	$effect(() => {
		if (href) {
			el = 'a';
		}
	});
</script>

<li role="none">
	<svelte:element
		this={el}
		data-menu-item
		href={href || undefined}
		role="menuitem"
		class="focus:ring-2"
		onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
		onclick={(e: MouseEvent) => handleClick(e)}
		{...props}
	>
		{@render children?.()}
	</svelte:element>
</li>
