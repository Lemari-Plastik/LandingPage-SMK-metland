# SMK Metland Cibitung - Excellence with Character

Portal web resmi modern, responsif, dan interaktif untuk **SMK Metland Cibitung** di bawah naungan **Yayasan Pendidikan Metland** (PT Metropolitan Land, Tbk). Dibangun menggunakan ekosistem **React 19**, **TypeScript**, **Tailwind CSS v4**, dan **Motion v12**, portal ini menyajikan profil sekolah, keunggulan 5 program keahlian vokasi, pusat prestasi, kepemimpinan organisasi siswa, serta sistem pendaftaran murid baru (SPMB Online).

---

## Fitur Utama & Modul Portal

### 1. Hero Section Sinematik & Dinamis
- **Auto-Play Carousel**: Transisi slide otomatis setiap 6 detik disertai indikator navigasi responsif.
- **Efek Sinematik**: Efek perbesaran lembut latar belakang (*zoom-out* `1.08` ke `1.0`) dan pergantian teks halus berbasis `AnimatePresence`.
- **Aksi Cepat**: Tombol *Call to Action* langsung menuju Profil Sekolah dan Pendaftaran SPMB Online.

### 2. Profil Sekolah & Sambutan Kepala Sekolah
- Menampilkan pesan sambutan dari Kepala Sekolah **Dr. Darmawan Sunarja, Drs, MM,Par** dengan foto resmi resolusi tinggi.
- Informasi akreditasi sekolah (**Terakreditasi A**) dan komitmen *link-and-match* bersama dunia usaha dan dunia industri (DUDI) jaringan Metland Group.
- Penegasan standar kompetensi pendidik dan asesor bersertifikasi BNSP.

### 3. 5 Program Keahlian Vokasi Terakreditasi
Informasi kurikulum industri, fasilitas laboratorium praktik, prospek karir, dan mitra PKL untuk 5 jurusan:
1. **Desain Komunikasi Visual (DKV)**: Animasi 2D/3D, desain grafis, ilustrasi digital, UI/UX, dan studio produksi multimedia.
2. **Kuliner (Tata Boga / Culinary Arts)**: Dapur komersial standar hotel, masakan kontinental & nusantara, pastry, bakery, dan manajemen restoran.
3. **Pengembangan Perangkat Lunak & Gim (PPLG)**: Rekayasa perangkat lunak web & mobile, game development, cloud computing, dan kecerdasan buatan terapan.
4. **Perhotelan (Hospitality Services)**: Pelayanan front office, housekeeping, etika perhotelan berbintang empat di jaringan Hotel Horison (Metland Hotel Division).
5. **Akuntansi & Keuangan Lembaga (AKL)**: Akuntansi digital terkomputerisasi (MYOB/Accurate), perpajakan e-Faktur, simulasi mini bank, dan FinTech.

### 4. Pusat Prestasi & Agenda Akbar
- Dokumentasi kejuaraan bergengsi tingkat Kabupaten, Provinsi, dan Nasional serta agenda akbar sekolah.
- Terintegrasi dengan foto riil, di antaranya:
  - **Juara 1 Turnamen Futsal Pelajar Kabupaten Bekasi 2026** (`Futsal-Juara.jpeg`)
  - **School Event: Wisuda & Pelepasan Siswa Angkatan ke-2 (Batch 2 Graduation)** (`Tari-Tradisional.jpeg`)
  - **Winner Olimpiade Bahasa Inggris (English Olympiad Winner)** (`Winner-olimpiade-english.jpeg`)
  - **Juara Lomba Puisi Se-Kabupaten Bekasi (Poem Competition Winner)** (`winner-puisi-sekabupaten.jpeg`)

