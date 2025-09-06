-- CreateTable
CREATE TABLE "Tendik" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "nip" TEXT NOT NULL,
    "jabatan" TEXT,
    "foto" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deskripsiKepakaran" TEXT,
    "penelitian" TEXT,
    "pengabdian" TEXT,
    "publikasiJurnal" TEXT,
    "buku" TEXT,
    "risetHKI" TEXT,
    "risetNonHKI" TEXT,
    "mediaSocial" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Tendik_nip_key" ON "Tendik"("nip");
