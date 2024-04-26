/*
  Warnings:

  - You are about to drop the column `project_id` on the `Users_FB` table. All the data in the column will be lost.
  - Added the required column `project_id` to the `Page_FB` table without a default value. This is not possible if the table is not empty.
  - Made the column `page_fb_id` on table `Page_IG` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Page_IG" DROP CONSTRAINT "Page_IG_page_fb_id_fkey";

-- DropForeignKey
ALTER TABLE "Users_FB" DROP CONSTRAINT "Users_FB_project_id_fkey";

-- DropIndex
DROP INDEX "Page_IG_project_id_key";

-- DropIndex
DROP INDEX "Users_FB_project_id_key";

-- AlterTable
ALTER TABLE "Page_FB" ADD COLUMN     "project_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Page_IG" ALTER COLUMN "page_fb_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "Users_FB" DROP COLUMN "project_id";

-- AddForeignKey
ALTER TABLE "Page_FB" ADD CONSTRAINT "Page_FB_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page_IG" ADD CONSTRAINT "Page_IG_page_fb_id_fkey" FOREIGN KEY ("page_fb_id") REFERENCES "Page_FB"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
