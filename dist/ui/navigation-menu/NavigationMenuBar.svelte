<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '../../style/index.js';
	import clsx from 'clsx';
	import { onDestroy, setContext } from 'svelte';
	import type { NavigationMenuBarProps } from '../../types/index.js';

	let { children, class: _class, ...props }: NavigationMenuBarProps = $props();

	const activeNavMenu = $state({
		id: <string | null>null
	});
	let closeTimeoutId: number | null = null;
	const HOVER_DELAY = 300;

	const setActiveNavMenu = (id: string | null) => {
		if (closeTimeoutId) {
			clearTimeout(closeTimeoutId);
			closeTimeoutId = null;
		}
		activeNavMenu.id = id;
	};

	const clearCloseTimeout = () => {
		if (closeTimeoutId) {
			clearTimeout(closeTimeoutId);
			closeTimeoutId = null;
		}
	};

	const scheduleClose = () => {
		clearCloseTimeout();
		closeTimeoutId = setTimeout(() => {
			activeNavMenu.id = null;
			closeTimeoutId = null;
		}, HOVER_DELAY);
	};

	onDestroy(() => {
		clearCloseTimeout();
	});

	setContext('navMenuBar', {
		activeNavMenu,
		setActiveNavMenu,
		clearCloseTimeout,
		scheduleClose
	});
	const style = tv({
		extend: baseVariant,
		base: 'inline-flex justify-center items-center ',
		variants: {},
		compoundVariants: [],
		defaultVariants: {}
	});

	const finalClasses = $derived(
		style({
			class: clsx(_class)
		})
	);
</script>

<div class={finalClasses} {...props}>
	{#if children}
		{@render children()}
	{/if}
</div>
