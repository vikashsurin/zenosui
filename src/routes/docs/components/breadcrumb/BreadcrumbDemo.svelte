<script lang="ts">
	import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from '$lib/ui/index.js';
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
</script>

<div>
	<div>
		<Breadcrumb uiSize="sm">
			<BreadcrumbList>
				<BreadcrumbItem href="/">Home</BreadcrumbItem>
				<BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
				<BreadcrumbItem href="/docs/breadcrumb">Breadcrumb</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	</div>
</div>
