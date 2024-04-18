/*
  Warnings:

  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Page_FB` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Page_IG` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Posts_FB` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Posts_IG` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sponsor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users_FB` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Posts_FBToSponsor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_Posts_IGToSponsor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_FB_id_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_IG_id_fkey";

-- DropForeignKey
ALTER TABLE "Page_FB" DROP CONSTRAINT "Page_FB_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Page_IG" DROP CONSTRAINT "Page_IG_page_fb_id_fkey";

-- DropForeignKey
ALTER TABLE "Page_IG" DROP CONSTRAINT "Page_IG_project_id_fkey";

-- DropForeignKey
ALTER TABLE "Posts_FB" DROP CONSTRAINT "Posts_FB_page_id_fkey";

-- DropForeignKey
ALTER TABLE "Posts_IG" DROP CONSTRAINT "Posts_IG_page_id_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Users_FB" DROP CONSTRAINT "Users_FB_project_id_fkey";

-- DropForeignKey
ALTER TABLE "_Posts_FBToSponsor" DROP CONSTRAINT "_Posts_FBToSponsor_A_fkey";

-- DropForeignKey
ALTER TABLE "_Posts_FBToSponsor" DROP CONSTRAINT "_Posts_FBToSponsor_B_fkey";

-- DropForeignKey
ALTER TABLE "_Posts_IGToSponsor" DROP CONSTRAINT "_Posts_IGToSponsor_A_fkey";

-- DropForeignKey
ALTER TABLE "_Posts_IGToSponsor" DROP CONSTRAINT "_Posts_IGToSponsor_B_fkey";

-- DropTable
DROP TABLE "Comments";

-- DropTable
DROP TABLE "Page_FB";

-- DropTable
DROP TABLE "Page_IG";

-- DropTable
DROP TABLE "Posts_FB";

-- DropTable
DROP TABLE "Posts_IG";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "Sponsor";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "Users_FB";

-- DropTable
DROP TABLE "_Posts_FBToSponsor";

-- DropTable
DROP TABLE "_Posts_IGToSponsor";

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
