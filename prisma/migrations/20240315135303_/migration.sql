/*
  Warnings:

  - You are about to drop the column `namep` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Project_namep_key";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "namep",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");
