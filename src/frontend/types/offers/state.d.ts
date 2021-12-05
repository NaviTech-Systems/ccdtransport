export interface State {
	offer: {
		state: 'idle' | 'loading' | 'failed' | 'completed';
		error: '';
	};
}
