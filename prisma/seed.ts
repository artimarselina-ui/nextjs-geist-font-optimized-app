import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Seed dosen data
  const dosenData = [
    {
      nama: "Prof. Dr. Ahmad Santoso, S.H., M.H.",
      nidn: "0123456789",
      status: "Dosen Tetap",
      pangkat: "Guru Besar",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/839bbc82-1095-4515-bfaa-dec71e23ec9d.png",
      isActive: true,
      deskripsiKepakaran: "Ahli dalam bidang hukum pidana dan hukum internasional",
      kepakaran1: "Hukum Pidana",
      kepakaran2: "Hukum Internasional",
      kepakaran3: "",
      kepakaran4: "",
      kepakaran5: "",
      sinta: "https://sinta.kemdikbud.go.id/authors/detail/12345",
      googleScholar: "https://scholar.google.com/citations?user=abc123",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=1234567890",
      researchgate: "https://www.researchgate.net/profile/Ahmad_Santoso"
    },
    {
      nama: "Dr. Siti Nurhaliza, S.H., M.H.",
      nidn: "0234567890",
      status: "Dosen Tetap",
      pangkat: "Lektor Kepala",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/95561a1f-e1ed-41b7-bfe2-63f7f64c2a25.png",
      isActive: true,
      deskripsiKepakaran: "Spesialis dalam hukum bisnis dan korporasi",
      kepakaran1: "Hukum Bisnis",
      kepakaran2: "Hukum Korporasi",
      kepakaran3: "",
      kepakaran4: "",
      kepakaran5: "",
      sinta: "https://sinta.kemdikbud.go.id/authors/detail/67890",
      googleScholar: "https://scholar.google.com/citations?user=def456",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=0987654321",
      researchgate: "https://www.researchgate.net/profile/Siti_Nurhaliza"
    },
    {
      nama: "Dr. Budi Prasetyo, S.H., M.H.",
      nidn: "0345678901",
      status: "Dosen Tetap",
      pangkat: "Lektor",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1bb129aa-e218-44e9-a9b5-5bcccae300a5.png",
      isActive: false,
      deskripsiKepakaran: "Ahli dalam hukum tata negara dan konstitusi",
      kepakaran1: "Hukum Tata Negara",
      kepakaran2: "Konstitusi",
      kepakaran3: "",
      kepakaran4: "",
      kepakaran5: "",
      sinta: "https://sinta.kemdikbud.go.id/authors/detail/54321",
      googleScholar: "https://scholar.google.com/citations?user=ghi789",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=1357924680",
      researchgate: "https://www.researchgate.net/profile/Budi_Prasetyo"
    },
    {
      nama: "Andi Wijaya, S.H., M.H.",
      nidn: "0456789012",
      status: "Dosen Tetap",
      pangkat: "Asisten Ahli",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/140de41a-57e1-42af-9dd4-6f0b46d20506.png",
      isActive: true,
      deskripsiKepakaran: "Spesialis dalam hukum lingkungan",
      kepakaran1: "Hukum Lingkungan",
      kepakaran2: "Hukum Lingkungan Hidup",
      kepakaran3: "",
      kepakaran4: "",
      kepakaran5: "",
      sinta: "https://sinta.kemdikbud.go.id/authors/detail/98765",
      googleScholar: "https://scholar.google.com/citations?user=jkl012",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=2468013579",
      researchgate: "https://www.researchgate.net/profile/Andi_Wijaya"
    },
    {
      nama: "Prof. Dr. Maya Sari, S.H., M.H.",
      nidn: "0567890123",
      status: "Dosen Tetap",
      pangkat: "Guru Besar",
      foto: "https://placehold.co/400x300?text=Prof.+Maya+Sari",
      isActive: true,
      deskripsiKepakaran: "Ahli dalam hukum keluarga dan gender",
      kepakaran1: "Hukum Keluarga",
      kepakaran2: "Hukum Gender",
      kepakaran3: "Hukum Perkawinan",
      kepakaran4: "",
      kepakaran5: "",
      sinta: "https://sinta.kemdikbud.go.id/authors/detail/11223",
      googleScholar: "https://scholar.google.com/citations?user=mno345",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=1122334455",
      researchgate: "https://www.researchgate.net/profile/Maya_Sari"
    },
    {
      nama: "Dr. Hendro Wicaksono, S.H., M.H.",
      nidn: "0678901234",
      status: "Dosen Tetap",
      pangkat: "Lektor Kepala",
      foto: "https://placehold.co/400x300?text=Dr.+Hendro+Wicaksono",
      isActive: true,
      deskripsiKepakaran: "Spesialis dalam hukum perdata dan kontrak",
      kepakaran1: "Hukum Perdata",
      kepakaran2: "Hukum Kontrak",
      kepakaran3: "Hukum Jaminan",
      kepakaran4: "",
      kepakaran5: "",
      sinta: "https://sinta.kemdikbud.go.id/authors/detail/33445",
      googleScholar: "https://scholar.google.com/citations?user=pqr678",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=2233445566",
      researchgate: "https://www.researchgate.net/profile/Hendro_Wicaksono"
    },
    {
      nama: "Dr. Rina Amelia, S.H., M.H.",
      nidn: "0789012345",
      status: "Dosen Tetap",
      pangkat: "Lektor",
      foto: "https://placehold.co/400x300?text=Dr.+Rina+Amelia",
      isActive: true,
      deskripsiKepakaran: "Ahli dalam hukum administrasi negara",
      kepakaran1: "Hukum Administrasi Negara",
      kepakaran2: "Hukum Pemerintahan",
      kepakaran3: "Hukum Kepegawaian",
      kepakaran4: "",
      kepakaran5: "",
      sinta: "https://sinta.kemdikbud.go.id/authors/detail/55667",
      googleScholar: "https://scholar.google.com/citations?user=stu901",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=3344556677",
      researchgate: "https://www.researchgate.net/profile/Rina_Amelia"
    },
    {
      nama: "Irwan Kurniawan, S.H., M.H.",
      nidn: "0890123456",
      status: "Dosen Tetap",
      pangkat: "Asisten Ahli",
      foto: "https://placehold.co/400x300?text=Irwan+Kurniawan",
      isActive: true,
      deskripsiKepakaran: "Spesialis dalam hukum acara dan litigasi",
      kepakaran1: "Hukum Acara",
      kepakaran2: "Litigasi",
      kepakaran3: "Hukum Peradilan",
      kepakaran4: "",
      kepakaran5: "",
      sinta: "https://sinta.kemdikbud.go.id/authors/detail/77889",
      googleScholar: "https://scholar.google.com/citations?user=vwx234",
      scopus: "https://www.scopus.com/authid/detail.uri?authorId=4455667788",
      researchgate: "https://www.researchgate.net/profile/Irwan_Kurniawan"
    },
  ];

  for (const dosen of dosenData) {
    await prisma.dosen.create({
      data: dosen
    });
  }

  // Seed tendik data
  const tendikData = [
    {
      nama: "Sari Indrawati, S.Kom.",
      nip: "198501012010032001",
      jabatan: "Kepala Tata Usaha",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5d02ca02-bd6f-4270-93be-9045ce492e1d.png",
      isActive: true,
      deskripsiKepakaran: "Ahli dalam administrasi akademik dan manajemen kepegawaian",
      penelitian: "Penelitian tentang sistem informasi akademik",
      pengabdian: "Pengabdian melalui program pelatihan administrasi",
      publikasiJurnal: "3 artikel tentang administrasi pendidikan",
      buku: "1 buku panduan administrasi akademik",
      risetHKI: "Tidak ada",
      risetNonHKI: "2 penelitian tentang efisiensi administrasi",
      mediaSocial: "LinkedIn: @sari-indrawati"
    },
    {
      nama: "Bambang Sutrisno, S.E.",
      nip: "198203152008011002",
      jabatan: "Staff Administrasi Akademik",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5df663a-fbd2-4c73-bce1-93cd247d673c.png",
      isActive: true,
      deskripsiKepakaran: "Spesialis dalam keuangan dan akuntansi pendidikan",
      penelitian: "Penelitian tentang pengelolaan keuangan perguruan tinggi",
      pengabdian: "Konsultasi keuangan untuk lembaga pendidikan",
      publikasiJurnal: "2 artikel tentang akuntansi pendidikan",
      buku: "Tidak ada",
      risetHKI: "Tidak ada",
      risetNonHKI: "1 penelitian tentang budgeting pendidikan",
      mediaSocial: "LinkedIn: @bambang-sutrisno"
    },
    {
      nama: "Dewi Kartika, A.Md.",
      nip: "198907202012032003",
      jabatan: "Staff Keuangan",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d1881497-7025-4481-9fd5-0b52cc453846.png",
      isActive: false,
      deskripsiKepakaran: "Ahli dalam administrasi keuangan dan perpajakan",
      penelitian: "Penelitian tentang sistem perpajakan pendidikan",
      pengabdian: "Pendampingan perpajakan untuk dosen",
      publikasiJurnal: "1 artikel tentang perpajakan",
      buku: "Tidak ada",
      risetHKI: "Tidak ada",
      risetNonHKI: "1 penelitian tentang compliance perpajakan",
      mediaSocial: "Instagram: @dewi_kartika"
    },
    {
      nama: "Agus Setiawan, S.T.",
      nip: "198412102015031001",
      jabatan: "Staff IT dan Laboratorium",
      foto: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fd0f9413-ad8b-4273-b0b9-c7ab9429862a.png",
      isActive: true,
      deskripsiKepakaran: "Spesialis dalam teknologi informasi dan maintenance sistem",
      penelitian: "Penelitian tentang implementasi e-learning",
      pengabdian: "Pelatihan IT untuk staf administrasi",
      publikasiJurnal: "2 artikel tentang teknologi pendidikan",
      buku: "Tidak ada",
      risetHKI: "1 hak cipta software akademik",
      risetNonHKI: "2 penelitian tentang digitalisasi administrasi",
      mediaSocial: "LinkedIn: @agus-setiawan-it"
    },
    {
      nama: "Maya Putri, S.Pd.",
      nip: "199001152016042001",
      jabatan: "Staff Akademik dan Kemahasiswaan",
      foto: "https://placehold.co/400x300?text=Maya+Putri",
      isActive: true,
      deskripsiKepakaran: "Ahli dalam administrasi kemahasiswaan dan layanan akademik",
      penelitian: "Penelitian tentang sistem informasi mahasiswa",
      pengabdian: "Program bimbingan akademik untuk mahasiswa",
      publikasiJurnal: "2 artikel tentang layanan kemahasiswaan",
      buku: "1 buku panduan kemahasiswaan",
      risetHKI: "Tidak ada",
      risetNonHKI: "1 penelitian tentang sistem informasi akademik",
      mediaSocial: "LinkedIn: @maya-putri"
    },
    {
      nama: "Rudi Hartono, S.Kom.",
      nip: "198805202013051002",
      jabatan: "Staff Sistem Informasi",
      foto: "https://placehold.co/400x300?text=Rudi+Hartono",
      isActive: true,
      deskripsiKepakaran: "Spesialis dalam pengembangan sistem informasi akademik",
      penelitian: "Penelitian tentang database akademik",
      pengabdian: "Pengembangan aplikasi akademik untuk mahasiswa",
      publikasiJurnal: "3 artikel tentang sistem informasi",
      buku: "Tidak ada",
      risetHKI: "2 hak cipta aplikasi akademik",
      risetNonHKI: "1 penelitian tentang keamanan data",
      mediaSocial: "LinkedIn: @rudi-hartono"
    },
    {
      nama: "Siti Aminah, A.Md.",
      nip: "199203102017062003",
      jabatan: "Staff Perpustakaan",
      foto: "https://placehold.co/400x300?text=Siti+Aminah",
      isActive: true,
      deskripsiKepakaran: "Ahli dalam manajemen perpustakaan dan literasi informasi",
      penelitian: "Penelitian tentang sistem perpustakaan digital",
      pengabdian: "Program literasi informasi untuk masyarakat",
      publikasiJurnal: "1 artikel tentang perpustakaan digital",
      buku: "1 buku panduan perpustakaan",
      risetHKI: "Tidak ada",
      risetNonHKI: "1 penelitian tentang aksesibilitas perpustakaan",
      mediaSocial: "Instagram: @siti_aminah"
    },
    {
      nama: "Ahmad Fauzi, S.T.",
      nip: "198612052014071001",
      jabatan: "Staff Teknik dan Maintenance",
      foto: "https://placehold.co/400x300?text=Ahmad+Fauzi",
      isActive: true,
      deskripsiKepakaran: "Spesialis dalam maintenance fasilitas dan teknik sipil",
      penelitian: "Penelitian tentang maintenance gedung pendidikan",
      pengabdian: "Pelatihan maintenance untuk staf teknis",
      publikasiJurnal: "2 artikel tentang teknik maintenance",
      buku: "Tidak ada",
      risetHKI: "1 hak cipta sistem maintenance",
      risetNonHKI: "1 penelitian tentang efisiensi energi",
      mediaSocial: "LinkedIn: @ahmad-fauzi"
    },
  ];

  for (const tendik of tendikData) {
    await prisma.tendik.create({
      data: tendik
    });
  }

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
