<script lang="ts">
	import { tv } from 'tailwind-variants';
	import { Div, IconButton } from '../index.js';
	import X from '@lucide/svelte/icons/x';
	import CheckCircle from '@lucide/svelte/icons/check-circle';
	import AlertCircle from '@lucide/svelte/icons/alert-circle';
	import AlertTriangle from '@lucide/svelte/icons/alert-triangle';
	import Info from '@lucide/svelte/icons/info';
	import type { ToastProps } from '../../types/index.js';
	import { removeToast } from '../../store/index.svelte.js';

	let {
		id,
		message,
		type = 'info',
		dismissible = true,
		action,
		onClose,
		class: _class,
		...props
	}: ToastProps = $props();

	const toastStyle = tv({
		base: 'relative flex items-center gap-3 rounded-lg p-4 shadow-lg transition-all duration-300 ease-in-out border',
		variants: {
			type: {
				success: 'bg-green-50 border-green-200 text-green-800',
				error: 'bg-red-50 border-red-200 text-red-800',
				warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
				info: 'bg-blue-50 border-blue-200 text-blue-800'
			}
		},
		defaultVariants: {
			type: 'info'
		}
	});

	const iconStyle = tv({
		base: 'h-5 w-5 flex-shrink-0',
		variants: {
			type: {
				success: 'text-green-500',
				error: 'text-red-500',
				warning: 'text-yellow-500',
				info: 'text-blue-500'
			}
		}
	});

	const buttonStyle = tv({
		base: 'text-sm font-medium underline hover:no-underline transition-all duration-200',
		variants: {
			type: {
				success: 'text-green-600 hover:text-green-700',
				error: 'text-red-600 hover:text-red-700',
				warning: 'text-yellow-600 hover:text-yellow-700',
				info: 'text-blue-600 hover:text-blue-700'
			}
		}
	});

	const getIcon = (type: string) => {
		switch (type) {
			case 'success':
				return CheckCircle;
			case 'error':
				return AlertCircle;
			case 'warning':
				return AlertTriangle;
			case 'info':
			default:
				return Info;
		}
	};

	const handleClose = () => {
		if (id) {
			removeToast(id);
		}
		onClose?.();
	};

	const handleAction = () => {
		action?.handler();
		handleClose();
	};

	const finalClass = $derived(toastStyle({ type, class: _class }));
	const iconClass = $derived(iconStyle({ type }));
	const actionClass = $derived(buttonStyle({ type }));
	const IconComponent = $derived(getIcon(type));
</script>

<Div {...props} class={finalClass} role="alert" aria-live="polite">
	<!-- Icon -->
	<IconComponent class={iconClass} />

	<!-- Message -->
	<div class="flex-1 text-sm font-medium">
		{message}
	</div>

	<!-- Action Button -->
	{#if action}
		<button class={actionClass} onclick={handleAction} type="button">
			{action.label}
		</button>
	{/if}

	<!-- Close Button -->
	{#if dismissible}
		<IconButton
			onclick={handleClose}
			uiSize="sm"
			icon={X}
			class="opacity-70 transition-opacity hover:opacity-100"
			aria-label="Close notification"
		/>
	{/if}
</Div>
