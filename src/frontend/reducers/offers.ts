import { SEND_OFFER, SENT_OFFER, SEND_OFFER_FAILED } from '$constants/offers';
import type { State } from '$frontend/types/offers';
import type { Reducer } from '$vendor/sedux/types/reducer';

export const offersReducer: Reducer<State> = (action, state): State => {
	const draft = state;
	switch (action.type) {
		case SEND_OFFER:
			draft.offer.state = 'loading';
			draft.offer.error = '';
			break;
		case SENT_OFFER:
			draft.offer.state = 'completed';
			break;
		case SEND_OFFER_FAILED:
			draft.offer.state = 'failed';
			draft.offer.error = action.payload.error;
			break;

		default:
			return state;
	}
	return draft;
};
