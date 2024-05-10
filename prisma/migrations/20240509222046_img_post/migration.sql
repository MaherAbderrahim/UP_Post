/*
  Warnings:

  - Added the required column `img_URL` to the `Posts_FB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img_URL` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts_FB" ADD COLUMN     "img_URL" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Posts_IG" ADD COLUMN     "img_URL" TEXT NOT NULL;
