export interface HeroSlide {
  id: number;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  tagline: string;
}

export interface NewsItem {
  id: string;
  category: string;
  categoryBadgeBg: string;
  cardBgTint: string;
  iconTint: string;
  labelTint: string;
  date: string;
  title: string;
  summary: string;
  author: string;
  readTime: string;
  content: string[];
  image?: string;
}

export interface AgendaItem {
  id: string;
  day: string;
  month: string;
  fullDate: string;
  title: string;
  location: string;
  time: string;
  organizer: string;
  description: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  shortDesc: string;
  iconBg: string;
  iconColor: string;
  iconType: 'brush' | 'utensils' | 'laptop' | 'hotel' | 'calculator';
  highlights: string[];
  curriculumFocus: string;
  careerProspects: string;
  partnerIndustries: string[];
}

export interface AchievementItem {
  id: string;
  category: 'Siswa' | 'Guru' | 'Sekolah' | 'Ekstrakurikuler';
  year: string;
  level: string;
  title: string;
  winner: string;
  iconType: 'trophy' | 'award' | 'users' | 'sparkles';
  description: string;
  image?: string;
}

export interface ExtracurricularItem {
  id: string;
  name: string;
  category: string;
  schedule: string;
  location: string;
  coach: string;
  description: string;
  achievements: string[];
  iconType: 'futsal' | 'basket' | 'paduan-suara' | 'seni-tari' | 'pmr' | 'activity' | 'music' | 'drama';
  image?: string;
}

export interface GalleryPhotoItem {
  id: string;
  badge: string;
  aspect: string;
  title: string;
  category: string;
  date: string;
  gradientClass: string;
  description: string;
  image: string;
}

export interface TeacherStaffItem {
  id: string;
  name: string;
  role: string;
  department: string;
  education: string;
  experience: string;
  quote: string;
  image?: string;
}

export interface OrganizationDetail {
  id: 'maheswara' | 'osis' | 'collaboration';
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  description: string;
  vision: string;
  mission: string[];
  programs: {
    title: string;
    description: string;
  }[];
  guestQuotes?: {
    quote: string;
    author: string;
    role: string;
  }[];
}

