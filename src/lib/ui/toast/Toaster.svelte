<script lang="ts">
	import { toastStore } from '$lib/utils/store.svelte.js';
	import Toast from './Toast.svelte';
	import { fly } from 'svelte/transition';

	interface ToastsProps {
		position?:
			| 'top-left'
			| 'top-right'
			| 'top-center'
			| 'bottom-left'
			| 'bottom-right'
			| 'bottom-center';
		maxToasts?: number;
		class?: string;
	}

	let { position = 'top-right', maxToasts = 5, class: _class }: ToastsProps = $props();

	const getContainerClass = (position: string) => {
		const baseClass = 'fixed z-50 flex flex-col gap-2 pointer-events-none';

		switch (position) {
			case 'top-left':
				return `${baseClass} top-4 left-4`;
			case 'top-right':
				return `${baseClass} top-4 right-4`;
			case 'top-center':
				return `${baseClass} top-4 left-1/2 -translate-x-1/2`;
			case 'bottom-left':
				return `${baseClass} bottom-4 left-4`;
			case 'bottom-right':
				return `${baseClass} bottom-4 right-4`;
			case 'bottom-center':
				return `${baseClass} bottom-4 left-1/2 -translate-x-1/2`;
			default:
				return `${baseClass} top-4 right-4`;
		}
	};

	const getTransitionDirection = (position: string) => {
		if (position.includes('top')) {
			return { y: -100 };
		} else if (position.includes('bottom')) {
			return { y: 100 };
		}
		return { y: -100 };
	};

	const containerClass = $derived(getContainerClass(position));
	const transitionParams = $derived(getTransitionDirection(position));
	const visibleToasts = $derived(toastStore.toasts.slice(-maxToasts));
</script>

<div class={`${containerClass} ${_class || ''}`}>
	{#each visibleToasts as toast (toast.id)}
		<div
			class="pointer-events-auto max-w-md min-w-[20rem]"
			in:fly={{ duration: 300, ...transitionParams }}
			out:fly={{ duration: 200, ...transitionParams }}
		>
			<Toast
				id={toast.id}
				message={toast.message}
				type={toast.type}
				dismissible={toast.dismissible}
				action={toast.action}
			/>
		</div>
	{/each}
</div>

<style>
	/* Custom scrollbar for overflow scenarios */
	.toast-container::-webkit-scrollbar {
		width: 4px;
	}

	.toast-container::-webkit-scrollbar-track {
		background: transparent;
	}

	.toast-container::-webkit-scrollbar-thumb {
		background: rgba(0, 0, 0, 0.2);
		border-radius: 2px;
	}
</style>
