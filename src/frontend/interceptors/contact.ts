import { SEND_MESSAGE } from '$constants/contact';
import { sentMessage, sendMessageFailed } from '$actions/contact';
import { addInterceptor, createSmartInterceptor } from '$vendor/sedux/interceptor';
import { ContactRequest } from '$frontend/requests/contact';

const sendMessage = createSmartInterceptor(async ({ data }) => {
	return await ContactRequest.sendMessage(data);
});
sendMessage.fulfilled = (_, { dispatch }) => {
	return dispatch(() => sentMessage());
};

sendMessage.rejected = (error, { dispatch }) => {
	return dispatch(() => sendMessageFailed({ status: 500, message: error.message }));
};

export function contactInterceptor(): void {
	addInterceptor(SEND_MESSAGE, sendMessage);
}
