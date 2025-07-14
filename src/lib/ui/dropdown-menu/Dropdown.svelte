<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { innerHeight } from 'svelte/reactivity/window';
	import { baseVariant, type RoundedVariant, type SizeVariant } from '$lib/style/variant.js';
	import type { DropdownProps } from '$lib/types.js';
	import { setContext } from 'svelte';

	let { children, sizeVariant, roundedVariant, class: _class, ...props }: DropdownProps = $props();

	let ddmenucontext = $state({
		open: false,
		sizeVariant: sizeVariant as SizeVariant,
		roundedVariant: roundedVariant as RoundedVariant
	});

	setContext('dropdown', ddmenucontext);

	let style = tv({
		extend: baseVariant,
		base: `relative`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ roundedVariant, class: clsx(_class) }));

	let menu_cont: HTMLDivElement;

	$effect(() => {
		const screenHeight =
			innerHeight.current !== undefined
				? innerHeight.current
				: typeof window !== 'undefined'
					? window.innerHeight
					: 0;

		const dd = menu_cont.querySelector('.zu_menu') as HTMLUListElement | null;
		if (dd && dd.parentNode instanceof HTMLElement) {
			const parentSize = dd.parentNode.getBoundingClientRect();
			if (parentSize.bottom + dd.clientHeight > screenHeight) {
				dd.style.top = 'auto';
				dd.style.bottom = '100%';
			} else {
				dd.style.top = '100%';
				dd.style.bottom = 'auto';
			}
		}
	});
</script>

<div class={finalClass} {...props} bind:this={menu_cont}>
	{#if children}
		{@render children?.()}
	{/if}
</div>