export interface SpmbApplication {
  regNumber: string;
  fullName: string;
  nisn: string;
  originSchool: string;
  program: string;
  parentName: string;
  phone: string;
  email: string;
  address: string;
  createdAt: string;
  status: 'Terverifikasi - Jadwal Tes Tersedia' | 'Menunggu Verifikasi Berkas' | 'Lulus Seleksi Tahap 1';
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    titlePrefix: 'Membangun Generasi',
    titleHighlight: 'Cinta Prestasi',
    subtitle:
      'SMK Metland Cibitung menyajikan kurikulum industri terintegrasi dengan fasilitas modern berstandar internasional guna mencetak lulusan kompeten, beretika luhur, dan siap kerja.',
    ctaText: 'Profil Sekolah',
    ctaHref: '#profil',
    tagline: 'Excellence with Character',
  },
  {
    id: 1,
    titlePrefix: 'Kemitraan Industri Nyata Bersama',
    titleHighlight: 'Metland Group',
    subtitle:
      'Didukung langsung oleh PT Metropolitan Land Tbk, jaringan hotel berbintang, dan industri kreatif nasional untuk pengalaman magang riil dan penyaluran kerja terdepan.',
    ctaText: 'Program Keahlian',
    ctaHref: '#program',
    tagline: 'Link and Match Industri',
  },
  {
    id: 2,
    titlePrefix: 'Kepemimpinan & Prestasi',
    titleHighlight: 'Siswa Berprestasi',
    subtitle:
      'Wadah bagi talenta unggul melalui Duta Sekolah Maheswara-Maheswari, OSIS, serta puluhan prestasi kejuaraan tingkat Kabupaten, Provinsi, dan Nasional.',
    ctaText: 'Organisasi & Prestasi',
    ctaHref: '#organisasi',
    tagline: 'Student Leadership & Awards',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    category: 'Prestasi',
    categoryBadgeBg: 'bg-teal-600',
    cardBgTint: 'bg-teal-50/70',
    iconTint: 'text-teal-600',
    labelTint: 'text-teal-700/80',
    date: '08 Mei 2026',
    title: 'Tim Futsal SMK Metland Cibitung Raih Juara 1 Turnamen Pelajar Se-Kabupaten Bekasi',
    summary:
      'Melalui perjuangan sengit di partai final, tim futsal kebanggaan sekolah sukses menyabet trofi juara 1 dengan pertahanan solid dan permainan kolektif.',
    author: 'Tim Humas & Kesiswaan',
    readTime: '3 menit baca',
    image: '/Futsal-Juara.jpeg',
    content: [
      'CIBITUNG — Gelora sportivitas membakar semangat para pemain futsal SMK Metland Cibitung. Dalam kejuaraan turnamen futsal antar-sekolah menengah kejuruan se-Kabupaten Bekasi yang diselenggarakan awal Mei 2026, tim futsal sekolah berhasil mengukuhkan gelar Juara 1.',
      'Didukung pembinaan intensif dari pelatih dan program ekstrakurikuler terstruktur, tim tampil dominan sejak fase penyisihan grup hingga laga pamungkas. Kemenangan ini sekaligus memastikan tiket mereka menuju Kejuaraan Futsal Pelajar Tingkat Provinsi Jawa Barat.',
      'Kepala Sekolah SMK Metland Cibitung, Darmawan Sunarja, memberikan apresiasi tinggi kepada seluruh pemain, official, dan guru pendamping atas kerja keras serta dedikasi tanpa henti.',
    ],
  },
  {
    id: 'news-2',
    category: 'Kegiatan Siswa',
    categoryBadgeBg: 'bg-cyan-700',
    cardBgTint: 'bg-cyan-50/70',
    iconTint: 'text-cyan-600',
    labelTint: 'text-cyan-800/80',
    date: '02 Mei 2026',
    title: 'Sukses Akbar Gelaran Maheswara-Maheswari 2027: Duta Sekolah Memukau Tamu Undangan',
    summary:
      'Ajang pemilihan dan panggung karya Duta Sekolah Maheswara-Maheswari 2027 berlangsung meriah dengan apresiasi luas dari tamu undangan dan perwakilan sekolah mitra.',
    author: 'Panitia Maheswara Maheswari & OSIS',
    readTime: '4 menit baca',
    image: '/maheswara-maheswari.jpeg',
    content: [
      'CIBITUNG — Aula Utama SMK Metland Cibitung menjadi saksi kemegahan perhelatan tahunan Maheswara-Maheswari. Ajang pemilihan Duta Sekolah ini menampilkan putra dan putri terbaik yang telah melalui seleksi ketat dalam wawasan kebangsaan, kemampuan komunikasi publik, etika keprotokoleran, dan bakat seni.',
      'Acara dihadiri oleh puluhan tamu kehormatan dari sekolah-sekolah mitra, yayasan, orang tua murid, dan praktisi industri. Para tamu undangan mengapresiasi kerapian penyelenggaraan acara serta kepiawaian para duta sekolah dalam membawakan materi presentasi dan pertunjukan budaya.',
      'Kolaborasi erat antara Maheswara-Maheswari dan pengurus OSIS membuktikan kapasitas siswa SMK Metland Cibitung dalam merancang event berskala besar dengan standar profesional.',
    ],
  },
  {
    id: 'news-3',
    category: 'Prestasi',
    categoryBadgeBg: 'bg-teal-700',
    cardBgTint: 'bg-teal-50/70',
    iconTint: 'text-teal-600',
    labelTint: 'text-teal-700/80',
    date: '24 Apr 2026',
    title: 'Tim Tari Tradisional & Paduan Suara Borong Penghargaan Seni Budaya Nusantara',
    summary:
      'Perpaduan harmonis olah vokal Gita Metland dan gemulai tari kreasi daerah mengantarkan delegasi seni sekolah meraih posisi podium di festival bergengsi.',
    author: 'Seksi Kesenian & Budaya',
    readTime: '3 menit baca',
    image: '/Tari-Tradisional.jpeg',
    content: [
      'CIBITUNG — Eksistensi seni budaya terus berkibar di SMK Metland Cibitung. Pada ajang Festival Seni Siswa tingkat regional, tim Tari Tradisional mempersembahkan koreografi kreasi nusantara dengan kostum adat memukau yang menghantarkan mereka meraih predikat Juara 1.',
      'Sementara itu, tim Paduan Suara SMK Metland Cibitung berhasil membawa pulang medali emas lewat lantunan lagu daerah yang diaransemen apik penuh dinamika suara harmonis.',
      'Prestasi ini kian menegaskan komitmen SMK Metland Cibitung untuk menyeimbangkan keahlian vokasi industri dengan pelestarian nilai-nilai luhur kebudayaan bangsa.',
    ],
  },
  {
    id: 'news-4',
    category: 'Akademik',
    categoryBadgeBg: 'bg-cyan-700',
    cardBgTint: 'bg-cyan-50/70',
    iconTint: 'text-cyan-600',
    labelTint: 'text-cyan-800/80',
    date: '15 Apr 2026',
    title: 'Penyelarasan Kurikulum Industri Bersama Unit Bisnis Metland Group & Mitra Global',
    summary:
      'SMK Metland Cibitung menggelar forum link and match guna memperkuat sertifikasi kompetensi industri pada jurusan DKV, Kuliner, PPLG, Perhotelan, dan AKL.',
    author: 'Bidang Hubungan Industri & BKK',
    readTime: '3 menit baca',
    image: '/Maheswara-wiri_osis.jpeg',
    content: [
      'CIBITUNG — Memastikan kurikulum selalu selaras dengan kebutuhan dunia usaha dan dunia industri (DUDI), jajaran pimpinan sekolah menyelenggarakan workshop penyelarasan kurikulum vokasi berbasis technopreneur.',
      'Fokus utama program meliputi pemagangan bersertifikasi di Hotel Horison (Metland Hotel Division), agensi kreatif periklanan untuk siswa DKV, software house untuk PPLG, dan kantor akuntan publik terakreditasi bagi siswa AKL.',
      'Dengan kurikulum yang selalu terbarukan, lulusan SMK Metland Cibitung siap langsung terserap kerja, melanjutkan ke perguruan tinggi ternama, maupun merintis wirausaha mandiri.',
    ],
  },
];

