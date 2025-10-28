<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import NewToast from './Toast.svelte';
	import { toastStore } from '$lib/ui/toast/toastManager.svelte.js';
	import { POSITION } from '$lib/style/postition.js';
	import type { ToasterProps } from '$lib/types/index.js';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { toastManager } from './toastManager.svelte.js';

	let { children, class: _class, ...props }: ToasterProps = $props();

	let style = tv({
		base: `zu_toaster m-2 flex flex-col gap-2 fixed z-999 `,
		variants: {
			position: POSITION
		},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ position: toastStore.position, class: clsx(_class) }));

	if (import.meta.hot) {
		import.meta.hot.dispose(() => {
			toastManager.removeToaster();
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

<ul class={finalClass} {...props} style={`--flex-direction:${flexDirection}`}>
	{#each toastStore.toasts as toast: Toast (toast.id)}
		{@const id = toast.id}
		{@const message = toast.message}
		<li
			animate:flip={{ duration: 200 }}
			id={toast.id}
			transition:fly|global={{ y: y, duration: 300 }}
		>
			<NewToast {id} {message} class={toast.styleClass} xBtnStyleClass={toast.xBtnStyleClass} />
		</li>
	{/each}
</ul>

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
