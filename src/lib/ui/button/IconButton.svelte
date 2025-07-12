<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button, Icon } from '$lib/ui/index.js';
	import type { IconButtonProps } from '$lib/types.js';
	import { baseVariant, SIZE } from '$lib/style/variant.js';

	let { icon, sizeVariant, class: _class, ...props }: IconButtonProps = $props();

	let style = tv({
		extend: baseVariant,
		base: `p-0`,
		variants: {
			sizeVariant: SIZE
		},
		defaultVariants: {
			sizeVariant: 'md'
		}
	});
	const finalClass = $derived(style({ sizeVariant, class: clsx(_class) }));
	// $inspect('final', finalClass);
</script>

<Button {...props} class={finalClass}>
	{#if icon !== null}
		<Icon {icon} {sizeVariant} />
	{/if}
</Button>
