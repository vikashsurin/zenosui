import type { UUID } from 'crypto';
import type { PositionVariant } from '../../types/index.ts';
export interface Toast {
    message: string;
    id?: UUID;
    position?: PositionVariant;
    duration?: number;
    styleClass?: string;
    xBtnStyleClass?: string;
    fresh?: boolean;
}
export declare const toastStore: {
    toasts: Toast[];
    position: PositionVariant;
    maxToasts: number;
};
export declare function createToastManager(): {
    createToast(toast: Toast): /*elided*/ any;
    removeToast(id: UUID): /*elided*/ any;
    createToaster(): void;
    removeToaster(): /*elided*/ any;
    position(position: PositionVariant): /*elided*/ any;
    maxToasts(maxToasts: number): /*elided*/ any;
};
export declare const toaster: {
    createToast(toast: Toast): /*elided*/ any;
    removeToast(id: UUID): /*elided*/ any;
    createToaster(): void;
    removeToaster(): /*elided*/ any;
    position(position: PositionVariant): /*elided*/ any;
    maxToasts(maxToasts: number): /*elided*/ any;
};
