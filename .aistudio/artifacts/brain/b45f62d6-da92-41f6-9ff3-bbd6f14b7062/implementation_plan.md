# SMK Metland Cibitung — Interactive School Portal

An interactive web application for **SMK Metland Cibitung ("Excellence with Character")** that faithfully reproduces the visual layout, teal/cyan palette, and blueprint placeholder aesthetic from the provided HTML reference while bringing every section, carousel, and call-to-action to life with interactive modals and sub-views.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following product and design choices have been confirmed from your responses and govern the implementation:

- **Confirmed Visual Media Style**: Preserve the exact wireframe SVG placeholder graphic style from the screenshot and HTML reference (e.g., Hero Background Placeholder `1920 × 1080`, Foto Kepala Sekolah `4:5`, Thumbnail Berita `16:9`, Foto Prestasi, Galeri Kegiatan `3:4`, and Galeri Video `16:9` placeholders).
- **Confirmed Interactivity Scope**: Interactive modals and sub-views for SPMB Online Registration, News Articles & Archive, Agenda Details, Extracurricular Profiles, Teacher & Staff Directory, and Photo/Video Lightboxes, plus working carousel/slider controls on the main page.
- **Confirmed Portal Scope**: Public-facing school website only, without an administrative CMS dashboard.

---

## 1. Overview & Core Concept

- **What It Does**: Delivers the official public portal for SMK Metland Cibitung, showcasing the school profile, principal's welcome message, latest news and agenda, featured academic programs (Bilingual, Tahfidz Al-Qur'an, STEM & Robotik), school metrics, national/provincial achievements, extracurricular clubs, photo/video documentation, parent/alumni testimonials, and online student admissions (SPMB).
- **Target Audience / Persona**: Prospective students and parents researching vocational programs and applying via SPMB Online, current students checking school news and agenda schedules, and the broader public exploring student achievements.
- **Key Value**: Combines the exact visual fidelity of the reference design with complete functional interactivity so visitors can read full news stories, browse all extracurriculars and achievements, inspect photo/video documentation, and complete or check an online student admission registration (`SPMB Online`).

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Landing & Hero Exploration**: Visitors land on the hero banner (*"Membangun Masa Depan Bangsa"*), cycle through 3 hero slides using the slide indicators, or click *"Tentang Kami"* to scroll smoothly to the school profile and principal's welcome.
  2. **News, Agenda & Achievements Discovery**: Visitors use the `←` and `→` slider buttons to paginate through latest news cards, click *"Baca Selengkapnya →"* to read the full article in a clean modal, or click *"Lihat Semua Berita →"*, *"Lihat Semua Agenda →"*, and *"Lihat Semua Prestasi →"* to filter and browse complete archives.
  3. **Extracurriculars & Media Galleries**: Visitors cycle through extracurricular activities with the `←` / `→` buttons, click any club card (e.g., Sepak Bola, Basket, Robotik) to see training schedules and achievements, or click any Photo/Video card to open an interactive lightbox preview.
  4. **SPMB Online Admissions & Info**: Clicking *"Daftar Sekarang"* or *"Daftar SPMB Online →"* opens an interactive registration modal where prospective students submit their application and receive a registration number (saved in `localStorage`), which can then be verified via *"Cek Status Pendaftaran"* in the footer alongside *"Biaya Pendidikan"* and *"Beasiswa Prestasi"* info modals.
- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Institutional Indonesian vocational school portal with a crisp, welcoming teal-and-white wireframe editorial aesthetic faithful to the provided HTML template.
  - *Color Palette & Mood*:
    - Dominant Canvas (60%): Pure white (`#ffffff`) alternating with soft pale turquoise tint (`#f0fdfa` / `bg-teal-50/40`).
    - Structural Surfaces (30%): Deep dark teal (`#042f2e`) and cyan-slate (`#083344` / `#0f172a`) for hero and footer surfaces; crisp white cards with `border-teal-100` hairline borders.
    - Accent Budget (10%): Brand turquoise (`#0d9488` / `teal-600`), bright teal highlights (`#2dd4bf` / `teal-400`), and deep teal badges (`#0f766e` / `teal-700`).
  - *Typography & Hierarchy*: Clean geometric sans-serif (`Plus Jakarta Sans` / `Inter`) with bold tight-tracked headings (`font-extrabold tracking-tight`), comfortable body prose (`leading-relaxed text-slate-600`), and tabular numerals (`tabular-nums`) for the key metrics counter bar (`1,250+`, `85+`, `28 Th`, `36`).
  - *Component Styling & Layout*: Centered `max-w-7xl` container (`px-4 sm:px-6 lg:px-8`), `rounded-2xl` and `rounded-3xl` card geometry, and dashed/gradient SVG wireframe placeholders matching every media slot in the HTML reference.
