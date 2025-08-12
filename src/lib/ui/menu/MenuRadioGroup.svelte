<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { setContext } from 'svelte';

	let { children, value = $bindable(), class: _class, ...props } = $props();

	function setRadioValue(v: string | number | string[] | null | undefined) {
		value = v;
	}
	setContext('radioMenuContext', { value, setRadioValue });

	let style = tv({
		base: `flex-1 w-full`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<li class={finalClass} {...props} role="radiogroup" data-radio-value={value}>
	<ul>
		{#if children}
			{@render children?.()}
		{/if}
	</ul>
</li>