### 5. Organisasi Siswa: Maheswara-Maheswari & OSIS
Bagian khusus yang menyoroti kepemimpinan dan karakter pelajar:
- **Maheswara & Maheswari (Duta Sekolah)**: Representasi resmi sekolah, pembinaan *public speaking*, MC keprotokoleran acara kenegaraan, dan promosi vokasi (`maheswara-maheswari.jpeg`).
- **OSIS SMK Metland Cibitung**: Lokomotif kesiswaan, koordinasi ekstrakurikuler, kaderisasi LDKS, dan penyelenggara *Classmeeting* (`osis.jpeg`).
- **Testimoni Tamu Kehormatan**: Menyematkan ulasan autentik dari para tamu undangan pagelaran Maheswara-Maheswari 2027 (Ade Olis, Sofi Azzahra, Karl Nizam Bahtiar, Shifa Zahrani).
- **Modal Interaktif Organisasi**: Rincian visi, misi, dan program kerja kedua organisasi.

### 6. 5 Ekstrakurikuler Pilihan dengan Kartu Bergambar
Fokus pada 5 cabang kegiatan minat-bakat dengan kartu berfoto thumbnail riil:
1. **Futsal & Minisoccer** (Ikon `Activity` & foto dokumentasi `/Futsal.jpeg`)
2. **Basket** (Ikon `Dribbble` & foto dokumentasi `/basket.jpeg`)
3. **Paduan Suara** (Ikon `Music` & foto dokumentasi `/paduan-suara.jpeg`)
4. **Seni Tari** (Ikon `Drama` & foto dokumentasi `/Tari-Tradisional.jpeg`)
5. **PMR (Palang Merah Remaja)** (Ikon `HeartPulse` & materi pertolongan pertama)

### 7. Pusat Warta & Berita Terkini
- **Format Full-Width**: Kisi responsif 4 kolom yang menampilkan warta berita dan pengumuman sekolah terbaru.
- **Kartu Berita Komprehensif**: Kategori berita, tanggal, cuplikan ringkasan, dan gambar pendukung.
- **Arsip Berita Lengkap**: Modal interaktif untuk membaca berita selengkapnya serta seluruh arsip warta sekolah.

### 8. Galeri Foto Kegiatan & Fasilitas
- Kisi galeri foto dokumentasi dengan metadata kategori dan tanggal.
- Fitur *lightbox preview* untuk melihat detail dokumentasi foto.

### 9. SPMB Online 2026/2027 (Penerimaan Siswa Baru)
Sistem pendaftaran murid baru terintegrasi:
- **Formulir Pendaftaran**: Pengisian data calon siswa, NISN, asal sekolah, pemilihan 5 jurusan, dan data orang tua.
- **Cek Status Pendaftaran**: Pelacakan status verifikasi berkas dan jadwal tes menggunakan Nomor Registrasi atau NISN.
- **Informasi Biaya Pendidikan**: Rincian DSP Gelombang 1 (Early Bird), SPP bulanan, dan skema cicilan fleksibel.
- **Program Beasiswa**: Jalur Beasiswa Prestasi Akademik/OSN, Beasiswa Tahfidz Al-Qur'an, dan Beasiswa Mitra Metland.

### 10. Desain Responsif & Animasi Interaktif
- **Motion (`motion/react`)**: Animasi masuk saat di-scroll (*viewport trigger*), indikator bilah navigasi aktif dengan pegas fisik (*spring dynamics*), serta modal interaktif.
- **Tombol Melayang Back to Top**: Muncul otomatis setelah pengguna menggulir melewati 400px.
- **100% Bebas Emoji**: Seluruh elemen visual, rating bintang, dan kontak sepenuhnya menggunakan Lucide Icons standar industri.

---

## Teknologi & Pustaka

| Teknologi | Versi | Peran / Deskripsi |
| :--- | :--- | :--- |
| **React** | `^19.0.1` | Pustaka antarmuka pengguna utama |
| **TypeScript** | `^7.0.2` | Sistem tipe statis untuk keandalan dan ketahanan kode |
| **Vite** | `^8.3.0` | Build tool dan server pengembangan berkecepatan tinggi |
| **Tailwind CSS** | `^4.3.3` | Kerangka kerja utilitas CSS modern (`@tailwindcss/vite`) |
| **Motion** | `^12.23.24` | Pustaka animasi fluid dan deklaratif (`motion/react`) |
| **Lucide React** | `^0.546.0` | Pustaka ikon SVG modern |

