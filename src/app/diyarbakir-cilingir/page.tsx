import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  KeyRound,
  ShieldCheck,
  Clock,
  Phone,
  MessageCircle,
  Car,
  Home,
  Lock,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Building,
  Check,
  MapPin,
  Star,
} from "lucide-react";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Diyarbakır Çilingir 7/24 | Kapı Açma, Kilit Değişimi, Acil Oto Çilingir",
  description:
    "Diyarbakır 7/24 nöbetçi çilingir. Hasarsız çelik kapı açma, Kale kilit barel değişimi, oto çilingir. Kayapınar, Diclekent, 75 Yol, Bağlar, Ofis 15 dakikada adreste. ☎ 0538 333 89 80",
  keywords: [
    "Diyarbakır çilingir",
    "diyarbakir cilingir",
    "Diyarbakır nöbetçi çilingir",
    "Diyarbakır acil çilingir",
    "Diyarbakır oto çilingir",
    "Diyarbakır en yakın çilingir",
    "Diyarbakır kapı açma",
    "Diyarbakır çelik kapı açma",
    "Diyarbakır kilit değişimi",
    "Diyarbakır kale kilit",
    "Diyarbakır anahtarcı",
    "Diyarbakır kilitçi",
    "Diyarbakır 7 24 çilingir",
    "Diyarbakır gece çilingir",
    "Diyarbakır araba kapısı açma",
    "Diyarbakır kapıda kaldım",
    "Diyarbakır barel değişimi",
    "Diyarbakır göbek değişimi",
    "Diyarbakır kasa çilingir",
    "Kayapınar çilingir",
    "kayapinar cilingir",
    "Diclekent çilingir",
    "diclekent cilingir",
    "75 yol çilingir",
    "75. yol çilingir",
    "Gaziler çilingir",
    "Peyas çilingir",
    "Huzurevleri çilingir",
    "Fırat bulvarı çilingir",
    "Mezopotamya çilingir",
    "Talaytepe çilingir",
    "Bağlar çilingir",
    "baglar cilingir",
    "Bağlar dörtyol çilingir",
    "Şeyh Şamil çilingir",
    "Koşuyolu çilingir",
    "5 Nisan çilingir",
    "Yenişehir çilingir",
    "yenisehir cilingir",
    "Ofis çilingir Diyarbakır",
    "ofis cilingir",
    "Ekinciler caddesi çilingir",
    "Sanat sokağı çilingir",
    "Seyrantepe çilingir",
    "Şehitlik çilingir",
    "Sur çilingir",
    "sur cilingir",
    "Dağkapı çilingir",
    "Mardinkapı çilingir",
    "Balıkçılarbaşı çilingir",
  ],
  alternates: {
    canonical: "/diyarbakir-cilingir",
  },
  openGraph: {
    title: "Diyarbakır Çilingir 7/24 | Güler Hizmet | 15 Dk Adreste",
    description:
      "Diyarbakır'da kapıda mı kaldınız? Hasarsız çelik kapı açma, oto çilingir ve kilit değişimi 15-20 dakikada kapınızda.",
    url: `${siteConfig.url}/diyarbakir-cilingir`,
  },
};

