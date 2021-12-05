import { createContact, getContacts } from '$backend/controllers/contact';

export const get = getContacts;

export const put = createContact;
