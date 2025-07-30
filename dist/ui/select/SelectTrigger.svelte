<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button, Icon } from '../index.js';
	import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
	import { getContext } from 'svelte';
	import type { SelectContextType } from './types.js';
	import type { SelectTriggerProps } from '../../types/index.js';
	let {
		children,
		uiSize,
		label,
		uiRounded,
		iconRight = ChevronsUpDown,
		class: _class
	}: SelectTriggerProps = $props();

	const selectContext = getContext<SelectContextType>('selectContext');

	uiSize = uiSize ?? selectContext.uiSize;
	uiRounded = uiRounded ?? selectContext.uiRounded;

	let style = tv({
		base: `justify-between w-full  `,
		variants: {},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ class: clsx(_class) }));

	let btn: HTMLButtonElement = $state({});

	function handleClick() {
		console.log('btn', btn);
		selectContext.open = !selectContext.open;
	}

	$effect(() => {
		const btnLabel = btn.querySelector('#btn-label');
		if (btnLabel) {
			if (selectContext.value) btnLabel.textContent = selectContext.value;
			else btnLabel.textContent = label;
		}
	});
</script>

<Button
	bind:ref={btn}
	class={finalClass}
	{uiSize}
	{uiRounded}
	{iconRight}
	{label}
	onclick={handleClick}
/>