- **Interactive Feedback & Motion**: Smooth `scroll-behavior: smooth` navigation, subtle card elevation and icon scale transitions (`group-hover:scale-110 transition duration-300`), instant carousel pagination, and accessible modal backdrops with keyboard `Escape` support.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Exact Wireframe Placeholder Fidelity with Rich Modal Content**
  - *Chosen Approach*: Keep all card and hero media slots in the exact SVG wireframe placeholder style shown in the screenshot, while enriching clicked items (news articles, gallery lightboxes, video previews, extracurricular details) with complete contextual descriptions and metadata inside modals.
  - *Why*: Directly honors your preference to preserve the screenshot's graphic placeholder aesthetic while ensuring every interactive button and card delivers a rewarding user experience.
  - *Alternatives Considered*: Replacing placeholders with stock photography (rejected per your explicit preference).
- **Decision 2: Client-Side State & LocalStorage for SPMB Admissions**
  - *Chosen Approach*: Store submitted SPMB Online applications in browser `localStorage` with a generated registration code (e.g., `SPMB-2026-XXXX`) and pre-seed sample registrations so *"Cek Status Pendaftaran"* works immediately.
  - *Why*: Provides a realistic, self-contained registration and status verification flow without requiring backend database setup or login barriers.

---

## 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram**:
```
┌─────────────────────────────────────────────────────────────────────────┐
│                        App Root (SMK Metland Portal)                    │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌───────────────┐  │
│  │  Portal Data Store   │  │  Active Modal State  │  │ SPMB Storage  │  │
│  │ (News, Agenda, etc.) │  │ (News, Gallery, etc) │  │ (localStorage)│  │
│  └──────────┬───────────┘  └──────────┬───────────┘  └───────┬───────┘  │
└─────────────┼─────────────────────────┼──────────────────────┼──────────┘
              │                         │                      │
      ┌───────┴─────────────────────────┴──────────────────────┴───────┐
      ▼                                                                ▼
┌───────────────────────────────────────────┐    ┌──────────────────────────────┐
│           Main Landing Sections           │    │   Interactive Modal Views    │
│ ├─ TopHeaderNavigation (Sticky + Mobile)  │    │ ├─ NewsArticle & Archive     │
│ ├─ HeroSection (3-Slide Carousel)         │    │ ├─ AgendaScheduleModal       │
│ ├─ PrincipalWelcome (4:5 Placeholder)     │    │ ├─ AchievementsDirectoryModal│
│ ├─ NewsAndAgenda (Paginated + Sidebar)    │    │ ├─ ExtracurricularDetailModal│
│ ├─ FeaturedPrograms & MetricsStatsBar     │    │ ├─ Photo & Video Lightboxes  │
│ ├─ SchoolAchievements (4-Col Grid)        │    │ ├─ Guru & Staff Directory    │
│ ├─ Extracurriculars (Paginated 6-Col)     │    │ └─ SPMB Suite Modals:        │
│ ├─ PhotoGallery (3:4) & VideoGallery(16:9)│    │    ├─ Online Registration    │
│ ├─ CallToActionBanner & Testimonials      │    │    ├─ Check Status Lookup    │
│ └─ MainFooter (Quick Links & Contact)     │    │    └─ Tuition & Scholarships │
└───────────────────────────────────────────┘    └──────────────────────────────┘
```

- **Data Model & State**:
  - **Hero Slides**: Array of 3 slides with title, highlighted word, subtitle, and CTA target.
  - **News Articles**: ID, category (`Prestasi`, `Kegiatan Siswa`, `Pengumuman`, `Akademik`), date, title, summary, full article paragraphs, and author.
  - **Agenda Events**: ID, day, month, title, location, time, and full event description.
  - **Achievements**: ID, category (`Siswa`, `Guru`, `Sekolah`, `Ekstrakurikuler`), year, level (`Tingkat Nasional`, `Tingkat Provinsi`), title, winner name, and summary.
  - **Extracurriculars**: ID, emoji icon, name, category, schedule, coach/mentor, and description (12 total items, paginated 6 at a time).
  - **Photo & Video Galleries**: ID, badge label, aspect ratio, title, date, category, and detailed caption/transcript.
  - **SPMB Registrations**: Registration ID (`SPMB-2026-XXXX`), student full name, NISN, origin school, chosen major/program (`Program Bilingual`, `Tahfidz Al-Qur'an`, `STEM & Robotik`), parent phone/email, submission date, and status (`Terverifikasi` / `Menunggu Seleksi`).
- **Interactive Component & State Mapping**:
  - **Navigation & Mobile Menu**: Clicking top nav links scrolls smoothly to `#beranda`, `#profil`, `#informasi`, `#galeri`, `#kontak`, or opens the *Guru & Staff Directory* / *SPMB Online Registration* modal; includes a responsive mobile navigation drawer.
  - **Carousels & Pagination**: Hero indicators switch active slide; News `←`/`→` buttons cycle through news pairs; Extracurricular `←`/`→` buttons cycle through sets of 6 clubs.
  - **Archive & Lightbox Modals**: Clicking *"Lihat Semua..."* opens a searchable/filterable modal for News, Agenda, Achievements, Photos, or Videos; clicking an individual item opens its detailed view.
  - **SPMB Registration & Status Lookup**: Submitting the validated SPMB form generates a unique registration code and persists to `localStorage`; entering a registration code or NISN in *"Cek Status Pendaftaran"* displays the applicant's current admission status.
