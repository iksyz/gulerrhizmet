import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Wrench,
  Camera,
  Activity,
  Droplets,
  Search,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Flame,
  ArrowRight,
  AlertCircle,
  Pipette,
  Check,
} from "lucide-react";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Diyarbakır Su Tesisatçısı 7/24 | Kırmadan Su Kaçağı Tespiti & Tıkanıklık Açma",
  description:
    "Diyarbakır 7/24 acil su tesisatçısı. Cihazla kırmadan su kaçağı bulma, lavabo tuvalet pimaş tıkanıklığı açma, petek temizliği. Kayapınar, Bağlar, Yenişehir, Ofis 15 dk varış. ☎ 0538 333 89 80",
  keywords: [
    "Diyarbakır su tesisatçısı",
    "diyarbakir su tesisatcisi",
    "Diyarbakır tesisatçı",
    "Diyarbakır kırmadan su kaçağı tespiti",
    "Diyarbakır su kaçağı bulma",
    "Diyarbakır cihazlı su kaçağı tespiti",
    "Diyarbakır su kaçağı ustası",
    "Diyarbakır tıkanıklık açma",
    "Diyarbakır gider açma",
    "Diyarbakır lavabo tıkanıklığı açma",
    "Diyarbakır tuvalet tıkanıklığı açma",
    "Diyarbakır klozet tıkanıklığı",
    "Diyarbakır pimaş açma",
    "Diyarbakır banyo gider açma",
    "Diyarbakır sıhhi tesisat",
    "Diyarbakır sıhhi tesisat ustası",
    "Diyarbakır acil tesisatçı",
    "Diyarbakır nöbetçi tesisatçı",
    "Diyarbakır 7 24 tesisatçı",
    "Diyarbakır petek temizliği",
    "Diyarbakır kombi petek yıkama",
    "Diyarbakır gömme rezervuar tamiri",
    "Diyarbakır musluk batarya montajı",
    "Kayapınar su tesisatçısı",
    "kayapinar su tesisatcisi",
    "Diclekent su tesisatçısı",
    "diclekent tesisatci",
    "75 yol su tesisatçısı",
    "75. yol su tesisatı",
    "Gaziler su tesisatı",
    "Peyas su tesisatçısı",
    "Huzurevleri su tesisatı",
    "Fırat bulvarı tesisatçı",
    "Mezopotamya su tesisatçısı",
    "Bağlar su tesisatçısı",
    "baglar su tesisatcisi",
    "Bağlar dörtyol tesisatçı",
    "Şeyh Şamil tesisatçı",
    "5 Nisan su tesisatçısı",
    "Koşuyolu tesisatçı",
    "Yenişehir su tesisatçısı",
    "yenisehir su tesisatcisi",
    "Ofis tesisatçı Diyarbakır",
    "ofis tesisatci",
    "Ekinciler su tesisatçısı",
    "Sanat sokağı tesisatçı",
    "Seyrantepe tesisatçı",
    "Şehitlik su tesisatçısı",
    "Sur su tesisatçısı",
    "sur tesisatci",
    "Dağkapı su tesisatçısı",
  ],
  alternates: {
    canonical: "/diyarbakir-su-tesisati",
  },
  openGraph: {
    title: "Diyarbakır Su Tesisatçısı 7/24 | Kırmadan Su Kaçağı & Tıkanıklık | Güler Hizmet",
    description:
      "Diyarbakır genelinde cihazlı tespit ile evinizi kırmadan su kaçağını noktasal buluyor, tıkanıklıkları açıyoruz. 15 dakikada adresteyiz.",
    url: `${siteConfig.url}/diyarbakir-su-tesisati`,
  },
};

