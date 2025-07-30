export const COLOR = {
	none: '',
	primary: 'bg-blue-500 text-white outline-blue-500',
	secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 outline-gray-200',
	tertiary: 'bg-gray-300 text-gray-800 outline-gray-300',
	danger: 'bg-red-500 text-white outline-red-500',
	warning: 'bg-yellow-500 text-white outline-yellow-500',
	success: 'bg-green-500 text-white outline-green-500',

	/**
	 * Custom color. Pass a tailwind color class as a string.
	 * @example
	 *  <Button uiColor="custom('bg-indigo-500')">Click Me</Button>
	 */
	custom: (color) => {
		console.log('custom color:: ', color);
	}
};
export const BACKGROUND_COLOR = {
	none: '',
	primary: 'bg-blue-500 hover:bg-blue-600',
	secondary: 'bg-gray-200 hover:bg-gray-300',
	tertiary: 'bg-gray-100 hover:bg-gray-300',
	danger: ' bg-red-500 hover:bg-red-600',
	warning: 'bg-yellow-500 hover:bg-yellow-600',
	success: 'bg-green-500 hover:bg-green-600'
};
export const CONTENT_COLOR = {
	none: '',
	primary: 'text-blue-500 ',
	secondary: 'text-gray-800',
	tertiary: 'text-gray-800 ',
	danger: ' text-red-500 ',
	warning: 'text-yellow-500 ',
	success: 'text-green-500'
};

export const OUTLINE_COLOR = {
	none: '',
	primary: 'focus-within:outline-blue-500 focus:outline-blue-500 outline-blue-500',
	secondary: 'focus-within:outline-gray-800 focus:outline-gray-800 outline-gray-800',
	tertiary: 'focus-within:outline-gray-800 focus:outline-gray-800 outline-gray-800',
	danger: ' focus-within:outline-red-500 focus:outline-red-500 outline-red-500',
	warning: 'focus-within:outline-yellow-500 focus:outline-yellow-500 outline-yellow-500',
	success: 'focus-within:outline-green-500 focus:outline-green-500'
};

export const BORDER_COLOR = {
	none: '',
	primary: 'border-blue-500 ',
	secondary: 'border-gray-800',
	tertiary: 'border-gray-800 ',
	danger: ' border-red-500 ',
	warning: 'border-yellow-500 ',
	success: 'border-green-500'
};
