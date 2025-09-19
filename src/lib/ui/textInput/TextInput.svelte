<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import {
		baseVariant,
		OUTLINE_COLOR,
		TEXT_SIZE,
		TEXT_SIZE_WITH_HEIGHT
	} from '$lib/style/index.js';
	import type { TextInputProps } from '$lib/types/index.js';
	import { Icon, IconButton } from '$lib/ui/index.js';
	import X from '@lucide/svelte/icons/x';

	let {
		themed = true,
		uiRounded,
		uiSize,
		iconLeft,
		invalid,
		iconRight,
		placeholder = 'Input text',
		value = $bindable(),
		class: _class,
		...props
	}: TextInputProps = $props();

	let contStyle = tv({
		extend: baseVariant,
		base: 'zu_input inline-flex w-fit items-center focus-within:outline-2 border border-gray-200 ',
		variants: {
			uiSize: TEXT_SIZE,
			invalid: {
				true: '',
				false: ''
			}
		},
		compoundVariants: [
			{
				invalid: true,
				class: 'focus-within:outline-2 focus-within:outline-red-500'
			}
		],
		defaultVariants: {
			uiRounded: 'md',
			uiSize: 'md'
		}
	});
	const finalContClass = $derived(contStyle({ invalid, uiSize, uiRounded }));

	function clearInput() {
		value = '';
	}
</script>

<label data-themed={themed} class={finalContClass}>
	{#if iconLeft}
		<Icon {uiSize} icon={iconLeft} class="input_icon_left opacity-50" />
	{/if}
	<input class:input={true} type="text" bind:value {placeholder} {...props} />
	<IconButton
		themed={false}
		{uiSize}
		{uiRounded}
		icon={X}
		onclick={clearInput}
		class="bg-transparent text-black hover:bg-gray-200 active:bg-gray-300"
	/>
	{#if iconRight}
		<Icon {uiSize} icon={iconRight} class="input_icon_right" />
	{/if}
</label>

<style>
	label {
		padding: 0em 0.6em;
		gap: 0.2em;
	}
	.input {
		padding: 0.5em 0.75em;
	}

	input:focus {
		outline: none;
	}
</style>
