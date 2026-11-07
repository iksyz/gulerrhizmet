# Güler Hizmet Diyarbakır — 7/24 Acil Teknik Servis Web Sitesi

Bu proje, Diyarbakır genelinde 7/24 acil çilingir, su tesisatı ve kombi servisi hizmeti veren **Güler Hizmet** için **Next.js 14 (App Router), TypeScript ve Tailwind CSS** kullanılarak geliştirilmiş modern, dönüşüm odaklı (conversion-focused) ve %100 Yerel SEO (Local SEO) uyumlu web uygulamasıdır.

---

## 🚀 Hızlı Başlangıç

### Geliştirme (Development) Modu:
```bash
npm run dev
```
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### Canlı / Üretim (Production) Build:
```bash
npm run build
npm start
```

---

## 📁 Proje Mimarisi

```
gulerhizmet/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Kök layout (Header, Footer, Sticky Bar, LocalBusiness Schema)
│   │   ├── page.tsx                  # Ana Sayfa (Hero, 3 Hizmet Kartı, Neden Biz, Bölgeler, Harita)
│   │   ├── globals.css               # Tailwind CSS & özel animasyonlar
│   │   ├── sitemap.ts                # Otomatik SEO sitemap.xml oluşturucu
│   │   ├── robots.ts                 # Otomatik robots.txt oluşturucu
│   │   ├── diyarbakir-cilingir/
│   │   │   └── page.tsx              # Çilingir Hizmet Sayfası (Locksmith + FAQPage Schema)
│   │   ├── diyarbakir-su-tesisati/
│   │   │   └── page.tsx              # Su Tesisatı & Kaçak Sayfası (Plumber + FAQPage Schema)
│   │   └── diyarbakir-kombi-servisi/
│   │       └── page.tsx              # Kombi Servisi Sayfası (HVAC + FAQPage Schema)
│   ├── components/
│   │   ├── Header.tsx                # Responsive Sticky Navbar & Mobil Drawer
│   │   ├── Footer.tsx                # Zengin SEO iç linklemeli Kurumsal Footer
│   │   ├── StickyMobileBar.tsx       # Mobilde Altta Sabit "Hemen Ara" & "WhatsApp" Butonları
│   │   ├── ContactForm.tsx           # Anında WhatsApp'a yönlendiren Akıllı Talep Formu
│   │   ├── FaqAccordion.tsx          # Açılır-kapanır interaktif SSS Bileşeni
│   │   └── JsonLd.tsx                # Google Zengin Sonuçlar için Yapısal Veri Enjeksiyonu
│   └── data/
│       └── siteConfig.ts             # Tüm telefon, adres, ilçe ve hizmetlerin TEK MERKEZİ
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 🎯 Öne Çıkan Özellikler

1. **Tek Merkezden Yönetim (`src/data/siteConfig.ts`)**:
   - Telefon numarası, WhatsApp numarası, adres ve ilçe listesini değiştirmek istediğinizde sadece bu tek dosyayı güncellemeniz yeterlidir. Sitedeki tüm sayfalar, meta etiketleri ve JSON-LD şemaları otomatik güncellenir.

2. **Dönüşüm Odaklı UX (Mobil Öncelikli)**:
   - Mobilde ekranın altında sabit (sticky) **"Hemen Ara" (Click-to-Call)** ve **"WhatsApp İle Ulaş"** butonları.
   - Form doldurulduğunda arıza türü, konum ve aciliyet detaylarını otomatik formatlayıp doğrudan WhatsApp sohbetine aktaran interaktif form.

3. **Maksimum Yerel SEO (Local SEO)**:
   - Google için geçerli **`LocalBusiness`**, **`EmergencyService`**, **`Locksmith`**, **`Plumber`**, **`HVACBusiness`** ve **`FAQPage`** JSON-LD şemaları.
   - Diyarbakır'ın tüm merkez ilçeleri (Kayapınar, Bağlar, Yenişehir, Sur, Diclekent, Gaziler, 75. Yol vb.) stratejik olarak H1, H2, H3 ve metin gövdelerine yerleştirilmiştir.
   - Otomatik `sitemap.xml` ve `robots.txt` rotaları hazırdır.

4. **Yüksek Performans & Core Web Vitals**:
   - Tüm sayfalar statik olarak önceden derlenir (SSG - Static Site Generation). Yükleme süresi 0 ms'ye yakındır.

