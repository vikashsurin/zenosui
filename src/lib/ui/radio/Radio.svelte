<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { RadioProps } from '$lib/types.js';
	import { baseVariant } from '$lib/style/base.js';

	let { children, class: _class, ...props }: RadioProps = $props();

	let style = tv({
		extend: baseVariant,
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<input type="radio" class={finalClass} {...props} />
