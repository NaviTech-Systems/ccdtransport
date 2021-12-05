export interface State {
	contact: {
		state: 'idle' | 'loading' | 'failed' | 'completed';
		error: '';
	};
}
