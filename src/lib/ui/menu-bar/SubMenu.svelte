<script lang="ts">
	import { setContext } from 'svelte';
	import type { subMenuContextType } from './types.js';

	let { children } = $props();

	let isOpen = $state<boolean>(false);
	let subMenuId = crypto.randomUUID();

	let focusFirstItem = $state(false);
	let focusSubMenuTrigger = $state(false);

	const subMenuState = {
		get subMenuId() {
			return subMenuId;
		},
		get isOpen() {
			return isOpen;
		},
		open() {
			isOpen = true;
		},
		close() {
			isOpen = false;
			focusFirstItem = false;
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

	$inspect({ focusSubMenuTrigger });

	setContext('subMenuContext', {
		subMenuState
	} as subMenuContextType);
</script>

<li role="none" class="relative">
	{@render children?.()}
</li>
