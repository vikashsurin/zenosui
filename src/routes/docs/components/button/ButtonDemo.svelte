<script lang="ts">
	import { Button } from '$lib/ui/index.js';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	function handleClick() {
		console.log('click');
	}
</script>

<div class="flex gap-2">
	<Button onclick={handleClick}>Button</Button>
	<!-- <Button label="Button" /> -->

	<!-- with icons -->

	<!-- The icons size would not automatically adapt, since they are children, and targeting specific children is not possbile  -->
	<!-- <Button uiSize="xs">
		<ArrowLeft />
		Button
		<ArrowRight />
	</Button> -->

	<!-- Passing icons as props, the icons will adapt to size of the Button-->
	<!-- <Button uiSize="xs" iconLeft={ArrowLeft} iconRight={ArrowRight}>Button</Button> -->
</div>
