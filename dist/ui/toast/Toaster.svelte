<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import NewToast from './Toast.svelte';
	import { toastStore } from './toaster.svelte.ts';
	import { POSITION } from '../../style/postition.js';
	import type { ToasterProps } from '../../types/index.ts';
	import { fade, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { toaster } from './toaster.svelte.ts';

	let { children, class: _class, ...props }: ToasterProps = $props();

	let style = tv({
		base: `zu_toaster m-2 flex flex-col gap-2 fixed `,
		variants: {
			position: POSITION
		},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ position: toastStore.position, class: clsx(_class) }));

	if (import.meta.hot) {
		import.meta.hot.dispose(() => {
			toaster.removeToaster();
		});
	}
	let animeStyle = $state({
		direction: 'column',
		y: <number | null>100
	});

	if (toastStore.position.startsWith('bottom')) {
		animeStyle.direction = 'column';
		animeStyle.y = -100;
	} else {
		animeStyle.direction = 'column-reverse';
		animeStyle.y = -100;
	}

	const flexDirection = $derived.by(() => {
		return toastStore.position.startsWith('bottom') ? 'column' : 'column-reverse';
	});

	const y = $derived.by(() => {
		return toastStore.position.startsWith('bottom') ? 100 : -100;
	});
</script>

<!-- {#if mounted && toastStore.toasts.length > 0} -->
<ul class={finalClass} {...props} style={`--flex-direction:${flexDirection}`}>
	{#each toastStore.toasts as toast: Toast, i (toast.id)}
		{@const id = toast.id}
		{@const message = toast.message}
		<li
			animate:flip={{ duration: 300 }}
			id={toast.id}
			transition:fly|global={{ y: 100, duration: 300 }}
		>
			<NewToast {id} {message} class={toast.styleClass} xBtnStyleClass={toast.xBtnStyleClass} />
		</li>
	{/each}
</ul>

<!-- {/if} -->

<style>
	.zu_toaster {
		position: fixed;
		display: flex;
		flex-direction: var(--flex-direction);
	}

	.zu_toaster > *:not(:nth-last-child(-n + 3)) {
		visibility: hidden;
		opacity: 0;
	}
</style>
