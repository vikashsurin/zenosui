<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import Dot from '@lucide/svelte/icons/dot';

	let { class: _class }: { class?: string } = $props();

	let style = tv({
		base: `inline-flex items-center `,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<span class={finalClass}>
	<Dot />
</span>