const tesisatFaqs: FaqItem[] = [
  {
    question: "Kırmadan su kaçağı tespiti nasıl yapılıyor? Gerçekten fayanslar kırılmıyor mu?",
    answer:
      "Evet! Gelişmiş elektro-akustik dinleme mikrofonları ve boru içi nem ölçer cihazlar kullanıyoruz. Borudaki sızıntı duvar ve fayans arkasında noktasal olarak tespit edilir. Sadece arızalı olan tek bir fayans hizasında işlem yapılarak evin inşaat alanına dönmesi engellenir.",
  },
  {
    question: "Tıkanıklık açma pimaş borularına zarar verir mi?",
    answer:
      "Asla zarar vermez. Kullandığımız çelik helezon yaylı ve spiral döner başlıklı makineler plastik ve döküm pimaş boruların eğimlerine göre kıvrılarak ilerler. Tıkanıklığa sebep olan bez, ıslak mendil, yağ tortusu ve kireçlenmeyi parçalayarak veya geri çekerek boruyu temizler.",
  },
  {
    question: "Alt komşunun tavanından su damlıyor, nereden kaynaklandığını nasıl anlarsınız?",
    answer:
      "Alt kata su sızması temiz su (basınçlı) borusundaki bir çatlaktan veya atık su (pis su) giderlerindeki conta kaçırmasından kaynaklanır. Test pompasıyla tesisatınıza basınç testi uygular, cihazlı inceleme yaparak sızıntının kaynağını dakikalar içinde buluruz.",
  },
  {
    question: "Makineli petek temizliği yakıt faturasını düşürür mü?",
    answer:
      "Evet, peteklerin alt kısmında biriken tortu, çamur ve kireç sıcak su dolaşımını engeller. Çift yönlü darbeli yıkama makinelerimiz ve özel radyatör koruyucu kimyasallarımızla yapılan temizlik sonrasında petekler tamamen ısınır ve doğalgaz faturanızda %20 ila %30 oranında tasarruf sağlanır.",
  },
  {
    question: "Diyarbakır içi servis ücreti ve işçilik garantisi nasıl çalışıyor?",
    answer:
      "Tüm tespit ve tamirat işlemlerimizden önce müşterimize net fiyat bilgisi verilir. Onarımını yaptığımız tüm boru yenileme ve parça montajları firmamızın 1 yıl resmi işçilik garantisi altındadır.",
  },
  {
    question: "Gece su borusu patladı, acil tesisatçı geliyor mu?",
    answer:
      "Evet! Diyarbakır'ın tüm merkez ilçelerinde 7/24 nöbetçi su tesisatçısı ekibimiz hazırdır. Acil su baskını ve boru patlamalarında ana vanayı kapattıktan hemen sonra bizi arayın, 20 dakikada müdahale edelim.",
  },
];

const tesisatPricing = [
  { service: "Kırmadan Su Kaçağı Tespiti", desc: "Kırmadan akustik ses dinleme + noktasal tespit", note: "Garantili Çözüm" },
  { service: "Tuvalet / Klozet Tıkanıklığı Açma", desc: "Kırmadan helezon yaylı makine ile açım", note: "Anında Temizlik" },
  { service: "Mutfak Lavabosu Gideri Açma", desc: "Yağ ve deterjan tortusu temizleme", note: "Boruya Zararsız" },
  { service: "Makineli & İlaçlı Petek Temizliği", desc: "Çift yönlü darbeli makine + koruyucu kimyasal", note: "%30 Tasarruf" },
  { service: "Gömme Rezervuar & Sifon Tamiri", desc: "Geberit, Vitra, Serel, Japar orijinal yedek parça", note: "1 Yıl Garanti" },
  { service: "Batarya & Musluk Montajı / Tamiri", desc: "Aç-kapa batarya, duş seti, vana değişimi", note: "Garantili Montaj" },
];

