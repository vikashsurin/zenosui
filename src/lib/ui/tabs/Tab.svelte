<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	let { children, class: _class, ...props } = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div class={finalClass} {...props}>
	{#if children}
		{@render children?.()}
	{/if}
</div>
