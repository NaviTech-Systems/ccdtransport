import { GET_APP, GOT_APP, GET_APP_FAILED } from '$constants/app';
import type { State } from '$frontend/types/app';
import type { Reducer } from '$vendor/sedux/types/reducer';

export const appReducer: Reducer<State> = (action, draft): State => {
	switch (action.type) {
		case GET_APP:
			draft.app.state = 'loading';
			draft.app.error = '';
			break;
		case GOT_APP:
			draft.app.state = 'completed';
			draft.app.results = action.payload.results;
			break;
		case GET_APP_FAILED:
			draft.app.state = 'failed';
			draft.app.error = action.payload.error;
			break;
	}
	return draft;
};
