import * as prisma from '@prisma/client';
const { PrismaClient } = prisma;
let db;

const start = async () => {
	try {
		if (!db) db = new PrismaClient();
	} catch (error) {
		console.log('Prisma connection error: ', error);
		return;
	}

	console.log(`Backend is up and running on port ${process.env.PORT || 3000}`);
};

export { start, db };
