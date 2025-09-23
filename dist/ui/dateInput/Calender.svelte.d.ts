declare const Calender: import("svelte").Component<{
    uiSize?: string;
    date?: any;
}, {}, "date">;
type Calender = ReturnType<typeof Calender>;
export default Calender;
