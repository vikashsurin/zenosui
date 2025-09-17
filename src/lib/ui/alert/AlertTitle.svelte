<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { TEXT_SIZE_WITH_HEIGHT } from '$lib/style/index.js';
	import type { AlertTitleProps } from '$lib/types/index.js';

	let { children, class: _class, ...props }: AlertTitleProps = $props();

	let style = tv({
		base: `zu_alert_title inline-flex  items-center `,
		variants: {
			uiSize: TEXT_SIZE_WITH_HEIGHT
		},
		defaultVariants: {
			uiSize: 'xl'
		}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<h2 class={finalClass} {...props}>
	{@render children?.()}
</h2>
