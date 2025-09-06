-- CreateTable
CREATE TABLE "Dosen" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "nidn" TEXT NOT NULL,
    "status" TEXT,
    "pangkat" TEXT,
    "foto" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "deskripsiKepakaran" TEXT,
    "kepakaran1" TEXT,
    "kepakaran2" TEXT,
    "kepakaran3" TEXT,
    "kepakaran4" TEXT,
    "kepakaran5" TEXT,
    "sinta" TEXT,
    "googleScholar" TEXT,
    "scopus" TEXT,
    "researchgate" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Penghargaan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dosenId" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "bentuk" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "tingkat" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Penghargaan_dosenId_fkey" FOREIGN KEY ("dosenId") REFERENCES "Dosen" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Penelitian" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dosenId" INTEGER NOT NULL,
    "semester" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Penelitian_dosenId_fkey" FOREIGN KEY ("dosenId") REFERENCES "Dosen" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pengabdian" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dosenId" INTEGER NOT NULL,
    "semester" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Pengabdian_dosenId_fkey" FOREIGN KEY ("dosenId") REFERENCES "Dosen" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PublikasiBuku" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dosenId" INTEGER NOT NULL,
    "semester" TEXT NOT NULL,
    "penerbit" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PublikasiBuku_dosenId_fkey" FOREIGN KEY ("dosenId") REFERENCES "Dosen" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PublikasiJurnal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dosenId" INTEGER NOT NULL,
    "semester" TEXT NOT NULL,
    "namaJurnal" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "jenisJurnal" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "issn" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "PublikasiJurnal_dosenId_fkey" FOREIGN KEY ("dosenId") REFERENCES "Dosen" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RisetHKI" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dosenId" INTEGER NOT NULL,
    "semester" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "noHKI" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "RisetHKI_dosenId_fkey" FOREIGN KEY ("dosenId") REFERENCES "Dosen" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RisetNonHKI" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dosenId" INTEGER NOT NULL,
    "semester" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "tahun" TEXT NOT NULL,
    "hasil" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "RisetNonHKI_dosenId_fkey" FOREIGN KEY ("dosenId") REFERENCES "Dosen" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Dosen_nidn_key" ON "Dosen"("nidn");
