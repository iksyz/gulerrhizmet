import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-slate-800 text-sm">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-base">20-30 Dk Varış Süresi</div>
              <p className="text-slate-400 text-xs mt-0.5">Kayapınar, Bağlar, Yenişehir, Sur merkez ilçelere anında intikal</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-base">Garantili & Faturalı Esnaf</div>
              <p className="text-slate-400 text-xs mt-0.5">Yapılan tüm tamir, kilit montajı ve tesisat işlerinde %100 güvence</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            <div className="w-12 h-12 rounded-xl bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-base">7/24 Kesintisiz Nöbetçi Hat</div>
              <p className="text-slate-400 text-xs mt-0.5">Gece yarısı, resmi tatil ve pazar günleri de hizmetinizdeyiz</p>
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About & Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt="Güler Hizmet Diyarbakır"
                className="w-12 h-12 rounded-full object-contain bg-white p-0.5 shadow-md border border-slate-700"
              />
              <div>
                <div className="font-black text-xl text-white tracking-tight leading-none">
                  {siteConfig.name}
                </div>
                <span className="text-[11px] text-slate-400 font-medium">7/24 Çilingir • Tesisat • Kombi</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Diyarbakır genelinde 7/24 acil çilingir, kırmadan su kaçağı tespiti, tıkanıklık açma ve tüm marka kombi bakım/onarım hizmetleri sunuyoruz.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Yetkili & Deneyimli Usta Kadrosu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hasarsız Kapı & Tesisat Çözümleri</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Orijinal Kilit & Kombi Yedek Parçaları</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-slate-300">
              Hizmet Kollarımız
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/diyarbakir-cilingir"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-blue-500">›</span>
                  Diyarbakır Çilingir & Kapı Açma
                </Link>
              </li>
              <li>
                <Link
                  href="/diyarbakir-cilingir"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 text-slate-400 text-xs pl-3"
                >
                  • Kale Kilit & Göbek Değişimi
                </Link>
              </li>
              <li>
                <Link
                  href="/diyarbakir-cilingir"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 text-slate-400 text-xs pl-3"
                >
                  • Oto Çilingir & Araba Kapısı Açma
                </Link>
              </li>
              <li>
                <Link
                  href="/diyarbakir-su-tesisati"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 pt-2"
                >
                  <span className="text-blue-500">›</span>
                  Diyarbakır Su Tesisatçısı
                </Link>
              </li>
              <li>
                <Link
                  href="/diyarbakir-su-tesisati"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 text-slate-400 text-xs pl-3"
                >
                  • Kırmadan Su Kaçağı Tespiti
                </Link>
              </li>
              <li>
                <Link
                  href="/diyarbakir-su-tesisati"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 text-slate-400 text-xs pl-3"
                >
                  • Tıkanıklık & Gider Açma
                </Link>
              </li>
              <li>
                <Link
                  href="/diyarbakir-kombi-servisi"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 pt-2"
                >
                  <span className="text-blue-500">›</span>
                  Diyarbakır Kombi Servisi
                </Link>
              </li>
              <li>
                <Link
                  href="/diyarbakir-kombi-servisi"
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 text-slate-400 text-xs pl-3"
                >
                  • Periyodik Bakım & Petek Temizliği
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Regions (Internal SEO Links) */}
          <div>
            <h3 className="font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-slate-300">
              Diyarbakır Hizmet Bölgeleri
            </h3>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {siteConfig.districts.map((district) => (
                <Link
                  key={district.slug}
                  href="/#bolgeler"
                  className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-900/60 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                >
                  {district.name}
                </Link>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              Diyarbakır’ın merkez 4 ilçesi ve çevre mahallelerinde aktif gezici servis araçlarımız bulunmaktadır.
            </p>
          </div>

          {/* Col 4: Contact & Direct Call */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-base mb-4 tracking-wide uppercase text-xs text-slate-300">
              Hızlı İletişim
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-start gap-3 p-3 rounded-xl bg-orange-600/10 border border-orange-500/20 text-orange-400 hover:bg-orange-600/20 transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0 mt-0.5 text-orange-500" />
                <div>
                  <div className="text-xs text-slate-400">7/24 Çağrı Hattı:</div>
                  <div className="font-black text-white text-base">{siteConfig.phone}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Merhaba Güler Hizmet, Diyarbakır servis talebim var."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-600/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 shrink-0 mt-0.5 text-emerald-500" />
                <div>
                  <div className="text-xs text-slate-400">WhatsApp Danışma:</div>
                  <div className="font-bold text-white">Anında Konum Gönderin</div>
                </div>
              </a>

              <div className="flex items-start gap-3 pt-1 text-slate-400 text-xs">
                <MapPin className="w-4 h-4 shrink-0 text-slate-500 mt-0.5" />
                <span>{siteConfig.address.street}, {siteConfig.address.locality} / Diyarbakır</span>
              </div>

              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <Mail className="w-4 h-4 shrink-0 text-slate-500" />
                <span>{siteConfig.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright & Designed with by Rengin Yazılım */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © 2024 {siteConfig.name}. Tüm hakları saklıdır.
          </p>

          <div className="hidden sm:flex gap-4 text-slate-500">
            <span>Diyarbakır Çilingir</span>
            <span>•</span>
            <span>Su Tesisatı</span>
            <span>•</span>
            <span>Kombi Servisi</span>
          </div>

          {/* Designed with 💖 by Rengin Yazılım */}
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Designed with</span>
            <span className="text-pink-500 text-sm inline-block select-none transform hover:scale-125 transition-transform">
              💖
            </span>
            <span>by</span>
            <a
              href="https://www.renginyazilim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white underline decoration-white/80 underline-offset-4 hover:text-cyan-300 hover:decoration-cyan-300 transition-all"
            >
              Rengin Yazılım.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

