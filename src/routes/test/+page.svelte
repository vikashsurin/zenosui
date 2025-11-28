<!-- <script lang="ts">
	import Menubar from './Menubar.svelte';
	import CtxMenu from './CtxMenu.svelte';
	import DdMenu from './DdMenu.svelte';
</script>

<div class="p-8">
	<Menubar />

	<CtxMenu />
	
	<DdMenu />
</div> -->
<script lang="ts">
	import { Calender, DateInput } from '$lib/ui/index.js';
	let date = $state(new Date());
</script>

<div>
	<DateInput bind:date uiSize="md" uiRounded="xl">
		<Calender bind:date />
	</DateInput>
</div>

<style>
	/* :global(.calender_date) {
		color: red;
	}
	:global(.calender_date:hover) {
		color: teal;
	}
	:global(.calender_date_today) {
		color: green;
		background-color: purple;
	}
	:global(.calender_date_selected) {
		background-color: green;
		color: white;
	}
	:global(.calender_date_muted) {
		color: gray;
	}
	:global(.calender_day) {
		/* color: orange; */
	/* }
	:global(.calender_prev_icon:hover) {
		color: red;
		background-color: blue;
	} */
</style>