export const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: 'agenda-1',
    day: '18',
    month: 'Mei',
    fullDate: '18 Mei 2026',
    title: 'Gelar Karya Vokasi & Expo Technopreneur 2026',
    location: 'Auditorium & Plaza Kreatif Sekolah',
    time: 'Pkl. 08.30 - 15.30 WIB',
    organizer: 'Bidang Kurikulum & Jurusan',
    description:
      'Pameran karya siswa lintas 3 jurusan: screening animasi DKV, live cooking & pastry showcase Kuliner, demo aplikasi mobile PPLG.',
  },
  {
    id: 'agenda-2',
    day: '25',
    month: 'Mei',
    fullDate: '25 Mei 2026',
    title: 'Workshop Public Speaking & Keprotokoleran Duta Sekolah',
    location: 'Ruang Multimedia & Convention Hall',
    time: 'Pkl. 09.00 - 12.30 WIB',
    organizer: 'Organisasi Maheswara-Maheswari & Kesiswaan',
    description:
      'Pelatihan intensif pengembangan etika komunikasi, grooming, dan teknik berbicara di depan umum bersama praktisi penyiaran dan duta budaya nasional.',
  },
  {
    id: 'agenda-3',
    day: '08',
    month: 'Jun',
    fullDate: '08 Juni 2026',
    title: 'Metland Student Championship (Classmeeting & Porseni)',
    location: 'Sport Center & Lapangan Utama Sekolah',
    time: 'Pkl. 08.00 - 16.00 WIB',
    organizer: 'Pengurus OSIS SMK Metland Cibitung',
    description:
      'Kompetisi tahunan antar-kelas yang memperlombakan cabang olahraga futsal, basket, catur, tari kreasi nusantara, dan e-sport edukatif untuk mempererat solidaritas siswa.',
  },
  {
    id: 'agenda-4',
    day: '22',
    month: 'Jun',
    fullDate: '22 Juni 2026',
    title: 'Uji Sertifikasi Kompetensi (USK) Lembaga Sertifikasi Profesi',
    location: 'Lab Vokasi & Dapur Komersial',
    time: 'Pkl. 08.00 WIB - Selesai',
    organizer: 'LSP P1 SMK Metland Cibitung & BNSP',
    description:
      'Pengujian standar kompetensi kerja nasional bagi calon lulusan bersama asesor bersertifikat Badan Nasional Sertifikasi Profesi (BNSP).',
  },
];

export const FEATURED_PROGRAMS: ProgramItem[] = [
  {
    id: 'prog-dkv',
    title: 'Desain Komunikasi Visual (DKV)',
    shortDesc:
      'Spesialisasi animasi 2D/3D, desain grafis, ilustrasi digital, branding korporat, sinematografi, dan UI/UX design dengan fasilitas studio kreatif profesional.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    iconType: 'brush',
    highlights: [
      'Studio Animasi & Motion Graphics berstandar industri dengan drawing tablet workstation',
      'Penguasaan software terdepan: Adobe Creative Cloud, Blender 3D, Figma, dan DaVinci Resolve',
      'Portofolio proyek riil: pembuatan corporate identity, video komersial, dan aset game digital',
      'Magang industri di agensi periklanan, studio animasi, dan divisi kreatif Metland Group',
    ],
    curriculumFocus:
      'Pengembangan konsep visual terpadu, estetika desain, produksi multimedia interaktif, dan komunikasi persuasif digital.',
    careerProspects:
      'Graphic Designer, Animator 2D/3D, UI/UX Designer, Video Editor, Brand Strategist, Creative Director, dan Ilustrator Profesional.',
    partnerIndustries: ['Studio Animasi Nasional', 'Agensi Periklanan Jakarta & Bekasi', 'Metland Corporate Media'],
  },
  {
    id: 'prog-culinary',
    title: 'Kuliner (Tata Boga / Culinary Arts)',
    shortDesc:
      'Teknik memasak kontinental, masakan nusantara, seni pastry & bakery, food plating artistik, hingga manajemen bisnis kuliner dan operasional restoran.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    iconType: 'utensils',
    highlights: [
      'Dapur praktik komersial standar hotel berbintang (Hot Kitchen, Cold Kitchen, Bakery & Pastry Lab)',
      'Sertifikasi keahlian kuliner higienis dan keamanan pangan standar HACCP internasional',
      'Pembelajaran seni food plating, gastronomi modern, dan manajemen katering jamuan resmi',
      'Penyaluran Praktik Kerja Lapangan (PKL) langsung di jaringan hotel dan restoran terkemuka',
    ],
    curriculumFocus:
      'Teknik pengolahan makanan higienis, resep internasional, seni kue dan roti, operasional banquet hotel, dan food costing.',
    careerProspects:
      'Executive Chef, Demi Chef, Pastry & Bakery Chef, Food Stylist, Restaurant Manager, Catering Entrepreneur, dan Barista.',
    partnerIndustries: ['Hotel Horison Group', 'Restoran Kontinental & Fine Dining', 'Industri Bakery Terkemuka'],
  },
  {
    id: 'prog-pplg',
    title: 'Pengembangan Perangkat Lunak & Gim (PPLG)',
    shortDesc:
      'Rekayasa perangkat lunak modern mencakup web development, mobile application, game design, database enterprise, cloud computing, dan kecerdasan buatan terapan.',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    iconType: 'laptop',
    highlights: [
      'Laboratorium Komputer & AI canggih dengan jaringan serat optik gigabit dan server lokal',
      'Pemrograman modern: JavaScript/TypeScript, Python, PHP, Flutter, React, dan Unity Game Engine',
      'Metodologi industri Scrum/Agile dalam pengerjaan capstone project aplikasi nyata',
      'Mentorship dari software engineer dan kesempatan inkubasi produk rintisan (startup)',
    ],
    curriculumFocus:
      'Algoritma & struktur data, arsitektur software, UI/UX interaktif, REST API backend, dan keamanan siber dasar.',
    careerProspects:
      'Frontend/Backend Developer, Mobile App Developer, Game Programmer, QA Tester, Database Administrator, dan Technopreneur.',
    partnerIndustries: ['Software House Jabodetabek', 'Startup Teknologi Edutech & FinTech', 'Divisi IT Korporasi'],
  }
];

