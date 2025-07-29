import { addToast, type ToastMessage } from '../store/index.svelte.js';

export interface ToastOptions {
	duration?: number;
	dismissible?: boolean;
	action?: {
		label: string;
		handler: () => void;
	};
}

export const toast = {
	/**
	 * Show a success toast
	 */
	success: (message: string, options?: ToastOptions) => {
		addToast({
			message,
			type: 'success',
			...options
		});
	},

	/**
	 * Show an error toast
	 */
	error: (message: string, options?: ToastOptions) => {
		addToast({
			message,
			type: 'error',
			duration: options?.duration ?? 6000, // Longer duration for errors
			...options
		});
	},

	/**
	 * Show a warning toast
	 */
	warning: (message: string, options?: ToastOptions) => {
		addToast({
			message,
			type: 'warning',
			...options
		});
	},

	/**
	 * Show an info toast
	 */
	info: (message: string, options?: ToastOptions) => {
		addToast({
			message,
			type: 'info',
			...options
		});
	},

	/**
	 * Show a custom toast with full control
	 */
	custom: (toastMessage: ToastMessage) => {
		addToast(toastMessage);
	}
};
