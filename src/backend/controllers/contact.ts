import { db } from '$backend/index';
import type { Contact, Create } from '$backend/models/contact';
import { notifyContact } from '$backend/modules/mail';
import type { RequestHandler } from '$backend/types/request';

export const getContacts: RequestHandler = async () => {
	const results: Contact[] = await db.contact.findMany();

	return {
		status: 200,
		body: results
	};
};

export const getContact: RequestHandler = async (data) => {
	const {
		params: { id }
	} = data;
	const result: Contact = await db.contact.findMany({ where: { id } }).then((_) => _[0]);

	return {
		status: 200,
		body: result
	};
};

export const createContact: RequestHandler<Create> = async (data) => {
	const { body } = data;

	const { name, email, message } = body;

	const result: Contact = await db.contact.create({
		data: {
			name,
			email,
			message
		}
	});

	const contact: Contact = await db.contact
		.findMany({
			where: {
				id: result.id
			}
		})
		.then((_) => _[0]);

	notifyContact(contact);

	return {
		status: 200,
		body: contact
	};
};
