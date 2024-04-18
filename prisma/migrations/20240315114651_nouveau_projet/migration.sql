-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "user_fb_id" INTEGER NOT NULL,
    "inst_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users_FB" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "id_FB" TEXT NOT NULL,
    "user_TOKEN" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_FB_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page_FB" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "id_FB" TEXT NOT NULL,
    "page_TOKEN" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_FB_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page_IG" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "page_fb_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "id_IG" TEXT NOT NULL,
    "user_TOKEN" TEXT NOT NULL,

    CONSTRAINT "Page_IG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts_FB" (
    "id" SERIAL NOT NULL,
    "page_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "Name_page" TEXT NOT NULL,
    "Followers" INTEGER NOT NULL,
    "Heure_post" TIMESTAMP(3) NOT NULL,
    "Descriptions" TEXT NOT NULL,
    "Partages" INTEGER NOT NULL,
    "Hashtags" TEXT NOT NULL,
    "Nombre_de_commentaire" INTEGER NOT NULL,
    "Jadores" INTEGER NOT NULL,
    "Jaimes" INTEGER NOT NULL,
    "Solidaires" INTEGER NOT NULL,
    "Rires" INTEGER NOT NULL,
    "Colere" INTEGER NOT NULL,
    "Tristes" INTEGER NOT NULL,
    "Wouah" INTEGER NOT NULL,
    "Url_post" TEXT NOT NULL,
    "Popularity" INTEGER NOT NULL,
    "Jour_de_la_semaine" TEXT NOT NULL,
    "Annee_post" INTEGER NOT NULL,
    "Mois" TEXT NOT NULL,
    "langue_post" TEXT NOT NULL,
    "Season" TEXT NOT NULL,
    "Nombre_Hashtags" INTEGER NOT NULL,
    "Found_Hash" TEXT NOT NULL,
    "Sentiment_post" TEXT NOT NULL,
    "Longueur_caracteres_text" INTEGER NOT NULL,
    "sentiment_comments_POS" INTEGER NOT NULL,
    "sentiment_comments_NEG" INTEGER NOT NULL,
    "Timeline_visibility" TEXT NOT NULL,
    "Instagram_eligibility" TEXT NOT NULL,
    "Can_reply_privately" BOOLEAN NOT NULL,
    "is_sponsored" BOOLEAN NOT NULL,
    "prediction_label" INTEGER NOT NULL,
    "prediction_score" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Posts_FB_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts_IG" (
    "id" SERIAL NOT NULL,
    "page_id" INTEGER NOT NULL,
    "content" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Posts_IG_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sponsor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "followers" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sponsor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "FB_id" INTEGER,
    "IG_id" INTEGER,
    "username" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "nb_likes" INTEGER NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Posts_FBToSponsor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Posts_IGToSponsor" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_FB_project_id_key" ON "Users_FB"("project_id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_FB_name_key" ON "Users_FB"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_FB_id_FB_key" ON "Users_FB"("id_FB");

-- CreateIndex
CREATE UNIQUE INDEX "Users_FB_user_TOKEN_key" ON "Users_FB"("user_TOKEN");

-- CreateIndex
CREATE UNIQUE INDEX "Page_FB_name_key" ON "Page_FB"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Page_FB_id_FB_key" ON "Page_FB"("id_FB");

-- CreateIndex
CREATE UNIQUE INDEX "Page_FB_page_TOKEN_key" ON "Page_FB"("page_TOKEN");

-- CreateIndex
CREATE UNIQUE INDEX "Page_IG_project_id_key" ON "Page_IG"("project_id");

-- CreateIndex
CREATE UNIQUE INDEX "Page_IG_page_fb_id_key" ON "Page_IG"("page_fb_id");

-- CreateIndex
CREATE UNIQUE INDEX "Page_IG_name_key" ON "Page_IG"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Page_IG_id_IG_key" ON "Page_IG"("id_IG");

-- CreateIndex
CREATE UNIQUE INDEX "Page_IG_user_TOKEN_key" ON "Page_IG"("user_TOKEN");

-- CreateIndex
CREATE UNIQUE INDEX "Sponsor_name_key" ON "Sponsor"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_Posts_FBToSponsor_AB_unique" ON "_Posts_FBToSponsor"("A", "B");

-- CreateIndex
CREATE INDEX "_Posts_FBToSponsor_B_index" ON "_Posts_FBToSponsor"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Posts_IGToSponsor_AB_unique" ON "_Posts_IGToSponsor"("A", "B");

-- CreateIndex
CREATE INDEX "_Posts_IGToSponsor_B_index" ON "_Posts_IGToSponsor"("B");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users_FB" ADD CONSTRAINT "Users_FB_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page_FB" ADD CONSTRAINT "Page_FB_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users_FB"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page_IG" ADD CONSTRAINT "Page_IG_page_fb_id_fkey" FOREIGN KEY ("page_fb_id") REFERENCES "Page_FB"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page_IG" ADD CONSTRAINT "Page_IG_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posts_FB" ADD CONSTRAINT "Posts_FB_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "Page_FB"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posts_IG" ADD CONSTRAINT "Posts_IG_page_id_fkey" FOREIGN KEY ("page_id") REFERENCES "Page_IG"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_FB_id_fkey" FOREIGN KEY ("FB_id") REFERENCES "Posts_FB"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_IG_id_fkey" FOREIGN KEY ("IG_id") REFERENCES "Posts_IG"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Posts_FBToSponsor" ADD CONSTRAINT "_Posts_FBToSponsor_A_fkey" FOREIGN KEY ("A") REFERENCES "Posts_FB"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Posts_FBToSponsor" ADD CONSTRAINT "_Posts_FBToSponsor_B_fkey" FOREIGN KEY ("B") REFERENCES "Sponsor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Posts_IGToSponsor" ADD CONSTRAINT "_Posts_IGToSponsor_A_fkey" FOREIGN KEY ("A") REFERENCES "Posts_IG"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Posts_IGToSponsor" ADD CONSTRAINT "_Posts_IGToSponsor_B_fkey" FOREIGN KEY ("B") REFERENCES "Sponsor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
