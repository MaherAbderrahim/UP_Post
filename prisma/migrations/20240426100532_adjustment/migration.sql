/*
  Warnings:

  - You are about to drop the column `FB_id` on the `Comments_FB` table. All the data in the column will be lost.
  - You are about to drop the column `IG_id` on the `Comments_IG` table. All the data in the column will be lost.
  - Added the required column `postFB_id` to the `Comments_FB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postIG_id` to the `Comments_IG` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comments_FB" DROP CONSTRAINT "Comments_FB_FB_id_fkey";

-- DropForeignKey
ALTER TABLE "Comments_IG" DROP CONSTRAINT "Comments_IG_IG_id_fkey";

-- AlterTable
ALTER TABLE "Comments_FB" DROP COLUMN "FB_id",
ADD COLUMN     "postFB_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Comments_IG" DROP COLUMN "IG_id",
ADD COLUMN     "postIG_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Comments_FB" ADD CONSTRAINT "Comments_FB_postFB_id_fkey" FOREIGN KEY ("postFB_id") REFERENCES "Posts_FB"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments_IG" ADD CONSTRAINT "Comments_IG_postIG_id_fkey" FOREIGN KEY ("postIG_id") REFERENCES "Posts_IG"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