export const ACHIEVEMENT_ITEMS: AchievementItem[] = [
  {
    id: 'ach-1',
    category: 'Ekstrakurikuler',
    year: '2026',
    level: 'Tingkat Kabupaten',
    title: 'Juara 1 Turnamen Futsal Pelajar Tingkat Kabupaten Bekasi',
    winner: 'Tim Futsal SMK Metland Cibitung',
    iconType: 'trophy',
    image: '/Futsal-Juara.jpeg',
    description:
      'Menampilkan strategi permainan menyerang dan kekompakan tim yang solid sepanjang turnamen hingga mengantongi trofi juara 1.',
  },
  {
    id: 'ach-2',
    category: 'Ekstrakurikuler',
    year: '2026',
    level: 'Tingkat Provinsi',
    title: 'Juara 1 Lomba Tari Kreasi Nusantara FLS2N Tingkat Provinsi Jawa Barat',
    winner: 'Sanggar Tari Tradisional Metland',
    iconType: 'award',
    image: '/Tari-Tradisional.jpeg',
    description:
      'Pementasan koreografi tari nusantara dengan harmoni gerak, tata busana adat otentik, dan penjiwaan musik yang mengesankan dewan juri.',
  },
  {
    id: 'ach-3',
    category: 'Ekstrakurikuler',
    year: '2026',
    level: 'Tingkat Regional',
    title: 'Gold Medal Kategori Folklore - Festival Paduan Suara Pelajar',
    winner: 'Paduan Suara Gita Metland',
    iconType: 'award',
    image: '/Paduan-Suara.jpeg',
    description:
      'Membawakan medley lagu daerah dengan harmonisasi vokal empat suara yang presisi, artikulasi jernih, dan dinamika suara memikat.',
  },
  {
    id: 'ach-4',
    category: 'Siswa',
    year: '2027',
    level: 'Ajang Tahunan Sekolah',
    title: 'Best Showcase & Public Speaker Duta Sekolah Maheswara-Maheswari',
    winner: 'Pasangan Duta Sekolah 2027',
    iconType: 'sparkles',
    image: '/maheswara-maheswari.jpeg',
    description:
      'Pencapaian luar biasa dalam kepemimpinan, keprotokoleran, dan representasi almamater pada ajang bergengsi Duta Sekolah Maheswara-Maheswari.',
  },
  {
    id: 'ach-5',
    category: 'Siswa',
    year: '2025',
    level: 'Tingkat Nasional',
    title: 'Juara 1 Lomba Kompetensi Siswa (LKS) Bidang IT Software Solutions',
    winner: 'Delegasi Siswa Jurusan PPLG',
    iconType: 'trophy',
    description:
      'Berhasil merancang dan mengimplementasikan arsitektur sistem enterprise dengan performa optimal serta pengujian otomatis standar LKS Nasional.',
  },
  {
    id: 'ach-6',
    category: 'Guru',
    year: '2026',
    level: 'Tingkat Provinsi',
    title: 'Guru Inovator Pembelajaran Vokasi Berbasis Technopreneur',
    winner: 'Tenaga Pendidik Produktif SMK Metland',
    iconType: 'users',
    description:
      'Penghargaan atas inovasi modul pembelajaran berbasis proyek industri dan dedikasi bimbingan kewirausahaan siswa.',
  },
  {
    id: 'ach-7',
    category: 'Sekolah',
    year: '2025',
    level: 'Tingkat Nasional',
    title: 'Sekolah Rujukan Link & Match Industri Terbaik Kategori Vokasi Kreatif',
    winner: 'SMK Metland Cibitung',
    iconType: 'award',
    description:
      'Pengakuan dari kemitraan DUDI atas efektivitas kurikulum berbasis kebutuhan riil industri dan tingkat serapan magang berkualitas tinggi.',
  },
  {
    id: 'ach-8',
    category: 'Ekstrakurikuler',
    year: '2025',
    level: 'Tingkat Jabodetabek',
    title: 'Juara 2 Turnamen Bola Basket Pelajar Tingkat Jabodetabek',
    winner: 'Tim Basket Putra SMK Metland Cibitung',
    iconType: 'trophy',
    description:
      'Prestasi gemilang dalam turnamen invitasi bola basket antar sekolah kejuruan dengan sportivitas dan daya juang tinggi.',
  },
];

