<script lang="ts">
	import {
		Combobox,
		ComboboxItem,
		ComboboxList,
		ComboboxPopover,
		ComboboxInput
	} from '$lib/ui/index.js';
	let options = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' },
		{ value: 'date', label: 'Date' },
		{ value: 'elderberry', label: 'Elderberry' },
		{ value: 'fig', label: 'Fig' },
		{ value: 'grape', label: 'Grape' },
		{ value: 'honeydew', label: 'Honeydew' },
		{ value: 'kiwi', label: 'Kiwi' },
		{ value: 'lime', label: 'Lime' },
		{ value: 'mango', label: 'Mango' },
		{ value: 'nectarine', label: 'Nectarine' },
		{ value: 'orange', label: 'Orange' },
		{ value: 'papaya', label: 'Papaya' },
		{ value: 'quince', label: 'Quince' },
		{ value: 'raspberry', label: 'Raspberry' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'tangerine', label: 'Tangerine' },
		{ value: 'ugli fruit', label: 'Ugli Fruit' },
		{ value: 'vanilla', label: 'Vanilla' }
	];
</script>

<div>
	<h1>Combobox</h1>
	<form action="?/combobox" method="POST">
		<Combobox data={options} uiSize="sm" uiRounded="sm">
			<ComboboxInput name="fruit" />
			<ComboboxPopover>
				<ComboboxList class="  max-h-100 bg-amber-500">
					{#snippet children(data)}
						<ComboboxItem uiSize="sm" {data} />
					{/snippet}
				</ComboboxList>
			</ComboboxPopover>
		</Combobox>
		<!-- <input type="text" name="fruit" /> -->
		<button type="submit">Submit</button>
	</form>
</div>
