<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	let { class: _class } = $props();

	let style = tv({
		base: `py-1 opacity-10`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div role="separator" class={finalClass}>
	<hr />
</div>