const cilingirFaqs: FaqItem[] = [
  {
    question: "Diyarbakır'da çilingir kapıyı açarken kapıya veya kilide zarar verir mi?",
    answer:
      "Hayır, ustalarımız profesyonel Alman maymuncuk ve hassas mekanik aparatlar kullanmaktadır. Çekili (kilitlenmemiş) çelik ve oda kapıları %100 hasarsız, çiziksiz şekilde açılır. Kilitli kapılarda göbek değişimi gerekirse sadece barel çıkartılır, kapı kanadına veya gövdesine hiçbir zarar verilmez.",
  },
  {
    question: "Diclekent, 75. Yol, Bağlar veya Ofis'e kaç dakikada gelirsiniz?",
    answer:
      "Diyarbakır merkezdeki tüm ilçe kavşaklarında (Kayapınar Diclekent, Gaziler, Bağlar Dörtyol, Yenişehir Ofis) sürekli hazır bekleyen motorize ve araçlı ekiplerimiz mevcuttur. Ortalama varış süremiz 15 ila 25 dakika arasındadır.",
  },
  {
    question: "Gece saatlerinde veya pazar günleri nöbetçi çilingiriniz var mı?",
    answer:
      "Evet! Güler Hizmet Diyarbakır haftanın 7 günü 24 saat kesintisiz nöbetçi çilingir hizmeti vermektedir. Gece 03:00 veya resmi bayram tatilleri fark etmeksizin acil çağrı numaramızdan ustamıza anında ulaşabilirsiniz.",
  },
  {
    question: "Oto çilingir hizmetinde aracın camı kırılmadan açılıyor mu?",
    answer:
      "Evet, marka ve modeli ne olursa olsun anahtarı içeride kalmış veya bagajda kilitlenmiş araçlar özel hava yastıklı oto aparatları ve profesyonel maymuncuk sistemleriyle boyaya, fitillere ve camlara sıfır zararla açılır.",
  },
  {
    question: "Kilit göbeği (barel) değişiminde hangi markaları öneriyorsunuz?",
    answer:
      "Öncelikli olarak Türkiye'nin en güvenilir markası olan Kale Kilit tuzaklı barelleri, Yale bilyalı silindirleri ve Desi alarmlı kilit sistemlerini öneriyoruz. Ürünlerimiz orijinal ambalajında ve 2 yıl üretici garantili olarak takılır.",
  },
  {
    question: "Kapı açtırmak için kimlik veya mülkiyet belgesi gerekiyor mu?",
    answer:
      "Yasal mevzuat ve mülk güvenliği gereğince, kapısı açılacak evin veya aracın sahibine ait kimlik, kira kontratı, tapu veya araç ruhsatı gibi belgelerin ibraz edilmesi zorunludur. Belge yoksa bina yöneticisi veya komşuların şahitliği istenir.",
  },
];

const cilingirPricing = [
  { item: "Çekili Çelik Kapı Açma", desc: "Özel aparatla hasarsız, boya çiziksiz açım", time: "15 Dk Varış" },
  { item: "Kilitli Çelik Kapı Açma", desc: "Barel delinerek gövdeye zarar vermeden açım", time: "20 Dk Varış" },
  { item: "Kale Kilit Barel Değişimi", desc: "Orijinal kutulu 3-5 anahtarlı Kale Barel", time: "Yerinde Montaj" },
  { item: "Oto Çilingir (Binek / SUV)", desc: "Hava yastıklı aparatla cam kırılmadan", time: "Tüm Modeller" },
  { item: "Tuzaklı / Bilyalı Emniyet Bareli", desc: "Hırsızlığa karşı kırılmaz gövdeli barel", time: "Yüksek Güvenlik" },
  { item: "Apartman Giriş Kapısı & Otomat", desc: "Hidrolik yay ayarı ve manyetik kartlı kilit", time: "Aynı Gün Servis" },
];

