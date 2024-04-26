/*
  Warnings:

  - You are about to drop the column `page_fb_id` on the `Page_IG` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[page_FB_id]` on the table `Page_IG` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `page_FB_id` to the `Page_IG` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Page_IG" DROP CONSTRAINT "Page_IG_page_fb_id_fkey";

-- DropIndex
DROP INDEX "Page_IG_page_fb_id_key";

-- AlterTable
ALTER TABLE "Page_IG" DROP COLUMN "page_fb_id",
ADD COLUMN     "page_FB_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Page_IG_page_FB_id_key" ON "Page_IG"("page_FB_id");

-- AddForeignKey
ALTER TABLE "Page_IG" ADD CONSTRAINT "Page_IG_page_FB_id_fkey" FOREIGN KEY ("page_FB_id") REFERENCES "Page_FB"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
