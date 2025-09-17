<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { onMount, setContext } from 'svelte';
	import type { TreeViewProps } from '$lib/types/index.ts';

	let { children, uiIndent, class: _class, ...props }: TreeViewProps = $props();

	let state = $state({
		level: 0,
		currentTarget: null
	});

	// setContext('treeState', state);
	let ultree: HTMLUListElement;

	onMount(() => {
		// console.log('onmount');
		if (ultree) {
			const parent = ultree.parentElement?.getAttribute('role');
			state.level = parent === 'treeitem' ? state.level + 1 : 0;
		}
	});

	let style = tv({
		base: ``,
		variants: {
			uiIndent: {
				xs: 'ml-2',
				sm: 'ml-4',
				md: 'ml-8',
				lg: 'ml-12',
				xl: 'ml-16',
				'2xl': 'ml-20',
				'3xl': 'ml-24',
				'4xl': 'ml-28',
				'5xl': 'ml-32',
				'6xl': 'ml-36',
				'7xl': 'ml-40',
				'8xl': 'ml-44'
			}
		},
		defaultVariants: {}
	});

	function indent() {
		if (state.level > 0) {
			return 'sm';
		} else {
			return '';
		}
	}

	function defineRole() {
		if (state.level > 0) {
			return 'group';
		} else {
			return 'tree';
		}
	}

	const finalClass = $derived(style({ uiIndent: uiIndent ?? indent(), class: clsx(_class) }));
</script>

<ul bind:this={ultree} class={finalClass} {...props} role={defineRole()}>
	{@render children?.()}
</ul>
