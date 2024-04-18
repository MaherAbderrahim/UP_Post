/*
  Warnings:

  - You are about to drop the column `inst_id` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `user_fb_id` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "inst_id",
DROP COLUMN "user_fb_id",
ADD COLUMN     "description" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");
