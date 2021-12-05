export interface Offer {
	id: string;
	company: string;
	address: string;
	contactPerson: string;
	phone: string;
	email: string;
	message: string;
	function: string;
	cargoDescription: string;
	startAdress: string;
	endAdress: string;
	transportTimeEstimated: string;
	lentgh: string;
	width: string;
	height: string;
	startDate: string;
	createdAt: string;
	updatedAt: string;
}

export interface Connect {
	id: string;
}

export interface Create {
	company: string;
	address: string;
	contactPerson: string;
	phone: string;
	email: string;
	message: string;
	function: string;
	cargoDescription: string;
	startAdress: string;
	endAdress: string;
	transportTimeEstimated: string;
	lentgh: string;
	width: string;
	height: string;
	startDate: string;
}
