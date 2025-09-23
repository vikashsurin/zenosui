declare const Toast: import("svelte").Component<{
    id: any;
    message: any;
    themed?: boolean;
    xBtnStyleClass: any;
    class: any;
}, {}, "">;
type Toast = ReturnType<typeof Toast>;
export default Toast;
