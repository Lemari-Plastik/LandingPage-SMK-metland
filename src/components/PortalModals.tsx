import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  NewsItem,
  AgendaItem,
  ProgramItem,
  AchievementItem,
  ExtracurricularItem,
  GalleryPhotoItem,
  TeacherStaffItem,
  SpmbApplication,
  ORGANIZATIONS_DATA,
  OrganizationDetail,
} from '../data/schoolData';
import {
  X,
  Check,
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  Trophy,
  Sparkles,
  ArrowRight,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Phone,
  Mail,
  Palette,
  Utensils,
  Laptop,
  Hotel,
  Calculator,
  Activity,
  Music,
  Drama,
  Cpu,
  Compass,
  Globe,
  Quote,
  Dribbble,
  HeartPulse,
} from 'lucide-react';

export type ActiveModal =
  | { type: 'none' }
  | { type: 'news-detail'; item: NewsItem }
  | { type: 'news-all' }
  | { type: 'agenda-detail'; item: AgendaItem }
  | { type: 'agenda-all' }
  | { type: 'program-detail'; item: ProgramItem }
  | { type: 'achievement-detail'; item: AchievementItem }
  | { type: 'achievement-all' }
  | { type: 'extracurricular-detail'; item: ExtracurricularItem }
  | { type: 'photo-detail'; item: GalleryPhotoItem }
  | { type: 'photo-all' }
  | { type: 'organization-detail'; orgKey?: 'maheswara' | 'osis' | 'collaboration' }
  | { type: 'guru-staff' }
  | { type: 'spmb'; initialTab?: 'register' | 'status' | 'tuition' | 'scholarship' }
  | { type: 'legal'; section: 'privacy' | 'terms' };

interface PortalModalsProps {
  modal: ActiveModal;
  onClose: () => void;
  onSelectModal: (modal: ActiveModal) => void;
  newsList: NewsItem[];
  agendaList: AgendaItem[];
  achievementsList: AchievementItem[];
  photosList: GalleryPhotoItem[];
  teachersList: TeacherStaffItem[];
  spmbApplications: SpmbApplication[];
  onAddSpmbApplication: (app: SpmbApplication) => void;
}

