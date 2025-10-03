<script lang="ts">
	import {
		WindowSplitter,
		WindowPaneLeft,
		WindowPaneRight,
		WindowSeparatorHandle
	} from '$lib/ui/index.js';
</script>

<div>
	<h1>WindowSplitter</h1>
	<WindowSplitter
		initialSplitPosition={25}
		minLeftSplitPosition={0}
		maxRightSplitPosition={100}
		class="h-full"
	>
		<WindowPaneLeft class="bg-red-400">
			<div class="p-2">
				<ul>
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
					<li>Item 3</li>
					<li>Item 3</li>
					<li>Item 3</li>
					<li>Item 3</li>
					<li>Item 3</li>
					<li>Item 3</li>
				</ul>
			</div>
		</WindowPaneLeft>
		<WindowSeparatorHandle />
		<WindowPaneRight class="bg-blue-400">
			<div class="flex flex-wrap gap-2 p-2">
				<div class=" flex h-40 w-40 items-center justify-center bg-amber-400">helo</div>
				<div class=" flex h-40 w-40 items-center justify-center bg-amber-400">helo</div>
				<div class=" flex h-40 w-40 items-center justify-center bg-amber-400">helo</div>
				<div class=" flex h-40 w-40 items-center justify-center bg-amber-400">helo</div>
				<div class=" flex h-40 w-40 items-center justify-center bg-amber-400">helo</div>
				<div class=" flex h-40 w-40 items-center justify-center bg-amber-400">helo</div>
				<div class=" flex h-40 w-40 items-center justify-center bg-amber-400">helo</div>
				<div class=" flex h-40 w-40 items-center justify-center bg-amber-400">helo</div>
			</div>
		</WindowPaneRight>
	</WindowSplitter>
</div>
