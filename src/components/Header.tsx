"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Clock,
  MapPin,
  KeyRound,
  Wrench,
  Flame,
  ChevronDown,
  ChevronRight,
  BadgeCheck,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll detection for sticky shadow & shrink
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll and notify floating buttons when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-active");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-active");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("mobile-menu-active");
    };
  }, [mobileMenuOpen]);

  const serviceLinks = [
    {
      title: "Çilingir & Kapı Açma",
      desc: "Hasarsız çelik kapı açımı, Kale kilit değişimi, 7/24 oto çilingir.",
      href: "/diyarbakir-cilingir",
      icon: KeyRound,
      badge: "15 Dk Varış",
      iconBg: "bg-orange-100 text-orange-600",
      borderHover: "hover:border-orange-500 hover:bg-orange-50/40",
    },
    {
      title: "Su Tesisatı & Kaçak Tespiti",
      desc: "Kırmadan cihazla su kaçağı bulma, profesyonel tıkanıklık açma.",
      href: "/diyarbakir-su-tesisati",
      icon: Wrench,
      badge: "Kırmadan Cihazlı",
      iconBg: "bg-blue-100 text-blue-600",
      borderHover: "hover:border-blue-500 hover:bg-blue-50/40",
    },
    {
      title: "Kombi Servisi & Bakım",
      desc: "Tüm markalarda arıza onarımı, kart tamiri ve petek temizleme.",
      href: "/diyarbakir-kombi-servisi",
      icon: Flame,
      badge: "1 Yıl Garantili",
      iconBg: "bg-amber-100 text-amber-600",
      borderHover: "hover:border-amber-500 hover:bg-amber-50/40",
    },
  ];

  return (
    <header className={`sticky top-0 transition-all duration-300 ${mobileMenuOpen ? "z-[999]" : "z-40"}`}>
      {/* ================= TOP ANNOUNCEMENT TICKER ================= */}
      <div className="bg-gradient-to-r from-slate-950 via-[#0d1e34] to-slate-950 text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          {/* Left Live Status */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot shrink-0" />
            <span className="font-bold text-amber-300 tracking-tight text-[11px] sm:text-xs">
              Diyarbakır 7/24 Nöbetçi Usta
            </span>
            <span className="hidden sm:inline text-slate-300">• Varış: <strong>15-20 Dk</strong></span>
          </div>

          {/* Right Guarantee / Regions */}
          <div className="flex items-center gap-3 text-[11px] sm:text-xs text-slate-300">
            <span className="hidden md:inline-flex items-center gap-1">
              <MapPin className="w-3 h-3 text-rose-400" />
              <span>Kayapınar • Bağlar • Yenişehir • Sur</span>
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>Garantili Esnaf</span>
            </span>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2 border-b border-slate-200"
            : "py-2.5 sm:py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative">
                <img
                  src="/favicon.png"
                  alt="Güler Hizmet Diyarbakır Logo"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-contain bg-white shadow-sm border border-slate-100 group-hover:scale-105 transition-transform"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[8px] text-white font-black">
                  ✓
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-lg sm:text-2xl text-slate-900 tracking-tight leading-none group-hover:text-blue-700 transition-colors">
                    Güler Hizmet
                  </span>
                  <span className="hidden md:inline-block text-[10px] font-extrabold uppercase bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-200">
                    Diyarbakır
                  </span>
                </div>
                <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5 tracking-wide">
                  7/24 Çilingir • Tesisat • Kombi
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-bold text-slate-700">
              <Link
                href="/"
                className={`px-3.5 py-2 rounded-xl transition-all ${
                  pathname === "/"
                    ? "text-blue-700 bg-blue-50/80 font-black"
                    : "hover:text-blue-700 hover:bg-slate-50"
                }`}
              >
                Ana Sayfa
              </Link>

              {/* Mega Dropdown for Services */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                    pathname.startsWith("/diyarbakir-")
                      ? "text-blue-700 bg-blue-50/80 font-black"
                      : "hover:text-blue-700 hover:bg-slate-50"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Hizmetlerimiz</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-3xl p-4 shadow-2xl border border-slate-200/90 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 flex items-center justify-between">
                      <span>Diyarbakır 7/24 Uzmanlık Alanlarımız</span>
                      <span className="text-emerald-600 font-extrabold">● Canlı Nöbette</span>
                    </div>

                    <div className="grid gap-2 pt-2">
                      {serviceLinks.map((srv) => {
                        const Icon = srv.icon;
                        const isActive = pathname === srv.href;
                        return (
                          <Link
                            key={srv.href}
                            href={srv.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className={`p-3 rounded-2xl border transition-all flex items-start gap-3.5 group ${
                              isActive
                                ? "bg-blue-50/70 border-blue-500 shadow-sm"
                                : `bg-white border-transparent ${srv.borderHover}`
                            }`}
                          >
                            <div
                              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${srv.iconBg} group-hover:scale-105 transition-transform`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-0.5">
                                <span className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors text-sm">
                                  {srv.title}
                                </span>
                                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                                  {srv.badge}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                                {srv.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Bottom Dropdown Footer Bar */}
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs px-2">
                      <span className="text-slate-500">
                        ⚡ Diyarbakır tüm ilçelere <strong>15-20 dk</strong> varış
                      </span>
                      <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className="font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                      >
                        <span>Hemen Usta Çağır</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/#bolgeler"
                className="px-3.5 py-2 rounded-xl hover:text-blue-700 hover:bg-slate-50 transition-all"
              >
                Hizmet Bölgeleri
              </Link>
              <Link
                href="/#iletisim"
                className="px-3.5 py-2 rounded-xl hover:text-blue-700 hover:bg-slate-50 transition-all"
              >
                İletişim & Konum
              </Link>
            </nav>

            {/* DESKTOP QUICK ACTION CTA BUTTONS */}
            <div className="hidden lg:flex items-center gap-3">
              {/* WhatsApp Quick Chat */}
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Merhaba Güler Hizmet, Diyarbakır servis desteği için yazıyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 font-bold text-xs xl:text-sm transition-all border border-emerald-200/90 shadow-sm hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Call-to-action Phone Button with Pulsing Effect */}
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-black text-sm shadow-lg shadow-orange-600/30 transition-all hover:scale-[1.03] active:scale-95 group"
              >
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-[10px] font-bold text-orange-100 uppercase tracking-wider">
                    7/24 Acil Çağrı Hattı
                  </span>
                  <span className="block text-sm font-black tracking-tight">
                    {siteConfig.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* MODERN MOBILE ACTIONS: DIRECT CALL & MENU TRIGGER */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-md shadow-orange-600/30 active:scale-95 transition-all text-xs font-black"
                aria-label="Hemen Ustayı Ara"
              >
                <Phone className="w-3.5 h-3.5 fill-white animate-pulse" />
                <span>Hemen Ara</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:from-blue-800 hover:to-blue-800 text-white shadow-md shadow-blue-600/30 active:scale-95 transition-all border border-blue-500/30 cursor-pointer"
                aria-label="Menüyü Aç"
              >
                <div className="flex flex-col gap-1 w-3.5">
                  <span className="h-0.5 w-full bg-white rounded-full" />
                  <span className="h-0.5 w-3/4 bg-white rounded-full" />
                  <span className="h-0.5 w-full bg-white rounded-full" />
                </div>
                <span className="text-xs font-black tracking-wider uppercase font-heading">
                  Menü
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BUTTERY-SMOOTH MOBILE APP SIDEBAR ================= */}
      {/* 1. Backdrop Overlay with Smooth Fade (Elevated to z-[999] when open) */}
      <div
        className={`lg:hidden fixed inset-0 z-[998] bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 ease-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* 2. Sliding Sidebar Drawer with GPU-accelerated Transform - 100% NO SCROLL */}
      <aside
        aria-label="Mobil Yan Menü Sidebar"
        className={`lg:hidden fixed top-0 left-0 bottom-0 z-[999] w-[88vw] max-w-[360px] bg-gradient-to-b from-[#071120] via-[#0b1930] to-[#040812] text-white h-[100dvh] max-h-[100dvh] shadow-[0_0_90px_rgba(0,0,0,0.85)] rounded-r-3xl border-r border-blue-500/20 flex flex-col justify-between overflow-hidden p-4 sm:p-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform will-change-transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* TOP SECTION: Header + Live Radar Status */}
        <div className="space-y-3 shrink-0">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative">
                <img
                  src="/favicon.png"
                  alt="Güler Hizmet Diyarbakır"
                  className="w-10 h-10 rounded-full object-contain bg-white shadow-md border-2 border-emerald-400/60 group-hover:scale-105 transition-transform"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
              </div>
              <div>
                <div className="font-black text-white text-base leading-none font-heading tracking-tight">
                  Güler Hizmet
                </div>
                <div className="text-[10px] text-cyan-400 font-extrabold uppercase mt-1 tracking-wider">
                  Diyarbakır 7/24 Nöbetçi
                </div>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 text-slate-300 hover:text-white border border-white/10 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Sidebar Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* High-Impact Live Radar Status Badge */}
          <div className="px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-teal-950/80 border border-emerald-500/40 flex items-center justify-between text-xs font-bold text-emerald-200 shadow-lg shadow-emerald-950/50">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-heading font-black text-xs text-white">Usta Ekipleri Sahada</span>
            </div>
            <span className="text-[10px] font-extrabold text-white bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-0.5 rounded-lg shadow-sm">
              ⚡ 15 Dk Varış
            </span>
          </div>
        </div>

        {/* MIDDLE SECTION: CORE 3 SERVICES (Ultra-Punchy Dark Glass Cards) */}
        <div className="space-y-2 py-2 flex-1 flex flex-col justify-center">
          <div className="flex items-center justify-between px-1 text-[10px] font-black uppercase tracking-wider text-slate-400 font-heading">
            <span>Acil Usta Hizmetleri</span>
            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              7/24 Aktif
            </span>
          </div>

          {/* 1. Çilingir */}
          <Link
            href="/diyarbakir-cilingir"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-2.5 rounded-2xl border transition-all flex items-center gap-3 group active:scale-[0.98] ${
              pathname === "/diyarbakir-cilingir"
                ? "bg-slate-800 border-amber-500 shadow-md shadow-amber-500/10"
                : "bg-slate-800/80 border-slate-700/80 hover:border-amber-400 hover:bg-slate-800"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/30 group-hover:scale-105 transition-transform">
              <KeyRound className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-black text-white text-xs sm:text-sm font-heading group-hover:text-amber-400 transition-colors leading-tight">
                Çilingir & Kapı Açma
              </div>
              <div className="text-[10px] text-slate-300 mt-0.5 flex items-center gap-1.5">
                <span>Hasarsız çelik kapı & kilit</span>
                <span className="text-amber-300 font-bold">• 15 Dk</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>

          {/* 2. Su Tesisatı */}
          <Link
            href="/diyarbakir-su-tesisati"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-2.5 rounded-2xl border transition-all flex items-center gap-3 group active:scale-[0.98] ${
              pathname === "/diyarbakir-su-tesisati"
                ? "bg-slate-800 border-blue-500 shadow-md shadow-blue-500/10"
                : "bg-slate-800/80 border-slate-700/80 hover:border-blue-400 hover:bg-slate-800"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Wrench className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-black text-white text-xs sm:text-sm font-heading group-hover:text-cyan-400 transition-colors leading-tight">
                Su Tesisatı & Kaçak
              </div>
              <div className="text-[10px] text-slate-300 mt-0.5 flex items-center gap-1.5">
                <span>Kırmadan cihazla tespit</span>
                <span className="text-cyan-300 font-bold">• Garantili</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>

          {/* 3. Kombi Servisi */}
          <Link
            href="/diyarbakir-kombi-servisi"
            onClick={() => setMobileMenuOpen(false)}
            className={`p-2.5 rounded-2xl border transition-all flex items-center gap-3 group active:scale-[0.98] ${
              pathname === "/diyarbakir-kombi-servisi"
                ? "bg-slate-800 border-amber-500 shadow-md shadow-amber-500/10"
                : "bg-slate-800/80 border-slate-700/80 hover:border-amber-400 hover:bg-slate-800"
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/30 group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-black text-white text-xs sm:text-sm font-heading group-hover:text-amber-400 transition-colors leading-tight">
                Kombi Tamiri & Bakım
              </div>
              <div className="text-[10px] text-slate-300 mt-0.5 flex items-center gap-1.5">
                <span>Tüm markalar kart tamiri</span>
                <span className="text-emerald-300 font-bold">• 1 Yıl Garanti</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-all shrink-0" />
          </Link>

          {/* Modern Segmented Quick Links in Frosted Glass */}
          <div className="grid grid-cols-3 gap-1.5 pt-1.5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-1 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-center font-bold text-[11px] font-heading transition-colors"
            >
              Ana Sayfa
            </Link>
            <Link
              href="/#bolgeler"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-1 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-center font-bold text-[11px] font-heading transition-colors"
            >
              Bölgeler
            </Link>
            <Link
              href="/#iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-1 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-cyan-300 text-center font-bold text-[11px] font-heading transition-colors border border-blue-400/30"
            >
              Talep Formu
            </Link>
          </div>
        </div>

        {/* BOTTOM SECTION: HIGH-CONVERTING CALL & WHATSAPP BUTTONS */}
        <div className="pt-3 border-t border-slate-800/80 space-y-2 shrink-0">
          {/* Big Phone Call Button */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-full py-3.5 px-3.5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-orange-600/40 active:scale-95 transition-all font-heading"
          >
            <Phone className="w-4 h-4 fill-white animate-bounce shrink-0" />
            <span>Hemen Ara: {siteConfig.phone}</span>
          </a>

          {/* Big WhatsApp Message Button */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              "Merhaba Güler Hizmet Diyarbakır, acil servis için konum atıyorum."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 active:scale-95 transition-all font-heading"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0" />
            <span>WhatsApp ile Konum Gönder</span>
          </a>

          <div className="text-center text-[10px] font-semibold text-slate-400">
            ⚡ Resmi Esnaf • Telefonda Net Fiyat
          </div>
        </div>
      </aside>
    </header>
  );
}
