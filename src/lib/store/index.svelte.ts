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

export const toastStore = $state({
	toasts: <ToastMessage[]>[]
});

export function addToast(toast: ToastMessage) {
	const id = Math.random().toString(36).slice(2);
	const duration = toast.duration ?? 4000;

	const newToast: ToastMessage = {
		id: id,
		message: toast.message,
		type: toast.type ?? 'info',
		duration,
		dismissible: toast.dismissible ?? true,
		action: toast.action
	};

	toastStore.toasts.push(newToast);

	// Auto-remove toast after duration (only if duration > 0)
	if (duration > 0) {
		setTimeout(() => {
			removeToast(id);
		}, duration);
	}
}

export function removeToast(id: string) {
	toastStore.toasts = toastStore.toasts.filter((t) => t.id !== id);
}

export function clearAllToasts() {
	toastStore.toasts = [];
}
