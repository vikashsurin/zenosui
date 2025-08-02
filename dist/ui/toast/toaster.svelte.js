import Toaster from './Toaster.svelte';
import { mount, unmount } from 'svelte';
import { browser } from '$app/environment';
export const toastStore = $state({
    toasts: [],
    position: 'bottom-center',
    maxToasts: 3
});
let toastContainer = null;
export function createToastManager() {
    return {
        createToast(toast) {
            const id = crypto.randomUUID();
            toastStore.toasts.push({ ...toast, id, fresh: true });
            if (!toastContainer) {
                this.createToaster();
            }
            if (toast.duration && toast.duration > 0) {
                setTimeout(() => {
                    this.removeToast(id);
                }, toast.duration || 3000);
            }
            return this;
        },
        removeToast(id) {
            toastStore.toasts = toastStore.toasts.filter((t) => t.id !== id);
            this.removeToaster();
            return this;
        },
        createToaster() {
            if (browser) {
                if (toastContainer) {
                    toastContainer.$destroy();
                    toastContainer = null;
                }
                const existingToaster = document.querySelector('.zu_toaster');
                if (existingToaster) {
                    existingToaster.remove();
                }
                toastContainer = mount(Toaster, {
                    target: document.body
                });
            }
        },
        removeToaster() {
            if (toastStore.toasts.length === 0 && toastContainer) {
                try {
                    unmount(toastContainer);
                }
                catch (error) {
                    console.error('Failed to remove toastContainer', error);
                }
                finally {
                    toastContainer = null;
                }
            }
            return this;
        },
        position(position) {
            toastStore.position = position;
            return this;
        },
        maxToasts(maxToasts) {
            toastStore.maxToasts = maxToasts;
            return this;
        }
    };
}
export const toaster = createToastManager();
