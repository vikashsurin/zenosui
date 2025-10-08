<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { snackbarManager } from './snackbarManager.svelte';
	import { IconButton } from '../index.js';
	import X from '@lucide/svelte/icons/x';
	import Button from '../button/Button.svelte';
	let {
		id,
		message,
		themed = false,
		xBtnStyleClass: _xStyleClass,
		class: _class,
		action
	} = $props();

	let style = tv({
		base: `zu_toast flex   gap-2 py-2 px-3 bg-amber-500 rounded-md`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
	function handleRemoveSnackbar() {
		snackbarManager.removeSnackbar(id);
	}

	const xBtnStyleClass = $state(
		'bg-opacity-50 text-inherit hover:bg-white/30  hover:text-inherit hover:bg-blend-multiply active:bg-white/30 active:text-inherit active:bg-blend-multiply border-none  '
	);

	const kal = $state<string | number | undefined>(100);

	const finalXClass = $derived(clsx(xBtnStyleClass, _xStyleClass));
	function handleAction() {
		action.callback();
		handleRemoveSnackbar();
	}
</script>

<div {id} class={finalClass}>
	<p class="flex items-center">{message}</p>
	<span class="ml-auto flex gap-1">
		<Button
			data-themed={false}
			class={finalXClass}
			uiSize="xs"
			uiRounded="sm"
			label={action.name}
			onclick={handleAction}>{action.name}</Button
		>

		<IconButton
			data-themed={themed}
			icon={X}
			uiSize="sm"
			uiRounded="full"
			class={finalXClass}
			onclick={handleRemoveSnackbar}
		/>
	</span>
</div>
