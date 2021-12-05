import type { GeneralAction } from './slicer';

export interface Calls {
	nextCalled: GeneralAction;
	called: GeneralAction;
	prevCalled: GeneralAction;
}
