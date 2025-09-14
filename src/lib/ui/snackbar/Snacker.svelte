<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import NewSnackbar from './Snackbar.svelte';
	import { snackbarStore } from '$lib/ui/snackbar/snackbarManager.svelte.js';
	import { POSITION } from '$lib/style/postition.js';
	import type { ToasterProps } from '$lib/types/index.js';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { snackbarManager } from './snackbarManager.svelte.ts';

	let { children, class: _class, ...props }: ToasterProps = $props();

	let style = tv({
		base: `zu_toaster m-2 flex flex-col gap-2 fixed `,
		variants: {
			position: POSITION
		},
		defaultVariants: {}
	});

	const finalClass = $derived(style({ position: snackbarStore.position, class: clsx(_class) }));

	if (import.meta.hot) {
		import.meta.hot.dispose(() => {
			snackbarManager.removeSnacker();
		});
	}
	let animeStyle = $state({
		direction: 'column',
		y: <number | null>100
	});

	if (snackbarStore.position.startsWith('bottom')) {
		animeStyle.direction = 'column';
		animeStyle.y = -100;
	} else {
		animeStyle.direction = 'column-reverse';
		animeStyle.y = -100;
	}

	const flexDirection = $derived.by(() => {
		return snackbarStore.position.startsWith('bottom') ? 'column' : 'column-reverse';
	});

	const y = $derived.by(() => {
		return snackbarStore.position.startsWith('bottom') ? 100 : -100;
	});
</script>

<ul class={finalClass} {...props} style={`--flex-direction:${flexDirection}`}>
	{#each snackbarStore.snackbars as snackbar: Snackbar (snackbar.id)}
		{@const id = snackbar.id}
		{@const message = snackbar.message}
		<li
			animate:flip={{ duration: 200 }}
			id={snackbar.id}
			transition:fly|global={{ y: y, duration: 300 }}
		>
			<NewSnackbar
				{id}
				{message}
				class={snackbar.styleClass}
				xBtnStyleClass={snackbar.xBtnStyleClass}
				action={snackbar.action}
			/>
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
