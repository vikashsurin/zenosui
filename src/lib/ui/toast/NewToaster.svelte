<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import NewToast from './NewToast.svelte';
	import { toastStore } from '$lib/ui/toast/toastManger.svelte.ts';
	import { POSITION } from '$lib/style/postition.js';
	import type { ToasterProps } from '$lib/types/index.ts';

	let { children, class: _class, position = 'bottom-center', ...props }: ToasterProps = $props();

	let style = tv({
		base: `zu_toaster m-2 flex flex-col gap-2   absolute `,
		variants: {
			position: POSITION
		},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ position: toastStore.position, class: clsx(_class) }));

	const visibleToasts = $derived(toastStore.toasts.slice(-toastStore.maxToasts));
	$inspect({ toastStore });
</script>

{#if toastStore.toasts.length > 0}
	<div class={finalClass} {...props}>
		{#each visibleToasts as toast: Toast}
			{#key toast.id}
				{@const id = toast.id}
				{@const message = toast.message}
				<NewToast {id} {message} class={toast.styleClass} />
			{/key}
		{/each}
	</div>
{/if}
