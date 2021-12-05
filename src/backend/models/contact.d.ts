export interface Contact {
	id: string;
	name: string;
	email: string;
	message: string;
	read: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface Connect {
	id: string;
}

export interface Create {
	name: string;
	email: string;
	message: string;
}
