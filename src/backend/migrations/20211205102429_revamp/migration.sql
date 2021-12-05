/*
  Warnings:

  - You are about to drop the column `adrees` on the `Offer` table. All the data in the column will be lost.
  - Added the required column `address` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "adrees",
ADD COLUMN     "address" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();
