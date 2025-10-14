<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { baseVariant } from '$lib/style/index.js';
	import clsx from 'clsx';
	import type { NavigationMenuItemProps, RoundedVariant, SizeVariant } from '$lib/types/index.js';
	import { getContext } from 'svelte';
	import { Icon } from '$lib/ui/index.js';

	let {
		themed = true,
		uiRounded,
		iconLeft,
		iconRight,
		uiIconSize,
		uiText,
		href,
		children,
		class: _class,
		...props
	}: NavigationMenuItemProps = $props();

	const context = getContext<{
		uiRounded: RoundedVariant;
		uiText: SizeVariant;
		uiIconSize?: SizeVariant;
	}>('navigationMenuContext');
	uiRounded = uiRounded ?? context.uiRounded;
	uiText = uiText ?? context.uiText;
	uiIconSize = uiIconSize ?? context.uiText ?? context.uiIconSize;

	const style = tv({
		extend: baseVariant,
		base: 'inline-block p-1',
		variants: {},
		compoundVariants: [],
		defaultVariants: {}
	});

	const finalClasses = $derived(
		style({
			uiRounded,
			uiText,
			class: clsx(_class)
		})
	);
</script>

<li>
	<a
		data-themed={themed}
		class:interactive_list={themed}
		href={props.href}
		class={finalClasses}
		{...props}
	>
		{#if iconLeft}
			<Icon icon={iconLeft} uiSize={uiIconSize} />
		{/if}

		{@render children?.()}
		{#if iconRight}
			<Icon icon={iconRight} uiSize={uiIconSize} class="ml-auto" />
		{/if}
	</a>
</li>
