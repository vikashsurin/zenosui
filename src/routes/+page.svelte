<script lang="ts">
	import { onMount } from 'svelte';

	let splitPosition = 25; // percentage
	let isDragging = false;
	let startX = 0;
	let startPosition = 0;
	let containerElement: HTMLDivElement;

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
		splitPosition = Math.max(10, Math.min(90, startPosition + deltaPercent));
	}

	function handlePointerUp() {
		isDragging = false;
		window.removeEventListener('pointermove', handlePointerMove, { capture: true });
		window.removeEventListener('pointerup', handlePointerUp, { capture: true });
		document.body.style.userSelect = '';
	}
</script>

<div
	class="grid h-screen"
	style="grid-template-columns: {splitPosition}% 4px 1fr;"
	bind:this={containerElement}
>
	<!-- Left panel -->
	<div class="h-full overflow-auto bg-red-400">
		<div class="p-2">Left panel ({Math.round(splitPosition)}%)</div>
	</div>

	<!-- Resizer handle -->
	<div
		tabindex="0"
		role="button"
		class="h-full cursor-ew-resize bg-amber-600 hover:bg-amber-400 active:bg-amber-800"
		onpointerdown={handlePointerDown}
		onkeydown={(e) => {
			if (e.key === 'ArrowLeft') splitPosition = Math.max(10, splitPosition - 2);
			if (e.key === 'ArrowRight') splitPosition = Math.min(90, splitPosition + 2);
		}}
	></div>

	<!-- Right panel -->
	<div class="h-full overflow-auto bg-blue-400">
		<div class="p-2">Right panel ({Math.round(100 - splitPosition)}%)</div>
	</div>
</div>
