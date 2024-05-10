/*
  Warnings:

  - Added the required column `img_URL` to the `Page_FB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img_URL` to the `Page_IG` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Page_FB" ADD COLUMN     "img_URL" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Page_IG" ADD COLUMN     "img_URL" TEXT NOT NULL;
