import type { UUID } from 'crypto';
import NewToaster from './NewToaster.svelte';
import { mount, unmount } from 'svelte';
import type { PositionVariant } from '$lib/types/index.ts';
import { browser } from '$app/environment';
export interface Toast {
	message: string;
	id?: UUID;
	position?: PositionVariant;
	duration?: number;
	styleClass?: string;
}

export const toastStore = $state({
	toasts: <Toast[]>[],
	position: <PositionVariant>'bottom-center',
	maxToasts: <number>3
});

let toaster: any = null;

export function createToastManager() {
	return {
		createToast(toast: Toast) {
			const id = crypto.randomUUID();
			toastStore.toasts.push({ ...toast, id });
			if (!toaster) {
				this.createToaster();
			}
			if (toast.duration && toast.duration > 0) {
				setTimeout(() => {
					console.log('i just rant');
					this.removeToast(id);
				}, toast.duration || 3000);
			}
			return this;
		},

		removeToast(id: UUID) {
			toastStore.toasts = toastStore.toasts.filter((t) => t.id !== id);
			return this;
		},
		createToaster() {
			if (browser) {
				toaster = mount(NewToaster, {
					target: document.body
				});
			}
			return this;
		},
		removeToaster() {
			if (toaster) {
				try {
					unmount(toaster);
				} catch (error) {
					console.error('Failed to remove toaster', error);
				} finally {
					toaster = null;
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
