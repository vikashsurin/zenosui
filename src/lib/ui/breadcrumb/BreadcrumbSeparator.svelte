<script lang="ts">
	import { Icon } from '$lib/ui/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import type { BreadcrumbContextType } from './types.ts';
	import { getContext } from 'svelte';
	import type { BreadcrumbSeparatorProps } from '$lib/types/index.ts';
	import { tv } from 'tailwind-variants';
	let { icon, uiSize, uiIconSize, class: _class }: BreadcrumbSeparatorProps = $props();

	const context = getContext<BreadcrumbContextType>('breadcrumbContext');
	uiSize = uiSize ?? uiIconSize ?? context?.uiSize;
	icon = icon ?? ChevronRight;

	let style = tv({
		base: `opacity-30`,
		variants: {},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ class: _class }));
</script>

<Icon {icon} uiIconSize={uiSize} class={finalClass} />
