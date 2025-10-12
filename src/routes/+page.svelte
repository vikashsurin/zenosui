<script lang="ts">
	import { Button, IconButton, Switch } from '$lib/index.js';
	import BadgeCheck from '@lucide/svelte/icons/badge-check';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<div>
	<div class="box box-13 p-2">
		<h1 class="text-lg font-bold">Title</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic aliquid impedit
			reprehenderit, possimus doloremque modi labore corporis facilis. Illo perferendis, harum eius
			tempora iusto architecto omnis repellat mollitia itaque!
		</p>
		<Button uiColor="primary" iconRight={ChevronRight} uiRounded="none" uiSize="sm" class=""
			>Submit</Button
		>
	</div>
	<div class="">
		<h1>Switch</h1>
		<div class="flex w-fit items-center gap-3 bg-gray-200 p-4">
			<span>Toggle</span>
			<Switch uiRounded="full" uiSize="8xl" activeClass="bg-green-500" class="" />
		</div>
	</div>

	<div>
		<h1>Icon</h1>
		<IconButton icon={BadgeCheck} uiSize="3xl" class="bg-red-400" />
	</div>
</div>

<style>
	.box {
		padding: 1rem;
		color: white;
	}

	.box-13 {
		background-color: var(--primary-surface-subtle);
		color: var(--color-900);
		padding: 18px;
		border: 1px solid var(--color-300);
	}
</style>
