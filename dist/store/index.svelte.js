export const toastStore = $state({
    toasts: []
});
export function addToast(toast) {
    const id = Math.random().toString(36).slice(2);
    const duration = toast.duration ?? 4000;
    const newToast = {
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
export function removeToast(id) {
    toastStore.toasts = toastStore.toasts.filter((t) => t.id !== id);
}
export function clearAllToasts() {
    toastStore.toasts = [];
}
