/*
  Warnings:

  - You are about to drop the column `content` on the `Posts_IG` table. All the data in the column will be lost.
  - You are about to drop the `_Posts_IGToSponsor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Date_post` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Day` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Day_of_Week` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Followers` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Found_Hash` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Hashtags` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Likes` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Month` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Page_name` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Post_text` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Sentiment_POSTT` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Time_post` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Total_NB_commentaires` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Usernames` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Year` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hashtag_count` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `langue_post` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `len_post` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nature` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `negative` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positive` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prediction_label` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prediction_score` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sentiment_comment` to the `Posts_IG` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_Posts_IGToSponsor" DROP CONSTRAINT "_Posts_IGToSponsor_A_fkey";

-- DropForeignKey
ALTER TABLE "_Posts_IGToSponsor" DROP CONSTRAINT "_Posts_IGToSponsor_B_fkey";

-- AlterTable
ALTER TABLE "Posts_IG" DROP COLUMN "content",
ADD COLUMN     "Date_post" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Day" INTEGER NOT NULL,
ADD COLUMN     "Day_of_Week" TEXT NOT NULL,
ADD COLUMN     "Followers" INTEGER NOT NULL,
ADD COLUMN     "Found_Hash" INTEGER NOT NULL,
ADD COLUMN     "Hashtags" TEXT NOT NULL,
ADD COLUMN     "Likes" INTEGER NOT NULL,
ADD COLUMN     "Month" TEXT NOT NULL,
ADD COLUMN     "Page_name" TEXT NOT NULL,
ADD COLUMN     "Post_text" TEXT NOT NULL,
ADD COLUMN     "Sentiment_POSTT" TEXT NOT NULL,
ADD COLUMN     "Time_post" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "Total_NB_commentaires" INTEGER NOT NULL,
ADD COLUMN     "Usernames" TEXT NOT NULL,
ADD COLUMN     "Year" INTEGER NOT NULL,
ADD COLUMN     "hashtag_count" INTEGER NOT NULL,
ADD COLUMN     "langue_post" TEXT NOT NULL,
ADD COLUMN     "len_post" INTEGER NOT NULL,
ADD COLUMN     "nature" INTEGER NOT NULL,
ADD COLUMN     "negative" INTEGER NOT NULL,
ADD COLUMN     "positive" INTEGER NOT NULL,
ADD COLUMN     "prediction_label" INTEGER NOT NULL,
ADD COLUMN     "prediction_score" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sentiment_comment" JSONB NOT NULL;

-- DropTable
DROP TABLE "_Posts_IGToSponsor";
