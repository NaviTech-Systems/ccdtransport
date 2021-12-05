import { internalStore } from './store';
import type { SetCurrent, GetCurrent } from './types/internal';
import { get } from 'svelte/store';

export const setCurrent: SetCurrent = (current) => {
	internalStore.update((prevState) => ({ ...prevState, current }));
};

export const getCurrent: GetCurrent = () => get(internalStore).current;
