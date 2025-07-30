<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import {
		baseVariant
	} from '../../style/index.js';
	import type { MenuItemProps } from '../../types/index.js';

	let {
		children,
		uiRounded,
		class: _class,
		...props
	}: MenuItemProps = $props();


	let style = tv({
		extend: baseVariant,
		base: `zu_menu_item_custom`,
		variants: {},
		defaultVariants: {
			uiRounded: 'none',
			uiSize: 'md'
		}
	});
	const finalClass = $derived(style({ uiRounded, class: clsx(_class) }));

</script>

<li
	role="menuitem"
	class={finalClass}
	{...props}
>

	{#if children}
		{@render children?.()}
	{/if}

</li>
