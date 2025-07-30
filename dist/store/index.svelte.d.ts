export type ToastType = 'success' | 'error' | 'warning' | 'info';
export interface ToastMessage {
    id?: string;
    message: string;
    type?: ToastType;
    duration?: number;
    dismissible?: boolean;
    action?: {
        label: string;
        handler: () => void;
    };
}
export declare const toastStore: {
    toasts: ToastMessage[];
};
export declare function addToast(toast: ToastMessage): void;
export declare function removeToast(id: string): void;
export declare function clearAllToasts(): void;
