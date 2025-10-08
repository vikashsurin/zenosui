import { componentList } from "./componentList.js";

export let docStore = $state({
    index: -1,
});

let previous = $derived.by(() => componentList[docStore.index - 1]);
let next = $derived.by(() => componentList[docStore.index + 1]);



export function getPrev() {
    return previous
}

export function getNext() {
    return next
}
