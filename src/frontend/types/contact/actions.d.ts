interface ContactMessage {
	name: string;
	email: string;
	message: string;
}

export interface SendMessage {
	data: ContactMessage;
}

export interface SentMessage {}

export interface SendMessageFailed {
	error: Error;
}

export interface Error {
	status: number;
	message: string;
}
