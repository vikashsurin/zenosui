<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { fade, fly, slide } from 'svelte/transition';
	import { setContext } from 'svelte';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Play from '@lucide/svelte/icons/play';
	import Pause from '@lucide/svelte/icons/pause';
	import { IconButton } from '../index.js';
	import { ROUNDED } from '../../style/borders.js';

	let { children, uiSize, uiRounded, data, class: _class, ...props } = $props();

	// Ensure data is an array of objects with href and id properties
	$effect(() => {
		startAnimation();
		data.forEach((item: { href: string; id: number }) => {
			const img = new Image();
			img.src = item.href;
		});
	});
	let position = $state(0);

	let style = tv({
		base: `relative`,
		variants: {
			uiSize: {
				sm: 'w-1/3 h-auto',
				md: 'w-1/2 h-auto',
				lg: 'w-full h-full'
			}
		},
		defaultVariants: {
			uiSize: 'md'
		}
	});

	let indicatorStyle = tv({
		base: ``,
		variants: {
			uiRounded: ROUNDED,
			uiSize: {
				sm: 'h-1.5 w-1.5',
				md: 'h-2.5 w-2.5',
				lg: 'h-3.5 w-3.5'
			}
		},

		defaultVariants: {
			uiRounded: 'full',
			uiSize: 'md'
		}
	});
	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));

	const carouselStyle = $state({
		class: 'demo'
	});
	setContext('carouselStyle', carouselStyle);

	function handleClickLeft() {
		if (position <= 0) {
			position = data.length - 1;
		} else {
			position -= 1;
		}
	}
	function handleClickRight() {
		if (position >= data.length - 1) {
			position = 0;
		} else {
			position += 1;
		}
	}
	let intervalId = $state<ReturnType<typeof setInterval> | undefined>(undefined);

	function startAnimation() {
		intervalId = setInterval(() => {
			handleClickRight();
		}, 2000);
	}
	function endAnimation() {
		clearInterval(intervalId);
		intervalId = undefined;
	}

	function togglePlayPause() {
		if (intervalId) {
			endAnimation();
		} else {
			startAnimation();
		}
	}
</script>

<div class={finalClass}>
	<div class="absolute top-0 left-[50%] flex translate-x-[-50%] gap-1 p-2">
		{#each data as item (item.id)}
			{@const active = item.id === data[position].id}
			<div
				class={indicatorStyle({
					uiRounded,
					uiSize,
					class: active ? 'bg-gray-800' : 'bg-gray-500'
				})}
			></div>
		{/each}
	</div>

	{#key data[position].id}
		<img in:fade={{ duration: 100 }} class="h-auto w-full" src={data[position].href} alt="" />
	{/key}

	<div class="absolute bottom-0 left-[50%] flex w-full translate-x-[-50%] justify-between p-2">
		<IconButton {uiSize} {uiRounded} icon={ChevronLeft} onclick={handleClickLeft} />
		<IconButton
			{uiSize}
			{uiRounded}
			icon={intervalId !== undefined ? Pause : Play}
			onclick={togglePlayPause}
		/>
		<IconButton {uiSize} {uiRounded} icon={ChevronRight} onclick={handleClickRight} />
	</div>
</div>
