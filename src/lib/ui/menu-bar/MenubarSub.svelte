<script lang="ts">
	import { setContext } from 'svelte';
	import type { subMenuContextType } from './types.ts';

	let { children } = $props();

	let isOpen = $state<boolean>(false);
	// Generate ID once on component initialization (constant, doesn't need to be reactive)
	const subMenuId = crypto.randomUUID();

	let focusFirstItem = $state(false);
	let shouldFocusTrigger = $state(false);

	let closeTimeoutId: ReturnType<typeof setTimeout> | undefined = undefined;

	// Cleanup timeout on unmount
	$effect(() => {
		return () => {
			if (closeTimeoutId !== undefined) {
				clearTimeout(closeTimeoutId);
				closeTimeoutId = undefined;
			}
		};
	});

	const subMenuState = {
		get subMenuId() {
			return subMenuId;
		},
		get isOpen() {
			return isOpen;
		},
		open() {
			if (closeTimeoutId !== undefined) {
				clearTimeout(closeTimeoutId);
				closeTimeoutId = undefined;
			}
			isOpen = true;
		},
		close() {
			if (closeTimeoutId !== undefined) {
				clearTimeout(closeTimeoutId);
			}
			closeTimeoutId = setTimeout(() => {
				isOpen = false;
				focusFirstItem = false;
				closeTimeoutId = undefined;
			}, 500);
		},
		get shouldFocusFirstItem() {
			return focusFirstItem;
		},
		requestFocusFirstItem(val: boolean) {
			focusFirstItem = val;
		},
		get shouldFocusTrigger() {
			return shouldFocusTrigger;
		},
		requestFocusTrigger(val: boolean) {
			shouldFocusTrigger = val;
		}
	};

	setContext('subMenuContext', {
		subMenuState
	} as subMenuContextType);
</script>

<li role="none" class="relative">
	{@render children?.()}
</li>
