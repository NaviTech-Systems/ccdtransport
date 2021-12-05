import type { GeneralAction } from './slicer';

export interface Listener {
	actionType: symbol | symbol[];
	callback: Callback;
	type?: 'once' | 'all' | null;
	id: string;
}

export type Callback = (action: GeneralAction) => void;

export type AddListener = (actionType: symbol | symbol[], callback: Callback) => void;
