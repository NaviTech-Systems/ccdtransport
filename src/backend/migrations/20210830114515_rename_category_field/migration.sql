-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4(),
ALTER COLUMN "categoryId" SET DEFAULT E'';

-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();