export const ORGANIZATIONS_DATA: OrganizationDetail[] = [
  {
    id: 'maheswara',
    title: 'Maheswara & Maheswari',
    subtitle: 'Duta Sekolah SMK Metland Cibitung',
    badge: 'School Ambassador',
    image: '/maheswara-maheswari.jpeg',
    description:
      'Ajang pemilihan dan perhimpunan Duta Sekolah bergengsi bagi siswa putra (Maheswara) dan siswi putri (Maheswari) terbaik. Mereka bertindak sebagai representasi resmi almamater, ikon teladan berkarakter unggul, pemandu acara protokoler, serta komunikator aktif keunggulan sekolah kepada masyarakat luas.',
    vision:
      'Mewujudkan figur duta pelajar yang cerdas, berbudaya, komunikatif, dan beretika luhur sebagai representasi citra positif serta inspirasi prestasi civitas akademika SMK Metland Cibitung.',
    mission: [
      'Menjadi duta informasi dan humas representatif dalam mempromosikan keunggulan 3 jurusan vokasi sekolah.',
      'Memandu kegiatan seremonial resmi, penyambutan tamu kehormatan, dan event berskala regional maupun nasional.',
      'Menginisiasi aksi sosial, gerakan literasi, serta kampanye positif karakter pelajar Pancasila.',
      'Mengembangkan kecakapan public speaking, diplomasi pelajar, dan kepemimpinan generasi muda.',
    ],
    programs: [
      {
        title: 'Pemilihan Duta Sekolah Maheswara-Maheswari',
        description:
          'Seleksi bertahap meliputi tes wawasan umum, uji bakat kreatif, wawancara kepribadian, dan grand final pertunjukan panggung spektakuler.',
      },
      {
        title: 'Workshop Creativision & Public Speaking',
        description:
          'Pelatihan rutin etika komunikasi publik, personal branding, teknik presentasi, serta penguasaan bahasa asing bagi seluruh anggota duta.',
      },
      {
        title: 'School Tour & Promosi Vokasi',
        description:
          'Kunjungan edukasi dan sosialisasi program keahlian ke sekolah-sekolah menengah pertama mitra di wilayah Bekasi dan sekitarnya.',
      },
      {
        title: 'Bakti Sosial & Duta Lingkungan',
        description:
          'Kegiatan pengabdian masyarakat, santunan sosial berkala, dan kampanye kelestarian lingkungan kampus hijau Metland.',
      },
    ],
    guestQuotes: [
      {
        quote:
          'Keren banget... Terimakasih telah menjadi wadah lembaga yang meningkatkan siswa-siswi kami untuk lebih berkarya dan mengembangkan bakat yang ada... Sukses selalu.',
        author: 'Ade Olis',
        role: 'Tamu Maheswara Maheswari 2027',
      },
      {
        quote:
          'Terima kasih atas undangan dan kesempatan yang diberikan. Semoga acara ini berjalan lancar, dapat menjadi inspirasi bagi para siswa, dan semakin mempererat silaturahmi antar sekolah. Sukses selalu untuk seluruh panitia acara.',
        author: 'Sofi Azzahra',
        role: 'Tamu Maheswara Maheswari 2027',
      },
      {
        quote: 'Acara yang diundang sangat menarik dan edukatif. Representasi para duta sekolah sangat membanggakan.',
        author: 'Karl Nizam Bahtiar',
        role: 'Tamu Maheswara Maheswari 2027',
      },
      {
        quote:
          'Mendapatkan pengalaman baru yang dapat menginspirasi diri saya di depannya. Sukses terus untuk Maheswara Maheswari.',
        author: 'Khanza Maheswari Caldeniz',
        role: 'Tamu Maheswara Maheswari 2027',
      },
    ],
  },
  {
    id: 'osis',
    title: 'OSIS SMK Metland Cibitung',
    subtitle: 'Organisasi Siswa Intra Sekolah',
    badge: 'Student Council Leadership',
    image: '/Maheswara-wiri_osis.jpeg',
    description:
      'Organisasi resmi kesiswaan SMK Metland Cibitung yang menjadi lokomotif penggerak aspirasi, kepemimpinan, kedisiplinan, dan kreativitas seluruh peserta didik. OSIS mengoordinasikan seluruh pergerakan kesiswaan, ekstrakurikuler, dan kegiatan pengabdian demi iklim sekolah yang dinamis, inklusif, dan harmonis.',
    vision:
      'Membentuk wadah kepemimpinan siswa yang adaptif, berintegritas tinggi, solid, dan solutif dalam menampung serta mewujudkan gagasan kreatif pelajar yang bernilai luhur.',
    mission: [
      'Menjadi jembatan aspirasi yang transparan dan harmonis antara seluruh siswa dengan manajemen sekolah.',
      'Mengelola dan menyukseskan program kerja kesiswaan, peringatan hari besar, dan kompetisi minat-bakat.',
      'Menumbuhkan kedisiplinan, rasa tanggung jawab, dan jiwa kepemimpinan melalui Latihan Dasar Kepemimpinan Siswa (LDKS).',
      'Mengembangkan iklim saling menghormati, toleransi, dan gotong royong antar seluruh rombongan belajar.',
    ],
    programs: [
      {
        title: 'Metland Student Championship (Classmeeting)',
        description:
          'Pekan olahraga, seni, dan e-sport edukatif antar-kelas yang diselenggarakan secara profesional pada setiap akhir semester.',
      },
      {
        title: 'Latihan Dasar Kepemimpinan Siswa (LDKS)',
        description:
          'Kaderisasi intensif untuk membekali calon pengurus organisasi dengan manajemen konflik, perencanaan event, dan integritas moral.',
      },
      {
        title: 'Peringatan Hari Besar Nasional & Keagamaan (PHBN & PHBI)',
        description:
          'Pengorganisasian upacara kenegaraan, pentas seni kemerdekaan, peringatan hari guru, serta kegiatan keagamaan terpadu.',
      },
      {
        title: 'Koordinasi Pembinaan Ekstrakurikuler',
        description:
          'Monev dan fasilitasi sarana prasarana untuk memastikan seluruh klub ekstrakurikuler aktif menorehkan prestasi membanggakan.',
      },
    ],
  },
  {
    id: 'collaboration',
    title: 'Kolaborasi Sinergis Maheswara & OSIS',
    subtitle: 'Harmoni Kepemimpinan & Representasi Pelajar',
    badge: 'Synergy in Action',
    image: '/Maheswara-wiri_osis.jpeg',
    description:
      'Keunggulan ekosistem kesiswaan SMK Metland Cibitung terletak pada sinergi erat antara Maheswara-Maheswari (sebagai wajah dan duta representatif) dengan OSIS (sebagai motor penggerak manajerial organisasi). Kolaborasi ini menciptakan standar penyelenggaraan acara sekolah yang tertata rapi, elegan, dan profesional.',
    vision:
      'Menciptakan budaya kolaborasi kepemimpinan siswa tanpa sekat, mengoptimalkan potensi komunikasi dan eksekusi manajerial untuk kemajuan almamater.',
    mission: [
      'Memadukan kecakapan manajerial OSIS dengan kepiawaian protokoler dan branding Maheswara-Maheswari.',
      'Menjamin keberhasilan setiap event akbar sekolah dari tahap konsep, produksi, hingga pelaksanaan.',
      'Menciptakan ruang belajar kepemimpinan nyata berstandar industri event management.',
    ],
    programs: [
      {
        title: 'Penyelenggaraan Akbar Maheswara-Maheswari Showcase',
        description:
          'Manajemen kepanitiaan bersama yang melibatkan seluruh divisi teknis OSIS dan para duta sekolah.',
      },
      {
        title: 'Metland Youth Leadership Forum',
        description:
          'Pertemuan berkala perwakilan kelas untuk membahas gagasan perbaikan lingkungan belajar dan inisiatif baru.',
      },
    ],
  },
];

