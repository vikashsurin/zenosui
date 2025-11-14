<script lang="ts">
	import { baseVariant } from '$lib/style/base.js';
	import clsx from 'clsx';
	import { tv } from 'tailwind-variants';

	let { children, class: _class } = $props();

	const style = tv({
		extend: baseVariant,
		base: `px-[0.7em] py-[0.2em] text-sm font-medium text-[var(--theme-text-600)]`
	});

	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<p class={finalClass}>
	{@render children?.()}
</p>
