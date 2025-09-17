<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/index.js';
	import clsx from 'clsx';
	import type { NavigationMenuProps } from '$lib/types/index.js';
	import { setContext } from 'svelte';
	import { getContext } from 'svelte';

	let { uiRounded, uiText, children, class: _class, ...props }: NavigationMenuProps = $props();

	const id = crypto.randomUUID();

	setContext('navigationMenuContext', {
		uiRounded,
		uiText
	});

	const navMenuBarCtx = getContext<{
		activeNavMenu: { id: string };
		setActiveNavMenu: (id: string | null) => void;
	}>('navMenuBar');

	setContext('navMenu', {
		menu: {
			id: id
		}
	});
	const style = tv({
		extend: baseVariant,
		base: 'inline-flex bg-gray-300  relative ',
		variants: {},
		compoundVariants: [],
		defaultVariants: {}
	});

	const finalClasses = $derived(
		style({
			uiRounded,
			uiText,
			class: clsx(_class)
		})
	);
	function triggerShowMenu() {
		// console.log('triggerShowMenu');
		// if (id === navMenuBarCtx.activeNavMenu.id) {
		// 	navMenuBarCtx.setActiveNavMenu(null);
		// } else {
		// 	navMenuBarCtx.setActiveNavMenu(id);
		// }
	}
</script>

<nav class={finalClasses} {...props} onmouseenter={triggerShowMenu}>
	{@render children()}
</nav>
