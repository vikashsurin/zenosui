import { addToast } from '../store/index.svelte.js';
export const toast = {
    /**
     * Show a success toast
     */
    success: (message, options) => {
        addToast({
            message,
            type: 'success',
            ...options
        });
    },
    /**
     * Show an error toast
     */
    error: (message, options) => {
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
    warning: (message, options) => {
        addToast({
            message,
            type: 'warning',
            ...options
        });
    },
    /**
     * Show an info toast
     */
    info: (message, options) => {
        addToast({
            message,
            type: 'info',
            ...options
        });
    },
    /**
     * Show a custom toast with full control
     */
    custom: (toastMessage) => {
        addToast(toastMessage);
    }
};
