import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Flame,
  ShieldCheck,
  Wrench,
  Cpu,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ThermometerSun,
  Zap,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Diyarbakır Kombi Servisi 7/24 | Bakım, Arıza Tamiri, Kart Onarımı",
  description:
    "Diyarbakır 7/24 kombi servisi. Tüm markalarda garantili arıza onarımı, yıllık periyodik bakım, elektronik kart tamiri, petek temizleme. Kayapınar, Bağlar, Yenişehir 15 dk varış. ☎ 0538 333 89 80",
  keywords: [
    "Diyarbakır kombi servisi",
    "diyarbakir kombi servisi",
    "Diyarbakır kombi bakımı",
    "Diyarbakır kombi tamircisi",
    "Diyarbakır kombi tamiri",
    "Diyarbakır acil kombi servisi",
    "Diyarbakır nöbetçi kombici",
    "Diyarbakır kombi ustası",
    "Diyarbakır kombi kart tamiri",
    "Diyarbakır kombi anakart onarımı",
    "Diyarbakır petek temizliği",
    "Diyarbakır kombi petek yıkama",
    "Diyarbakır kombi su basıncı düşüyor",
    "Diyarbakır kombi ateşleme yapmıyor",
    "Diyarbakır kombi sıcak su vermiyor",
    "DemirDöküm kombi servisi Diyarbakır",
    "Baymak kombi servisi Diyarbakır",
    "Bosch kombi servisi Diyarbakır",
    "Vaillant kombi servisi Diyarbakır",
    "ECA kombi servisi Diyarbakır",
    "Buderus kombi servisi Diyarbakır",
    "Viessmann kombi servisi Diyarbakır",
    "Protherm kombi servisi Diyarbakır",
    "Ariston kombi servisi Diyarbakır",
    "Airfel kombi servisi Diyarbakır",
    "Kayapınar kombi servisi",
    "kayapinar kombi servisi",
    "Diclekent kombi servisi",
    "diclekent kombici",
    "75 yol kombi servisi",
    "75. yol kombi bakım",
    "Gaziler kombi servisi",
    "Peyas kombi servisi",
    "Huzurevleri kombi ustası",
    "Fırat bulvarı kombi servisi",
    "Bağlar kombi tamircisi",
    "baglar kombi servisi",
    "Bağlar dörtyol kombici",
    "Şeyh Şamil kombi tamiri",
    "5 Nisan kombi servisi",
    "Yenişehir kombi ustası",
    "yenisehir kombi servisi",
    "Ofis kombi servisi Diyarbakır",
    "ofis kombi tamiri",
    "Ekinciler kombi servisi",
    "Sanat sokağı kombici",
    "Seyrantepe kombi servisi",
    "Sur kombi servisi",
    "sur kombi tamiri",
  ],
  alternates: {
    canonical: "/diyarbakir-kombi-servisi",
  },
  openGraph: {
    title: "Diyarbakır Kombi Servisi 7/24 | Güler Hizmet | Tüm Markalara 1 Yıl Garanti",
    description:
      "Diyarbakır'da tüm marka kombilere profesyonel arıza tespiti, orijinal yedek parça, kart tamiri ve periyodik kış bakımı. 15 dakikada adresteyiz.",
    url: `${siteConfig.url}/diyarbakir-kombi-servisi`,
  },
};

const brands = [
  { name: "DemirDöküm", model: "Nitromix, Atromix, Atron" },
  { name: "Baymak", model: "Duo Tec, Luna, Lamberti" },
  { name: "Bosch", model: "Condens 2200i, 2300i, 7000" },
  { name: "Vaillant", model: "ecoTEC Plus, ecoTEC Pro" },
  { name: "Buderus", model: "Logamax Plus GB062, GB122" },
  { name: "E.C.A.", model: "Proteus Premix, Citius" },
  { name: "Viessmann", model: "Vitodens 050-W, 100-W" },
  { name: "Protherm", model: "Lynx, Gepard, Jaguar" },
  { name: "Ariston", model: "Clas One, Genus One" },
  { name: "Ferroli", model: "Bluehelix, Domiproject" },
  { name: "Alarko", model: "Serena, Super Fit" },
  { name: "Airfel", model: "Digifel Premix, Maestro" },
];

