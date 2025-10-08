import type { HTMLTableAttributes } from 'svelte/elements';
import type { SizeVariant } from '../../types/index.js';
type TableProps = HTMLTableAttributes & {
    uiSize?: SizeVariant;
};
declare const Table: import("svelte").Component<TableProps, {}, "">;
type Table = ReturnType<typeof Table>;
export default Table;
