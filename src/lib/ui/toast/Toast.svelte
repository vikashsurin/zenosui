<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { toastManager } from './toastManager.svelte.js';
	import { IconButton } from '$lib/ui/index.js';
	import X from '@lucide/svelte/icons/x';
	import { fade, fly, slide } from 'svelte/transition';
	let { id, message, themed = false, xBtnStyleClass: _xStyleClass, class: _class } = $props();

	let style = tv({
		base: `zu_toast flex  justify-between gap-2 py-2 px-3 bg-amber-500 rounded-md`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
	function handleRemoveToast() {
		console.log('handleRemoveToast');
		toastManager.removeToast(id);
	}

	const xBtnStyleClass = $state(
		'bg-opacity-50 text-inherit hover:bg-white/30  hover:text-inherit hover:bg-blend-multiply active:bg-white/30 active:text-inherit active:bg-blend-multiply'
	);

	const kal = $state<string | number | undefined>(100);

	const finalXClass = $derived(clsx(xBtnStyleClass, _xStyleClass));
</script>

<div {id} class={finalClass}>
	<p class="flex items-center">{message}</p>

	<IconButton
		data-themed={themed}
		icon={X}
		uiSize="sm"
		uiRounded="full"
		class={finalXClass}
		onclick={handleRemoveToast}
	/>
</div>
