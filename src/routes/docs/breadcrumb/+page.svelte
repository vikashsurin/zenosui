<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from '$lib/ui/index.js';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<div>
	<h1>Breadcrumb</h1>
	<div>
		<Breadcrumb uiSize="sm">
			<BreadcrumbItem href="/">Home</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem href="/docs/breadcrumb">Breadcrumb</BreadcrumbItem>
		</Breadcrumb>
	</div>
</div>