const errorCodes = [
  { brand: "DemirDöküm", code: "F4 / F1 Hatası", meaning: "Ateşleme arızası veya gaz besleme yok" },
  { brand: "Baymak", code: "E01 / E03 Hatası", meaning: "Gaz yokluğu veya atık gaz baca termostatı arızası" },
  { brand: "Bosch & Buderus", code: "EA / 6A Hatası", meaning: "Alev algılanamadı, iyonizasyon elektrodu sorunu" },
  { brand: "Vaillant", code: "F28 / F29 Hatası", meaning: "Gaz valfi kilitlenmesi veya yetersiz gaz debisi" },
  { brand: "E.C.A.", code: "E4 / E1 Hatası", meaning: "Aşırı sıcaklık limit termostatı veya basınç düşmesi" },
];

const kombiPricing = [
  { service: "Detaylı Periyodik Kombi Bakımı", desc: "Brülör, yanma odası, genleşme tankı ve baca kontrolü", note: "Tasarruf Garantili" },
  { service: "Elektronik Anakart Tamiri & Revizyon", desc: "Sıfır kart almadan test standında 1 yıl garantili onarım", note: "%65 Tasarruf" },
  { service: "Makineli & Kimyasallı Petek Temizliği", desc: "Kombiden sökülerek çift yönlü yıkama ile petek arındırma", note: "Eşit Isınma" },
  { service: "Kombi Sirkülasyon Pompası Değişimi", desc: "Wilo ve Grundfos orijinal sirkülasyon pompaları", note: "1 Yıl Garanti" },
  { service: "Üç Yollu Vana & Step Motor Tamiri", desc: "Sıcak su verip petekleri ısıtmama arızasının çözümü", note: "Aynı Gün Teslim" },
  { service: "Sıfır Yoğuşmalı Kombi Montajı", desc: "Eski kombiyi sökme, yeni kombi montajı ve gaz kaçak testi", note: "Uygunluk Belgeli" },
];

const kombiFaqs: FaqItem[] = [
  {
    question: "Kombi periyodik bakımı ne zaman yapılmalı ve neleri kapsar?",
    answer:
      "Kombi bakımı her yıl kış mevsimi başlamadan önce (Eylül-Kasım ayları arasında) yapılmalıdır. Bakım kapsamında yanma odası ve brülör temizliği, ateşleme ve iyonizasyon elektrotları zımparalanması, genleşme tankı hava basıncı kontrolü, fan motoru ve baca çekiş testi, sirkülasyon pompası kontrolü ve tesisat filtrelerinin kimyasal temizliği yapılır.",
  },
  {
    question: "Kombi çalışıyor ama petekler veya sıcak su ısınmıyor, sebebi nedir?",
    answer:
      "Bu problem genellikle üç yollu vana motorunun takılı kalması, sirkülasyon pompasının sıkışması, NTC ısı sensörünün arızalanması veya plaka eşanjörün kireçle tıkanmasından kaynaklanır. Uzman teknisyenimiz yerinde test cihazıyla arızayı tespit edip aynı gün çözer.",
  },
  {
    question: "Kombi elektronik anakartı tamir edilebilir mi yoksa sıfırı mı gerekir?",
    answer:
      "Elektronik anakart arızalarının yaklaşık %90'ı kart üzerindeki röle, kondansatör, trafo ve mikroçip elemanlarının yenilenmesiyle başarıyla tamir edilir. Sıfır kart maliyetinin 3'te biri fiyatına 1 yıl garantili kart revizyonu yapıyoruz.",
  },
  {
    question: "Hangi marka kombilere servis veriyorsunuz?",
    answer:
      "DemirDöküm, Baymak, Bosch, Vaillant, Buderus, E.C.A, Viessmann, Protherm, Ariston, Ferroli, Alarko ve Airfel başta olmak üzere piyasadaki tüm yoğuşmalı ve konvansiyonel kombi markalarına teknik servis desteği sağlıyoruz.",
  },
  {
    question: "Değiştirilen parçalar orijinal mi ve garantisi var mı?",
    answer:
      "Evet, Güler Hizmet tarafından kombinizde değiştirilen fan motoru, gaz valfi, sirkülasyon pompası, eşanjör ve sensör gibi tüm yedek parçalar üretici onaylı orijinal ürünlerdir ve firmamız tarafından 1 yıl parça garantilidir.",
  },
  {
    question: "Kombi su basıncı sürekli düşüyor, ne yapmalıyım?",
    answer:
      "Kombinizin basıncı birkaç günde veya günde bir 1 barın altına iniyorsa, ya genleşme tankının havası bitmiş/membranı patlamıştır ya da kalorifer tesisatınızda gizli bir su kaçağı vardır. Cihazlarımızla hem kombiyi hem tesisatı kontrol edip kaçağı buluyoruz.",
  },
];

