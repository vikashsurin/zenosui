import type { UUID } from 'crypto';
import Snacker from './Snacker.svelte';
import { mount, unmount } from 'svelte';
import type { PositionVariant } from '$lib/types/index.js';
import { browser } from '$app/environment';
import { type Snackbar } from './types.ts';

export const snackbarStore = $state({
	snackbars: <Snackbar[]>[],
	position: <PositionVariant>'',
	maxSnackbars: <number>3
});

let snackbarContainer: any = null;

export function createSnackbarManager() {
	return {
		createSnackbar(snackbar: Snackbar) {
			const id = crypto.randomUUID();
			snackbarStore.snackbars.push({ ...snackbar, id, fresh: true });
			if (!snackbarContainer) {
				this.createSnacker();
			}
			if (snackbar.duration && snackbar.duration > 0) {
				setTimeout(() => {
					this.removeSnackbar(id);
				}, snackbar.duration || 3000);
			}
			return this;
		},

		removeSnackbar(id: UUID) {
			snackbarStore.snackbars = snackbarStore.snackbars.filter((t) => t.id !== id);
			this.removeSnacker();
			return this;
		},
		createSnacker() {
			if (browser) {
				if (snackbarContainer) {
					snackbarContainer.$destroy();
					snackbarContainer = null;
				}
				const existingSnacker = document.querySelector('.zu_snackbarer');
				if (existingSnacker) {
					existingSnacker.remove();
				}
				snackbarContainer = mount(Snacker, {
					target: document.body
				});
			}
		},
		removeSnacker() {
			if (snackbarStore.snackbars.length === 0 && snackbarContainer) {
				try {
					unmount(snackbarContainer);
				} catch (error) {
					console.error('Failed to remove snackbarContainer', error);
				} finally {
					snackbarContainer = null;
				}
			}
			return this;
		},
		position(position: PositionVariant) {
			snackbarStore.position = position;
			return this;
		},
		maxSnackbars(maxSnackbars: number) {
			snackbarStore.maxSnackbars = maxSnackbars;
			return this;
		},
		action(name: string, callback: () => void) {}
	};
}

export const snackbarManager = createSnackbarManager();
