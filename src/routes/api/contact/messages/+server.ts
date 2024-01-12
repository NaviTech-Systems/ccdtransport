import { createContact, getContacts } from '$backend/controllers/contact';

export const GET = getContacts;

export const PUT = createContact;
