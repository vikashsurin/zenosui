<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import NewToast from './NewToast.svelte';
	import { toastStore } from '$lib/ui/toast/toastManger.svelte.ts';
	import { POSITION } from '$lib/style/postition.js';
	import type { ToasterProps } from '$lib/types/index.ts';
	import { fade, fly, slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	let { children, class: _class, ...props }: ToasterProps = $props();

	let style = tv({
		base: `zu_toaster m-2 flex flex-col gap-2 absolute `,
		variants: {
			position: POSITION
		},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ position: toastStore.position, class: clsx(_class) }));

	const visibleToasts = $derived.by(() => {
		return toastStore.toasts.slice(-toastStore.maxToasts);
	});

	// outY is not being used,
	// kept for future use
	const Y = $state({
		inY: <number>0,
		outY: <number>0
	});
	switch (toastStore.position) {
		case 'top-left':
			{
				Y.inY = -100;
				Y.outY = -100;
			}
			break;
		case 'top-right':
			{
				Y.inY = -100;
				Y.outY = -100;
			}
			break;
		case 'top-center':
			{
				Y.inY = -100;
				Y.outY = -100;
			}
			break;
		case 'bottom-left':
			{
				Y.inY = 100;
				Y.outY = -100;
			}

			break;
		case 'bottom-right':
			{
				Y.inY = 100;
				Y.outY = -100;
			}
			break;
		case 'bottom-center':
			{
				Y.inY = 100;
				Y.outY = -100;
			}
			break;
	}
</script>

{#if toastStore.toasts.length > 0}
	<div class={finalClass} {...props}>
		{#each visibleToasts as toast: Toast (toast.id)}
			{@const id = toast.id}
			{@const message = toast.message}
			<ul animate:flip={{ duration: 300 }}>
				<li
					id={toast.id}
					in:fly|global={{ y: Y.inY, duration: 300 }}
					out:fade|global={{ duration: 300 }}
				>
					<NewToast {id} {message} class={toast.styleClass} xBtnStyleClass={toast.xBtnStyleClass} />
				</li>
			</ul>
		{/each}
	</div>
{/if}
