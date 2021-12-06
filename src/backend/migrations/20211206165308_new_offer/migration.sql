/*
  Warnings:

  - You are about to drop the column `company` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `contactPerson` on the `Offer` table. All the data in the column will be lost.
  - You are about to drop the column `function` on the `Offer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "company",
DROP COLUMN "contactPerson",
DROP COLUMN "function",
ADD COLUMN     "firstLastName" TEXT NOT NULL DEFAULT E'',
ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4(),
ALTER COLUMN "phone" SET DEFAULT E'',
ALTER COLUMN "email" SET DEFAULT E'',
ALTER COLUMN "message" SET DEFAULT E'',
ALTER COLUMN "cargoDescription" SET DEFAULT E'',
ALTER COLUMN "startAdress" SET DEFAULT E'',
ALTER COLUMN "endAdress" SET DEFAULT E'',
ALTER COLUMN "transportTimeEstimated" SET DEFAULT E'',
ALTER COLUMN "lentgh" SET DEFAULT E'',
ALTER COLUMN "width" SET DEFAULT E'',
ALTER COLUMN "height" SET DEFAULT E'',
ALTER COLUMN "startDate" SET DEFAULT E'',
ALTER COLUMN "address" SET DEFAULT E'';
