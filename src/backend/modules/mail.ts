import type { Contact } from '$backend/models/contact';
import type { Offer } from '$backend/models/offer';
import nodemailer from 'nodemailer';

export const notifyOffer = async (offer: Offer): Promise<void> => {
	const message = `
    <p>
        <b>Numele:</b> ${offer.firstLastName}<br>
        <b>Adresa:</b> ${offer.address}<br>
        <b>Telefon:</b> ${offer.phone}<br>
        <b>Email:</b> ${offer.email}<br>
        <b>Descriere Marfa:</b> ${offer.cargoDescription}<br>
        <b>Data Plecarii:</b> ${offer.startDate}<br>
        <b>Locul Incarcarii:</b> ${offer.startAdress}<br>
        <b>Locul Descarcarii:</b> ${offer.endAdress}<br>
        <b>Timpul Estimat:</b> ${offer.transportTimeEstimated}<br>
        <b>Lungime:</b> ${offer.lentgh}<br>
        <b>Inaltime:</b> ${offer.height}<br>
        <b>Largime:</b> ${offer.width}<br>
    </p>
    `;

	// sendMail('ccdtransport@yahoo.com', 'Noua Oferta', message, false);
};

export const notifyContact = async (contact: Contact): Promise<void> => {
	const message = `
    <p>
        <b>Numele:</b> ${contact.name}<br>
        <b>Email:</b> ${contact.email}<br>
        <b>Mesaj:</b> ${contact.message}<br>
    </p>
    `;

	// sendMail('ccdtransport@yahoo.com', 'Nou Contact', message, false);
};

export const sendMail = async (
	email: string,
	subject: string,
	text: string,
	test = false
): Promise<(email: string, subject: string, text: string, test?: boolean) => any> => {
	let transporter: any;
	if (test) {
		const testAccount = await nodemailer.createTestAccount();

		// create reusable transporter object using the default SMTP transport
		transporter = nodemailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: testAccount.user, // generated ethereal user
				pass: testAccount.pass // generated ethereal password
			}
		});
	} else {
		transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			auth: {
				user: import.meta.env.VITE_PUBLIC_MAIL_USER,
				pass: import.meta.env.VITE_PUBLIC_MAIL_PASS
			}
		});
	}

	try {
		const info = await transporter.sendMail({
			from: `"Notificare CCD <${import.meta.env.VITE_PUBLIC_MAIL_USER}>`,
			to: email,
			subject,
			html: text
		});
		console.log(info);

		return info;
	} catch (error) {
		console.log(error);

		return error;
	}
};
