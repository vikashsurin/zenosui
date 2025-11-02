<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { menuItemTheme } from './theme.js';
	import clsx from 'clsx';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { baseVariant } from '$lib/style/base.js';

	let { children, props, onclick, href, uiSize, class: _class } = $props();

	const style = tv({
		extend: baseVariant,
		base: ` ${menuItemTheme}`,
		variants: {
			uiSize: SIZE_PRESET
		}
	});

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

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<li role="none">
	<svelte:element
		this={el}
		data-menu-item
		href={href || undefined}
		role="menuitem"
		onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
		onclick={(e: MouseEvent) => handleClick(e)}
		{...props}
		class={finalClass}
	>
		{@render children?.()}
	</svelte:element>
</li>
