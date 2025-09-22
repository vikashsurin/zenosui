<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import type { HTMLThAttributes } from 'svelte/elements';

	let { children, class: _class, ...props }: HTMLThAttributes = $props();

	const paddingX = 'px-[0.5em]';
	const paddingY = 'px-[0.75em]';

	let style = tv({
		base: ` font-inherit text-left ${paddingY} ${paddingX}`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<th class={finalClass} {...props}>
	{@render children?.()}
</th>
