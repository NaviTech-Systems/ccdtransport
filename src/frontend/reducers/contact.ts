import { SEND_MESSAGE, SENT_MESSAGE, SEND_MESSAGE_FAILED } from '$constants/contact';
import type { State } from '$frontend/types/contact';
import type { Reducer } from '$vendor/sedux/types/reducer';

export const contactReducer: Reducer<State> = (action, draft): State => {
	switch (action.type) {
		case SEND_MESSAGE:
			draft.contact.state = 'loading';
			draft.contact.error = '';
			break;
		case SENT_MESSAGE:
			draft.contact.state = 'completed';
			break;
		case SEND_MESSAGE_FAILED:
			draft.contact.state = 'failed';
			draft.contact.error = action.payload.error;
			break;
	}
	return draft;
};
