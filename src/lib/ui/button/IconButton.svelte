<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { Button, Icon } from '$lib/ui/index.js';
	import type { IconButtonProps } from '$lib/types.js';
	import { baseVariant } from '$lib/style/variant.js';

	let { icon, size, class: _class, ...props }: IconButtonProps = $props();
	export const SIZE = {
		xs: 'w-4 h-4',
		sm: 'w-6 h-6',
		md: 'w-8 h-8',
		lg: 'w-10 h-10',
		xl: 'w-12 h-12',
		'2xl': 'w-14 h-14',
		'3xl': 'w-16 h-16',
		'4xl': 'w-20 h-20',
		'5xl': 'w-24 h-24',
		'6xl': 'w-28 h-28',
		'7xl': 'w-32 h-32',
		'8xl': 'w-36 h-36'
	};
	let style = tv({
		extend: baseVariant,
		base: `p-0`,
		variants: {
			size: SIZE
		},
		defaultVariants: {
			size: 'md'
		}
	});
	const finalClass = $derived(style({ size, class: clsx(_class) }));
	// $inspect('final', finalClass);
</script>

<Button {...props} class={finalClass}>
	{#if icon !== null}
		<Icon {icon} {size} />
	{/if}
</Button>