export default function SuTesisatiPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Plumber", "LocalBusiness"],
        name: "Güler Hizmet Diyarbakır Su Tesisatı & Kırmadan Kaçak Tespiti",
        image: `${siteConfig.url}/logo.jpg`,
        description:
          "Diyarbakır 7/24 su tesisatçısı, cihaz ile kırmadan noktasal su kaçağı bulma, tıkanıklık açma ve petek temizleme hizmetleri.",
        url: `${siteConfig.url}/diyarbakir-su-tesisati`,
        telephone: siteConfig.phoneRaw,
        priceRange: "₺₺",
        currenciesAccepted: "TRY",
        paymentAccepted: "Nakit, Kredi Kartı, Havale, EFT",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          bestRating: "5",
          worstRating: "1",
          ratingCount: "196",
          reviewCount: "196",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Diyarbakır Sıhhi Tesisat Hizmetleri",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Kırmadan Cihazla Su Kaçağı Tespiti",
                description: "Akustik dinleme cihazları ile banyo, fayans ve şap altındaki su sızıntılarını kırmadan noktasal tespit.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Makineli Lavabo ve Mutfak Gideri Tıkanıklık Açma",
                description: "Özel helezon çelik yaylı makinelerle kırmadan tıkanmış pimaş ve lavabo hatlarını temizleme.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Klozet ve Tuvalet Tıkanıklığı Açma",
                description: "Gider borularına zarar vermeden acil tuvalet ve klozet tıkanıklığı giderme servisi.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Darbeli Makineli & İlaçlı Petek Temizliği",
                description: "Radyatör peteklerindeki kireç, balçık ve çamuru temizleyerek %30 doğal gaz tasarrufu sağlama.",
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
            name: "Diyarbakır Su Tesisatı",
            item: `${siteConfig.url}/diyarbakir-su-tesisati`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: tesisatFaqs.map((faq) => ({
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
            <span className="text-blue-400 font-semibold">Diyarbakır Su Tesisatı</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
              Cihazlı & Kırmadan Tesisat Teknolojisi
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Diyarbakır Su Tesisatçısı & Kırmadan Kaçak Tespiti
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Evinizi inşaata çevirmeden, elektro-akustik dinleme detektörlerimizle su kaçaklarını noktasal buluyoruz.{" "}
              <strong className="text-white">Kayapınar, Bağlar, Yenişehir ve Sur</strong> bölgelerine 15-20 dakikada nöbetçi tesisatçı.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-black text-base shadow-lg shadow-orange-600/30 transition-transform active:scale-95"
              >
                <Phone className="w-5 h-5" />
                <span>Acil Tesisatçı Çağır: {siteConfig.phone}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Diyarbakır su kaçağı / tıkanıklık arızam var. Ustaya arıza fotoğrafı/videosu atmak istiyorum."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base transition-transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp İle Arıza Bildir</span>
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
              {/* Section 1 */}
              <section className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                  <Camera className="w-4 h-4" />
                  <span>Kırmadan Noktasal Tespit</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Evinizi Kırmadan Su Kaçağını Noktasal Olarak Buluyoruz
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Diyarbakır’da eski tesisat anlayışına son veriyoruz! Alt komşunuzun tavanına su damladığında veya su sayacınız musluklar kapalıyken bile dönüyorsa tesisatınızda gizli bir sızıntı vardır. <strong>Güler Hizmet</strong> olarak akustik dinleme mikrofonları ve özel tespit cihazları kullanarak sızıntının kaynağını milimetrik tespit ediyoruz.
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Böylece tüm banyo fayanslarını kırmak yerine yalnızca sızıntının olduğu tek bir fayans yerinden sökülerek arıza giderilir ve aynı gün kullanıma sunulur.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <Activity className="w-6 h-6 text-blue-600 mb-2" />
                    <div className="font-bold text-slate-900 text-sm">Akustik Dinleme</div>
                    <div className="text-xs text-slate-500 mt-1">Beton ve şap altındaki su sesini %100 yakalar.</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <Droplets className="w-6 h-6 text-blue-600 mb-2" />
                    <div className="font-bold text-slate-900 text-sm">Cihazla Kaçak Tespiti</div>
                    <div className="text-xs text-slate-500 mt-1">Sıcak su ve kalorifer borularındaki kaçakları gösterir.</div>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <Droplets className="w-6 h-6 text-blue-600 mb-2" />
                    <div className="font-bold text-slate-900 text-sm">Basınç Manometresi</div>
                    <div className="text-xs text-slate-500 mt-1">Tesisatın sızdırmazlık direncini test eder.</div>
                  </div>
                </div>
              </section>

              {/* Section 2: Tıkanıklık */}
              <section className="space-y-4 pt-4 border-t border-slate-100">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                  <Wrench className="w-4 h-4" />
                  <span>Kırmadan Gider Açma</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Diyarbakır Tıkanıklık Açma (Lavabo, Tuvalet, Mutfak)
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Mutfak lavabonuzdan sular geri mi taşıyor veya alaturka tuvaletiniz tamamen tıkandı mı? Kimyasal asitler pimaş contalarını eriterek alt kata su akmasına ve binada pis kokuya yol açar. Çelik döner helezonlu özel makinelerimizle gider borusuna girerek tıkanıklığa sebep olan tüm bez, saç, ıslak mendil ve yemek yağlarını parçalayarak boruyu ilk günkü akışına kavuşturuyoruz.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-base mb-1">Mutfak Lavabosu Gideri Açma</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Donmuş yemek yağları ve deterjan kalıntılarının pimaş borusu içinde taşlaşmasını özel spiral yaylarımızla kazıyarak açıyoruz.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <h3 className="font-bold text-slate-900 text-base mb-1">Klozet & Tuvalet Tıkanıklığı Açma</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Suda erimeyen peçeteler, ıslak mendil veya inşaat harçlarının tıkadığı tuvalet hatlarını kırmadan dakikalar içinde temizliyoruz.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Pricing Matrix */}
              <section className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Su Tesisatı Hizmet & İşlem Fiyat Rehberi
                </h2>
                <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
                  <div className="divide-y divide-slate-200">
                    {tesisatPricing.map((item, idx) => (
                      <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-100/60 transition-colors">
                        <div>
                          <div className="font-bold text-slate-900 text-base">{item.service}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                            {item.note}
                          </span>
                          <a
                            href={`tel:${siteConfig.phoneRaw}`}
                            className="text-xs font-bold text-blue-600 hover:underline"
                          >
                            Fiyat Al →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Semt Semt Tesisat */}
              <section className="p-8 rounded-3xl bg-blue-950 text-white space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Diyarbakır Tüm Merkez İlçelerde Gezici Su Tesisatçısı
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Boru patlaması ve tıkanıklık durumlarında dakikalar bile çok önemlidir. En yakın ekibimiz size yönlendirilir:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <strong className="text-blue-300 block mb-1">Kayapınar Tesisatçı (15 Dk):</strong>
                    <span>Diclekent, Gaziler, 75. Yol (Mahabad Bulvarı), Peyas, Medya, Huzurevleri, Fırat Bulvarı, Stadyum civarı</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <strong className="text-blue-300 block mb-1">Bağlar Tesisatçı (15-20 Dk):</strong>
                    <span>Dörtyol, Şeyh Şamil, Körhat, 5 Nisan Mahallesi, Emek Caddesi, Koşuyolu Parkı, Cezaevi Üstü</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <strong className="text-blue-300 block mb-1">Yenişehir Tesisatçı (15 Dk):</strong>
                    <span>Ofis Sanat Sokağı, Ekinciler Caddesi, Seyrantepe, Şehitlik, Kooperatifler, İstasyon, Fabrika</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                    <strong className="text-blue-300 block mb-1">Sur Tesisatçı (20 Dk):</strong>
                    <span>Dağkapı Meydanı, Mardinkapı, Melikahmet, Balıkçılarbaşı, Gazi Caddesi, Dicle Üniversitesi</span>
                  </div>
                </div>
              </section>

              {/* Diagnostic Technology Section for High Local Ranking */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Kullandığımız Modern Tesisat Cihazları
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Evinizi inşaat alanına çevirmeden arızanın yerini tespit eden yüksek teknolojili donanımlarımız:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-extrabold text-slate-900 text-sm mb-1">Akustik Dinleme Cihazı</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Temiz su şebekesindeki mikron düzeyindeki sızıntıların frekansını dinleyerek noktasal olarak tek fayans altında bulur.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-extrabold text-slate-900 text-sm mb-1">Termal Hat Dedektörü</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Sıcak su ve kalorifer borularının güzergahını yüzeyden tarayarak duvar arkasındaki kaçak noktasını renk haritasıyla gösterir.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="font-extrabold text-slate-900 text-sm mb-1">Özel Helezon Spiral Makine</div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Lavabo, tuvalet ve pimaş hatlarındaki katılaşmış yağ, kireç ve yabancı cisimleri boruya zarar vermeden döner çelik uçla parçalar.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="space-y-6 pt-4">
                <div className="border-t border-slate-200 pt-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
                    Sıkça Sorulan Sorular
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
                    Diyarbakır Su Tesisatı Hakkında Merak Edilenler
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    Kırmadan tespit, tıkanıklık ve servis süreçlerimizle ilgili yanıtlar:
                  </p>
                  <FaqAccordion items={tesisatFaqs} />
                </div>
              </section>
            </div>

            {/* Right 4 Cols: Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 rounded-3xl shadow-xl space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Nöbetçi Tesisatçı Sahada</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black tracking-tight">
                    Su Kaçağı veya Tıkanıklık mı Var?
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Alt komşuya su damlıyorsa veya lavabonuz taştıysa hemen arayın. 15-20 dakikada cihazlı ekibimiz gelsin.
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
                      "Diyarbakır su tesisatı arızam var. Konum göndereceğim."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-3 transition-transform"
                  >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>WhatsApp İle Arıza Bildir</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Akustik Dinleme & Cihazla Tespit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Kırmadan Tıkanıklık Açımı</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>1 Yıl Resmi İşçilik Garantisi</span>
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
                      🔑 Çilingir & Kapı Açma →
                    </Link>
                    <Link
                      href="/diyarbakir-kombi-servisi"
                      className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold transition-colors"
                    >
                      🔥 Kombi Servisi & Bakımı →
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
