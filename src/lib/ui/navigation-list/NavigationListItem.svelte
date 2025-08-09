<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant, ICON_SIZE, SIZE_PRESET } from '$lib/style/index.js';
	import type { NavigationListItemProps } from '$lib/types/index.js';
	import { Icon } from '$lib/ui/index.js';
	import { getContext } from 'svelte';
	import type { NavigationListContextType } from './types.ts';
	import { page } from '$app/state';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	let {
		href,
		themed = true,
		children,
		uiRounded,
		label,
		uiSize,
		iconLeft,
		iconRight,
		class: _class,
		hasList = false,
		activeClass,
		...props
	}: NavigationListItemProps = $props();

	const navListState = getContext<NavigationListContextType>('navListState');
	const id = crypto.randomUUID();
	uiSize = uiSize ? uiSize : navListState.uiSize;
	uiRounded = uiRounded ? uiRounded : navListState.uiRounded;

	let style = tv({
		extend: baseVariant,
		base: ` px-3 hover:bg-gray-100  relative w-full  items-center inline-flex text-nowrap `,
		variants: {
			uiSize: SIZE_PRESET,
			hasList: {
				true: '',
				false: ''
			}
		},
		compoundVariants: [
			{
				hasList: true,
				class: ''
			}
		],
		defaultVariants: {
			uiRounded: 'none',
			uiSize: 'md'
		}
	});

	let subList = $state({
		open: false
	});

	let dummyIcon = tv({
		base: ``,
		variants: {
			uiSize: ICON_SIZE
		},
		defaultVariants: {
			uiSize: 'md'
		}
	});

	function toggleOpen(e: MouseEvent) {
		navListState.openId = id;
		if (hasList) {
			subList.open = !subList.open;
		}
	}

	$effect(() => {
		if (iconLeft) {
			navListState.childHasLeftIcon = true;
		}
	});

	const finalClass = $derived(style({ hasList, uiSize, uiRounded, class: clsx(_class) }));
</script>

<li role="navigation" class="relative">
	<a
		{id}
		tabindex="0"
		aria-current={page.url.pathname === href ? 'page' : undefined}
		data-active={page.url.pathname === href}
		data-themed={themed}
		class:list={themed}
		{href}
		class={finalClass}
		onclick={(e) => toggleOpen(e)}
		onkeydown={(e) => toggleOpen(e)}
		{...props}
	>
		{#if iconLeft}
			<Icon icon={iconLeft} {uiSize} />
		{:else if navListState.childHasLeftIcon}
			<span class={dummyIcon({ uiSize })} aria-hidden="true">
				<svg />
			</span>
		{/if}
		{#if hasList === false && children}
			{@render children?.()}
		{/if}
		{#if label}
			{label}
		{/if}
		<span role="tab" class="px-2"></span>
		{#if hasList && iconRight}
			<Icon
				class="ml-auto"
				icon={iconRight}
				iconRotation={subList.open ? '-180deg' : '0deg'}
				{uiSize}
			/>
		{:else if hasList && !iconRight}
			<Icon
				class="ml-auto"
				icon={ChevronDown}
				iconRotation={subList.open ? '-180deg' : '0deg'}
				{uiSize}
			/>
		{/if}
	</a>
	{#if hasList && subList.open === true && children}
		{@render children?.()}
	{/if}
</li>
