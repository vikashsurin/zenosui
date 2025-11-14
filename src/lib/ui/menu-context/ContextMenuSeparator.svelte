<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { SeparatorProps } from '$lib/types/index.ts';

	let { class: _class }: SeparatorProps = $props();

	const style = tv({
		base: `py-1 opacity-10`
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div role="separator" class={finalClass}>
	<hr />
</div>

