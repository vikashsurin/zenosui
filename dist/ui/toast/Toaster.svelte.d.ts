interface ToastsProps {
    position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
    maxToasts?: number;
    class?: string;
}
declare const Toaster: import("svelte").Component<ToastsProps, {}, "">;
type Toaster = ReturnType<typeof Toaster>;
export default Toaster;
