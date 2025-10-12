<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { TEXT_SIZE } from '$lib/style/sizing.js';
	import type { HeadingProps } from '$lib/types/index.ts';
	import { tick } from 'svelte';

	let { children, uiSize, class: _class, ...props }: HeadingProps = $props();
	let style = tv({
		base: `text-[1.5em]`,
		variants: {
			uiSize: TEXT_SIZE
		},
		defaultVariants: {}
	});

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
	let finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<h2 bind:this={heading} data-heading="true" {id} class={finalClass} {...props}>
	{@render children?.()}
</h2>
