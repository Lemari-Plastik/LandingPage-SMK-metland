/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HERO_SLIDES,
  NEWS_ITEMS,
  AGENDA_ITEMS,
  FEATURED_PROGRAMS,
  ACHIEVEMENT_ITEMS,
  ORGANIZATIONS_DATA,
  EXTRACURRICULAR_ITEMS,
  GALLERY_PHOTOS,
  INITIAL_SPMB_APPLICATIONS,
  SpmbApplication,
} from './data/schoolData';
import { PortalModals, ActiveModal } from './components/PortalModals';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Menu,
  X,
  Star,
  MapPin,
  Phone,
  Mail,
  Users,
  GraduationCap,
  Building,
  Trophy,
  Award,
  Sparkles,
  Palette,
  Utensils,
  Laptop,
  Hotel,
  Calculator,
  Activity,
  Music,
  Drama,
  Calendar,
  Clock,
  Quote,
  ShieldCheck,
  Check,
  BookOpen,
  Dribbble,
  HeartPulse,
} from 'lucide-react';

const SPMB_STORAGE_KEY = 'smk_metland_cibitung_spmb_2026';

export default function App() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activeNav, setActiveNav] = useState<string>('#beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [modal, setModal] = useState<ActiveModal>({ type: 'none' });
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const [spmbApplications, setSpmbApplications] = useState<SpmbApplication[]>(() => {
    try {
      const saved = localStorage.getItem(SPMB_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback to initial seeded applications
    }
    return INITIAL_SPMB_APPLICATIONS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(SPMB_STORAGE_KEY, JSON.stringify(spmbApplications));
    } catch {
      // Ignore storage quota errors
    }
  }, [spmbApplications]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModal({ type: 'none' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track scroll position for Floating Scroll-To-Top button and active nav
  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto-slide hero every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleAddSpmbApplication = (newApp: SpmbApplication) => {
    setSpmbApplications((prev) => [newApp, ...prev]);
  };

  const currentHero = HERO_SLIDES[activeSlide];

  const scrollToSection = (href: string) => {
    setActiveNav(href);
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderProgramIcon = (iconType: string) => {
    switch (iconType) {
      case 'brush':
        return <Palette className="w-7 h-7" />;
      case 'utensils':
        return <Utensils className="w-7 h-7" />;
      case 'laptop':
        return <Laptop className="w-7 h-7" />;
      case 'hotel':
        return <Hotel className="w-7 h-7" />;
      case 'calculator':
        return <Calculator className="w-7 h-7" />;
      default:
        return <Sparkles className="w-7 h-7" />;
    }
  };

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

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-teal-600 selection:text-white font-sans">
      {/* BEGIN: TopHeaderNavigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-teal-100/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-20">
            {/* Brand Logo Area */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 group shrink-0 cursor-pointer"
              data-purpose="school-branding"
              href="#beranda"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#beranda');
              }}
            >
              <img
                src="/logo.png"
                alt="Logo SMK Metland Cibitung"
                className="w-11 h-11 object-contain shrink-0 group-hover:scale-105 transition duration-300"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="leading-tight">
                <span className="block font-bold text-base sm:text-lg text-slate-900 tracking-tight group-hover:text-teal-700 transition whitespace-nowrap">
                  SMK Metland Cibitung
                </span>
                <span className="block text-[11px] font-semibold text-teal-600 uppercase tracking-wider whitespace-nowrap">
                  Excellence with Character
                </span>
              </div>
            </motion.a>

            {/* Main Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-700"
              data-purpose="main-navigation"
            >
              {[
                { label: 'Beranda', href: '#beranda', isModal: false },
                { label: 'Profil', href: '#profil', isModal: false },
                { label: 'Program', href: '#program', isModal: false },
                { label: 'Prestasi', href: '#prestasi', isModal: false },
                { label: 'Organisasi', href: '#organisasi', isModal: false },
                { label: 'Informasi', href: '#informasi', isModal: false },
                { label: 'Galeri', href: '#galeri', isModal: false },
                { label: 'Kontak', href: '#kontak', isModal: false },
              ].map((nav) => {
                const isActive = activeNav === nav.href;
                return (
                  <a
                    key={nav.href}
                    href={nav.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(nav.href);
                    }}
                    className={`whitespace-nowrap shrink-0 pb-1 transition cursor-pointer relative ${
                      isActive
                        ? 'text-teal-700 font-semibold'
                        : 'hover:text-teal-700'
                    }`}
                  >
                    {nav.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setModal({ type: 'spmb', initialTab: 'register' })}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold bg-teal-600 text-white hover:bg-teal-700 shadow-sm transition cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                SPMB Online
              </motion.button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setModal({ type: 'spmb', initialTab: 'register' })}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-teal-600 text-white hover:bg-teal-700 sm:hidden transition"
              >
                SPMB
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-teal-200 text-slate-700 hover:text-teal-700 hover:bg-teal-50 transition cursor-pointer"
                aria-label="Menu navigasi"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden py-4 border-t border-teal-100 space-y-1 overflow-hidden"
              >
                {[
                  { label: 'Beranda', href: '#beranda' },
                  { label: 'Profil Sekolah', href: '#profil' },
                  { label: 'Program Keahlian', href: '#program' },
                  { label: 'Prestasi Membanggakan', href: '#prestasi' },
                  { label: 'Organisasi (Maheswara & OSIS)', href: '#organisasi' },
                  { label: 'Berita & Informasi', href: '#informasi' },
                  { label: 'Galeri Foto Kegiatan', href: '#galeri' },
                  { label: 'Kontak & Lokasi', href: '#kontak' },
                ].map((nav) => (
                  <a
                    key={nav.href}
                    href={nav.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      scrollToSection(nav.href);
                    }}
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition"
                  >
                    {nav.label}
                  </a>
                ))}
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setModal({ type: 'spmb', initialTab: 'register' });
                    }}
                    className="w-full py-3 rounded-full text-xs font-bold bg-teal-600 text-white hover:bg-teal-700 shadow-sm transition flex items-center justify-center gap-2"
                  >
                    <GraduationCap className="w-4 h-4" />
                    Daftar SPMB Online 2026/2027
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
      {/* END: TopHeaderNavigation */}

      <main>
        {/* BEGIN: HeroSection */}
        <section
          className="relative min-h-[640px] lg:h-[720px] flex items-center justify-center bg-slate-950 overflow-hidden"
          data-purpose="hero-banner"
          id="beranda"
        >
          {/* Animated Background Hero Image with atmospheric gradient overlay */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSlide}
                src="/background-hero-section.webp"
                alt="Gedung Kampus SMK Metland Cibitung"
                initial={{ scale: 1.08, opacity: 0.2 }}
                animate={{ scale: 1, opacity: 0.35 }}
                exit={{ opacity: 0.15 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="w-full h-full object-cover filter brightness-90"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-teal-950/70" />
          </div>

          {/* Hero Content with Smooth Entrance */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white py-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Tagline Pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/20 backdrop-blur border border-teal-400/30 text-teal-200 text-xs font-semibold mb-6"
                >
                  <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                  <span>{currentHero.tagline}</span>
                </motion.div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-balance">
                  {currentHero.titlePrefix}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-300 to-teal-100">
                    {currentHero.titleHighlight}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-lg lg:text-xl text-teal-50/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
                  {currentHero.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-slate-950 font-bold text-xs sm:text-sm bg-teal-400 hover:bg-teal-300 shadow-lg shadow-teal-500/25 transition duration-200 whitespace-nowrap cursor-pointer"
                    href={currentHero.ctaHref}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(currentHero.ctaHref);
                    }}
                  >
                    <span>{currentHero.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => setModal({ type: 'spmb', initialTab: 'register' })}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 transition whitespace-nowrap cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4 text-teal-300" />
                    <span>Daftar SPMB Online</span>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div aria-label="Indikator Slide" className="flex items-center justify-center gap-2.5 mt-14">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx
                      ? 'w-9 bg-teal-400'
                      : 'w-2.5 bg-white/40 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
        {/* END: HeroSection */}

        {/* BEGIN: PrincipalWelcome */}
        <section
          className="py-20 bg-teal-50/40 border-b border-teal-100 overflow-hidden"
          data-purpose="principal-welcome"
          id="profil"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-teal-100 flex flex-col md:flex-row items-center gap-8 lg:gap-14">
              {/* Principal Portrait */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full md:w-5/12 max-w-sm flex-shrink-0 relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] bg-slate-900 border-2 border-teal-200 group">
                  <img
                    src="/head-teacher.jpg"
                    alt="Dr. Darmawan Sunarja, Drs, MM,Par. - Kepala Sekolah SMK Metland Cibitung"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                    <span className="inline-block bg-teal-500 text-slate-950 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full mb-1 shadow">
                      Kepala Sekolah
                    </span>
                    <h3 className="font-extrabold text-base sm:text-lg">Dr. Darmawan Sunarja, Drs, MM,Par</h3>
                    <p className="text-[11px] text-teal-200">SMK Metland Cibitung</p>
                  </div>
                </div>
              </motion.div>

              {/* Principal Welcome Text */}
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full md:w-7/12"
              >
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-teal-700 uppercase mb-3">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Sambutan Kepala Sekolah</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-5 text-balance">
                  "Pendidikan Vokasi Berkarakter, Membuka Peluang Masa Depan Global"
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  Selamat datang di portal resmi SMK Metland Cibitung. Berada di bawah naungan <strong>Yayasan Pendidikan Metland</strong> (PT Metropolitan Land, Tbk), kami berkomitmen menyelenggarakan pendidikan vokasi terpadu yang memadukan keahlian industri terdepan, penguatan literasi digital, serta pembentukan akhlak mulia bagi setiap siswa.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Melalui 3 program keahlian unggulan (DKV, Kuliner, PPLG, Perhotelan, dan AKL), kami mengimplementasikan model pembelajaran <em>Teaching Factory</em> dan kemitraan link-and-match industri nyata. Setiap peserta didik ditempa menjadi insan yang adaptif, mandiri, dan berdaya saing global.
                </p>
                <div className="border-t border-teal-100 pt-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base sm:text-lg">Dr. Darmawan Sunarja, Drs, MM,Par</h3>
                    <p className="text-xs sm:text-sm text-teal-700 font-semibold">
                      Kepala Sekolah SMK Metland Cibitung
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 px-4 py-2 rounded-full border border-teal-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Pendidik &amp; Asesor Bersertifikasi
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* END: PrincipalWelcome */}

        {/* BEGIN: FeaturedPrograms */}
        <section className="py-20 bg-white" data-purpose="featured-programs" id="program">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block mb-1">
                Pilihan Keahlian Vokasi
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                3 Program Keahlian Unggulan
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Kurikulum terintegrasi dengan kebutuhan industri modern, dilengkapi fasilitas laboratorium praktik standar internasional.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_PROGRAMS.map((prog, index) => (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setModal({ type: 'program-detail', item: prog })}
                  className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm hover:shadow-xl hover:border-teal-400 transition duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div
                      className={`w-14 h-14 rounded-2xl ${prog.iconBg} ${prog.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300 shadow-inner`}
                    >
                      {renderProgramIcon(prog.iconType)}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition mb-2">
                      {prog.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {prog.shortDesc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-teal-50 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                    <span>Pelajari Kurikulum &amp; Prospek</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition duration-200" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* END: FeaturedPrograms */}

        {/* BEGIN: KeyMetricsStatsBar */}
        <section
          className="py-14 bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-900 text-white shadow-inner"
          data-purpose="metrics-counter"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-teal-600/50">
              {/* Stat 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="pt-4 md:pt-0"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-900/50 mb-2 text-teal-200">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums">1,250+</div>
                <div className="text-xs uppercase tracking-wider text-teal-100 mt-1 font-semibold">
                  Total Siswa Aktif
                </div>
              </motion.div>
              {/* Stat 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="pt-4 md:pt-0"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-900/50 mb-2 text-teal-200">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums">85+</div>
                <div className="text-xs uppercase tracking-wider text-teal-100 mt-1 font-semibold">
                  Pendidik &amp; Asesor Bersertifikat
                </div>
              </motion.div>
              {/* Stat 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="pt-4 md:pt-0"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-900/50 mb-2 text-teal-200">
                  <Building className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums">3 Jurusan</div>
                <div className="text-xs uppercase tracking-wider text-teal-100 mt-1 font-semibold">
                  Program Vokasi Industri
                </div>
              </motion.div>
              {/* Stat 4 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="pt-4 md:pt-0"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-900/50 mb-2 text-teal-200">
                  <Trophy className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums">40+</div>
                <div className="text-xs uppercase tracking-wider text-teal-100 mt-1 font-semibold">
                  Mitra Industri &amp; PKL
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* END: KeyMetricsStatsBar */}

        {/* BEGIN: SchoolAchievements */}
        <section className="py-20 bg-white" data-purpose="school-achievements" id="prestasi">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 pb-4 border-b border-teal-100"
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block mb-1">
                  Achievement &amp; Awards
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Prestasi &amp; Kegiatan Membanggakan
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Bukti nyata komitmen kami dalam membimbing talenta unggul di bidang kejuaraan olahraga, kompetisi sains, serta perhelatan akbar sekolah.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setModal({ type: 'achievement-all' })}
                className="mt-4 sm:mt-0 text-xs font-bold text-teal-700 hover:text-teal-800 hover:underline cursor-pointer inline-flex items-center gap-1"
              >
                Lihat Semua Prestasi
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ACHIEVEMENT_ITEMS.slice(0, 4).map((ach, index) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setModal({ type: 'achievement-detail', item: ach })}
                  className="bg-white rounded-2xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col cursor-pointer group"
                >
                  <div className="h-44 bg-slate-950 relative overflow-hidden">
                    {ach.image ? (
                      <img
                        src={ach.image}
                        alt={ach.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-teal-50 flex items-center justify-center">
                        <Trophy className="w-12 h-12 text-teal-600" />
                      </div>
                    )}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-0.5 rounded-full text-teal-800 shadow">
                      {ach.category}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-teal-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full tabular-nums shadow">
                      {ach.year}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-teal-700 tracking-wider block mb-1">
                        {ach.level}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition leading-snug">
                        {ach.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mt-4 flex items-center gap-1.5 pt-3 border-t border-teal-50">
                      {ach.category === 'School Event' ? (
                        <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
                      ) : (
                        <Award className="w-4 h-4 text-teal-600 shrink-0" />
                      )}
                      <span className="truncate">{ach.winner}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* END: SchoolAchievements */}

        {/* BEGIN: OrganizationMaheswaraOsisSection (Positioned directly below Prestasi Membanggakan) */}
        <section
          className="py-20 bg-gradient-to-b from-teal-50/50 via-teal-50/20 to-white border-t border-b border-teal-100 overflow-hidden"
          data-purpose="organization-maheswara-osis"
          id="organisasi"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                Kepemimpinan &amp; Karakter Pelajar
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Organization: Maheswara-Maheswari &amp; OSIS
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Sinergi dua pilar utama kesiswaan dalam mencetak profil pelajar yang berintegritas tinggi, cakap berkomunikasi, inovatif, dan menjadi representasi terbaik SMK Metland Cibitung.
              </p>
            </motion.div>

            {/* Dual Featured Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Card 1: Maheswara & Maheswari */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                onClick={() => setModal({ type: 'organization-detail', orgKey: 'maheswara' })}
                className="bg-white rounded-3xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-300 transition duration-300 flex flex-col group cursor-pointer"
              >
                <div className="relative h-64 sm:h-72 bg-slate-950 overflow-hidden">
                  <img
                    src="/maheswara-maheswari.jpeg"
                    alt="Duta Sekolah Maheswara-Maheswari SMK Metland Cibitung"
                    className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      School Ambassador
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      Maheswara &amp; Maheswari
                    </h3>
                    <p className="text-xs sm:text-sm text-teal-200 mt-0.5">
                      Duta Sekolah Putra (Maheswara) &amp; Putri (Maheswari)
                    </p>
                  </div>
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-block text-[11px] font-bold text-teal-700 uppercase tracking-widest mb-2">
                      Inspiring Excellence, Embodying Character
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      Wadah pemilihan dan pembinaan duta sekolah terbaik yang bertindak sebagai representasi resmi institusi, pemandu acara protokoler kenegaraan/sekolah, serta promotor keunggulan vokasi SMK Metland Cibitung ke dunia luar.
                    </p>
                    <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700 mb-6 bg-teal-50/50 p-4 rounded-2xl border border-teal-100">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>Public Speaking &amp; MC</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>Duta Citra &amp; Promosi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>Workshop Creativision</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>Aksi Sosial &amp; Edukasi</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-teal-50">
                    <span className="text-xs font-bold text-teal-700 group-hover:text-teal-900 inline-flex items-center gap-1.5">
                      Lihat Profil &amp; Program Maheswara
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition duration-200" />
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">Angkatan 2027</span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: OSIS SMK Metland Cibitung */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                onClick={() => setModal({ type: 'organization-detail', orgKey: 'osis' })}
                className="bg-white rounded-3xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-300 transition duration-300 flex flex-col group cursor-pointer"
              >
                <div className="relative h-64 sm:h-72 bg-slate-950 overflow-hidden">
                  <img
                    src="/osis.jpeg"
                    alt="Pengurus OSIS SMK Metland Cibitung"
                    className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-teal-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      Student Council
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                      OSIS SMK Metland Cibitung
                    </h3>
                    <p className="text-xs sm:text-sm text-teal-200 mt-0.5">
                      Organisasi Siswa Intra Sekolah • Motor Penggerak Kesiswaan
                    </p>
                  </div>
                </div>
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-block text-[11px] font-bold text-teal-700 uppercase tracking-widest mb-2">
                      Sinergi, Aksi, dan Kolaborasi Nyata
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      Lembaga tertinggi kesiswaan yang menampung aspirasi seluruh peserta didik, mengoordinasikan kegiatan minat-bakat, menyelenggarakan kompetisi antarkelas (Classmeeting), dan membentuk karakter kepemimpinan melalui LDKS.
                    </p>
                    <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700 mb-6 bg-teal-50/50 p-4 rounded-2xl border border-teal-100">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>Manajemen Event Sekolah</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>Kaderisasi Kepemimpinan (LDKS)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>Koordinasi 5 Ekstrakurikuler</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>Peringatan Hari Besar Nasional</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-teal-50">
                    <span className="text-xs font-bold text-teal-700 group-hover:text-teal-900 inline-flex items-center gap-1.5">
                      Lihat Struktur &amp; Program OSIS
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition duration-200" />
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">Periode Aktif</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Event & Guest Testimonials Spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-teal-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-teal-500/10 pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 uppercase tracking-widest mb-2">
                    <Quote className="w-4 h-4 text-teal-300" />
                    Apresiasi Tamu Maheswara Maheswari 2027
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                    "Terima Kasih Telah Menjadi Wadah Siswa-Siswi untuk Berkarya"
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-100 leading-relaxed">
                    Pagelaran Maheswara-Maheswari menuai respon hangat dari para tamu kehormatan, orang tua, dan perwakilan sekolah mitra sebagai ajang yang mempererat silaturahmi serta menginspirasi generasi muda.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => setModal({ type: 'organization-detail', orgKey: 'collaboration' })}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold bg-teal-400 text-slate-950 hover:bg-teal-300 transition cursor-pointer shadow-md"
                  >
                    <span>Baca Semua Testimoni Tamu</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => setModal({ type: 'photo-all' })}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 text-white transition cursor-pointer"
                  >
                    <span>Dokumentasi Foto Event</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* END: OrganizationMaheswaraOsisSection */}

        {/* BEGIN: ExtracurricularActivities */}
        <section className="py-20 bg-white" data-purpose="extracurriculars">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block mb-1">
                Eksplorasi Minat &amp; Bakat
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Ekstrakurikuler Pilihan
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                5 cabang ekstrakurikuler unggulan untuk mengembangkan ketangkasan fisik, bakat seni vokal &amp; tari, serta kepedulian sosial kemanusiaan.
              </p>
            </motion.div>
            {/* Horizontal Activity Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {EXTRACURRICULAR_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -7, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setModal({ type: 'extracurricular-detail', item })}
                  className="bg-white rounded-2xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-400 transition duration-300 cursor-pointer group flex flex-col"
                >
                  <div className="relative h-40 bg-teal-950 overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-teal-800 to-teal-950 flex flex-col items-center justify-center text-teal-200">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                          {renderExtracurricularIcon(item.iconType)}
                        </div>
                        <span className="text-[11px] font-semibold mt-2 text-teal-300">Kemanusiaan</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider bg-teal-600/90 text-white backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-xs">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-6 h-6 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                          {renderExtracurricularIcon(item.iconType)}
                        </div>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-teal-700 transition leading-snug">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-teal-50 flex items-center justify-between text-[11px] font-semibold text-teal-700 group-hover:text-teal-900">
                      <span>Detail Program</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition duration-200" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* END: ExtracurricularActivities */}

        {/* BEGIN: NewsSection */}
        <section className="py-20 bg-teal-50/30 border-t border-teal-100" data-purpose="news-section" id="informasi">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 pb-4 border-b border-teal-100"
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block mb-1">
                  Pusat Berita &amp; Informasi
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Kabar &amp; Warta Sekolah Terkini
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Warta terbaru seputar prestasi siswa, kurikulum industri, ekstrakurikuler, dan perkembangan civitas SMK Metland Cibitung.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setModal({ type: 'news-all' })}
                className="mt-4 sm:mt-0 text-xs font-bold text-teal-700 hover:text-teal-800 hover:underline cursor-pointer inline-flex items-center gap-1.5"
              >
                Lihat Semua Berita ({NEWS_ITEMS.length})
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>

            {/* News Cards Grid (Pure News Section) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {NEWS_ITEMS.slice(0, 4).map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -7 }}
                  onClick={() => setModal({ type: 'news-detail', item: news })}
                  className="bg-white rounded-2xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-300 transition duration-300 flex flex-col group cursor-pointer"
                >
                  <div className="relative h-44 bg-slate-900 overflow-hidden">
                    {news.image ? (
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full ${news.cardBgTint} flex items-center justify-center`}>
                        <BookOpen className="w-10 h-10 text-teal-600" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <span
                      className={`absolute top-3 left-3 ${news.categoryBadgeBg} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm`}
                    >
                      {news.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400 mb-2">
                        <Calendar className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{news.date}</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition leading-snug mb-2 line-clamp-2">
                        {news.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">{news.summary}</p>
                    </div>
                    <div className="pt-3 border-t border-teal-50 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-900">
                      <span className="inline-flex items-center gap-1">
                        Baca Selengkapnya
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition duration-200" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        {/* END: NewsSection */}

        {/* BEGIN: PhotoGallerySection */}
        <section className="py-20 bg-white" data-purpose="photo-gallery" id="galeri">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 pb-4 border-b border-teal-100"
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block mb-1">
                  Dokumentasi
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Galeri Foto Kegiatan
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Rekam jejak momen berharga, prestasi kejuaraan, dan aktivitas civitas akademika SMK Metland Cibitung.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setModal({ type: 'photo-all' })}
                className="mt-4 sm:mt-0 text-xs font-bold text-teal-700 hover:text-teal-800 hover:underline cursor-pointer inline-flex items-center gap-1"
              >
                Lihat Seluruh Galeri
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GALLERY_PHOTOS.slice(0, 4).map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setModal({ type: 'photo-detail', item: photo })}
                  className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-sm bg-slate-950 border border-teal-100 flex flex-col justify-between p-4 cursor-pointer hover:shadow-xl transition"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur px-2.5 py-0.5 rounded-full text-teal-900 shadow">
                      {photo.badge}
                    </span>
                    <span className="text-[10px] font-mono bg-slate-950/70 text-white px-2 py-0.5 rounded">
                      {photo.date}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <span className="text-[10px] font-semibold text-teal-300 uppercase tracking-wider block mb-0.5">
                      {photo.category}
                    </span>
                    <h3 className="text-white font-bold text-sm leading-snug">{photo.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* END: PhotoGallerySection */}

        {/* Note: "Galeri Video" section has been removed as per user instruction. */}

        {/* BEGIN: CallToActionBanner */}
        <section
          className="py-20 text-white cta-banner-bg relative overflow-hidden"
          data-purpose="cta-spmb-banner"
          id="spmb"
        >
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-cyan-400/10 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-300/10 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-teal-200 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
              <span>Penerimaan Siswa Baru T.A. 2026/2027 Dibuka</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight text-balance">
              Bergabunglah dengan Keluarga Besar SMK Metland Cibitung
            </h2>
            <p className="text-sm sm:text-base text-teal-100 max-w-2xl mx-auto leading-relaxed mb-8">
              Raih kompetensi vokasi bersertifikasi industri, magang nyata di unit bisnis terkemuka, dan bina karakter luhur untuk masa depan gemilang.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => setModal({ type: 'spmb', initialTab: 'register' })}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-slate-950 font-bold text-xs sm:text-sm bg-teal-300 hover:bg-teal-200 transition shadow-lg shadow-teal-900/30 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Daftar SPMB Online Sekarang</span>
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3.5 rounded-full text-white font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20 transition whitespace-nowrap cursor-pointer"
                href="#kontak"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#kontak');
                }}
              >
                Hubungi Panitia SPMB
              </motion.a>
            </div>
          </motion.div>
        </section>
        {/* END: CallToActionBanner */}

        {/* BEGIN: TestimonialsSection */}
        <section className="py-20 bg-white" data-purpose="testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <span className="text-xs font-bold tracking-widest text-teal-700 uppercase block mb-1">
                Apresiasi &amp; Ulasan
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Apa Kata Mereka?
              </h2>
              <p className="text-sm text-slate-500 mt-2">
                Ulasan hangat dari orang tua siswa, alumni sukses, dan para tamu kehormatan event sekolah.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1: Ade Olis (Tamu Maheswara Maheswari) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-teal-50/30 rounded-2xl p-6 sm:p-7 border border-teal-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "Keren banget... Terimakasih telah menjadi wadah lembaga yang meningkatkan siswa-siswi kami untuk lebih berkarya dan mengembangkan bakat yang ada... Sukses selalu untuk SMK Metland Cibitung."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-teal-100">
                  <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center text-xs">
                    AO
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Ade Olis</h4>
                    <p className="text-[11px] text-teal-700 font-medium">Tamu Maheswara Maheswari 2027</p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 2: Sofi Azzahra (Tamu Maheswara Maheswari) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="bg-teal-50/30 rounded-2xl p-6 sm:p-7 border border-teal-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "Terima kasih atas undangan dan kesempatan yang diberikan. Semoga acara ini dapat menjadi inspirasi bagi para siswa, dan semakin mempererat silaturahmi antar sekolah. Sukses selalu untuk seluruh panitia acara."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-teal-100">
                  <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center text-xs">
                    SA
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Sofi Azzahra</h4>
                    <p className="text-[11px] text-teal-700 font-medium">Tamu Maheswara Maheswari 2027</p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 3: Ahmad Fauzi (Alumni Sukses) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-teal-50/30 rounded-2xl p-6 sm:p-7 border border-teal-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "Ilmu praktikum dan mentalitas industri yang diajarkan guru-guru SMK Metland sangat aplikatif saat saya terjun ke dunia kerja teknologi informasi. Fasilitas lab komputernya luar biasa lengkap."
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-teal-100">
                  <div className="w-10 h-10 rounded-full bg-teal-700 text-white font-bold flex items-center justify-center text-xs">
                    AF
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Ahmad Fauzi, S.Kom.</h4>
                    <p className="text-[11px] text-teal-700 font-medium">Alumni Jurusan PPLG</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* END: TestimonialsSection */}
      </main>

      {/* BEGIN: MainFooter */}
      <footer
        className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-teal-950"
        data-purpose="site-footer"
        id="kontak"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-teal-900/40">
            {/* School Bio & Socials */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  alt="Logo SMK Metland Cibitung"
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="font-bold text-lg text-white">SMK Metland Cibitung</span>
              </div>
              <p className="text-xs text-teal-100/80 leading-relaxed max-w-sm mb-6">
                Lembaga pendidikan vokasi terakreditasi di bawah Yayasan Pendidikan Metland (PT Metropolitan Land Tbk), berdedikasi mencetak tenaga terampil, berkarakter mulia, dan berdaya saing global.
              </p>
              {/* Accreditations */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[11px] font-bold bg-teal-900/60 border border-teal-700 text-teal-200 px-3 py-1 rounded-full">
                  Terakreditasi A
                </span>
                <span className="text-[11px] font-bold bg-teal-900/60 border border-teal-700 text-teal-200 px-3 py-1 rounded-full">
                  Mitra Industri Metland
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Tautan Cepat</h4>
              <ul className="space-y-2.5 text-xs text-teal-100/80">
                <li>
                  <a
                    className="hover:text-white transition cursor-pointer"
                    href="#profil"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#profil');
                    }}
                  >
                    Profil Sekolah
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition cursor-pointer"
                    href="#program"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#program');
                    }}
                  >
                    Program Keahlian
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition cursor-pointer"
                    href="#organisasi"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#organisasi');
                    }}
                  >
                    Organisasi Siswa (Maheswara &amp; OSIS)
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition cursor-pointer"
                    href="#informasi"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#informasi');
                    }}
                  >
                    Berita &amp; Informasi
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-white transition cursor-pointer"
                    href="#galeri"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#galeri');
                    }}
                  >
                    Galeri Foto Kegiatan
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information (Pure Lucide Icons, No Emojis) */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Hubungi Kami</h4>
              <ul className="space-y-3 text-xs text-teal-100/80">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>Perumahan Metland Cibitung, Jl. Metland Cibitung, Desa Wanajaya, Kec. Cibitung, Kab. Bekasi, Jawa Barat 17520</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>+62 811-2233-4455</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>info@smkmetlandcibitung.sch.id</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-teal-200/60 gap-3">
            <p>© 2026 SMK Metland Cibitung. Yayasan Pendidikan Metland. Hak Cipta Dilindungi.</p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setModal({ type: 'legal', section: 'privacy' })}
                className="hover:underline cursor-pointer"
              >
                Kebijakan Privasi
              </button>
              <button
                type="button"
                onClick={() => setModal({ type: 'legal', section: 'terms' })}
                className="hover:underline cursor-pointer"
              >
                Syarat &amp; Ketentuan
              </button>
            </div>
          </div>
        </div>
      </footer>
      {/* END: MainFooter */}

      {/* Floating Scroll-To-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 16 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('#beranda')}
            aria-label="Kembali ke atas"
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-teal-600 text-white shadow-xl shadow-teal-800/30 flex items-center justify-center hover:bg-teal-500 transition cursor-pointer border border-teal-300/40"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Interactive Modals with AnimatePresence */}
      <PortalModals
        modal={modal}
        onClose={() => setModal({ type: 'none' })}
        onSelectModal={(nextModal) => setModal(nextModal)}
        newsList={NEWS_ITEMS}
        agendaList={AGENDA_ITEMS}
        achievementsList={ACHIEVEMENT_ITEMS}
        photosList={GALLERY_PHOTOS}
        spmbApplications={spmbApplications}
        onAddSpmbApplication={handleAddSpmbApplication}
      />
    </div>
  );
}
