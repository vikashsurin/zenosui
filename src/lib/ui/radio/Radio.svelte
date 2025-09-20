<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { RadioProps } from '$lib/types/index.js';
	import { baseVariant } from '$lib/style/base.js';
	import { getContext } from 'svelte';
	import type { RadioContextType } from './types.ts';
	import { SIZE } from '$lib/style/sizing.js';

	let { children, themed = true, name, uiSize, class: _class, ...props }: RadioProps = $props();

	const id = crypto.randomUUID();

	const radioContext = getContext<RadioContextType>('radioContext');

	uiSize = uiSize ?? radioContext.uiSize;
	let radio = $state({
		activeRadioId: <string | null>null,
		activeRadioValue: <string | number | null>null
	});

	let checked = $derived.by(() => {
		if (!radioContext) {
			return radio.activeRadioId === id;
		}
		if (id === radioContext?.checkedId) {
			return true;
		} else {
			return false;
		}
	});

	const outerCirlce = tv({
		base: `zu_radio_outercircle relative inline-flex  items-center justify-center rounded-full`,
		variants: { uiSize: SIZE, checked: { true: '', false: '' } },
		compoundVariants: [
			{},
			{
				checked: false,
				class: 'bg-none border-2 border-gray-300'
			}
		],
		defaultVariants: { checked: false }
	});
	const finalClass = $derived(outerCirlce({ uiSize, class: clsx(_class) }));

	function handleChange(e) {
		if (radioContext) {
			radioContext.checkedId = id;
			radioContext.value = e.target.value;
		} else {
			radio.activeRadioId = id;
			radio.activeRadioValue = e.target.value;
		}
	}
</script>

<span
	data-themed={themed}
	class={finalClass}
	class:interactive={checked}
	style={`background-color: ${checked ? '' : 'transparent'};}`}
>
	<span class={'absolute h-[40%] w-[40%] rounded-full bg-white'}></span>
	<input
		{name}
		{id}
		type="radio"
		class="z-9999 h-full w-full opacity-0"
		{...props}
		onchange={(e) => handleChange(e)}
	/>
</span>

<style>
</style>
