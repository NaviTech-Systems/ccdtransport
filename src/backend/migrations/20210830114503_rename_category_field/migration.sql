/*
  Warnings:

  - You are about to drop the column `category_id` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_category_id_fkey";

-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "category_id",
ADD COLUMN     "categoryId" TEXT NOT NULL DEFAULT E'63b8dcc7-6d03-4024-9fed-2c0cb3b8e1b2',
ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
