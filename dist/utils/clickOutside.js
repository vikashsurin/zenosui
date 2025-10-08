/**
 * @param {HTMLDivElement | HTMLUListElement} node
 * @param {{ (): void; (): void; (): void; (): void; (): void; }} callback
 */
export function clickOutside(node, callback) {
	/**
	 * @param {{ composedPath: () => any; stopPropagation: () => void; }} event
	 */
	function handleClick(event) {
		const path = event.composedPath();
		if (!path.includes(node)) {
			// event.stopPropagation();
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
