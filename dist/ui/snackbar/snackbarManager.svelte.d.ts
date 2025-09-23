import type { UUID } from 'crypto';
import type { PositionVariant } from '../../types/index.js';
import { type Snackbar } from './types.ts';
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
