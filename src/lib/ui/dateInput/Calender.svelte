<script lang="ts">
	import ChevronLeft from '@lucide/svelte/icons/chevron-left';
	import IconButton from '../button/IconButton.svelte';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import { tv } from 'tailwind-variants';
	import { TEXT_SIZE_WITH_DIMENSIONS } from '$lib/style/sizing.js';
	import clsx from 'clsx';
	import { H2 } from '../_primitives/index.js';
	import { calender } from './theme.js';

	let currentDate = $state(new Date()); // September 12, 2025
	let selectedDate = $state<Date | null | undefined>(null);

	let { uiSize = 'sm', date: _date = $bindable() } = $props();
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
	function getDaysInMonth(date: Date) {
		return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
	}

	// Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
	function getFirstDayOfMonth(date: Date) {
		return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
	}

	// Get days from previous month to fill the grid
	function getPreviousMonthDays(date: Date) {
		const firstDay = getFirstDayOfMonth(date);

		// Get the previous month and year correctly
		const prevMonthDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
		const prevYear = prevMonthDate.getFullYear();
		const prevMonthIndex = prevMonthDate.getMonth();

		// Get the number of days in the previous month
		const prevMonthDays = new Date(prevYear, prevMonthIndex + 1, 0).getDate();

		const days = [];
		for (let i = firstDay - 1; i >= 0; i--) {
			days.push({
				day: prevMonthDays - i,
				isCurrentMonth: false,
				isPrevMonth: true,
				isNextMonth: false,
				date: new Date(prevYear, prevMonthIndex, prevMonthDays - i)
			});
		}
		return days;
	}

	// Get all days for the current month
	function getCurrentMonthDays(date: Date) {
		const daysInMonth = getDaysInMonth(date);
		const days = [];

		for (let day = 1; day <= daysInMonth; day++) {
			days.push({
				day: day,
				isCurrentMonth: true,
				isPrevMonth: false,
				isNextMonth: false,
				date: new Date(date.getFullYear(), date.getMonth(), day)
			});
		}
		return days;
	}

	// Get days from next month to complete the grid
	function getNextMonthDays(date: Date) {
		const totalCells = 42; // 6 rows × 7 days
		const prevMonthDays = getPreviousMonthDays(date);
		const currentMonthDays = getCurrentMonthDays(date);
		const remainingCells = totalCells - prevMonthDays.length - currentMonthDays.length;

		// Explicit next month/year calculation
		const nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
		const nextYear = nextMonthDate.getFullYear();
		const nextMonth = nextMonthDate.getMonth();

		const days = [];
		for (let day = 1; day <= remainingCells; day++) {
			days.push({
				day: day,
				isCurrentMonth: false,
				isPrevMonth: false,
				isNextMonth: true,
				date: new Date(nextYear, nextMonth, day)
			});
		}
		return days;
	}
	type DateObj = {
		day: number;
		isCurrentMonth: boolean;
		isPrevMonth: boolean;
		isNextMonth: boolean;
		date: Date;
	};
	// Combine all days for the calendar grid - this is a derived value
	const allDays = $derived(() => {
		return [
			...getPreviousMonthDays(currentDate),
			...getCurrentMonthDays(currentDate),
			...getNextMonthDays(currentDate)
		] as DateObj[];
	});

	function goToPrevMonth() {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
	}

	// Navigate to next month
	function goToNextMonth() {
		currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
	}

	// Handle date selection
	function handleDateClick(dayObj: DateObj) {
		if (dayObj.isPrevMonth) {
			goToPrevMonth();
		} else if (dayObj.isNextMonth) {
			goToNextMonth();
		}
		selectedDate = dayObj?.date;
		_date = dayObj.date;
	}

	// Check if a date is today
	function isToday(dayObj: DateObj) {
		if (!dayObj) return false;
		if (!dayObj.isCurrentMonth) return false;
		const today = new Date();
		return dayObj?.date.toDateString() === today.toDateString();
	}

	// Check if a date is selected
	function isSelected(dayObj: DateObj) {
		return dayObj.date.toDateString() === selectedDate?.toDateString();
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
		base: `zu_calender ${calender} p-2`,
		variants: {}
	});

	const finalCalenderStyle = $derived(calendarStyle({}));
	const derivedStateStyle = $derived(cellStyle({ uiSize, class: clsx('date ') }));
</script>

<div class={finalCalenderStyle}>
	<div class="zu_calender_header">
		<IconButton
			themed={false}
			{uiSize}
			uiRounded="full"
			icon={ChevronLeft}
			class="bg-[var(--theme-background-600)] hover:bg-[var(--theme-background-500)] active:bg-[var(--theme-background-700)]"
			onclick={goToPrevMonth}
		/>

		<H2 {uiSize}>
			{monthNames[currentDate.getMonth()]}
			{currentDate.getFullYear()}
		</H2>

		<IconButton
			themed={false}
			{uiSize}
			uiRounded="full"
			class="bg-[var(--theme-background-600)] hover:bg-[var(--theme-background-500)] active:bg-[var(--theme-background-700)]"
			icon={ChevronRight}
			onclick={goToNextMonth}
		/>
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
				class:date_selected={isSelected(dayObj)}
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
		background-color: var(--theme-background-200);
		color: black;
	}
	.date_selected {
		background-color: #444;
		color: white;
	}
	/* Optional: Add any custom styles here */
	button:focus {
		/* outline: 2px solid #3b82f6; */
	}
</style>
