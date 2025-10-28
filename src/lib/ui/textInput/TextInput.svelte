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
	import { textInputTheme } from './theme.js';

	let {
		children,
		themed = false,
		uiRounded,
		uiSize,
		iconLeft,
		invalid,
		iconRight,
		leftSlot,
		iconClear,
		rightSlot,
		placeholder = 'Input text',
		value = $bindable(),
		class: _class,
		...props
	}: TextInputProps = $props();

	const id = crypto.randomUUID();
	const paddingY = 'py-[0.25em]';
	const paddingX = 'px-[0.25em]';
	const gap = 'gap-[0.25em]';

	let style = tv({
		extend: baseVariant,
		base: `zu_input inline-flex w-fit items-center  ${textInputTheme}  ${paddingY} ${paddingX} ${gap}`,
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
</script>

<div role="group" data-themed={themed} class={finalClass}>
	{@render leftSlot?.()}

	<input {id} type={props.type ?? 'text'} class="px-[0.5em]" bind:value {placeholder} {...props} />

	{@render children?.()}

	{@render rightSlot?.()}
</div>
