import type { UUID } from 'crypto';
import Toaster from './Toaster.svelte';
import { mount, unmount } from 'svelte';
import type { PositionVariant } from '$lib/types/index.js';
import { browser } from '$app/environment';

export interface Toast {
	message: string;
	id?: UUID;
	position?: PositionVariant;
	duration?: number;
	styleClass?: string;
	xBtnStyleClass?: string;
	fresh?: boolean;
}

export const toastStore = $state({
	toasts: <Toast[]>[],
	position: <PositionVariant>'',
	maxToasts: <number>3
});

let toastContainer: any = null;

export function createToastManager() {
	return {
		createToast(toast: Toast) {
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

		removeToast(id: UUID) {
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
				} catch (error) {
					console.error('Failed to remove toastContainer', error);
				} finally {
					toastContainer = null;
				}
			}
			return this;
		},
		position(position: PositionVariant) {
			toastStore.position = position;
			return this;
		},
		maxToasts(maxToasts: number) {
			toastStore.maxToasts = maxToasts;
			return this;
		}
	};
}

export const toastManager = createToastManager();
