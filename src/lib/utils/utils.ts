export function clickOutside(node: HTMLUListElement, callback: () => void) {
	function handleClick(event: MouseEvent) {
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
