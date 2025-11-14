<script lang="ts">
	import { setContext } from 'svelte';
	import type { subMenuContextType } from './types.ts';

	let { children } = $props();

	let isOpen = $state(false);
	const subMenuId = crypto.randomUUID();

	let focusFirstItem = $state(false);
	let focusSubMenuTrigger = $state(false);

	let closeTimeoutId: ReturnType<typeof setTimeout> | undefined = undefined;

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
		get focusFirstMenuItem() {
			return focusFirstItem;
		},
		setFirstMenuItemFocus(val: boolean) {
			focusFirstItem = val;
		},
		get focusSubMenuTrigger() {
			return focusSubMenuTrigger;
		},
		setSubMenuTriggerFocus(val: boolean) {
			focusSubMenuTrigger = val;
		}
	};

	setContext('subMenuContext', {
		subMenuState
	} as subMenuContextType);
</script>

<li role="none" class="relative">
	{@render children?.()}
</li>
