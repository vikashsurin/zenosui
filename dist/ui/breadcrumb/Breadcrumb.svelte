<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '../../style/base.js';
	import type { BreadcrumbProps } from '../../types/index.ts';
	import { setContext } from 'svelte';
	import type { BreadcrumbContextType } from './types.ts';

	let {
		children,
		uiSize = 'md',
		uiRounded = 'none',
		class: _class,
		...props
	}: BreadcrumbProps = $props();

	let style = tv({
		extend: baseVariant,
		base: ``,
		variants: {},
		defaultVariants: {}
	});

	setContext('breadcrumbContext', { uiSize, uiRounded } as BreadcrumbContextType);

	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<nav aria-label="Breadcrumb" class={finalClass} {...props}>
	{@render children?.()}
</nav>