export const EXTRACURRICULAR_ITEMS: ExtracurricularItem[] = [
  {
    id: 'eks-futsal',
    name: 'Futsal & Minisoccer',
    category: 'Olahraga & Ketangkasan',
    schedule: 'Selasa & Jumat, Pkl. 15.30 - 17.30 WIB',
    location: 'Lapangan Olahraga Utama SMK Metland Cibitung',
    coach: 'Coach Hendra Pratama (Lisensi Futsal Nasional)',
    description:
      'Membina ketangkasan fisik, teknik penguasaan bola, pemahaman taktik tim futsal & minisoccer, dan sportivitas tinggi melalui latihan intensif serta keikutsertaan rutin di kompetisi pelajar.',
    achievements: [
      'Juara 1 Turnamen Futsal Pelajar Kabupaten Bekasi 2026',
      'Semifinalis Piala Pelajar Jawa Barat 2025',
    ],
    iconType: 'futsal',
    image: '/Futsal.jpeg',
  },
  {
    id: 'eks-basket',
    name: 'Basket',
    category: 'Olahraga & Prestasi',
    schedule: 'Rabu & Sabtu, Pkl. 15.30 - 17.30 WIB',
    location: 'Lapangan Basket Indoor Sport Center Metland',
    coach: 'Coach Kevin Aditya (Eks Atlet Liga Mahasiswa)',
    description:
      'Fokus pada fundamental passing, dribbling, shooting presisi, defense dinamis, dan strategi permainan cepat dalam persiapan turnamen bola basket liga pelajar antarsekolah.',
    achievements: [
      'Juara 2 Turnamen Basket SMK/SMA Se-Jabodetabek 2025',
      'Pemain Terbaik (MVP) Turnamen Pelajar Cikarang 2025',
    ],
    iconType: 'basket',
  },
  {
    id: 'eks-padus',
    name: 'Paduan Suara',
    category: 'Seni Musik & Vokal',
    schedule: 'Rabu & Sabtu, Pkl. 14.30 - 16.30 WIB',
    location: 'Auditorium Musik Akustik SMK Metland Cibitung',
    coach: 'Bpk. Yohanes Kristianto, M.Sn.',
    description:
      'Pengembangan olah vokal, artikulasi, pernapasan diafragma, harmonisasi suara multi-bagian, dan penguasaan repertoar lagu nasional, pop kontemporer, serta lagu daerah nusantara.',
    achievements: [
      'Gold Medal Folklore Category Youth Choir Festival 2026',
      'Tim Paduan Suara Resmi Upacara Kenegaraan SMK Metland',
    ],
    iconType: 'paduan-suara',
    image: '/Paduan-Suara.jpeg',
  },
  {
    id: 'eks-tari',
    name: 'Seni Tari',
    category: 'Seni Pertunjukan & Budaya',
    schedule: 'Senin & Kamis, Pkl. 15.00 - 17.00 WIB',
    location: 'Studio Seni Budaya & Panggung Terbuka Metland',
    coach: 'Ibu Ratna Kumala, S.Sn.',
    description:
      'Melestarikan kekayaan tarian tradisional nusantara dan tarian kreasi daerah modern, melatih kelenturan gerak tubuh, penjiwaan karakter, serta kepekaan estetika panggung.',
    achievements: [
      'Juara 1 Lomba Tari Kreasi Nusantara FLS2N Jawa Barat 2026',
      'Penampil Utama Peringatan Hari Pendidikan Nasional',
    ],
    iconType: 'seni-tari',
    image: '/Tari-Tradisional.jpeg',
  },
  {
    id: 'eks-pmr',
    name: 'PMR',
    category: 'Kepalangmerahan & Kemanusiaan',
    schedule: 'Rabu & Jumat, Pkl. 15.00 - 17.00 WIB',
    location: 'Ruang UKS & Posko Relawan PMR Metland',
    coach: 'Pembina PMR PMI Kabupaten Bekasi',
    description:
      'Palang Merah Remaja (PMR) melatih keterampilan pertolongan pertama (First Aid), tanggap darurat, penanganan cedera lapangan, promosi hidup bersih sehat (PHBS), serta penanaman jiwa kemanusiaan dan kerelawanan.',
    achievements: [
      'Juara Umum Lomba Pertolongan Pertama PMR Wira Se-Kabupaten Bekasi 2025',
      'Tim Medis Utama Seluruh Event Akbar & Olahraga Sekolah',
    ],
    iconType: 'pmr',
  },
];