export default function KombiServisiPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HVACBusiness", "LocalBusiness"],
        name: "Güler Hizmet Diyarbakır Kombi Servisi & Bakımı",
        image: `${siteConfig.url}/logo.jpg`,
        description:
          "Diyarbakır 7/24 kombi servisi, arıza onarımı, yıllık periyodik bakım, kart tamiri ve petek temizleme hizmetleri.",
        url: `${siteConfig.url}/diyarbakir-kombi-servisi`,
        telephone: siteConfig.phoneRaw,
        priceRange: "₺₺",
        currenciesAccepted: "TRY",
        paymentAccepted: "Nakit, Kredi Kartı, Havale, EFT",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "182",
          reviewCount: "182",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Diyarbakır Kombi & Isıtma Hizmetleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diyarbakır Kombi Arıza Onarımı & Tamiri",
                description: "Tüm marka yoğuşmalı ve konvansiyonel kombilerde yerinde arıza tespiti ve orijinal parça değişimi.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diyarbakır Kombi Elektronik Kart Tamiri",
                description: "Yüksek voltaj ve arıza sonucu bozulan kombi anakartlarının garantili revizyonu ve tamiri.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Diyarbakır Periyodik Kışlık Kombi Bakımı",
                description: "Genleşme tankı hava kontrolü, brülör temizliği, filtre ve yanma odası temizliği ile %25 yakıt tasarrufu.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "İlaçlı & Makineli Petek Temizliği Servisi",
                description: "Kalorifer peteklerinin içindeki çamur ve kireç tortusunun çift yönlü makine ve özel kimyasallarla temizlenmesi.",
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
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
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
            name: "Diyarbakır Kombi Servisi",
            item: `${siteConfig.url}/diyarbakir-kombi-servisi`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: kombiFaqs.map((faq) => ({
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
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-semibold">Diyarbakır Kombi Servisi</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              Tüm Markalarda Garantili Yetkili Kadro
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Diyarbakır Kombi Servisi, Tamiri & Yıllık Bakımı
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Arıza kodları, ateşleme yapmama, sıcak su kesintisi ve anakart sorunlarında 7/24 yanınızdayız.{" "}
              <strong className="text-white">Kayapınar (Diclekent, 75 Yol), Bağlar, Yenişehir ve Sur</strong> bölgelerine 15-20 dakikada varış.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-black text-base shadow-lg shadow-orange-600/30 transition-transform active:scale-95"
              >
                <Phone className="w-5 h-5" />
                <span>Kombi Ustası Çağır: {siteConfig.phone}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Diyarbakır kombi servisi ihtiyacım var. Kombi markam ve arıza kodunu iletiyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base transition-transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp İle Arıza Danış</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-12">
              {/* Intro */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Diyarbakır’ın Soğuk Kışında Mağdur Olmayın!
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Diyarbakır kış aylarında sert ayazlara sahne olur. Kombinizin ansızın arıza yapması, evinizin soğumasına ve sıcak susuz kalmanıza neden olur. <strong>Güler Hizmet Kombi Servisi</strong> olarak Diyarbakır’ın merkez ilçelerinde (Kayapınar Diclekent, Gaziler, 75. Yol, Bağlar Dörtyol, Yenişehir Ofis) tam donanımlı araçlarımızla günün 24 saati hazır bekliyoruz.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Arıza durumunda kombinizin markası ve hata kodu ne olursa olsun gereksiz parça değişimine gitmeden yerinde test cihazlarımızla arızayı tespit edip en uygun maliyetle onarıyoruz.
                </p>
              </section>

              {/* Arıza Kodları Tablosu */}
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  En Sık Karşılaşılan Kombi Hata Kodları & Anlamları
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {errorCodes.map((ec, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                        <span>{ec.brand}</span>
                        <span className="text-red-600 font-extrabold bg-red-50 px-2 py-0.5 rounded border border-red-200">
                          {ec.code}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs">{ec.meaning}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Service Cards */}
              <section className="space-y-6">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Kombi Teknik Servis Kollarımız
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      Kombi Arıza Tamiratı & Testi
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Sirkülasyon pompası sıkışması, gaz valfi arızası, fan motoru ve NTC sensör arızaları orijinal yedek parça kullanılarak evinizde aynı gün tamir edilir.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                      <ThermometerSun className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      Yıllık Periyodik Kış Bakımı
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Brülör temizliği, genleşme tankı hava basımı, filtre kimyasal temizliği ve gaz kaçak testleri ile doğalgaz faturanızda %20-%30 tasarruf elde edin.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-400 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      Elektronik Anakart Tamiri
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Yüksek voltaj sebebiyle yanan kombi anakartlarını yüksek maliyetlerle değiştirmek yerine test standında garantili olarak onarıyoruz.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                      <Flame className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      Makineli Petek Temizleme
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Peteklerin alt kısımlarında biriken çamur ve kireç tabakasını özel çift yönlü yıkama makineleriyle söküp atıyor, ısınma verimini ikiye katlıyoruz.
                    </p>
                  </div>
                </div>
              </section>

              {/* Brands Grid */}
              <section className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Diyarbakır’da Servis Verdiğimiz Kombi Markaları
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {brands.map((b) => (
                    <div
                      key={b.name}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:border-amber-500 transition-all"
                    >
                      <div className="font-black text-slate-900 text-sm">{b.name}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{b.model}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing Matrix */}
              <section className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Kombi Bakım & Servis Fiyat Rehberi
                </h2>
                <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
                  <div className="divide-y divide-slate-200">
                    {kombiPricing.map((item, idx) => (
                      <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-100/60 transition-colors">
                        <div>
                          <div className="font-bold text-slate-900 text-base">{item.service}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                            {item.note}
                          </span>
                          <a
                            href={`tel:${siteConfig.phoneRaw}`}
                            className="text-xs font-bold text-orange-600 hover:underline"
                          >
                            Teklif Al →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Semt Semt Kombi */}
              <section className="p-8 rounded-3xl bg-amber-950 text-white space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Diyarbakır Semt Semt Nöbetçi Kombi Servis Ekiplerimiz
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Soğuk kış günlerinde beklememeniz için en yakın servis aracımız adresinize yönlendirilir:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-900/60">
                    <strong className="text-amber-400 block mb-1">Kayapınar Kombi Servisi (15 Dk):</strong>
                    <span>Diclekent, Gaziler, 75. Yol (Mahabad Bulvarı), Peyas, Medya, Mezopotamya, Fırat Bulvarı, Stadyum</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-900/60">
                    <strong className="text-amber-400 block mb-1">Bağlar Kombi Servisi (15-20 Dk):</strong>
                    <span>Dörtyol, Şeyh Şamil, Körhat, 5 Nisan Mahallesi, Emek Caddesi, Koşuyolu, Cezaevi Üstü</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-900/60">
                    <strong className="text-amber-400 block mb-1">Yenişehir Kombi Servisi (15 Dk):</strong>
                    <span>Ofis Sanat Sokağı, Ekinciler, Seyrantepe, Şehitlik, Kooperatifler, İstasyon, Fabrika</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/80 border border-amber-900/60">
                    <strong className="text-amber-400 block mb-1">Sur Kombi Servisi (20 Dk):</strong>
                    <span>Dağkapı Meydanı, Mardinkapı, Balıkçılarbaşı, Melikahmet, Gazi Caddesi, Dicle Üniversitesi</span>
                  </div>
                </div>
              </section>

              {/* Error Code & Diagnostic Keyword Hub for High SERP Click-Through */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Diyarbakır’da En Sık Karşılaşılan Kombi Arıza Kodları
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Kombinizin ekranında aşağıdaki hata kodlarından biri görünüyorsa endişelenmeyin; yerinde müdahaleyle dakikalar içinde çözüyoruz:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-extrabold text-slate-900 text-sm text-amber-700">DemirDöküm F4 & F28 Hatası</div>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Ateşleme problemi veya gaz akışı kesintisi. İyonizasyon çubuğu, gaz valfi ve elektronik kart test edilir.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-extrabold text-slate-900 text-sm text-amber-700">Baymak E01 & E03 Hatası</div>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Gaz besleme kesintisi veya diferansiyel hava basınç anahtarı (prosestat) arızası. Parça anında onarılır.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-extrabold text-slate-900 text-sm text-amber-700">Bosch EA & E9 Hatası</div>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Alev algılanamadı hatası veya aşırı ısınma emniyet termostatı devreye girmesi. NTC sensör değişimi yapılır.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-extrabold text-slate-900 text-sm text-amber-700">Vaillant F22 & ECA 01 Hatası</div>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Düşük su basıncı (kuru yanma tehlikesi) veya ateşleme blokajı. Su takviyesi ve kaçak testi yapılır.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="space-y-6 pt-4">
                <div className="border-t border-slate-200 pt-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
                    Sıkça Sorulan Sorular
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                    Diyarbakır Kombi Servisi Hakkında Merak Edilenler
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    Kombi tamiri, bakım ücretleri ve kart revizyonu ile ilgili sorularınızın yanıtları:
                  </p>
                  <FaqAccordion items={kombiFaqs} />
                </div>
              </section>
            </div>

            {/* Right 4 Cols: Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 bg-gradient-to-br from-slate-900 to-amber-950 text-white p-6 rounded-3xl shadow-xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Kombi Ustası Nöbette</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight">
                    Kombiniz Arıza mı Yaptı?
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Sıcak su gelmiyor, petekler ısınmıyor veya hata kodu mu yanıyor? Hemen arayın, 15-20 dakikada evinize gelelim.
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
                      "Diyarbakır kombi arızam var. Kombi ekranındaki hata kodunu göndermek istiyorum."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-3 transition-transform"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>WhatsApp İle Arıza Danış</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tüm Markalara Yerinde Müdahale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>1 Yıl Parça & İşçilik Garantisi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Ekonomik Kart Tamiri Hizmeti</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-bold uppercase text-slate-400 mb-3">
                    Diğer Hizmetlerimiz:
                  </div>
                  <div className="space-y-2 text-xs">
                    <Link
                      href="/diyarbakir-cilingir"
                      className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold transition-colors"
                    >
                      🔑 Çilingir & Hasarsız Kapı Açma →
                    </Link>
                    <Link
                      href="/diyarbakir-su-tesisati"
                      className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold transition-colors"
                    >
                      🔧 Su Tesisatı & Kırmadan Kaçak →
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
