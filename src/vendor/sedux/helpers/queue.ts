import type { GeneralAction } from '../types/slicer';

class Queue {
	elements = [];
	length = this.elements.length;

	constructor() {
		this.elements = [];
	}

	enqueue(element: GeneralAction): void {
		this.elements.push(element);
	}

	dequeue(): GeneralAction {
		return this.elements.shift();
	}

	isEmpty(): boolean {
		return this.elements.length === 0;
	}

	peek(): unknown {
		return !this.isEmpty() ? this.elements[0] : undefined;
	}
}

export { Queue };