export default function CilingirPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Locksmith", "LocalBusiness"],
        name: "Güler Hizmet Diyarbakır Çilingir & Kapı Açma",
        image: `${siteConfig.url}/logo.jpg`,
        description:
          "Diyarbakır 7/24 acil çilingir, hasarsız çelik kapı açma, oto çilingir ve Kale kilit barel değişimi hizmetleri. Kayapınar, Bağlar, Yenişehir, Sur.",
        url: `${siteConfig.url}/diyarbakir-cilingir`,
        telephone: siteConfig.phoneRaw,
        priceRange: "₺₺",
        currenciesAccepted: "TRY",
        paymentAccepted: "Nakit, Kredi Kartı, Havale, EFT",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "214",
          reviewCount: "214",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Diyarbakır Çilingir Hizmetleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diyarbakır Hasarsız Çelik Kapı Açma",
                description: "Özel maymuncuk aparatıyla kapı kanadına veya kilit mekanizmasına sıfır hasarla çekili kapı açımı.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diyarbakır Kale Kilit Barel Değişimi",
                description: "Tuzaklı, bilyalı, yüksek güvenlikli Kale Kilit ve Yale silindir barel değişimi ve montajı.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diyarbakır Acil Oto Çilingir",
                description: "Tüm marka binek ve ticari araçlarda anahtar içeride kaldığında çiziksiz hava yastıklı kapı açımı.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Apartman Giriş Kapısı & Hidrolik Montajı",
                description: "Apartman giriş kapıları için manyetik kartlı okuyucu, göstergeç sistemi ve kapı hidroliği ayarı.",
              },
            },
          ],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: "Diyarbakır",
          addressRegion: "Diyarbakır",
          postalCode: siteConfig.address.postalCode,
          addressCountry: "TR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: siteConfig.districts.map((d) => ({
          "@type": "AdministrativeArea",
          name: `${d.name}, Diyarbakır`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Diyarbakır Çilingir",
            item: `${siteConfig.url}/diyarbakir-cilingir`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: cilingirFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={schemaData} />

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-orange-400 font-semibold">Diyarbakır Çilingir</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              Diyarbakır 7/24 Nöbetçi Çilingir Hattı
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Diyarbakır Çilingir, Kapı Açma & Kilit Değişimi
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Diyarbakır’ın neresinde olursanız olun kapıda kaldığınızda panik yapmayın.{" "}
              <strong className="text-white">Kayapınar (Diclekent, 75 Yol), Bağlar, Yenişehir (Ofis) ve Sur</strong> bölgelerine 15-20 dakikada intikal ediyoruz.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-black text-base shadow-lg shadow-orange-600/30 transition-transform active:scale-95"
              >
                <Phone className="w-5 h-5" />
                <span>Acil Çilingir Ara: {siteConfig.phone}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Diyarbakır'da kapıda kaldım, acil çilingir yönlendirebilir misiniz? Konum atıyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base transition-transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Konum Gönder</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Columns */}
            <div className="lg:col-span-8 space-y-12">
              {/* Section 1: Intro */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Diyarbakır’da Neden Profesyonel Çilingir Tercih Etmelisiniz?
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Anahtarınızı içeride unutmak, kapının arkasında anahtar takılı kalması veya kilidin aniden dönmemesi herkesin başına gelebilecek stresli durumlardır. Bu gibi durumlarda kapıya tekmeyle vurmak, kredi kartı veya tornavidayla kilit dilini zorlamak kapı kasasını eğerek binlerce liralık zarara neden olur.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  <strong>Güler Hizmet Diyarbakır Çilingir Servisi</strong>, mesleki yeterlilik belgeli ustaları ve Alman menşeili hassas maymuncuk aparatlarıyla kapınızı sıfır hasarla açar. İşlem bitiminde kapınız ilk günkü pürüzsüzlüğünde çalışmaya devam eder.
                </p>
              </section>

              {/* Service Cards Grid */}
              <section className="space-y-6">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Diyarbakır Çilingir Uzmanlık Alanlarımız
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-400 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                      <Home className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      Hasarsız Çelik Kapı Açma
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Diyarbakır konutlarında sıkça bulunan Sur Çelik Kapı, Kale, Dortek ve Formet marka çelik kapılar özel kilit açma teknikleriyle boyası çizilmeden ve kilidi bozulmadan açılır.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      Kale Kilit & Barel Değişimi
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Yeni bir eve taşındığınızda eski ev sahibinden veya kiracıdan kalan kilitleri değiştirmek hayati önem taşır. Hırsızlığa karşı tuzaklı, bilyalı orijinal Kale Kilit barelleri takıyoruz.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                      <Car className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      Diyarbakır Oto Çilingir
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Anahtarınız bagajda mı kaldı yoksa kontak üstündeyken kapılar mı kilitlendi? Hava yastıklı açma aparatlarımızla arabanızın camını kırmadan dakikalar içinde açıyoruz.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-400 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                      <KeyRound className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      Kasa Açma & Yüksek Güvenlik
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Anahtarı kaybolan çelik para kasaları, ofis kasaları, bina giriş kapısı hidrolik yayları ve manyetik kartlı geçiş kilitlerinin montaj ve bakımını yapıyoruz.
                    </p>
                  </div>
                </div>
              </section>

              {/* Pricing Matrix */}
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Çilingir Hizmet & Fiyat Tablosu
                </h2>
                <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
                  <div className="divide-y divide-slate-200">
                    {cilingirPricing.map((item, idx) => (
                      <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-100/60 transition-colors">
                        <div>
                          <div className="font-bold text-slate-900 text-base">{item.item}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                            {item.time}
                          </span>
                          <a
                            href={`tel:${siteConfig.phoneRaw}`}
                            className="text-xs font-bold text-orange-600 hover:underline"
                          >
                            Fiyat Sor →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Semt Semt Çilingir */}
              <section className="p-8 rounded-3xl bg-slate-900 text-white space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Diyarbakır Semt Semt Nöbetçi Çilingir Ekiplerimiz
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Diyarbakır’ın her köşesine 15 ila 25 dakika içinde hasarsız kapı açma ve kilit yenileme hizmeti ulaştırıyoruz:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <strong className="text-amber-400 block mb-1">Kayapınar Çilingir (15 Dk):</strong>
                    <span>Diclekent Bulvarı, 75. Metrelik Yol, Gaziler Çeşmesi, Peyas, Huzurevleri, Mezopotamya, Fırat Bulvarı, Talaytepe Stadyum</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <strong className="text-amber-400 block mb-1">Bağlar Çilingir (15-20 Dk):</strong>
                    <span>Bağlar Dörtyol, Şeyh Şamil, Körhat, 5 Nisan Mahallesi, Emek Caddesi, Koşuyolu Parkı, Cezaevi Üstü, Girne Caddesi</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <strong className="text-amber-400 block mb-1">Yenişehir Çilingir (15 Dk):</strong>
                    <span>Ofis Ekinciler Caddesi, Sanat Sokağı Civarı, Seyrantepe, Şehitlik, Kooperatifler, Vilayet, İstasyon Caddesi, Fabrika</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <strong className="text-amber-400 block mb-1">Sur Çilingir (20 Dk):</strong>
                    <span>Dağkapı Meydanı, Mardinkapı, Balıkçılarbaşı, Melikahmet, Gazi Caddesi, İskenderpaşa, Çarıklı, Dicle Üniversitesi Kampüsü</span>
                  </div>
                </div>
              </section>

              {/* Supported Lock Brands & Security Features for Local SEO */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Taktığımız Orijinal Kilit ve Barel Markaları
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Kapınızın güvenliğini artırmak için sadece TSE belgeli, hırsızların açamayacağı tuzaklı ve delinmeye dirençli çelik kilit göbeklerini tercih ediyoruz.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-extrabold text-slate-900 text-sm">Kale Kilit</div>
                    <div className="text-[11px] text-slate-500 mt-1">Tuzaklı & Bilyalı Göbek</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-extrabold text-slate-900 text-sm">Yale</div>
                    <div className="text-[11px] text-slate-500 mt-1">Yüksek Emniyet Bareli</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-extrabold text-slate-900 text-sm">Mul-T-Lock</div>
                    <div className="text-[11px] text-slate-500 mt-1">Kopyalanamaz Kartlı Sistem</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-extrabold text-slate-900 text-sm">Desi & Daf</div>
                    <div className="text-[11px] text-slate-500 mt-1">Alarmlı Güvenlik Kilidi</div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="space-y-6 pt-4">
                <div className="border-t border-slate-200 pt-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider mb-2">
                    Sıkça Sorulan Sorular
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                    Diyarbakır Çilingir Hakkında Merak Edilenler
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    Kapı açma, kilit değişimi ve oto çilingir süreçleri hakkında sorularınızın yanıtları:
                  </p>
                  <FaqAccordion items={cilingirFaqs} />
                </div>
              </section>
            </div>

            {/* Right 4 Columns: Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 rounded-3xl shadow-xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Şu Anda Nöbetçi Çilingir Açık</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight">
                    Kapıda mı Kaldınız?
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Diyarbakır merkezinde aramanızdan sonra 15-20 dakika içinde kapınızdayız. Hasarsız kapı açımı garantisi veriyoruz.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="w-full py-4 px-4 rounded-2xl bg-orange-600 hover:bg-orange-700 active:scale-95 text-white font-black text-base flex items-center justify-center gap-3 shadow-lg shadow-orange-600/30 transition-transform"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{siteConfig.phone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      "Merhaba Güler Hizmet, Diyarbakır'da çilingir gerekiyor. Konum atıyorum."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-3 transition-transform"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>WhatsApp Konum Gönder</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>%100 Hasarsız Kapı Açma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Orijinal Kale Kilit Ürünleri</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Diyarbakır Esnaf Odası Kayıtlı</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-bold uppercase text-slate-400 mb-3">
                    Diğer Acil Servislerimiz:
                  </div>
                  <div className="space-y-2 text-xs">
                    <Link
                      href="/diyarbakir-su-tesisati"
                      className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold transition-colors"
                    >
                      🔧 Su Tesisatı & Kırmadan Kaçak →
                    </Link>
                    <Link
                      href="/diyarbakir-kombi-servisi"
                      className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold transition-colors"
                    >
                      🔥 Kombi Servisi & Kart Tamiri →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
