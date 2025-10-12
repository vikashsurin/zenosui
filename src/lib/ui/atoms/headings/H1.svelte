<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HeadingProps } from '$lib/types/index.ts';
	import { tick } from 'svelte';

	let style = tv({
		base: `text-[2em]`,
		variants: {},
		defaultVariants: {}
	});
	let { children, class: _class, ...props }: HeadingProps = $props();

	let finalClass = $derived(style({ class: clsx(_class) }));

	let heading: HTMLHeadingElement;
	let id = $state<string>('');
	function generateID() {
		return heading.innerText;
	}

	$effect(() => {
		tick().then(() => {
			generateID();
		});
	});
</script>

<h1 bind:this={heading} data-heading="true" {id} class={finalClass} {...props}>
	{@render children?.()}
</h1>
