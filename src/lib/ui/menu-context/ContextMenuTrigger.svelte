<script lang="ts">
	import { getContext } from 'svelte';
	import type { ContextMenuContextType } from './types.ts';
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { baseVariant } from '$lib/style/base.js';
	import type { ContextMenuTriggerProps } from '$lib/types/index.ts';

	let { children, uiSize, class: _class }: ContextMenuTriggerProps = $props();

	let el = $state<HTMLElement | null>(null);

	const contextMenuContext = getContext<ContextMenuContextType>('contextMenuContext');
	const id = contextMenuContext.menuId;
	const isOpen = $derived(contextMenuContext.ContextMenuState.isOpen);

	function openMenuAt(position: { x: number; y: number }) {
		contextMenuContext.ContextMenuState.setMenuPosition(position);
		contextMenuContext.ContextMenuState.open();
	}

	function handleContext(e: MouseEvent) {
		e.preventDefault();
		openMenuAt({ x: e.clientX, y: e.clientY });
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			const rect = el?.getBoundingClientRect();
			if (rect) {
				openMenuAt({ x: rect.left, y: rect.bottom });
			}
		}
	}

	const style = tv({
		extend: baseVariant,
		base: '',
		variants: {
			uiSize: ''
		}
	});

	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<button
	data-menu-trigger
	bind:this={el}
	data-menu-id={id}
	type="button"
	role="menuitem"
	aria-haspopup="true"
	aria-expanded={isOpen}
	aria-controls={`menu-${id}`}
	tabindex="0"
	oncontextmenu={handleContext}
	onkeydown={handleKeyDown}
	class={finalClass}
>
	{@render children?.()}
</button>