export const PortalModals: React.FC<PortalModalsProps> = ({
  modal,
  onClose,
  onSelectModal,
  newsList,
  agendaList,
  achievementsList,
  photosList,
  teachersList,
  spmbApplications,
  onAddSpmbApplication,
}) => {
  const [newsCategoryFilter, setNewsCategoryFilter] = useState<string>('Semua');
  const [achCategoryFilter, setAchCategoryFilter] = useState<string>('Semua');
  const [activeOrgTab, setActiveOrgTab] = useState<'maheswara' | 'osis' | 'collaboration'>('maheswara');

  // SPMB form state
  const [spmbTab, setSpmbTab] = useState<'register' | 'status' | 'tuition' | 'scholarship'>('register');
  const [fullName, setFullName] = useState('');
  const [nisn, setNisn] = useState('');
  const [originSchool, setOriginSchool] = useState('');
  const [program, setProgram] = useState('Desain Komunikasi Visual (DKV)');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [formError, setFormError] = useState('');
  const [submittedApp, setSubmittedApp] = useState<SpmbApplication | null>(null);
  const [statusQuery, setStatusQuery] = useState('');

  React.useEffect(() => {
    if (modal.type === 'spmb' && modal.initialTab) {
      setSpmbTab(modal.initialTab);
    }
    if (modal.type === 'organization-detail' && modal.orgKey) {
      setActiveOrgTab(modal.orgKey);
    }
  }, [modal]);

  const handleSpmbSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !nisn.trim() || !originSchool.trim() || !parentName.trim() || !phone.trim()) {
      setFormError('Mohon lengkapi seluruh kolom wajib bertanda (*) (Nama, NISN, Sekolah Asal, Nama Orang Tua, dan No. WhatsApp).');
      return;
    }
    setFormError('');
    const randomCode = Math.floor(1100 + Math.random() * 8800);
    const newApp: SpmbApplication = {
      regNumber: `SPMB-2026-${randomCode}`,
      fullName: fullName.trim(),
      nisn: nisn.trim(),
      originSchool: originSchool.trim(),
      program,
      parentName: parentName.trim(),
      phone: phone.trim(),
      email: email.trim() || 'siswa@smkmetlandcibitung.sch.id',
      address: address.trim() || 'Cibitung, Bekasi, Jawa Barat',
      createdAt: new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      status: 'Terverifikasi - Jadwal Tes Tersedia',
    };
    onAddSpmbApplication(newApp);
    setSubmittedApp(newApp);
    setFullName('');
    setNisn('');
    setOriginSchool('');
    setParentName('');
    setPhone('');
    setEmail('');
    setAddress('');
  };

  const filteredStatusApps = spmbApplications.filter((app) => {
    if (!statusQuery.trim()) return true;
    const q = statusQuery.toLowerCase();
    return (
      app.regNumber.toLowerCase().includes(q) ||
      app.fullName.toLowerCase().includes(q) ||
      app.nisn.toLowerCase().includes(q)
    );
  });

  const renderExtracurricularIcon = (iconType: string) => {
    switch (iconType) {
      case 'futsal':
      case 'activity':
        return <Activity className="w-6 h-6 text-teal-600" />;
      case 'basket':
        return <Dribbble className="w-6 h-6 text-teal-600" />;
      case 'paduan-suara':
      case 'music':
        return <Music className="w-6 h-6 text-teal-600" />;
      case 'seni-tari':
      case 'drama':
        return <Drama className="w-6 h-6 text-teal-600" />;
      case 'pmr':
      case 'heart-pulse':
        return <HeartPulse className="w-6 h-6 text-teal-600" />;
      default:
        return <Award className="w-6 h-6 text-teal-600" />;
    }
  };

  const renderProgramIcon = (iconType: string) => {
    switch (iconType) {
      case 'brush':
        return <Palette className="w-6 h-6" />;
      case 'utensils':
        return <Utensils className="w-6 h-6" />;
      case 'laptop':
        return <Laptop className="w-6 h-6" />;
      case 'hotel':
        return <Hotel className="w-6 h-6" />;
      case 'calculator':
        return <Calculator className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  const currentOrg = ORGANIZATIONS_DATA.find((o) => o.id === activeOrgTab) || ORGANIZATIONS_DATA[0];

  return (
    <AnimatePresence>
      {modal.type !== 'none' && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            key="modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-white rounded-3xl border border-teal-100 shadow-2xl overflow-hidden my-6 sm:my-8 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-teal-50/70 border-b border-teal-100 shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo SMK Metland Cibitung"
              className="w-9 h-9 object-contain shrink-0"
              onError={(e) => {
                // Graceful fallback to initial badge
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800 block">
                SMK Metland Cibitung
              </span>
              <span className="text-[11px] text-slate-500 font-medium">Excellence with Character</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-teal-200 text-slate-500 hover:text-teal-700 hover:bg-teal-50 flex items-center justify-center transition cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* 1. NEWS DETAIL */}
          {modal.type === 'news-detail' && (
            <div>
              {modal.item.image ? (
                <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-teal-100 shadow-sm bg-slate-900">
                  <img
                    src={modal.item.image}
                    alt={modal.item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span
                    className={`absolute top-4 left-4 ${modal.item.categoryBadgeBg} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm`}
                  >
                    {modal.item.category}
                  </span>
                </div>
              ) : (
                <div className="relative h-48 rounded-2xl bg-teal-50/80 border border-teal-100 flex flex-col items-center justify-center mb-6">
                  <span
                    className={`absolute top-4 left-4 ${modal.item.categoryBadgeBg} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm`}
                  >
                    {modal.item.category}
                  </span>
                  <BookOpen className="w-12 h-12 text-teal-600 mb-2" />
                  <span className="text-xs font-medium text-teal-700">Warta SMK Metland Cibitung</span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-teal-600" />
                  {modal.item.date}
                </span>
                <span>•</span>
                <span>{modal.item.author}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  {modal.item.readTime}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-4">
                {modal.item.title}
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                {modal.item.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}

          {/* 2. ALL NEWS ARCHIVE */}
          {modal.type === 'news-all' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block">
                    Indeks Berita & Warta
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900">Kabar Sekolah & Pengumuman</h2>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Semua', 'Prestasi', 'Kegiatan Siswa', 'Akademik'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setNewsCategoryFilter(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                        newsCategoryFilter === cat
                          ? 'bg-teal-600 text-white shadow-sm'
                          : 'bg-teal-50 text-teal-800 hover:bg-teal-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {newsList
                  .filter((n) => newsCategoryFilter === 'Semua' || n.category === newsCategoryFilter)
                  .map((item) => (
                    <article
                      key={item.id}
                      onClick={() => onSelectModal({ type: 'news-detail', item })}
                      className="bg-white rounded-2xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col cursor-pointer group"
                    >
                      <div className="relative h-40 bg-slate-900 overflow-hidden">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          />
                        ) : (
                          <div className={`w-full h-full ${item.cardBgTint} flex items-center justify-center`}>
                            <BookOpen className="w-10 h-10 text-teal-600" />
                          </div>
                        )}
                        <span
                          className={`absolute top-3 left-3 ${item.categoryBadgeBg} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[11px] text-slate-400 block mb-1">{item.date}</span>
                          <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition mb-2 leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-600 line-clamp-2 mb-3">{item.summary}</p>
                        </div>
                        <span className="text-xs font-semibold text-teal-700 group-hover:underline inline-flex items-center gap-1">
                          Baca Selengkapnya
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          )}

          {/* 3. AGENDA DETAIL & ALL AGENDA */}
          {(modal.type === 'agenda-detail' || modal.type === 'agenda-all') && (
            <div>
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block mb-1">
                Kalender Akademik & Agenda Kesiswaan
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Agenda Kegiatan Sekolah</h2>
              <div className="space-y-4">
                {(modal.type === 'agenda-detail' ? [modal.item] : agendaList).map((ag) => (
                  <div
                    key={ag.id}
                    className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 flex flex-col sm:flex-row items-start gap-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-teal-700 text-white flex flex-col items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-lg font-bold leading-none">{ag.day}</span>
                      <span className="text-[10px] uppercase font-semibold mt-0.5">{ag.month}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <h3 className="text-sm sm:text-base font-bold text-slate-900">{ag.title}</h3>
                        <span className="text-xs font-semibold text-teal-700 bg-white px-2.5 py-0.5 rounded-full border border-teal-200">
                          {ag.fullDate}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mb-2">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-teal-600" />
                          {ag.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-teal-600" />
                          {ag.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-2 font-medium">Penyelenggara: {ag.organizer}</p>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-teal-50">
                        {ag.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {modal.type === 'agenda-detail' && (
                <div className="mt-6 pt-4 border-t border-teal-100 flex justify-end">
                  <button
                    onClick={() => onSelectModal({ type: 'agenda-all' })}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 hover:underline cursor-pointer"
                  >
                    Lihat Seluruh Jadwal Agenda Sekolah
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 4. PROGRAM UNGGULAN DETAIL */}
          {modal.type === 'program-detail' && (
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-xl ${modal.item.iconBg} ${modal.item.iconColor} flex items-center justify-center shadow-inner`}>
                  {renderProgramIcon(modal.item.iconType)}
                </div>
                <div>
                  <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block">
                    Program Keahlian Terakreditasi
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">{modal.item.title}</h2>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 mt-3">{modal.item.shortDesc}</p>

              <div className="bg-teal-50/50 rounded-2xl p-5 border border-teal-100 space-y-4 mb-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-2">
                    Keunggulan &amp; Fasilitas Pembelajaran
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {modal.item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-teal-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-1">
                    Fokus Kurikulum Industri
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">{modal.item.curriculumFocus}</p>
                </div>
                <div className="pt-3 border-t border-teal-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-1">
                    Peluang Karir &amp; Prospek Lulusan
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700">{modal.item.careerProspects}</p>
                </div>
                {modal.item.partnerIndustries && modal.item.partnerIndustries.length > 0 && (
                  <div className="pt-3 border-t border-teal-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-1.5">
                      Kemitraan Industri &amp; PKL
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {modal.item.partnerIndustries.map((partner, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[11px] font-semibold bg-white border border-teal-200 text-teal-900 px-2.5 py-1 rounded-full"
                        >
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setProgram(modal.item.title);
                    onSelectModal({ type: 'spmb', initialTab: 'register' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-teal-600 text-white hover:bg-teal-700 transition cursor-pointer shadow-sm"
                >
                  Daftar Program Ini di SPMB Online
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* 5. ACHIEVEMENTS DETAIL & ALL */}
          {(modal.type === 'achievement-detail' || modal.type === 'achievement-all') && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block">
                    Pusat Prestasi &amp; Kejuaraan
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900">Prestasi Membanggakan</h2>
                </div>
                {modal.type === 'achievement-all' && (
                  <div className="flex flex-wrap gap-1.5">
                    {['Semua', 'Siswa', 'Guru', 'Sekolah', 'Ekstrakurikuler'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setAchCategoryFilter(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                          achCategoryFilter === cat
                            ? 'bg-teal-600 text-white shadow-sm'
                            : 'bg-teal-50 text-teal-800 hover:bg-teal-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(modal.type === 'achievement-detail'
                  ? [modal.item]
                  : achievementsList.filter(
                      (a) => achCategoryFilter === 'Semua' || a.category === achCategoryFilter
                    )
                ).map((ach) => (
                  <div
                    key={ach.id}
                    className="rounded-2xl border border-teal-100 bg-white overflow-hidden shadow-sm flex flex-col justify-between"
                  >
                    {ach.image ? (
                      <div className="relative h-44 bg-slate-900 overflow-hidden">
                        <img src={ach.image} alt={ach.title} className="w-full h-full object-cover" />
                        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-[10px] font-bold px-2.5 py-0.5 rounded-full text-teal-800">
                          {ach.category}
                        </span>
                        <span className="absolute bottom-3 right-3 bg-teal-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full tabular-nums">
                          {ach.year}
                        </span>
                      </div>
                    ) : (
                      <div className="h-28 bg-teal-50/60 p-4 flex items-center justify-between border-b border-teal-50">
                        <div className="flex items-center gap-2">
                          <Trophy className="w-7 h-7 text-teal-600" />
                          <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">{ach.level}</span>
                        </div>
                        <span className="bg-teal-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                          {ach.year}
                        </span>
                      </div>
                    )}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-teal-700 tracking-wider block mb-1">
                          {ach.level}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">{ach.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">{ach.description}</p>
                      </div>
                      <div className="pt-3 border-t border-teal-50 text-xs font-semibold text-teal-800 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-teal-600 shrink-0" />
                        <span className="truncate">Peraih: {ach.winner}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. EXTRACURRICULAR DETAIL */}
          {modal.type === 'extracurricular-detail' && (
            <div>
              {modal.item.image && (
                <div className="relative h-56 rounded-2xl overflow-hidden mb-5 border border-teal-100 shadow-sm bg-slate-900">
                  <img src={modal.item.image} alt={modal.item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {modal.item.category}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  {renderExtracurricularIcon(modal.item.iconType)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    Ekstrakurikuler • {modal.item.category}
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900">{modal.item.name}</h2>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">{modal.item.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-teal-50/50 p-4 rounded-2xl border border-teal-100 text-xs mb-5">
                <div>
                  <span className="text-slate-400 block mb-0.5">Jadwal Latihan</span>
                  <strong className="text-slate-800">{modal.item.schedule}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Lokasi Kegiatan</span>
                  <strong className="text-slate-800">{modal.item.location}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Pembina / Pelatih</span>
                  <strong className="text-slate-800">{modal.item.coach}</strong>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-2">
                  Catatan Prestasi &amp; Kegiatan
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {modal.item.achievements.map((ac, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{ac}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 7. PHOTO GALLERY LIGHTBOX & ALL */}
          {(modal.type === 'photo-detail' || modal.type === 'photo-all') && (
            <div>
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block mb-1">
                Dokumentasi Kegiatan &amp; Fasilitas
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-5">Galeri Foto SMK Metland Cibitung</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {(modal.type === 'photo-detail' ? [modal.item] : photosList).map((ph) => (
                  <div
                    key={ph.id}
                    className="rounded-2xl border border-teal-100 overflow-hidden bg-white shadow-sm flex flex-col group"
                  >
                    <div className="relative h-60 bg-slate-950 overflow-hidden">
                      <img
                        src={ph.image}
                        alt={ph.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur px-2.5 py-0.5 rounded-full text-teal-900 shadow">
                          {ph.badge}
                        </span>
                      </div>
                      <span className="absolute bottom-3 right-3 text-[10px] font-mono bg-slate-950/70 text-white px-2 py-0.5 rounded">
                        {ph.date}
                      </span>
                    </div>
                    <div className="p-4">
                      <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider block mb-1">
                        {ph.category}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5">{ph.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{ph.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. ORGANIZATION: MAHESWARA-MAHESWARI & OSIS DETAIL */}
          {modal.type === 'organization-detail' && (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-teal-100">
                <div>
                  <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block">
                    Student Organization Showcase
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Maheswara-Maheswari &amp; OSIS
                  </h2>
                </div>
                {/* Org Switcher Tabs */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: 'maheswara', label: 'Maheswara-Maheswari' },
                    { id: 'osis', label: 'OSIS' },
                    { id: 'collaboration', label: 'Sinergi & Testimoni' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveOrgTab(tab.id as 'maheswara' | 'osis' | 'collaboration')}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition cursor-pointer ${
                        activeOrgTab === tab.id
                          ? 'bg-teal-600 text-white shadow-sm'
                          : 'bg-teal-50 text-teal-800 hover:bg-teal-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Tab Hero Visual */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 border border-teal-100 bg-slate-950 shadow-md">
                <img
                  src={currentOrg.image}
                  alt={currentOrg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block bg-teal-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
                    {currentOrg.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">{currentOrg.title}</h3>
                  <p className="text-xs sm:text-sm text-teal-100 mt-0.5">{currentOrg.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>{currentOrg.description}</p>
              </div>

              {/* Vision & Mission */}
              <div className="bg-teal-50/50 rounded-2xl p-5 border border-teal-100 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    Visi Organisasi
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 italic">"{currentOrg.vision}"</p>
                </div>
                <div className="pt-3 border-t border-teal-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-2 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-teal-600" />
                    Misi Utama
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {currentOrg.mission.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-teal-600" />
                  Program Kerja &amp; Inisiatif Unggulan
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentOrg.programs.map((prog, pIdx) => (
                    <div key={pIdx} className="bg-white rounded-xl p-4 border border-teal-100 shadow-sm">
                      <h5 className="font-bold text-xs text-slate-900 mb-1">{prog.title}</h5>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{prog.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Authentic Guest Quotes if available */}
              {currentOrg.guestQuotes && currentOrg.guestQuotes.length > 0 && (
                <div className="pt-4 border-t border-teal-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3 flex items-center gap-1.5">
                    <Quote className="w-4 h-4 text-teal-600" />
                    Apresiasi &amp; Testimoni Tamu Maheswara-Maheswari
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentOrg.guestQuotes.map((q, qIdx) => (
                      <div key={qIdx} className="bg-teal-50/40 rounded-xl p-3.5 border border-teal-100 flex flex-col justify-between">
                        <p className="text-xs text-slate-700 italic mb-2">"{q.quote}"</p>
                        <div className="border-t border-teal-100/60 pt-2">
                          <strong className="block text-xs text-slate-900">{q.author}</strong>
                          <span className="text-[10px] text-teal-700">{q.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 9. GURU & STAFF DIRECTORY */}
          {modal.type === 'guru-staff' && (
            <div>
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block mb-1">
                Civitas Akademika
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Direktori Guru &amp; Tenaga Pendidik</h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Didukung oleh puluhan tenaga pendidik profesional, praktisi industri, dan asesor bersertifikat BNSP yang berdedikasi membimbing siswa SMK Metland Cibitung.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teachersList.map((t) => (
                  <div
                    key={t.id}
                    className="p-4 rounded-2xl border border-teal-100 bg-teal-50/30 flex items-start gap-3.5"
                  >
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-teal-200 shadow-sm"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-teal-700 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                        {t.name
                          .split(' ')
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join('')}
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{t.name}</h3>
                      <p className="text-xs font-semibold text-teal-700">{t.role}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {t.department} • {t.education}
                      </p>
                      <p className="text-[11px] text-slate-600 italic mt-2">"{t.quote}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 10. SPMB SUITE MODAL (Registration, Status Check, Tuition, Scholarship) */}
          {modal.type === 'spmb' && (
            <div>
              <div className="flex flex-wrap gap-2 pb-4 mb-6 border-b border-teal-100">
                {[
                  { id: 'register', label: 'Formulir Pendaftaran' },
                  { id: 'status', label: 'Cek Status Pendaftaran' },
                  { id: 'tuition', label: 'Biaya Pendidikan' },
                  { id: 'scholarship', label: 'Beasiswa Prestasi' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setSpmbTab(tab.id as 'register' | 'status' | 'tuition' | 'scholarship');
                      setSubmittedApp(null);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                      spmbTab === tab.id
                        ? 'bg-teal-600 text-white shadow-sm'
                        : 'bg-teal-50 text-teal-800 hover:bg-teal-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {spmbTab === 'register' && (
                <div>
                  {submittedApp ? (
                    <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto shadow-md">
                        <Check className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        Pendaftaran SPMB Berhasil Diterima!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                        Simpan Nomor Registrasi di bawah ini untuk mengecek status seleksi pada menu{' '}
                        <strong>Cek Status Pendaftaran</strong>.
                      </p>
                      <div className="bg-white rounded-xl p-4 border border-teal-200 max-w-md mx-auto text-left text-xs space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Nomor Registrasi:</span>
                          <strong className="font-mono text-teal-700 text-sm">{submittedApp.regNumber}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Nama Calon Siswa:</span>
                          <strong className="text-slate-900">{submittedApp.fullName}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">NISN:</span>
                          <strong className="font-mono text-slate-900">{submittedApp.nisn}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Program Pilihan:</span>
                          <strong className="text-teal-700">{submittedApp.program}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Status Awal:</span>
                          <strong className="text-teal-700">{submittedApp.status}</strong>
                        </div>
                      </div>
                      <div className="flex justify-center gap-3 pt-2">
                        <button
                          onClick={() => {
                            setStatusQuery(submittedApp.regNumber);
                            setSpmbTab('status');
                          }}
                          className="px-5 py-2.5 rounded-full text-xs font-bold bg-teal-600 text-white hover:bg-teal-700 transition cursor-pointer"
                        >
                          Cek Status Sekarang
                        </button>
                        <button
                          onClick={() => setSubmittedApp(null)}
                          className="px-4 py-2.5 rounded-full text-xs font-semibold border border-teal-200 text-teal-800 hover:bg-white transition cursor-pointer"
                        >
                          Daftarkan Siswa Lain
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSpmbSubmit} className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          Formulir Penerimaan Murid Baru (SPMB) Tahun Ajaran 2026/2027
                        </h3>
                        <p className="text-xs text-slate-500">
                          Isi data calon peserta didik dengan benar untuk mendapatkan Nomor Registrasi ujian seleksi.
                        </p>
                      </div>
                      {formError && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                          {formError}
                        </div>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Nama Lengkap Calon Siswa *
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Contoh: Muhammad Farhan"
                            className="w-full rounded-xl border border-teal-200 px-3.5 py-2 text-xs focus:border-teal-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            NISN (10 Digit) *
                          </label>
                          <input
                            type="text"
                            value={nisn}
                            onChange={(e) => setNisn(e.target.value)}
                            placeholder="Contoh: 0098123456"
                            className="w-full rounded-xl border border-teal-200 px-3.5 py-2 text-xs focus:border-teal-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Sekolah Asal (SMP/MTs) *
                          </label>
                          <input
                            type="text"
                            value={originSchool}
                            onChange={(e) => setOriginSchool(e.target.value)}
                            placeholder="Contoh: SMP Negeri 1 Cibitung"
                            className="w-full rounded-xl border border-teal-200 px-3.5 py-2 text-xs focus:border-teal-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Pilihan Program Keahlian *
                          </label>
                          <select
                            value={program}
                            onChange={(e) => setProgram(e.target.value)}
                            className="w-full rounded-xl border border-teal-200 px-3.5 py-2 text-xs focus:border-teal-600 focus:outline-none bg-white cursor-pointer"
                          >
                            <option value="Desain Komunikasi Visual (DKV)">Desain Komunikasi Visual (DKV)</option>
                            <option value="Kuliner (Tata Boga)">Kuliner (Tata Boga / Culinary Arts)</option>
                            <option value="Pengembangan Perangkat Lunak & Gim (PPLG)">Pengembangan Perangkat Lunak &amp; Gim (PPLG)</option>
                            <option value="Perhotelan (Hospitality Services)">Perhotelan (Hospitality Services)</option>
                            <option value="Akuntansi & Keuangan Lembaga (AKL)">Akuntansi &amp; Keuangan Lembaga (AKL)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Nama Orang Tua / Wali *
                          </label>
                          <input
                            type="text"
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            placeholder="Nama Ayah / Ibu / Wali"
                            className="w-full rounded-xl border border-teal-200 px-3.5 py-2 text-xs focus:border-teal-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Nomor WhatsApp Aktif *
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Contoh: 081234567890"
                            className="w-full rounded-xl border border-teal-200 px-3.5 py-2 text-xs focus:border-teal-600 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Email (Opsional)
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="nama@email.com"
                            className="w-full rounded-xl border border-teal-200 px-3.5 py-2 text-xs focus:border-teal-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Domisili / Alamat Singkat
                          </label>
                          <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Kecamatan / Kota"
                            className="w-full rounded-xl border border-teal-200 px-3.5 py-2 text-xs focus:border-teal-600 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="pt-2 flex items-center justify-end gap-3">
                        <button
                          type="button"
                          onClick={onClose}
                          className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                        >
                          Batal
                        </button>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold bg-teal-600 text-white hover:bg-teal-700 shadow-md transition cursor-pointer"
                        >
                          Kirim Pendaftaran SPMB
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}

              {spmbTab === 'status' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Cek Status Pendaftaran SPMB 2026</h3>
                    <p className="text-xs text-slate-500">
                      Masukkan Nomor Registrasi (misal: <code className="text-teal-700 font-bold">SPMB-2026-1042</code>), NISN, atau Nama Siswa.
                    </p>
                  </div>
                  <input
                    type="text"
                    value={statusQuery}
                    onChange={(e) => setStatusQuery(e.target.value)}
                    placeholder="Cari Nomor Registrasi, NISN, atau Nama..."
                    className="w-full rounded-xl border border-teal-200 px-4 py-2.5 text-xs focus:border-teal-600 focus:outline-none"
                  />
                  <div className="space-y-3">
                    {filteredStatusApps.length === 0 ? (
                      <div className="p-6 text-center text-xs text-slate-500 bg-teal-50/30 rounded-2xl border border-teal-100">
                        Data pendaftaran tidak ditemukan. Pastikan nomor registrasi atau NISN sudah sesuai.
                      </div>
                    ) : (
                      filteredStatusApps.map((app) => (
                        <div
                          key={app.regNumber}
                          className="p-4 rounded-2xl border border-teal-100 bg-teal-50/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                          <div>
                            <div className="flex items-center gap-2 text-xs">
                              <strong className="font-mono text-teal-800">{app.regNumber}</strong>
                              <span>•</span>
                              <span className="text-slate-500">NISN: {app.nisn}</span>
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 mt-0.5">{app.fullName}</h4>
                            <p className="text-xs text-slate-600">
                              Asal: {app.originSchool} • Pilihan: <strong>{app.program}</strong>
                            </p>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className="inline-block text-xs font-bold text-teal-700 bg-white px-3 py-1 rounded-full border border-teal-200">
                              {app.status}
                            </span>
                            <span className="block text-[11px] text-slate-400 mt-1">
                              Terdaftar: {app.createdAt}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {spmbTab === 'tuition' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">Informasi Biaya Pendidikan T.A. 2026/2027</h3>
                  <p className="text-xs text-slate-600">
                    SMK Metland Cibitung menyediakan skema pembiayaan transparan dengan fasilitas laboratorium industri terpadu di bawah naungan Yayasan Pendidikan Metland.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-2xl border border-teal-100 bg-teal-50/40">
                      <span className="text-teal-700 font-bold uppercase block mb-1">Gelombang 1 (Early Bird)</span>
                      <div className="text-xl font-extrabold text-slate-900 tabular-nums mb-1">Diskon 25% DSP</div>
                      <p className="text-slate-600">Berlaku untuk pendaftaran periode awal mencakup seragam lengkap &amp; akses modul digital.</p>
                    </div>
                    <div className="p-4 rounded-2xl border border-teal-100 bg-teal-50/40">
                      <span className="text-teal-700 font-bold uppercase block mb-1">SPP Bulanan Terjangkau</span>
                      <div className="text-xl font-extrabold text-slate-900 tabular-nums mb-1">Termasuk Praktik</div>
                      <p className="text-slate-600">Sudah mencakup seluruh praktikum laboratorium komputer, studio DKV, dapur komersial, &amp; ekstrakurikuler.</p>
                    </div>
                    <div className="p-4 rounded-2xl border border-teal-100 bg-teal-50/40">
                      <span className="text-teal-700 font-bold uppercase block mb-1">Cicilan Fleksibel</span>
                      <div className="text-xl font-extrabold text-slate-900 tabular-nums mb-1">Hingga 6x Tahap</div>
                      <p className="text-slate-600">Kemudahan angsuran biaya pembangunan sekolah selama semester pertama bagi wali murid.</p>
                    </div>
                  </div>
                </div>
              )}

              {spmbTab === 'scholarship' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900">Program Beasiswa Prestasi &amp; Kemitraan</h3>
                  <div className="space-y-3 text-xs">
                    <div className="p-4 rounded-2xl border border-teal-100 bg-white">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">1. Beasiswa Prestasi Akademik &amp; Kejuaraan Lomba</h4>
                      <p className="text-slate-600">
                        Potongan DSP hingga 100% bagi peraih juara kompetisi akademik/sains, seni, maupun olahraga tingkat Kabupaten, Provinsi, atau Nasional.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl border border-teal-100 bg-white">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">2. Beasiswa Tahfidz &amp; Karakter Mulia</h4>
                      <p className="text-slate-600">
                        Bebas SPP hingga 12 bulan bagi calon peserta didik yang memiliki sertifikat hafalan Al-Qur'an minimal 3 Juz mutqin.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl border border-teal-100 bg-white">
                      <h4 className="font-bold text-slate-900 text-sm mb-1">3. Beasiswa Kemitraan Metland Group</h4>
                      <p className="text-slate-600">
                        Dukungan beasiswa pendidikan penuh dan prioritas ikatan dinas bagi putra-putri berprestasi dari keluarga mitra industri Metland.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 11. PRIVACY & TERMS */}
          {modal.type === 'legal' && (
            <div className="space-y-4">
              <h2 className="text-xl font-extrabold text-slate-900">
                {modal.section === 'privacy' ? 'Kebijakan Privasi' : 'Syarat & Ketentuan Layanan Portal'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {modal.section === 'privacy'
                  ? 'SMK Metland Cibitung berkomitmen melindungi privasi data pribadi calon siswa, orang tua/wali murid, dan pengunjung portal resmi sekolah. Seluruh data yang diisikan pada formulir SPMB Online hanya digunakan secara sah untuk verifikasi administrasi akademik serta komunikasi kepanitiaan penerimaan siswa baru.'
                  : 'Seluruh konten informasi kurikulum, agenda kegiatan, pengumuman, dan materi publikasi pada portal resmi SMK Metland Cibitung dilindungi hak cipta sekolah di bawah Yayasan Pendidikan Metland. Dilarang menggandakan atau menyebarluaskan materi tanpa persetujuan tertulis resmi.'}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
  );
};
