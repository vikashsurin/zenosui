<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '$lib/style/base.js';
	import type { CheckboxProps } from '$lib/types/index.js';

	let {
		children,
		checked = $bindable(),
		themed,
		class: _class,
		...props
	}: CheckboxProps = $props();

	let style = tv({
		extend: baseVariant,
		base: ``,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<input
	data-themed={themed}
	class:interactive={checked}
	type="checkbox"
	class={finalClass}
	bind:checked
	{...props}
/>
