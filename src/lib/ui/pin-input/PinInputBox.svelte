<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '$lib/style/base.js';
	import type { PinInputControlContextType } from './types.ts';
	import { getContext } from 'svelte';
	import { TEXT_SIZE_WITH_DIMENSIONS } from '$lib/style/sizing.js';
	import type { PinInputBoxProps } from '$lib/types/index.ts';

	let {
		children,
		uiSize,
		uiRounded,
		value = $bindable(),
		class: _class,
		...props
	}: PinInputBoxProps = $props();

	const context = getContext<PinInputControlContextType>('PinInputControlContext');
	uiSize = uiSize ? uiSize : context.uiSize;
	uiRounded = uiRounded ? uiRounded : context.uiRounded;

	let style = tv({
		extend: baseVariant,
		base: `border text-lg  text-center w-8 h-8 `,
		variants: {
			uiSize: TEXT_SIZE_WITH_DIMENSIONS
		},
		defaultVariants: {
			uiSize: 'md',
			uiRounded: 'none'
		}
	});
	let inputEl: HTMLElement;
	let groupEl: HTMLElement | undefined | null;
	let itemsNodeList: NodeListOf<HTMLInputElement>;
	let itemsArray: HTMLInputElement[];

	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
	const id = crypto.randomUUID();
	function handleChange(e: Event) {
		value = (e.target as HTMLInputElement)?.value;
		if (value.length > 1) value = value.slice(-1);
		if (value.length === 0) return;
		const currentIndex = itemsArray.findIndex((item) => item === inputEl);
		const nextIndex = (currentIndex + 1) % itemsArray!.length;
		if (currentIndex === itemsArray!.length - 1) {
			return;
		}
		itemsArray[nextIndex].focus();
	}

	function handleKeyDown(e: KeyboardEvent) {
		groupEl = inputEl.closest("[role='group']") as HTMLElement;
		itemsNodeList = groupEl?.querySelectorAll('[data-input-type="pin"]');
		itemsArray = Array.from(itemsNodeList!);
		const currentIndex = itemsArray.findIndex((item) => item === inputEl);
		switch (e.key) {
			case 'ArrowLeft':
				e.preventDefault();
				const prevIndex = (currentIndex - 1 + itemsArray!.length) % itemsArray!.length;
				itemsArray[prevIndex].focus();
				break;
			case 'ArrowRight':
				e.preventDefault();
				const nextIndex = (currentIndex + 1) % itemsArray!.length;
				itemsArray[nextIndex].focus();
				break;
			case 'Backspace':
				e.preventDefault();

				const currentInput = itemsArray[currentIndex];
				const hasValue = currentInput.value.length > 0;

				if (hasValue) {
					// Clear current input if it has a value
					currentInput.value = '';
				} else if (currentIndex > 0) {
					// Move to previous input and clear it if current is empty
					const prevIndex = currentIndex - 1;
					const prevInput = itemsArray[prevIndex];

					prevInput.focus();
					prevInput.value = '';

					// Optional: Update currentIndex to reflect focus change
					// currentIndex = prevIndex;
				}

				break;
		}
	}
</script>

<input
	id={`pin${id}`}
	bind:this={inputEl}
	data-input-type="pin"
	type="text"
	aria-label="pin"
	aria-required="true"
	class={finalClass}
	onkeydown={(e: KeyboardEvent) => handleKeyDown(e)}
	bind:value
	{...props}
	oninput={(e) => handleChange(e)}
/>
