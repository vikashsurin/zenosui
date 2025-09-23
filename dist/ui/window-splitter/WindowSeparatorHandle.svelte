<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { getContext } from 'svelte';
	import type { WindowSplitterContextType } from './types.js';
	import type { WindowSeparatorHandleProps } from '../../types/index.js';

	let { children, class: _class, ...props }: WindowSeparatorHandleProps = $props();

	let splitPosition = 25;
	let isDragging = false;
	let startX = 0;
	let startPosition = 0;

	const windowSplitterContext = getContext<WindowSplitterContextType>('windowSplitterContext');

	let containerElement = $state<HTMLDivElement | null>(null);

	$effect(() => {
		if (windowSplitterContext.containerElement) {
			containerElement = windowSplitterContext.containerElement;
		}
	});

	let minLeftSplitPosition = windowSplitterContext.minLeftSplitPosition;
	let maxRightSplitPosition = windowSplitterContext.maxRightSplitPosition;

	function handlePointerDown(event: PointerEvent) {
		isDragging = true;
		startX = event.clientX;
		startPosition = splitPosition;

		window.addEventListener('pointermove', handlePointerMove, { capture: true });
		window.addEventListener('pointerup', handlePointerUp, { capture: true });
		document.body.style.userSelect = 'none';
	}

	function handlePointerMove(event: PointerEvent) {
		if (!isDragging || !containerElement) return;

		const containerRect = containerElement.getBoundingClientRect();
		const deltaX = event.clientX - startX;
		const deltaPercent = (deltaX / containerRect.width) * 100;

		// Limit split position between 10% and 90%
		splitPosition = Math.max(
			minLeftSplitPosition,
			Math.min(maxRightSplitPosition, startPosition + deltaPercent)
		);
		windowSplitterContext.splitPosition = splitPosition;
	}

	function handlePointerUp() {
		isDragging = false;
		window.removeEventListener('pointermove', handlePointerMove, { capture: true });
		window.removeEventListener('pointerup', handlePointerUp, { capture: true });
		document.body.style.userSelect = '';
	}

	let style = tv({
		base: `h-full cursor-ew-resize bg-amber-600 hover:bg-amber-400 active:bg-amber-80`,
		variants: {},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ class: clsx(_class) }));
</script>

<div
	role="button"
	tabindex="0"
	onpointerdown={handlePointerDown}
	onkeydown={(e) => {
		if (e.key === 'ArrowLeft') splitPosition = Math.max(10, splitPosition - 2);
		if (e.key === 'ArrowRight') splitPosition = Math.min(90, splitPosition + 2);
	}}
	class={finalClass}
	{...props}
></div>
