<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	let { class: _class } = $props();

	let style = tv({
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<hr class={finalClass} />
