import type { UUID } from 'crypto';
import type { PositionVariant } from '../../types/index.js';
import { type Snackbar } from './types.js';
export declare const snackbarStore: {
    snackbars: Snackbar[];
    position: PositionVariant;
    maxSnackbars: number;
};
export declare function createSnackbarManager(): {
    createSnackbar(snackbar: Snackbar): /*elided*/ any;
    removeSnackbar(id: UUID): /*elided*/ any;
    createSnacker(): void;
    removeSnacker(): /*elided*/ any;
    position(position: PositionVariant): /*elided*/ any;
    maxSnackbars(maxSnackbars: number): /*elided*/ any;
    action(name: string, callback: () => void): void;
};
export declare const snackbarManager: {
    createSnackbar(snackbar: Snackbar): /*elided*/ any;
    removeSnackbar(id: UUID): /*elided*/ any;
    createSnacker(): void;
    removeSnacker(): /*elided*/ any;
    position(position: PositionVariant): /*elided*/ any;
    maxSnackbars(maxSnackbars: number): /*elided*/ any;
    action(name: string, callback: () => void): void;
};
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const SnackbarManager: $$__sveltets_2_IsomorphicComponent<Record<string, never>, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type SnackbarManager = InstanceType<typeof SnackbarManager>;
export default SnackbarManager;
