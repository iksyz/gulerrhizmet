"use client";

import React, { useState } from "react";
import { MessageCircle, Send, CheckCircle2, Phone, AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    district: "Kayapınar",
    service: "Çilingir & Kapıda Kalma",
    urgency: "Acil (20-30 Dk İçinde Gelsin)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clean phone number
    const cleanPhone = formData.phone.trim();
    if (!cleanPhone) return;

    // Construct formatted WhatsApp message
    const message = `🚨 *GÜLER HİZMET DİYARBAKIR - SERVİS ÇAĞRISI* 🚨
------------------------------------
👤 *Müşteri:* ${formData.name.trim()}
📞 *Telefon:* ${cleanPhone}
📍 *İlçe / Semt:* ${formData.district}
🔧 *Hizmet:* ${formData.service}
⚡ *Aciliyet:* ${formData.urgency}
${formData.notes.trim() ? `📝 *Açıklama:* ${formData.notes.trim()}` : ""}
------------------------------------
*Lütfen en yakın nöbetçi ustayı yönlendiriniz.*`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}&text=${encoded}`;

    setGeneratedUrl(waUrl);
    setSubmitted(true);

    // Direct redirect - universally triggers WhatsApp app on mobile and web on desktop
    try {
      window.location.href = waUrl;
    } catch {
      window.open(waUrl, "_blank");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 relative">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            7/24 Canlı Form
          </span>
          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
            Usta Hatta
          </span>
        </div>
        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          Hızlı Servis & WhatsApp Talep Formu
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Bilgilerinizi girin, talebiniz otomatik olarak nöbetçi ustamızın WhatsApp hattına iletilsin.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
              Adınız Soyadınız *
            </label>
            <input
              type="text"
              required
              placeholder="Örn: Ahmet Yılmaz"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
              Telefon Numaranız *
            </label>
            <input
              type="tel"
              required
              placeholder="05XX XXX XX XX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 text-slate-800"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
              Diyarbakır İlçeniz / Bölgeniz
            </label>
            <select
              value={formData.district}
              onChange={(e) => setFormData({ ...formData, district: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 font-bold text-slate-800 cursor-pointer"
            >
              {siteConfig.districts.map((d) => (
                <option key={d.slug} value={d.name}>
                  {d.name} {d.featured ? "(Hızlı 15 Dk)" : ""}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
              İhtiyaç Duyulan Hizmet
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 font-bold text-slate-800 cursor-pointer"
            >
              <option value="Çilingir & Kapıda Kalma">🔑 Çilingir (Kapıda Kaldım / Kilit Değişimi)</option>
              <option value="Oto Çilingir">🚗 Oto Çilingir (Araba Kapısı Açma)</option>
              <option value="Kırmadan Su Kaçağı Tespiti">🔍 Kırmadan Su Kaçağı Tespiti</option>
              <option value="Tıkanıklık Açma">🔧 Tıkanıklık Açma (Lavabo / Tuvalet)</option>
              <option value="Sıhhi Tesisat Tamiri">🚰 Sıhhi Tesisat & Musluk/Batarya Montajı</option>
              <option value="Kombi Arıza & Tamir">🔥 Kombi Arızası & Çalışmıyor</option>
              <option value="Kombi Bakımı & Petek Temizliği">❄️ Yıllık Kombi Bakımı & Petek Temizliği</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
            Aciliyet Durumu
          </label>
          <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, urgency: "Acil (20-30 Dk İçinde Gelsin)" })}
              className={`p-3 rounded-xl border transition-all text-center cursor-pointer ${
                formData.urgency.startsWith("Acil")
                  ? "bg-red-50 border-red-500 text-red-700 font-bold shadow-sm"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              ⚡ Acil Durum (20 Dk)
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, urgency: "Randevulu / Gün İçinde" })}
              className={`p-3 rounded-xl border transition-all text-center cursor-pointer ${
                !formData.urgency.startsWith("Acil")
                  ? "bg-blue-50 border-blue-500 text-blue-700 font-bold shadow-sm"
                  : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              📅 Gün İçi / Randevulu
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
            Sorunun Detayı (İsteğe Bağlı)
          </label>
          <textarea
            rows={3}
            placeholder="Örn: Çelik kapı kilitli kaldı / alt komşuya su damlıyor / kombi hata kodu veriyor..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-slate-50/50 text-slate-800"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-black text-base shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-3 transition-all cursor-pointer"
        >
          <MessageCircle className="w-5 h-5 fill-white shrink-0" />
          <span>WhatsApp İle Talebi Gönder & Fiyat Al</span>
          <Send className="w-4 h-4 ml-1 shrink-0" />
        </button>

        {/* Success / Fallback Direct Action */}
        {submitted && generatedUrl && (
          <div className="p-4 bg-emerald-50 text-emerald-900 rounded-2xl border-2 border-emerald-300 space-y-2 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Talebiniz WhatsApp formatına aktarıldı!</span>
            </div>
            <p className="text-xs text-emerald-700">
              WhatsApp otomatik olarak açılmadıysa aşağıdaki yeşil butona dokunarak doğrudan ustaya mesaj gönderebilirsiniz:
            </p>
            <a
              href={generatedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Sohbetini Aç</span>
            </a>
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 px-1">
          <span>🔒 Bilgileriniz gizli tutulur.</span>
          <span>⚡ Ücretsiz ön fiyat & keşif</span>
        </div>
      </form>
    </div>
  );
}
