import React from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  KeyRound,
  Wrench,
  Flame,
  Clock,
  ShieldCheck,
  Receipt,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Star,
  Activity,
  Cpu,
  Cloud,
  Check,
  ChevronRight,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import { siteConfig } from "@/data/siteConfig";

const homeFaqs: FaqItem[] = [
  {
    question: "Diyarbakır'da gece saat kaçta arayabilirim? Gece ek fiyat alıyor musunuz?",
    answer:
      "Güler Hizmet 7 gün 24 saat kesintisiz nöbetçi usta sistemiyle çalışır. Gece 02:00 veya 05:00 fark etmeksizin aynı samimi esnaf anlayışıyla hizmet veririz. Gece aradığınızda fahiş fiyat sürpriziyle karşılaşmazsınız; fiyat telefonda açıkça bildirilir.",
  },
  {
    question: "Kayapınar, Bağlar, Yenişehir veya Sur'a varış süreniz ortalama kaç dakikadır?",
    answer:
      "Diclekent Bulvarı, 75. Yol (Mahabad Bulvarı), Bağlar Dörtyol ve Ofis gibi merkezi kavşaklarda sürekli hazır bekleyen mobil gezici servis araçlarımız bulunur. Çağrınız onaylandıktan sonra ortalama 15 ila 25 dakika içerisinde adresinizde oluruz.",
  },
  {
    question: "Çilingir kapıyı açarken çelik kapıya veya kilide hasar verir mi?",
    answer:
      "Kesinlikle hasar vermez. Son teknoloji Alman ve yerli özel maymuncuk aparatları ve kilit açma teknikleri kullanıyoruz. Kapınızın boyası çizilmez, kilit yuvası patlatılmaz. Sadece zorunlu durumlarda (anahtar göbek içinde kırılmışsa) barel değişimi yapılır.",
  },
  {
    question: "Kırmadan su kaçağı tespiti nasıl yapılır? Alt komşuma su damlıyor.",
    answer:
      "Akustik ses dinleme ve özel dedektörlerle borudaki sızıntıyı noktasal olarak fayansın arkasından tespit ediyoruz. Evinizin banyosunu ya da koridorunu kırmadan tek bir fayans altında arızayı çözüyoruz.",
  },
  {
    question: "Kombi bakımı ve arızasında hangi markalara bakıyorsunuz?",
    answer:
      "DemirDöküm, Baymak, Bosch, Vaillant, Buderus, E.C.A., Viessmann, Protherm ve Ariston başta olmak üzere tüm yoğuşmalı ve konvansiyonel kombilere teknik servis, kart tamiri ve periyodik bakım hizmeti veriyoruz. Parçalarımız 1 yıl garantilidir.",
  },
  {
    question: "Yapılan işçilik ve takılan parçaların garantisi var mıdır?",
    answer:
      "Evet! Güler Hizmet Diyarbakır resmi esnaf güvencesiyle çalışır. Değiştirilen Kale Kilit barelleri 2 yıl, kombi yedek parçaları ve boru kaynak tamiratları ise firmamızın 1 yıl garantisi altındadır. Faturalı işlem yapılır.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO SECTION (REFERENCE IMAGE ADAPTATION) ==================== */}
      <section className="relative bg-gradient-to-br from-[#030d1c] via-[#09234b] to-[#14427c] text-white overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-28">
        {/* Tech Glow & Mesh Accents */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute top-1/3 left-10 w-[380px] h-[380px] rounded-full bg-cyan-500/15 blur-[100px]" />
          {/* Subtle dotted background grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT COLUMN: HERO CONTENT & TYPOGRAPHY */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Yellow Eyebrow matching the reference image */}
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-extrabold text-xs sm:text-sm tracking-wide uppercase border border-amber-400/30">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  Diyarbakır 7/24 Nöbetçi Tamirci & Usta Hattı
                </span>
              </div>

              {/* Bold 3-line Headline matching Google Ads Emergency Intent */}
              <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black tracking-tight leading-[1.14] text-white">
                Kapıda mı Kaldınız? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-white">
                  Su Kaçağı veya Kombi
                </span>{" "}
                Arızası mı Var? <br />
                <span className="text-cyan-300">15 Dakikada Kapınızdayız!</span>
              </h1>

              {/* Description Paragraph */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl font-normal">
                Kayapınar, Bağlar, Yenişehir, Sur ve tüm Diyarbakır’da acil tamirci. Hasarsız çelik kapı açma, kırmadan su kaçağı tespiti, tıkanıklık açma ve kombi tamirinde <strong>telefonda net fiyat</strong>, sürpriz ücret yok!
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 active:scale-95 text-white font-black text-base shadow-xl shadow-orange-600/35 transition-all group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform animate-pulse" />
                  <span>HEMEN USTAYI ARA: {siteConfig.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                    "Merhaba Güler Hizmet Diyarbakır, acil tamirciye ihtiyacım var. Konum atıyorum."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp Konum At, Usta Gelsin</span>
                </a>
              </div>

              {/* Fast Trust Indicators for Ads Conversion */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs text-slate-200 font-bold border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>15-20 Dk Adrese Varış</span>
                </div>
                <div className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-cyan-300" />
                  <span>Telefonda Net Fiyat</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>%100 Hasarsız İşçilik</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: GRAPHICAL COMPOSITION MATCHING REFERENCE IMAGE */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Tech Schematic Gear / Vector Graphic Accent (Like the reference image) */}
                <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full border border-cyan-400/20 pointer-events-none animate-[spin_60s_linear_infinite]" />
                <div className="absolute -top-12 right-12 w-80 h-80 rounded-full border border-dashed border-blue-400/20 pointer-events-none" />

                {/* Top Badges Row */}
                <div className="flex items-start justify-between gap-4 mb-4 relative z-20">
                  {/* Badge 1: Official Esnaf Gold Chip (like the Intel Xeon badge in reference) */}
                  <div className="bg-gradient-to-b from-[#1e3458] to-[#0c1c36] border-2 border-amber-400/80 rounded-xl p-2.5 shadow-xl shadow-black/40 flex items-center gap-3 backdrop-blur-md">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-slate-950 text-xs shadow-inner">
                      DESOB
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                        Diyarbakır Esnaf Sicil
                      </div>
                      <div className="text-xs font-black text-white">No: 21-8492</div>
                    </div>
                  </div>

                  {/* Badge 2: Glowing Neon Cloud (like the "Avrupa Lokasyon" cloud in reference) */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-cyan-400 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
                    <div className="relative bg-gradient-to-br from-blue-900/90 to-cyan-950/90 border border-cyan-400/60 rounded-2xl px-4 py-2.5 shadow-2xl flex items-center gap-2.5 backdrop-blur-md">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-cyan-300 animate-pulse" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-black text-white tracking-tight">
                          Diyarbakır Lokasyon
                        </div>
                        <div className="text-[10px] text-cyan-300 font-bold">
                          Tüm Merkez İlçeler
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Middle Composition - Optimized for Mobile & Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative z-10">
                  {/* Left Floating Feature Cards */}
                  <div className="md:col-span-5 grid grid-cols-3 md:grid-cols-1 gap-2 sm:gap-3">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-2.5 sm:p-3.5 shadow-xl shadow-black/25 border border-slate-100 transform hover:-translate-y-0.5 transition-transform text-center md:text-left">
                      <div className="font-extrabold text-slate-900 text-[11px] sm:text-xs leading-tight">
                        Hasarsız Kapı Açımı
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium mt-0.5">
                        Çelik Kapı & Oto
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-2.5 sm:p-3.5 shadow-xl shadow-black/25 border border-slate-100 transform hover:-translate-y-0.5 transition-transform text-center md:text-left">
                      <div className="font-extrabold text-slate-900 text-[11px] sm:text-xs leading-tight">
                        Kırmadan Kaçak Tespiti
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium mt-0.5">
                        Akustik Cihazla Tespit
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-2.5 sm:p-3.5 shadow-xl shadow-black/25 border border-slate-100 transform hover:-translate-y-0.5 transition-transform text-center md:text-left">
                      <div className="font-extrabold text-slate-900 text-[11px] sm:text-xs leading-tight">
                        Tıkanıklık Açma
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium mt-0.5">
                        Borulara Sıfır Hasar
                      </div>
                    </div>
                  </div>

                  {/* Right Central Console Graphic (Dark digital tablet showing live service dispatch) */}
                  <div className="md:col-span-7">
                    <div className="bg-gradient-to-br from-[#0c1f38] to-[#061224] rounded-3xl p-4 sm:p-5 border-2 border-cyan-500/30 shadow-2xl relative overflow-hidden">
                      {/* Live Telemetry Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                          <span className="font-extrabold text-xs text-white tracking-wide">
                            Canlı Usta Takip
                          </span>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                          GPS Aktif
                        </span>
                      </div>

                      {/* District Live Status Grid */}
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/60 border border-slate-700/50">
                          <span className="font-semibold text-slate-200">📍 Kayapınar (Diclekent)</span>
                          <span className="font-bold text-emerald-400 text-[11px]">Varış: ~15 Dk</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/60 border border-slate-700/50">
                          <span className="font-semibold text-slate-200">📍 Bağlar (Dörtyol)</span>
                          <span className="font-bold text-emerald-400 text-[11px]">Varış: ~18 Dk</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/60 border border-slate-700/50">
                          <span className="font-semibold text-slate-200">📍 Yenişehir (Ofis)</span>
                          <span className="font-bold text-emerald-400 text-[11px]">Varış: ~15 Dk</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded-xl bg-slate-800/60 border border-slate-700/50">
                          <span className="font-semibold text-slate-200">📍 Sur (Dağkapı)</span>
                          <span className="font-bold text-emerald-400 text-[11px]">Varış: ~20 Dk</span>
                        </div>
                      </div>

                      {/* Diagnostic Gauge Footer */}
                      <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Nöbetçi Ekipler:</span>
                        <span className="text-amber-400 font-extrabold">Sahada Hazır Bekliyor</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom-Right Card (matching the "Aklınızdaki sorular için / Sizi Arayalım" card in reference image) */}
                <div className="mt-4 flex justify-end relative z-20">
                  <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-slate-200 flex items-center gap-3.5 transform hover:scale-[1.02] transition-transform">
                    <div className="text-left">
                      <div className="text-[11px] font-bold text-slate-700">
                        Acil Usta İhtiyacı İçin
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">
                        Diyarbakır 7/24 Kesintisiz Hat
                      </div>
                    </div>
                    <a
                      href={`tel:${siteConfig.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-600/30 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Hemen Arayın</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CONCAVE WHITE WAVE DIVIDER (Exact curved transition matching reference image) */}
        <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            preserveAspectRatio="none"
            className="relative block w-full h-12 sm:h-16 text-slate-50 fill-current"
          >
            <path d="M0,30 C480,95 960,95 1440,30 L1440,90 L0,90 Z" />
          </svg>
        </div>
      </section>

      {/* ==================== GOOGLE ADS 1-TIKLA ACİL TAMİRCİ SEÇİCİ ==================== */}
      <section className="bg-slate-50 pt-8 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-black text-orange-600 uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Hızlı Müdahale Hattı
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
              Hangi Tamirciye İhtiyacınız Var? Hemen Arayın:
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {/* 1. Çilingir */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/80 hover:border-orange-500 shadow-sm hover:shadow-[0_12px_30px_rgba(234,88,12,0.12)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-black mb-3.5 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div className="font-black text-slate-900 text-sm sm:text-base leading-snug group-hover:text-orange-600 transition-colors">
                  Kapıda Kaldım (Çilingir)
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Hasarsız çelik kapı açma & kilit değişimi
                </div>
              </div>
              <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-black text-orange-600">
                <span className="text-[11px]">⚡ 15 Dk Varış</span>
                <span className="flex items-center gap-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-2.5 py-1 rounded-xl text-[10px] font-black shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-3 h-3 fill-white" /> Ara
                </span>
              </div>
            </a>

            {/* 2. Su Kaçağı */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-500 shadow-sm hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black mb-3.5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Wrench className="w-5 h-5" />
                </div>
                <div className="font-black text-slate-900 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors">
                  Su Kaçağı & Sızıntı
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Kırmadan cihazla noktasal tespit ve tamir
                </div>
              </div>
              <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-black text-blue-600">
                <span className="text-[11px]">🔧 Cihazla Tespit</span>
                <span className="flex items-center gap-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-2.5 py-1 rounded-xl text-[10px] font-black shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-3 h-3 fill-white" /> Ara
                </span>
              </div>
            </a>

            {/* 3. Tıkanıklık Açma */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/80 hover:border-emerald-500 shadow-sm hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black mb-3.5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                  <Activity className="w-5 h-5" />
                </div>
                <div className="font-black text-slate-900 text-sm sm:text-base leading-snug group-hover:text-emerald-600 transition-colors">
                  Tıkanıklık & Gider Açma
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Mutfak, tuvalet, pimaş makineli temizlik
                </div>
              </div>
              <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-black text-emerald-600">
                <span className="text-[11px]">🛡️ Kırmadan Açım</span>
                <span className="flex items-center gap-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-2.5 py-1 rounded-xl text-[10px] font-black shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-3 h-3 fill-white" /> Ara
                </span>
              </div>
            </a>

            {/* 4. Kombi Tamiri */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/80 hover:border-amber-500 shadow-sm hover:shadow-[0_12px_30px_rgba(245,158,11,0.12)] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-black mb-3.5 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm">
                  <Flame className="w-5 h-5" />
                </div>
                <div className="font-black text-slate-900 text-sm sm:text-base leading-snug group-hover:text-amber-600 transition-colors">
                  Kombi Arıza & Tamir
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Çalışmayan kombi, kart tamiri ve bakım
                </div>
              </div>
              <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-black text-amber-600">
                <span className="text-[11px]">⭐ 1 Yıl Garanti</span>
                <span className="flex items-center gap-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-2.5 py-1 rounded-xl text-[10px] font-black shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-3 h-3 fill-white" /> Ara
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== ANINDA USTA ÇAĞIRMA & FORM ALANI ==================== */}
      <section className="py-12 bg-slate-50" id="iletisim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left explanation info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                Anında Geri Dönüş
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Online Talep Bırakın, Usta 15 Dakikada Adresinize Gelsin
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Formu doldurduğunuz an bilgileriniz WhatsApp üzerinden konumunuza en yakın nöbetçi ustamıza yönlendirilir. Kapıda kalma, su sızıntısı veya kombi arızası için beklemeden fiyat ve destek alın.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Doğrudan Arama:</div>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm font-black text-orange-600 hover:underline">
                      {siteConfig.phone} (7/24 Kesintisiz)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 fill-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">WhatsApp Hattı:</div>
                    <span className="text-sm font-bold text-emerald-700">Anında Konum Gönderin</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The High Converting Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3 ANA HİZMET KARTI ==================== */}
      <section className="py-20 bg-white" id="hizmetler">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 font-black text-xs uppercase tracking-wider mb-3">
              Diyarbakır Teknik Servis Kolları
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Diyarbakır Genelinde 7/24 Profesyonel Hizmetlerimiz
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Ev, ofis ve araçlarınız için en son teknolojik cihazlar ve sertifikalı ustalarımızla 20 dakikada yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Çilingir */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-black group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <KeyRound className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
                    7/24 Nöbetçi
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  Diyarbakır Çilingir & Kapı Açma
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Diyarbakır'da kapıda kaldığınızda kapınıza veya kilit yuvasına zarar vermeden özel maymuncuklarla açıyoruz. Çelik kapı barel değişimi ve oto çilingir desteği.
                </p>

                <ul className="space-y-2.5 text-sm text-slate-700 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Hasarsız Çelik Kapı & Oda Kapısı Açma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Orijinal Kale Kilit & Tuzaklı Barel Montajı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Oto Çilingir (Tüm Araç Markaları Cam Kırılmadan)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Para Kasası & Apartman Giriş Kilitleri</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <Link
                  href="/diyarbakir-cilingir"
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-orange-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Çilingir Hizmet Detayları</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-orange-600 hover:text-orange-700 block"
                >
                  Acil Çilingir Usta Ara (15 Dk) →
                </a>
              </div>
            </div>

            {/* Card 2: Su Tesisatı */}
            <div className="bg-slate-50 rounded-3xl p-8 border-2 border-blue-500 shadow-xl shadow-blue-100/60 hover:-translate-y-1 transition-all flex flex-col justify-between group relative">
              <div className="absolute -top-3.5 left-8 bg-blue-600 text-white text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                En Çok Çağrılan Servis
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Wrench className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Kırmadan Cihazlı
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Diyarbakır Su Tesisatı & Kaçak Tespiti
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Evinizi kırmadan döşeme altındaki su sızıntılarını akustik dinleme cihazlarıyla noktasal buluyoruz. Tıkalı giderleri kırmadan açıyoruz.
                </p>

                <ul className="space-y-2.5 text-sm text-slate-700 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kırmadan Cihaz ile Kaçak Tespiti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Özel Makineyle Tuvalet & Lavabo Tıkanıklığı Açma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Banyo, Klozet, Musluk ve Batarya Montajı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Makineli & İlaçlı Petek Temizleme</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <Link
                  href="/diyarbakir-su-tesisati"
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-blue-600/25"
                >
                  <span>Su Tesisatı Detayları</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-blue-600 hover:text-blue-700 block"
                >
                  Acil Tesisatçı Usta Ara →
                </a>
              </div>
            </div>

            {/* Card 3: Kombi Servisi */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-black group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    <Flame className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    Garantili Parça
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  Diyarbakır Kombi Servisi & Bakım
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  DemirDöküm, Baymak, Bosch, Vaillant, Buderus, E.C.A. başta olmak üzere tüm marka kombilerde arıza tamiri, elektronik kart onarımı ve kışlık tasarruf bakımı.
                </p>

                <ul className="space-y-2.5 text-sm text-slate-700 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Kombi Arıza Kodları Teşhisi & Onarımı</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Yıllık Yakıt Tasarrufu Sağlayan Periyodik Bakım</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Elektronik Anakart Tamiri & 1 Yıl Garanti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Sıfır Kombi Montajı & Gaz Kaçak Kontrolü</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <Link
                  href="/diyarbakir-kombi-servisi"
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Kombi Servis Detayları</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-amber-600 hover:text-amber-700 block"
                >
                  Kombi Teknisyeni Çağır →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DİYARBAKIR İLÇE VE SEMT REHBERİ ==================== */}
      <section className="py-20 bg-slate-50" id="bolgeler">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-3">
              Diyarbakır Mahalle ve Cadde Kapsama Ağı
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Diyarbakır’ın Tüm Merkez İlçe ve Semtlerinde 15 Dakikadayız
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Aşağıdaki ana bölgelerde konuşlanmış mobil servis araçlarımız sayesinde Diyarbakır trafiğine takılmadan adresinize anında varıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.districtsDetailed.map((dist) => (
              <div
                key={dist.slug}
                className="p-8 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{dist.name} İlçesi Servis Noktası</h3>
                      <span className="text-xs text-emerald-600 font-bold">Varış Süresi: {dist.arrivalMinutes}</span>
                    </div>
                  </div>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-600 text-white font-bold text-xs shadow-sm hover:bg-orange-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Usta Çağır</span>
                  </a>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {dist.description}
                </p>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {dist.name} Hizmet Verilen Ana Mahalle ve Caddeler:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dist.neighborhoods.map((nh) => (
                      <span
                        key={nh}
                        className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium"
                      >
                        ✓ {nh}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Banner inside districts */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-lg font-black text-white">
                Listede Mahallenizi Göremediniz mi?
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Endişelenmeyin! Diyarbakır il sınırları içerisindeki tüm köyler, siteler ve toki konutlarına servisimiz vardır.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Bölgenizi Sorun: {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ŞEFFAF FİYATLANDIRMA REHBERİ ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 font-bold text-xs uppercase tracking-wider mb-3">
              Şeffaf Esnaf Politikası
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Diyarbakır Çilingir, Tesisat & Kombi Fiyat Rehberi
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              İşe başlamadan önce yapılacak masrafı açıkça belirtiriz. Gizli maliyet, sürpriz ek ücret yoktur.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/50">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="py-4 px-6 font-bold">Hizmet Alanı</th>
                    <th scope="col" className="py-4 px-6 font-bold">Fiyat Politikası</th>
                    <th scope="col" className="py-4 px-6 font-bold hidden md:table-cell">İşlem Detayı</th>
                    <th scope="col" className="py-4 px-6 font-bold">Garanti</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium bg-white">
                  {siteConfig.pricingTable.map((p, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900">{p.service}</td>
                      <td className="py-4 px-6 text-orange-600 font-bold">{p.range}</td>
                      <td className="py-4 px-6 text-xs text-slate-500 hidden md:table-cell">{p.details}</td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          {p.guarantee}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-slate-100/60 border-t border-slate-200 text-center text-xs text-slate-500">
              * Kapı kilit modelleri (tuzaklı barel, zırhlı kilit) ve kombi kart hasarına göre kesin parça fiyatı arıza anında ustamız tarafından bildirilir.
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GERÇEK DİYARBAKIRLI MÜŞTERİ YORUMLARI ==================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-3">
              Müşteri Memnuniyeti
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Diyarbakırlı Hemşehrilerimizin Yorumları
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Kayapınar, Bağlar, Yenişehir ve Sur sakinlerinin hizmetlerimiz hakkındaki gerçek deneyimleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-400 transition-all flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4">
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-[11px] text-blue-600 font-semibold">{t.location}</div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400 mt-1">
                    <span>{t.service}</span>
                    <span>{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ACİL DURUM KONTROL LİSTESİ ==================== */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30">
                Usta Gelene Kadar Ne Yapmalı?
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Acil Durumlarda Hayat Kurtaran İpuçları
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ustamızı aradıktan sonra adresinize ulaşana kadar aşağıdaki adımları uygulayarak maddi hasarı en aza indirebilirsiniz.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="font-black text-amber-400 text-sm mb-1.5 flex items-center gap-2">
                  <KeyRound className="w-4 h-4" />
                  <span>Kapıda Kaldıysanız:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Kapıyı zorlamayın, kredi kartı veya levye sokmayın. Çelik kapı dillerini eğmek kapının komple kilitlenmesine ve masrafın artmasına neden olur.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="font-black text-blue-400 text-sm mb-1.5 flex items-center gap-2">
                  <Wrench className="w-4 h-4" />
                  <span>Su Borusu Patladıysa:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Daire girişindeki veya saat yanındaki ana su vanasını derhal saat yönünde çevirerek kapatın. Elektrik prizlerine yakınsa şartelleri indirin.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="font-black text-orange-400 text-sm mb-1.5 flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  <span>Kombiden Gaz/Su Kaçıyorsa:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Kombinin altındaki gaz vanasını kapatın, pencereleri açarak evi havalandırın. Kombinin şalterini kapatıp hemen bizi arayın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SSS (FAQ) SECTION ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider mb-2">
              Sıkça Sorulan Sorular
            </span>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Diyarbakır Teknik Servis Merak Edilenler
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Fiyatlar, servis süresi ve işlem güvenliği hakkında aklınıza takılan sorular:
            </p>
          </div>

          <FaqAccordion items={homeFaqs} />
        </div>
      </section>

      {/* ==================== DİYARBAKIR YEREL SEO VE ARAMA TERİMLERİ MERKEZİ ==================== */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block px-3.5 py-1 rounded-full bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider mb-2">
              Diyarbakır Yerel Arama ve Hizmet Dizini
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Diyarbakır’ın Her Noktasında En Yakın Usta Ağı
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Google’da Diyarbakır genelinde en çok aranan çilingir, tesisat ve kombi servis bölgelerimiz:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Çilingir */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    Diyarbakır Çilingir Ağı
                  </h3>
                  <Link href="/diyarbakir-cilingir" className="text-xs font-semibold text-orange-600 hover:underline">
                    Çilingir Sayfasına Git →
                  </Link>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hasarsız çelik kapı açma, Kale kilit barel değişimi, oto çilingir ve kasa açma hizmeti verdiğimiz bölgeler:
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  "Kayapınar Çilingir",
                  "Diclekent Çilingir",
                  "75 Yol Çilingir",
                  "Gaziler Çilingir",
                  "Peyas Çilingir",
                  "Huzurevleri Çilingir",
                  "Fırat Bulvarı Çilingir",
                  "Mezopotamya Çilingir",
                  "Bağlar Çilingir",
                  "Bağlar Dörtyol Çilingir",
                  "Şeyh Şamil Çilingir",
                  "Koşuyolu Çilingir",
                  "5 Nisan Çilingir",
                  "Yenişehir Çilingir",
                  "Ofis Çilingir",
                  "Ekinciler Çilingir",
                  "Sanat Sokağı Çilingir",
                  "Seyrantepe Çilingir",
                  "Sur Çilingir",
                  "Dağkapı Çilingir",
                  "Mardinkapı Çilingir",
                  "Diyarbakır Oto Çilingir",
                  "Diyarbakır Nöbetçi Çilingir",
                  "Diyarbakır Kale Kilit",
                ].map((tag, idx) => (
                  <Link
                    key={idx}
                    href="/diyarbakir-cilingir"
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 border border-slate-200 text-slate-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Su Tesisatı */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    Diyarbakır Su Tesisatçısı
                  </h3>
                  <Link href="/diyarbakir-su-tesisati" className="text-xs font-semibold text-blue-600 hover:underline">
                    Su Tesisatı Sayfasına Git →
                  </Link>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Cihazla kırmadan su kaçağı bulma, makineli tıkanıklık açma ve sıhhi tesisat onarımı yaptığımız bölgeler:
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  "Diyarbakır Su Tesisatçısı",
                  "Kırmadan Su Kaçağı Tespiti",
                  "Kayapınar Su Tesisatçısı",
                  "Diclekent Tesisatçı",
                  "75 Yol Su Tesisatı",
                  "Gaziler Tesisatçı",
                  "Bağlar Su Tesisatçısı",
                  "Bağlar Dörtyol Tesisat",
                  "Şeyh Şamil Tesisatçı",
                  "Yenişehir Tesisatçı",
                  "Ofis Tesisatçı",
                  "Ekinciler Su Tesisatı",
                  "Seyrantepe Tesisatçı",
                  "Sur Su Tesisatçısı",
                  "Diyarbakır Tıkanıklık Açma",
                  "Diyarbakır Lavabo Açma",
                  "Diyarbakır Tuvalet Gider Açma",
                  "Diyarbakır Pimaş Açma",
                  "Diyarbakır Petek Temizliği",
                  "Rezervuar Tamiri Diyarbakır",
                  "Musluk Batarya Montajı",
                  "Acil Tesisatçı Diyarbakır",
                ].map((tag, idx) => (
                  <Link
                    key={idx}
                    href="/diyarbakir-su-tesisati"
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-slate-200 text-slate-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Kombi Servisi */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    Diyarbakır Kombi Servisi
                  </h3>
                  <Link href="/diyarbakir-kombi-servisi" className="text-xs font-semibold text-amber-600 hover:underline">
                    Kombi Sayfasına Git →
                  </Link>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tüm markalarda garantili arıza onarımı, kart tamiri, petek yıkama ve kışlık bakım hizmeti verdiğimiz bölgeler:
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {[
                  "Diyarbakır Kombi Servisi",
                  "Diyarbakır Kombi Tamiri",
                  "Diyarbakır Kombi Bakımı",
                  "Diyarbakır Kombi Kart Tamiri",
                  "DemirDöküm Servisi Diyarbakır",
                  "Baymak Servisi Diyarbakır",
                  "Bosch Kombi Diyarbakır",
                  "Vaillant Kombi Diyarbakır",
                  "ECA Kombi Diyarbakır",
                  "Buderus Kombi Diyarbakır",
                  "Viessmann Kombi Diyarbakır",
                  "Kayapınar Kombi Servisi",
                  "Diclekent Kombi Servisi",
                  "75 Yol Kombi Bakım",
                  "Gaziler Kombi Ustası",
                  "Bağlar Kombi Tamiri",
                  "Yenişehir Kombi Servisi",
                  "Ofis Kombi Servisi",
                  "Seyrantepe Kombi Tamiri",
                  "Diyarbakır Nöbetçi Kombici",
                  "Diyarbakır Petek Temizleme",
                  "Kombi Ateşleme Arızası",
                ].map((tag, idx) => (
                  <Link
                    key={idx}
                    href="/diyarbakir-kombi-servisi"
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200 border border-slate-200 text-slate-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Diyarbakır Kayapınar, Bağlar, Yenişehir, Sur ve çevre semtlerde 7/24 nöbetçi çilingir, kırmadan su kaçağı tespiti ve kombi servisi. Çağrınızdan itibaren 15-25 dakikada garantili adrese varış.
          </div>
        </div>
      </section>

      {/* ==================== ALT ACİL SERVİS BANNERI ==================== */}
      <section className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8">
          <div className="space-y-2 mb-6 sm:mb-0">
            <div className="inline-flex items-center gap-2 bg-black/20 px-3 py-1 rounded-full text-xs font-bold text-amber-200">
              <Clock className="w-3.5 h-3.5" />
              <span>Diyarbakır İçi 15-25 Dk Varış</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Diyarbakır’da Beklemeden Usta Çağırın!
            </h2>
            <p className="text-orange-100 text-sm sm:text-base">
              Çilingir, su kaçağı veya kombi arızası için hemen arayın, en yakın usta adresinize hareket etsin.
            </p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-black text-base shadow-xl"
            >
              <Phone className="w-5 h-5 text-orange-400" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                "Acil servis ihtiyacım var, Diyarbakır'dan yazıyorum."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-base shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-emerald-600" />
              <span>WhatsApp Konum At</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
