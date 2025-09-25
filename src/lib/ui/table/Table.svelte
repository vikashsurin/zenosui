<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HTMLTableAttributes } from 'svelte/elements';
	import { TEXT_SIZE } from '$lib/style/sizing.js';
	import type { SizeVariant } from '$lib/types/index.js';

	type TableProps = HTMLTableAttributes & {
		uiSize?: SizeVariant;
	};

	let { children, uiSize, class: _class, ...props }: TableProps = $props();

	let style = tv({
		base: `w-full`,
		variants: {
			uiSize: TEXT_SIZE
		},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<table class={finalClass} {...props}>
	{@render children?.()}
</table>
