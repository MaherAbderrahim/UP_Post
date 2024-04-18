/*
  Warnings:

  - You are about to drop the column `name` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[namep]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `namep` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Project_name_key";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "name",
ADD COLUMN     "namep" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Project_namep_key" ON "Project"("namep");
