<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { TEXT_SIZE_WITH_PADDING } from '../../style/sizing.js';
	import { baseVariant } from '../../style/base.js';
	import type { InputProps } from '../../types/index.ts';

	let { children, uiSize, uiRounded, class: _class, ...props }: InputProps = $props();

	const paddingX = 'px-[0.5em]';
	const paddingY = 'py-[0.75em]';

	let style = tv({
		extend: baseVariant,
		base: `w-max border rounded-xs border-gray-500 ${paddingY} ${paddingX}`,
		variants: {
			uiSize: TEXT_SIZE_WITH_PADDING
		},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiSize, uiRounded, class: clsx(_class) }));
</script>

<input {...props} class={finalClass} />
