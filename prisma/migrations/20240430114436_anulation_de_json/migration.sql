/*
  Warnings:

  - You are about to drop the column `sentiment_comment` on the `Posts_IG` table. All the data in the column will be lost.
  - Added the required column `sentiment_comments_NEG` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentiment_comments_POS` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts_IG" DROP COLUMN "sentiment_comment",
ADD COLUMN     "sentiment_comments_NEG" INTEGER NOT NULL,
ADD COLUMN     "sentiment_comments_POS" INTEGER NOT NULL;