---

## Struktur Direktori

```text
SMK-Metland/
├── public/                      # Aset publik statis (gambar, logo, dokumen)
│   ├── background-hero-section.webp  # Foto lanskap kampus untuk hero section
│   ├── basket.jpeg                   # Dokumentasi tim basket
│   ├── Futsal.jpeg                   # Dokumentasi latihan futsal
│   ├── Futsal-Juara.jpeg             # Dokumentasi tim juara futsal
│   ├── head-teacher.jpg              # Foto resmi Kepala Sekolah
│   ├── logo.png                      # Logo resmi SMK Metland Cibitung
│   ├── maheswara-maheswari.jpeg      # Foto Duta Sekolah Maheswara-Maheswari
│   ├── osis.jpeg                     # Foto resmi Pengurus OSIS
│   ├── paduan-suara.jpeg             # Dokumentasi Paduan Suara Gita Metland
│   ├── Tari-Tradisional.jpeg         # Dokumentasi Tari Tradisional Nusantara
│   ├── testimoni.txt                 # Catatan testimoni autentik tamu undangan
│   ├── Winner-olimpiade-english.jpeg # Foto pemenang Olimpiade Bahasa Inggris
│   └── winner-puisi-sekabupaten.jpeg # Foto pemenang Lomba Puisi Se-Kabupaten
├── src/
│   ├── components/
│   │   └── PortalModals.tsx     # Komponen modal dialog terpadu (Berita, SPMB, Organisasi, dll.)
│   ├── data/
│   │   └── schoolData.ts        # Data terpusat: jurusan, berita, prestasi, ekstrakurikuler
│   ├── App.tsx                  # Halaman utama dan tata letak seluruh bagian website
│   ├── index.css                # Konfigurasi Tailwind CSS v4 & variabel warna tema
│   └── main.tsx                 # Titik masuk aplikasi React
├── index.html                   # HTML template dengan favicon & meta tags SEO
├── package.json                 # Ketergantungan dan script proyek
├── tsconfig.json                # Konfigurasi compiler TypeScript
└── vite.config.ts               # Konfigurasi bundler Vite
```

---

## Panduan Memulai (Getting Started)

### Prasyarat
- **Node.js**: Versi `18.x` atau lebih baru
- **npm** atau **yarn**

### 1. Pemasangan Dependensi
Pastikan berada di direktori proyek, lalu jalankan:
```bash
npm install
```

### 2. Menjalankan Server Pengembangan
Untuk melihat tampilan website secara lokal:
```bash
npm run dev
```
Buka peramban pada alamat [http://localhost:3000](http://localhost:3000) (atau port yang tertera pada terminal).

### 3. Pemeriksaan Tipe TypeScript
Untuk memverifikasi keabsahan tipe statis:
```bash
npm run lint
```

### 4. Membangun Versi Produksi
Untuk melakukan kompilasi dan optimasi berkas siap rilis:
```bash
npm run build
```
Hasil build produksi yang telah dioptimalkan akan tersedia di dalam direktori `dist/`.

---

## Informasi & Kontak Sekolah

- **Institusi**: SMK Metland Cibitung
- **Naungan**: Yayasan Pendidikan Metland (PT Metropolitan Land, Tbk)
- **Alamat**: Perumahan Metland Cibitung, Jl. Metland Cibitung, Desa Wanajaya, Kec. Cibitung, Kab. Bekasi, Jawa Barat 17520
- **Surel**: info@smkmetlandcibitung.sch.id
- **WhatsApp**: +62 811-2233-4455

---

(c) 2026 SMK Metland Cibitung. Yayasan Pendidikan Metland. Hak Cipta Dilindungi.
