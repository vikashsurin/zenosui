<script>
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import IconButton from '../button/IconButton.svelte';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Heading from '../atoms/Heading.svelte';
	import { tv } from 'tailwind-variants';
	import { TEXT_SIZE_WITH_DIMENSIONS } from '$lib/style/sizing.js';
	import clsx from 'clsx';

	let currentDate = $state(new Date(2025, 8, 12)); // September 12, 2025
	let selectedDate = $state(null);

	let { uiSize = 'sm', d = $bindable() } = $props();
	const daysNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	// Get the number of days in the current month
	function getDaysInMonth(date) {
		return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	}
	console.log(getDaysInMonth(currentDate));
	// Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
	function getFirstDayOfMonth(date) {
		return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	}

	console.log(getFirstDayOfMonth(currentDate));
	// Get days from previous month to fill the grid
	function getPreviousMonthDays(date) {
		const firstDay = getFirstDayOfMonth(date);
		const prevMonth = new Date(date.getFullYear(), date.getMonth() - 1, 0);
		const prevMonthDays = prevMonth.getDate();
		const days = [];

		for (let i = firstDay - 1; i >= 0; i--) {
			days.push({
				day: prevMonthDays - i,
				isCurrentMonth: false,
				isPrevMonth: true
			});
		}
		return days;
	}

	// Get all days for the current month
	function getCurrentMonthDays(date) {
		const daysInMonth = getDaysInMonth(date);
		const days = [];

		for (let day = 1; day <= daysInMonth; day++) {
			days.push({
				day: day,
				isCurrentMonth: true,
				isPrevMonth: false,
				date: new Date(date.getFullYear(), date.getMonth(), day)
			});
		}
		return days;
	}

	// Get days from next month to complete the grid
	function getNextMonthDays(date) {
		const totalCells = 42; // 6 rows × 7 days
		const prevMonthDays = getPreviousMonthDays(date);
		const currentMonthDays = getCurrentMonthDays(date);
		const remainingCells = totalCells - prevMonthDays.length - currentMonthDays.length;
		const days = [];

		for (let day = 1; day <= remainingCells; day++) {
			days.push({
				day: day,
				isCurrentMonth: false,
				isPrevMonth: false
			});
		}
		return days;
	}

	// Combine all days for the calendar grid - this is a derived value
	const allDays = $derived(() => {
		return [
			...getPreviousMonthDays(currentDate),
			...getCurrentMonthDays(currentDate),
			...getNextMonthDays(currentDate)
		];
	});

	$inspect({ allDays: allDays() });
	// Navigate to previous month
	function goToPrevMonth() {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
	}

	// Navigate to next month
	function goToNextMonth() {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
	}

	// Handle date selection
	function handleDateClick(dayObj) {
		if (dayObj.isCurrentMonth) {
			selectedDate = dayObj.date;
			d = dayObj.date;
			console.log('selectedDate', dayObj.date);
		}
	}

	// Check if a date is today
	function isToday(dayObj) {
		if (!dayObj.isCurrentMonth) return false;
		const today = new Date();
		return dayObj.date.toDateString() === today.toDateString();
	}

	// Check if a date is selected
	function isSelected(dayObj) {
		if (!dayObj.isCurrentMonth || !selectedDate) return false;
		return dayObj.date.toDateString() === selectedDate.toDateString();
	}

	// Format selected date for display
	const formattedSelectedDate = $derived(() => {
		if (!selectedDate) return null;
		return selectedDate.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	});
	const cellStyle = tv({
		base: `hover:bg-gray-300`,
		variants: {
			uiSize: TEXT_SIZE_WITH_DIMENSIONS
		}
	});

	const calendarStyle = tv({
		base: `zu_calender  bg-gray-200 p-2`,
		variants: {}
	});
	const derivedStateStyle = $derived(cellStyle({ uiSize, class: clsx('date ') }));
</script>

<div class="zu_calender border border-gray-300 shadow-md">
	<div class="zu_calender_header">
		<IconButton {uiSize} uiRounded="full" icon={ChevronLeft} onclick={goToPrevMonth} />

		<Heading {uiSize}>
			{monthNames[currentDate.getMonth()]}
			{currentDate.getFullYear()}
		</Heading>

		<IconButton {uiSize} uiRounded="full" icon={ChevronRight} onclick={goToNextMonth} />
	</div>

	<div class="zu_calender_grid">
		{#each daysNames as day}
			<button disabled class:disabled={true} class={cellStyle({ uiSize })}>
				{day}
			</button>
		{/each}
		{#each allDays() as dayObj, index}
			<button
				class={derivedStateStyle}
				class:cell_selected={isSelected(dayObj)}
				class:date_muted={dayObj.isPrevMonth || !dayObj.isCurrentMonth}
				class:date_today={isToday(dayObj)}
				onclick={() => handleDateClick(dayObj)}
			>
				{dayObj.day}
			</button>
		{/each}
	</div>

	<!-- Selected Date Display -->
	<!-- {#if selectedDate}
		<div class="mt-4 rounded-md bg-gray-50 p-3">
			<p class="text-sm text-gray-600">Selected Date:</p>
			<p class="font-semibold">
				{formattedSelectedDate()}
			</p>
		</div>
	{/if} -->
</div>

<style>
	.zu_calender {
		width: max-content;
		padding: 1rem;
		/* background-color: yellow; */
	}
	.zu_calender_header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.disabled {
		color: gray;
		background-color: transparent;
	}
	.zu_calender_grid {
		display: grid;
		gap: 0.2rem;
		margin-top: 1rem;
		grid-template-columns: repeat(7, max-content);
		align-items: center;
		justify-items: center;
	}
	.date {
		cursor: pointer;
	}
	.date_muted {
		color: gray;
	}
	.date_today {
		background-color: #f2f2f2;
		color: black;
	}
	.cell_selected {
		background-color: #3b82f6;
		color: white;
	}
	/* Optional: Add any custom styles here */
	button:focus {
		outline: 2px solid #3b82f6;
	}
</style>
