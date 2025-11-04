<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { menuItemTheme } from './theme.js';
	import clsx from 'clsx';
	import { SIZE_PRESET } from '$lib/style/presets.js';
	import { baseVariant } from '$lib/style/base.js';
	import { getContext } from 'svelte';
	import type { ContextMenuContextType } from './types.ts';

	let { children, href, onclick, uiSize, class: _class, ...props } = $props();

	const contextMenuContext = getContext<ContextMenuContextType>('contextMenuContext');

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

	function closeMenu() {
		contextMenuContext.ContextMenuState.close();
	}

	function handleClick(e: MouseEvent) {
		closeMenu();
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
		class={finalClass}
		onclick={(e) => {
			onclick?.(e);
			handleClick(e);
		}}
		{...props}
	>
		{@render children?.()}
	</svelte:element>
</li>

<!-- onclick={(e: MouseEvent) => handleClick(e)} -->
