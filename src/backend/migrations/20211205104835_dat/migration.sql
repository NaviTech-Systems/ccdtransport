-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "Offer" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4(),
ALTER COLUMN "startDate" DROP DEFAULT,
ALTER COLUMN "startDate" SET DATA TYPE TEXT;
