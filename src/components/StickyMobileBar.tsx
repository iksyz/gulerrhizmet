"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";

export default function StickyMobileBar() {
  return (
    <aside
      aria-label="Acil Arama ve WhatsApp Butonları"
      className="fixed bottom-6 right-5 z-40 flex flex-col items-center gap-3.5 select-none transition-all duration-300"
    >
      {/* 1. BLUE PHONE BUTTON (Mavi Arama Butonu) */}
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        aria-label={`7/24 Acil Ara: ${siteConfig.phone}`}
        className="floating-btn-phone relative group w-16 h-16 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white transition-all duration-300 transform active:scale-90 focus:outline-none focus:ring-4 focus:ring-blue-400/50 shadow-2xl"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-blue-500 opacity-30 animate-ping pointer-events-none" />

        {/* White Phone Handset Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-white relative z-10 transition-transform duration-300 group-hover:rotate-12"
        >
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>

        {/* Desktop Tooltip */}
        <span className="hidden lg:group-hover:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap shadow-xl border border-slate-700 pointer-events-none items-center gap-1.5">
          <span>📞 Hemen Ara</span>
          <span className="text-orange-400">({siteConfig.phone})</span>
        </span>
      </a>

      {/* 2. GREEN WHATSAPP BUTTON (Yeşil WhatsApp Butonu) */}
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
          "Merhaba Güler Hizmet Diyarbakır, acil servis için konum atmak istiyorum."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp İle Konum Gönder"
        className="floating-btn-whatsapp relative group w-16 h-16 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white transition-all duration-300 transform active:scale-90 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 shadow-2xl"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-25 animate-ping [animation-delay:1s] pointer-events-none" />

        {/* White WhatsApp Icon matching screenshot */}
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-white relative z-10 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.16 8.16 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8 2.53 1.09 2.53.73 2.98.69.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29" />
        </svg>

        {/* Desktop Tooltip */}
        <span className="hidden lg:group-hover:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap shadow-xl border border-slate-700 pointer-events-none items-center gap-1.5">
          <span>💬 WhatsApp ile Yazın</span>
        </span>
      </a>
    </aside>
  );
}
