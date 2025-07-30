<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';

	interface Props {
		class?: string;
	}

	let { class: _class }: Props = $props();

	let style = tv({
		base: ` px-3 py-1`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div role="separator" class={finalClass}>
	<hr />
</div>
