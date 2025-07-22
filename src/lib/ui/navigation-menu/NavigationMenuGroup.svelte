<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/index.js';
	import clsx from 'clsx';
	import type { NavigationMenuGroupProps } from '$lib/types.js';

	let {
		children,
		class: _class,
		...props
	}: NavigationMenuGroupProps = $props();

	const style = tv({
		extend: baseVariant,
		base: 'flex-1 w-full ',
		variants: {},
		compoundVariants: [],
		defaultVariants: {}
	});

	const finalClasses = $derived(
		style({
			class: clsx(_class)
		})
	);
</script>

<li class={finalClasses} {...props}>
	<ul role="group">
		{#if children}
			{@render children()}
		{/if}
	</ul>
</li>

