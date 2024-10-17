-- CreateTable
CREATE TABLE "Anime" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "JpName" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sub" BOOLEAN NOT NULL DEFAULT true,
    "dub" BOOLEAN NOT NULL DEFAULT true,
    "quality" TEXT NOT NULL DEFAULT 'hd',
    "searches" BIGINT NOT NULL,
    "isAdult" BOOLEAN NOT NULL,
    "PGrating" TEXT NOT NULL,
    "EpCount" INTEGER NOT NULL,
    "subEpCount" INTEGER NOT NULL,
    "dubEpCount" INTEGER NOT NULL,
    "EpDuration" INTEGER NOT NULL,
    "premier" TEXT NOT NULL,
    "Status" TEXT NOT NULL,
    "aired" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "anime" BOOLEAN NOT NULL DEFAULT true,
    "movie" BOOLEAN NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "href" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Anime_id_key" ON "Anime"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Link_id_key" ON "Link"("id");
