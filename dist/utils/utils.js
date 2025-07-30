export function clickOutside(node, callback) {
    function handleClick(event) {
        const path = event.composedPath();
        if (!path.includes(node)) {
            event.stopPropagation();
            callback();
        }
    }
    document.addEventListener('click', handleClick, true);
    return {
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
}