export const GALLERY_PHOTOS: GalleryPhotoItem[] = [
  {
    id: 'gal-1',
    badge: 'Duta Sekolah',
    aspect: '3:4',
    title: 'Ajang Bergengsi Maheswara-Maheswari',
    category: 'Kepemimpinan Siswa',
    date: 'Tahun 2027',
    gradientClass: 'from-teal-800 to-slate-900',
    description:
      'Representasi siswa dan siswi berprestasi sebagai Duta Sekolah SMK Metland Cibitung dalam balutan busana resmi keprotokoleran.',
    image: '/maheswara-maheswari.jpeg',
  },
  {
    id: 'gal-2',
    badge: 'Organisasi Siswa',
    aspect: '16:9',
    title: 'Kolaborasi Pengurus OSIS & Maheswara',
    category: 'Organisasi Kesiswaan',
    date: 'Tahun 2026/2027',
    gradientClass: 'from-cyan-900 to-teal-950',
    description:
      'Sinergi aktif pengurus OSIS dan Duta Sekolah dalam mengawal agenda akbar, event kesiswaan, dan memajukan almamater.',
    image: '/Maheswara-wiri_osis.jpeg',
  },
  {
    id: 'gal-3',
    badge: 'Prestasi Juara',
    aspect: '16:9',
    title: 'Perayaan Kemenangan Juara 1 Futsal',
    category: 'Prestasi Olahraga',
    date: 'Mei 2026',
    gradientClass: 'from-emerald-900 to-teal-950',
    description:
      'Momen kegembiraan tim futsal SMK Metland Cibitung mengangkat piala juara 1 pada kejuaraan futsal pelajar bergengsi.',
    image: '/Futsal-Juara.jpeg',
  },
  {
    id: 'gal-4',
    badge: 'Ekstrakurikuler',
    aspect: '4:3',
    title: 'Latihan Rutin Tim Futsal Sekolah',
    category: 'Olahraga & Bakat',
    date: 'April 2026',
    gradientClass: 'from-teal-900 to-cyan-950',
    description:
      'Kekompakan skuat futsal dalam sesi pembinaan teknik taktik, pembentukan stamina, dan penanaman nilai sportivitas di lapangan.',
    image: '/Futsal.jpeg',
  },
  {
    id: 'gal-5',
    badge: 'Seni Tari',
    aspect: '16:9',
    title: 'Pentas Tari Tradisional Nusantara',
    category: 'Seni Budaya',
    date: 'Maret 2026',
    gradientClass: 'from-amber-900 to-teal-950',
    description:
      'Penampilan anggun dan berwibawa tim tari tradisional dengan busana adat nusantara yang memukau ratusan pasang mata penonton.',
    image: '/Tari-Tradisional.jpeg',
  },
  {
    id: 'gal-6',
    badge: 'Seni Vokal',
    aspect: '16:9',
    title: 'Penampilan Paduan Suara Gita Metland',
    category: 'Harmoni Seni',
    date: 'Februari 2026',
    gradientClass: 'from-cyan-900 to-slate-900',
    description:
      'Lantunan nada harmonis dari Paduan Suara SMK Metland Cibitung dalam perhelatan akbar seremonial resmi sekolah.',
    image: '/Paduan-Suara.jpeg',
  },
  {
    id: 'gal-7',
    badge: 'Pimpinan Sekolah',
    aspect: '3:4',
    title: 'Kepemimpinan Visioner Sekolah',
    category: 'Manajemen & Tata Kelola',
    date: '2026',
    gradientClass: 'from-slate-900 to-teal-950',
    description:
      'Kepala Sekolah SMK Metland Cibitung berkomitmen menghadirkan pendidikan vokasi unggul yang berkarakter kuat dan relevan dengan industri.',
    image: '/head-teacher.jpg',
  },
  {
    id: 'gal-8',
    badge: 'Kampus Modern',
    aspect: '16:9',
    title: 'Gedung & Fasilitas Kampus Terpadu',
    category: 'Sarana & Prasarana',
    date: '2026',
    gradientClass: 'from-teal-950 to-slate-950',
    description:
      'Kompleks gedung pembelajaran modern SMK Metland Cibitung yang asri, hijau, dan dilengkapi sarana laboratorium berstandar dunia industri.',
    image: '/background-hero-section.webp',
  },
];

