import { type ToastMessage } from '../store/index.svelte.js';
export interface ToastOptions {
    duration?: number;
    dismissible?: boolean;
    action?: {
        label: string;
        handler: () => void;
    };
}
export declare const toast: {
    /**
     * Show a success toast
     */
    success: (message: string, options?: ToastOptions) => void;
    /**
     * Show an error toast
     */
    error: (message: string, options?: ToastOptions) => void;
    /**
     * Show a warning toast
     */
    warning: (message: string, options?: ToastOptions) => void;
    /**
     * Show an info toast
     */
    info: (message: string, options?: ToastOptions) => void;
    /**
     * Show a custom toast with full control
     */
    custom: (toastMessage: ToastMessage) => void;
};
