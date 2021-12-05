export interface State {
	app: {
		results: [];
		state: 'idle' | 'loading' | 'failed' | 'completed';
		error: '';
	};
}