export const TEACHERS_AND_STAFF: TeacherStaffItem[] = [
  {
    id: 'st-1',
    name: 'Darmawan Sunarja',
    role: 'Kepala Sekolah',
    department: 'Manajemen & Pimpinan Sekolah',
    education: 'Blank for now',
    experience: 'Pemimpin Visioner Pendidikan Vokasi Terpadu Metland',
    quote:
      'Pendidikan vokasi adalah jembatan emas yang menghubungkan mimpi siswa dengan dunia nyata industri yang bermartabat dan berkarakter luhur.',
    image: '/head-teacher.jpg',
  },
  {
    id: 'st-2',
    name: 'Bambang Irawan, S.Kom., M.T.',
    role: 'Ketua Program Keahlian PPLG',
    department: 'Pengembangan Perangkat Lunak & Gim',
    education: 'S2 Teknik Informatika',
    experience: '12 Tahun Praktisi Software Engineering & Asesor LSP',
    quote: 'Membimbing generasi muda menjadi pencipta inovasi digital, bukan sekadar pengguna teknologi.',
  },
  {
    id: 'st-3',
    name: 'Chef Firman Syahputra, S.Tr.Par.',
    role: 'Ketua Program Keahlian Kuliner',
    department: 'Kuliner & Seni Tata Boga',
    education: 'Sarjana Terapan Pariwisata & Kuliner',
    experience: '14 Tahun Executive Chef di Jaringan Hotel Berbintang',
    quote: 'Seni kuliner berawal dari disiplin tinggi, dedikasi rasa, dan ketelitian standar higienis industri.',
  },
  {
    id: 'st-4',
    name: 'Larasati Dewi Anggraini, M.Ds.',
    role: 'Ketua Program Keahlian DKV',
    department: 'Desain Komunikasi Visual',
    education: 'Magister Desain Komunikasi Visual',
    experience: '10 Tahun Creative Director Agensi Multimedia Nasional',
    quote: 'Desain yang hebat adalah perpaduan keindahan estetika dan solusi komunikasi yang memecahkan masalah.',
  },
  {
    id: 'st-5',
    name: 'Ir. Hendra Kusuma, M.M.',
    role: 'Wakil Kepala Sekolah Bidang Hubungan Industri & BKK',
    department: 'Kemitraan DUDI & Penyaluran Lulusan',
    education: 'S2 Manajemen Industri',
    experience: '16 Tahun Kerjasama Korporasi & Penguatan Vokasi',
    quote: 'Menjamin kompetensi setiap siswa terverifikasi langsung oleh standar nyata dunia industri modern.',
  },
  {
    id: 'st-6',
    name: 'Dra. Siti Nurhaliza, M.Pd.',
    role: 'Wakil Kepala Sekolah Bidang Kurikulum',
    department: 'Pengembangan Akademik & LSP',
    education: 'S2 Teknologi Pembelajaran',
    experience: '18 Tahun Pengembang Kurikulum Berbasis Technopreneur',
    quote: 'Kurikulum adaptif dan berpusat pada potensi unik setiap siswa untuk masa depan gemilang.',
  },
];

export const INITIAL_SPMB_APPLICATIONS: SpmbApplication[] = [
  {
    regNumber: 'SPMB-2026-1042',
    fullName: 'Rizky Pratama Putra',
    nisn: '0098451234',
    originSchool: 'SMP Negeri 1 Cibitung',
    program: 'Pengembangan Perangkat Lunak & Gim (PPLG)',
    parentName: 'Budi Santoso',
    phone: '081288990011',
    email: 'rizky.pratama@example.com',
    address: 'Perumahan Metland Cibitung Cluster Taman Sakura, Bekasi',
    createdAt: '02 Mei 2026',
    status: 'Lulus Seleksi Tahap 1',
  },
  {
    regNumber: 'SPMB-2026-1088',
    fullName: 'Aisyah Zahra Kamila',
    nisn: '0097112233',
    originSchool: 'SMP Islam Terpadu Al-Fityan',
    program: 'Desain Komunikasi Visual (DKV)',
    parentName: 'H. Ahmad Hidayat',
    phone: '081377665544',
    email: 'aisyah.zahra@example.com',
    address: 'Jl. Raya Cikarang - Cibitung No. 45, Bekasi',
    createdAt: '05 Mei 2026',
    status: 'Terverifikasi - Jadwal Tes Tersedia',
  },
  {
    regNumber: 'SPMB-2026-1120',
    fullName: 'Dimas Satria Ramadhan',
    nisn: '0096554433',
    originSchool: 'SMP Negeri 2 Cikarang Barat',
    program: 'Kuliner (Tata Boga)',
    parentName: 'Suryanto Widodo',
    phone: '081299887766',
    email: 'dimas.satria@example.com',
    address: 'Perumahan Telaga Pesona, Cibitung, Bekasi',
    createdAt: '08 Mei 2026',
    status: 'Terverifikasi - Jadwal Tes Tersedia',
  },
];
