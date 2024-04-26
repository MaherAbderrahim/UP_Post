/*
  Warnings:

  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_FB_id_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_IG_id_fkey";

-- DropTable
DROP TABLE "Comments";

-- CreateTable
CREATE TABLE "Comments_FB" (
    "id" SERIAL NOT NULL,
    "FB_id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "nb_likes" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comments_FB_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments_IG" (
    "id" SERIAL NOT NULL,
    "IG_id" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "nb_likes" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comments_IG_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comments_FB" ADD CONSTRAINT "Comments_FB_FB_id_fkey" FOREIGN KEY ("FB_id") REFERENCES "Posts_FB"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments_IG" ADD CONSTRAINT "Comments_IG_IG_id_fkey" FOREIGN KEY ("IG_id") REFERENCES "Posts_IG"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
