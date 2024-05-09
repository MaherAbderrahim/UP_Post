/*
  Warnings:

  - You are about to drop the column `created_at` on the `Posts_FB` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Posts_FB" DROP COLUMN "created_at",
ADD COLUMN     "created_at_you" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
