<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '../../style/index.js';
	import clsx from 'clsx';
	import { setContext, tick } from 'svelte';
	import type { DivProps } from '../../types/index.js';
	import type { MenuBarContextType } from './types.js';
	import type { UUID } from 'crypto';

	let { children, uiSize, uiRounded, class: _class }: DivProps = $props();

	const state = $state({
		isMenuBarActive: <boolean>false,
		openMenuId: <string | UUID | null>null
	});
	// $effect(() => {});
	setContext('menuBarContext', {
		state,
		handleFocusRightSibling,
		handleFocusLeftSibling,
		uiRounded,
		uiSize
	} as MenuBarContextType);

	const style = tv({
		extend: baseVariant,
		base: 'inline flex gap-1  w-fit p-1 rounded-sm',
		variants: {},
		compoundVariants: [],
		defaultVariants: {}
	});

	const finalClasses = $derived(
		style({
			class: clsx(_class)
		})
	);

	let menubar: HTMLElement;
	let triggersElements: NodeListOf<HTMLElement>;
	$effect(() => {
		triggersElements = menubar.querySelectorAll('nav > ul > li >[role="menuitem"]');
	});

	function handleFocusRightSibling(element: HTMLElement) {
		// console.log('hanldefocus right sibning');
		const items = Array.from(triggersElements);
		const currentIndex = items.findIndex((item) => item === element);
		const nextIndex = (currentIndex + 1) % items.length;
		items[nextIndex].focus();
	}

	function handleFocusLeftSibling(element: HTMLElement) {
		const items = Array.from(triggersElements);
		const currentIndex = items.findIndex((item) => item === element);
		const prevIndex = (currentIndex - 1 + items.length) % items.length;
		items[prevIndex].focus();
	}
	function handleKeyDown(e: KeyboardEvent) {
		// const items = Array.from(triggersElements);
		// const idx = items.findIndex((item) => item === e.target);
		// if (idx === -1) return;
		// if (e.key === 'ArrowRight') {
		// 	e.preventDefault();
		// 	const nextIndex = (idx + 1) % items.length;
		// 	items[nextIndex].focus();
		// } else if (e.key === 'ArrowLeft') {
		// 	e.preventDefault();
		// 	const prevIndex = (idx - 1 + items.length) % items.length;
		// 	items[prevIndex].focus();
		// } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
		// 	// console.log('menubar');
		// } else if (e.key === 'Escape') {
		// 	state.isMenuBarActive = false;
		// 	menubar.blur();
		// }
	}
	// $effect(() => {
	// 	if (state.isMenuBarActive) {
	// 		openMenuAndfocusFirst();
	// 	}
	// });
	// async function openMenuAndfocusFirst() {
	// 	await tick();
	// 	if (state.isMenuBarActive) {
	// 		// console.log(state.openMenuId);
	// 	}
	// 	// console.log(state.isMenuBarActive);
	// 	const el: NodeListOf<HTMLElement> = menubar.querySelectorAll(
	// 		'nav > ul > li > [role="menu"] > li > [role="menuitem"]'
	// 	);
	// 	const arr: HTMLElement[] = Array.from(el);
	// 	// console.log(el);
	// 	arr[0].focus();
	// }
</script>

<nav aria-label="Main navigation">
	<ul
		role="menubar"
		class={finalClasses}
		bind:this={menubar}
		onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
	>
		{#if children}
			{@render children()}
		{/if}
	</ul>
</nav>
