<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import Button from '../button/Button.svelte';
	import { getContext } from 'svelte';
	import type { TabTriggerProps } from '$lib/types/index.js';
	import type { TabContextType } from './types.js';
	import { activeTabTriggerTheme } from './theme.js';

	let { children, active, id, activeClass, class: _class, ...props }: TabTriggerProps = $props();

	let tabState = getContext<TabContextType>('tabState');

	activeClass = activeClass ?? activeTabTriggerTheme;

	let style = tv({
		base: `box-border `,
		variants: {},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<Button
	uiColor="secondary"
	themed={false}
	{activeClass}
	active={tabState.openTabId === id}
	class={finalClass}
	onclick={() => (tabState.openTabId = id)}
	{...props}
>
	{@render children?.()}
</Button>
