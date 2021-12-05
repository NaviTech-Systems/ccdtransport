import type { Contact } from '$backend/models/contact';
import type { ContactMessage } from '$frontend/types/contact/actions';
import { request } from '$utils/request';
import BaseRequest from './base';

export class ContactRequest extends BaseRequest {
	static getContacts = async (): Promise<Contact[]> => {
		const res = await request.get(`/api/contact/messages`);

		return await ContactRequest.parseResponse<Contact[]>(res);
	};

	static getContact = async (id: string): Promise<Contact> => {
		const res = await request.get(`/api/contact/messages/${id}`);

		return await ContactRequest.parseResponse<Contact>(res);
	};

	static sendMessage = async (data: ContactMessage): Promise<ContactMessage> => {
		const res = await request.put(`/api/contact/messages`, data);

		return await ContactRequest.parseResponse<Contact>(res);
	};
}
