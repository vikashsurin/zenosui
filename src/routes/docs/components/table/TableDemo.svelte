<script lang="ts">
	import {
		Table,
		TableBody,
		TableCaption,
		TableCell,
		TableHead,
		TableHeader,
		TableRow,
		TableFooter
	} from '$lib/ui/index.js';
</script>

<div>
	<Table uiSize="md">
		<TableHeader>
			<TableRow>
				<TableHead>First Name</TableHead>
				<TableHead>Last Name</TableHead>
				<TableHead>Username</TableHead>
				<TableHead>Mobile Number</TableHead>
			</TableRow>
		</TableHeader>

		<TableBody>
			<TableRow>
				<TableHead>John</TableHead>
				<TableCell>Doe</TableCell>
				<TableCell>@johndoe</TableCell>
				<TableCell>490233378245</TableCell>
			</TableRow>
			<TableRow>
				<TableHead>John</TableHead>
				<TableCell>Doe</TableCell>
				<TableCell>@johndoe</TableCell>
				<TableCell>490233378245</TableCell>
			</TableRow>
			<TableRow>
				<TableHead>John</TableHead>
				<TableCell>Doe</TableCell>
				<TableCell>@johndoe</TableCell>
				<TableCell>490233378245</TableCell>
			</TableRow>
			<TableRow>
				<TableHead>John</TableHead>
				<TableCell>Doe</TableCell>
				<TableCell>@johndoe</TableCell>
				<TableCell>490233378245</TableCell>
			</TableRow>
			<TableRow>
				<TableHead>John</TableHead>
				<TableCell>Doe</TableCell>
				<TableCell>@johndoe</TableCell>
				<TableCell>490233378245</TableCell>
			</TableRow>
		</TableBody>
		<!-- <TableFooter>
			<TableCaption>Footer</TableCaption>
		</TableFooter> -->
	</Table>
</div>
