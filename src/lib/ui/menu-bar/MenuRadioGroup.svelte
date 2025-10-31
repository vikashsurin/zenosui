<script lang="ts">
	import { setContext } from 'svelte';

	import type { MenuRadioGroupContextType } from './types.ts';

	let { children, value = $bindable(), name } = $props();

	const radioGroupState = {
		get value() {
			return value;
		},
		setValue(val: string | number | string[] | null | undefined) {
			value = val;
		},
		get name() {
			return name;
		}
	};

	setContext('menuRadioGroupContext', { radioGroupState } as MenuRadioGroupContextType);
</script>

<li role="group">
	{@render children?.()}
</li>
