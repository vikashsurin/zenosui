<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant, TEXT_SIZE } from '$lib/style/variant.js';
	import type { TextInputProps } from '$lib/types.js';
	import { Icon, IconButton } from '$lib/ui/index.js';
	import X from '@lucide/svelte/icons/x';
	let {
		contentColor,
		roundedVariant,
		variant,
		sizeVariant,
		iconLeft,
		iconRight,
		class: _class,
		...props
	}: TextInputProps = $props();

	let contStyle = tv({
		extend: baseVariant,
		base: 'inline-flex w-fit items-center focus-within:outline-2',
		variants: {
			sizeVariant: {
				xs: 'gap-1 px-1.5',
				sm: 'gap-1 px-2',
				md: 'gap-1.5 px-2.5',
				lg: 'gap-1.5 px-3.5',
				xl: 'gap-2 px-4',
				'2xl': 'gap-2 px-5',
				'3xl': 'gap-2.5 px-5.5',
				'4xl': 'gap-2.5 px-6',
				'5xl': 'gap-3 px-6.5',
				'6xl': 'gap-3 px-7',
				'7xl': 'gap-3.5 px-7.5',
				'8xl': 'gap-3.5 px-8'
			},
			contentColor: {
				none: '',
				primary: 'border border-blue-500 ',
				secondary: 'border border-gray-800',
				tertiary: 'border border-gray-800 ',
				danger: 'border border-red-500 ',
				warning: 'border border-yellow-500 ',
				success: 'border border-green-500'
			}
		},

		defaultVariants: {}
	});
	const finalContClass = $derived(
		contStyle({ sizeVariant, contentColor, variant, roundedVariant })
	);

	let style = tv({
		extend: baseVariant,
		base: `outline-none`,
		variants: {
			sizeVariant: TEXT_SIZE
		},
		defaultVariants: {
			sizeVariant: 'md',
			border: 'none',
			roundedVariant: 'sm'
		}
	});
	const finalClass = $derived(style({ contentColor, sizeVariant, class: clsx(_class) }));
	let inputValue = $state();

	function handleClear() {
		inputValue = '';
	}
</script>

<div class={finalContClass}>
	{#if iconLeft}
		<Icon {sizeVariant} icon={iconLeft}/>
	{/if}
	<input type="text" class={finalClass} {...props} bind:value={inputValue} />
	<IconButton {sizeVariant} {contentColor} {roundedVariant} icon={X} onclick={handleClear} />
	{#if iconRight}
		<Icon {sizeVariant} {contentColor} icon={iconRight} />
	{/if}
</div>
