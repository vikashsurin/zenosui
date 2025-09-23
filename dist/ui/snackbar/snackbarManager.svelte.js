import Snacker from './Snacker.svelte';
import { mount, unmount } from 'svelte';
import { browser } from '$app/environment';
import {} from './types.ts';
export const snackbarStore = $state({
    snackbars: [],
    position: '',
    maxSnackbars: 3
});
let snackbarContainer = null;
export function createSnackbarManager() {
    return {
        createSnackbar(snackbar) {
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
        removeSnackbar(id) {
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
                }
                catch (error) {
                    console.error('Failed to remove snackbarContainer', error);
                }
                finally {
                    snackbarContainer = null;
                }
            }
            return this;
        },
        position(position) {
            snackbarStore.position = position;
            return this;
        },
        maxSnackbars(maxSnackbars) {
            snackbarStore.maxSnackbars = maxSnackbars;
            return this;
        },
        action(name, callback) { }
    };
}
export const snackbarManager = createSnackbarManager();
