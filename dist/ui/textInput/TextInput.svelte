<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import {
		baseVariant,
		OUTLINE_COLOR,
		TEXT_SIZE,
		TEXT_SIZE_WITH_HEIGHT
	} from '../../style/index.js';
	import type { TextInputProps } from '../../types/index.js';
	import { Icon, IconButton } from '../index.js';
	import X from '@lucide/svelte/icons/x';

	let {
		themed = false,
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

	const id = crypto.randomUUID();
	const paddingY = 'py-0';
	const paddingX = 'px-[0.75em]';
	const gap = 'gap-[0.25em]';

	let style = tv({
		extend: baseVariant,
		base: `zu_input inline-flex w-fit items-center focus-within:outline-2 border border-gray-200 ${paddingY} ${paddingX} ${gap}`,
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
				class: 'text-red-500'
			}
		],
		defaultVariants: {
			uiRounded: 'md',
			uiSize: 'md'
		}
	});
	const finalClass = $derived(style({ invalid, uiSize, uiRounded, class: clsx(_class) }));

	function clearInput() {
		value = '';
	}
</script>

<label data-themed={themed} class={finalClass}>
	{#if iconLeft}
		<Icon {uiSize} icon={iconLeft} class="input_icon_left opacity-50" />
	{/if}
	<input
		{id}
		class:input={true}
		type="text"
		class="px-[0.5em] py-[0.5em]"
		bind:value
		{placeholder}
		{...props}
	/>

	<IconButton
		themed={false}
		{uiSize}
		{uiRounded}
		icon={X}
		onclick={clearInput}
		class="h-fit w-fit bg-transparent p-[0.2em] text-inherit hover:bg-gray-200 active:bg-gray-300"
	/>
	{#if iconRight}
		<Icon {uiSize} icon={iconRight} class="input_icon_right" />
	{/if}
</label>

<style>
	input:focus {
		outline: none;
	}
</style>
