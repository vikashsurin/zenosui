<script lang="ts">
	import { Button } from '$lib/index.js';
</script>

<div>
	<h1>Color Pallete 2</h1>
	<div class="box box-1">50</div>
	<div class="box box-2">100</div>
	<div class="box box-3">200</div>
	<div class="box box-4">300</div>
	<div class="box box-5">400</div>
	<div class="box box-6">500</div>
	<div class="box box-7">600</div>
	<div class="box box-8">700</div>
	<div class="box box-9">800</div>
	<div class="box box-10">900</div>
	<div class="box box-11">950</div>

	<div class="box box-12">
		<p>Text</p>
	</div>
	<div class="box box-13 p-2">
		<h1 class="text-lg font-bold">Title</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic aliquid impedit
			reprehenderit, possimus doloremque modi labore corporis facilis. Illo perferendis, harum eius
			tempora iusto architecto omnis repellat mollitia itaque!
		</p>
		<button class="button button--primary">Open</button>
	</div>
</div>

<style>
	.box {
		padding: 1rem;
	}
	.box-1 {
		background-color: var(--color-50);
	}
	.box-2 {
		background-color: var(--color-100);
	}
	.box-3 {
		background-color: var(--color-200);
	}
	.box-4 {
		background-color: var(--color-300);
	}
	.box-5 {
		background-color: var(--color-400);
	}
	.box-6 {
		background-color: var(--color-500);
	}
	.box-7 {
		background-color: var(--color-600);
	}
	.box-8 {
		background-color: var(--color-700);
	}
	.box-9 {
		background-color: var(--color-800);
	}
	.box-10 {
		background-color: var(--color-900);
	}
	.box-11 {
		background-color: var(--color-950);
	}
	.box-12 {
		margin: 500px 0px;
		padding: 12px 24px;
		width: min-content;
		background-color: var(--color-500);
		background-color: var(--content-color-500);
		color: var(--color-950);
		color: var(--content-color-950);
	}
	.box-13 {
		background-color: white;
		color: var(--color-700);
		padding: 18px;
		border: 1px solid var(--color-300);
	}
	.button {
		padding: 12px 24px;
	}
</style>
