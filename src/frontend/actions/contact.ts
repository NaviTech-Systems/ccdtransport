import { SEND_MESSAGE, SENT_MESSAGE, SEND_MESSAGE_FAILED } from '$constants/contact';
import type {
	SendMessage,
	SentMessage,
	SendMessageFailed,
	Error,
	ContactMessage
} from '$frontend/types/contact/actions';
import type { ActionWithPayload } from '$vendor/sedux/types/slicer';

export const sendMessage = (data: ContactMessage): ActionWithPayload<SendMessage> => ({
	type: SEND_MESSAGE,
	payload: {
		data
	}
});

export const sentMessage = (): ActionWithPayload<SentMessage> => ({
	type: SENT_MESSAGE,
	payload: {}
});

export const sendMessageFailed = (error: Error): ActionWithPayload<SendMessageFailed> => ({
	type: SEND_MESSAGE_FAILED,
	payload: { error }
});
