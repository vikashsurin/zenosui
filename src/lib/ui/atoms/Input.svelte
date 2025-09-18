<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { TEXT_SIZE_WITH_PADDING } from '$lib/style/sizing.js';
	import { baseVariant } from '$lib/style/base.js';
	import type { InputProps } from '$lib/types/index.ts';

	let { children, uiSize, uiRounded, class: _class, ...props }: InputProps = $props();

	let style = tv({
		extend: baseVariant,
		base: `w-max border rounded-xs border-gray-500`,
		variants: {
			uiSize: TEXT_SIZE_WITH_PADDING
		},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
</script>

<input {...props} class={finalClass} />

<style>
	input {
		padding: 0.5em 0.75em;
	}
</style>
