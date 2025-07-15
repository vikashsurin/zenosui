<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button, Icon } from '$lib/ui/index.js';
	import type { IconButtonProps } from '$lib/types.js';
	import { baseVariant, SIZE } from '$lib/style/index.js';

	let { icon, uiSize, class: _class, ...props }: IconButtonProps = $props();

	let style = tv({
		extend: baseVariant,
		base: `p-0`,
		variants: {
			uiSize: SIZE
		},
		defaultVariants: {
			uiSize: 'md'
		}
	});
	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
	// $inspect('final', finalClass);
</script>

<Button {...props} class={finalClass}>
	{#if icon !== null}
		<Icon {icon} {uiSize} />
	{/if}
</Button>
