export const clickOutside = (node: HTMLElement): { destroy: () => void } => {
	const handleClick = (event: MouseEvent) => {
		console.log('clicked');
		const { target } = event;
		if (node && !node.contains(target as HTMLElement) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};
