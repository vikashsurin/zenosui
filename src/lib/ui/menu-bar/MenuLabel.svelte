<script lang="ts">
	import { baseVariant } from '$lib/style/base.js';
	import clsx from 'clsx';
	import { tv } from 'tailwind-variants';

	let { children, class: _class } = $props();

	const style = tv({
		extend: baseVariant,
		base: ``
	});

	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<p class={finalClass}>
	{@render children?.()}
</p>
