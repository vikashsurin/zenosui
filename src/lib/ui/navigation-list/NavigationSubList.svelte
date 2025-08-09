<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	let { children, position = '', class: _class, ...props } = $props();
	const id = crypto.randomUUID();
	let style = tv({
		base: `ml-4 `,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<ul
	{id}
	class:right={position === 'right'}
	class:left={position === 'left'}
	class:bottom={position === 'bottom'}
	class={finalClass}
	{...props}
>
	{#if children}
		{@render children?.()}
	{/if}
</ul>

<style>
	ul {
		display: block;
		position: static;
		z-index: 999;
	}
	.right {
		position: absolute;
		background-color: red;
		left: 100%;
		top: 0;
	}
	.left {
		position: absolute;
		background-color: red;
		right: 100%;
		top: 0;
	}
	.bottom {
		position: absolute;
		background-color: red;
		top: 100%;
		left: 0;
	}
</style>
