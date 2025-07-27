<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import Button from '../button/Button.svelte';

	let { children, class: _class, ...props } = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<Button>
	{#if children}
		{@render children?.()}
	{/if}
</Button>
