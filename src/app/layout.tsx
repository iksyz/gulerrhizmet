import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/siteConfig";

export const viewport: Viewport = {
  themeColor: "#1e3a5f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Diyarbakır 7/24 Çilingir, Su Tesisatçısı & Kombi Servisi | Güler Hizmet",
    template: "%s | Güler Hizmet Diyarbakır",
  },
  description: siteConfig.description,
  keywords: [
    // Diyarbakır Çilingir Anahtar Kelimeleri
    "Diyarbakır çilingir",
    "diyarbakir cilingir",
    "Diyarbakır acil çilingir",
    "Diyarbakır nöbetçi çilingir",
    "Diyarbakır en yakın çilingir",
    "Diyarbakır oto çilingir",
    "Diyarbakır kapı açma",
    "Diyarbakır çelik kapı açma",
    "Diyarbakır kilit değişimi",
    "Diyarbakır kale kilit",
    "Diyarbakır anahtarcı",
    "Diyarbakır kilitçi",
    "Diyarbakır 7 24 çilingir",
    "Diyarbakır gece çilingir",
    "Diyarbakır araba kapısı açma",
    "Diyarbakır barel değişimi",
    "Kayapınar çilingir",
    "Diclekent çilingir",
    "75 yol çilingir",
    "Gaziler çilingir",
    "Peyas çilingir",
    "Huzurevleri çilingir",
    "Bağlar çilingir",
    "Bağlar dörtyol çilingir",
    "Şeyh Şamil çilingir",
    "Koşuyolu çilingir",
    "Yenişehir çilingir",
    "Ofis çilingir Diyarbakır",
    "Ekinciler çilingir",
    "Sanat Sokağı çilingir",
    "Sur çilingir",
    "Dağkapı çilingir",
    "Mardinkapı çilingir",
    "Balıkçılarbaşı çilingir",

    // Diyarbakır Su Tesisatçısı Anahtar Kelimeleri
    "Diyarbakır su tesisatçısı",
    "diyarbakir su tesisatcisi",
    "Diyarbakır kırmadan su kaçağı tespiti",
    "Diyarbakır su kaçağı bulma",
    "Diyarbakır cihazlı su kaçağı tespiti",
    "Diyarbakır tıkanıklık açma",
    "Diyarbakır gider açma",
    "Diyarbakır lavabo tıkanıklığı açma",
    "Diyarbakır tuvalet tıkanıklığı açma",
    "Diyarbakır pimaş açma",
    "Diyarbakır sıhhi tesisat ustası",
    "Diyarbakır acil tesisatçı",
    "Kayapınar su tesisatçısı",
    "Diclekent tesisatçı",
    "75 yol su tesisatçısı",
    "Bağlar su tesisatçısı",
    "Yenişehir su tesisatçısı",
    "Ofis tesisatçı Diyarbakır",
    "Diyarbakır petek temizliği",
    "Diyarbakır gömme rezervuar tamiri",
    "Diyarbakır musluk batarya tamiri",

    // Diyarbakır Kombi Servisi Anahtar Kelimeleri
    "Diyarbakır kombi servisi",
    "diyarbakir kombi servisi",
    "Diyarbakır kombi tamircisi",
    "Diyarbakır kombi tamiri",
    "Diyarbakır kombi bakımı",
    "Diyarbakır nöbetçi kombici",
    "Diyarbakır acil kombi servisi",
    "Diyarbakır kombi kart tamiri",
    "DemirDöküm kombi servisi Diyarbakır",
    "Baymak kombi servisi Diyarbakır",
    "Bosch kombi servisi Diyarbakır",
    "Vaillant kombi servisi Diyarbakır",
    "ECA kombi servisi Diyarbakır",
    "Buderus kombi servisi Diyarbakır",
    "Kayapınar kombi servisi",
    "Diclekent kombi servisi",
    "75 yol kombi servisi",
    "Bağlar kombi tamiri",
    "Yenişehir kombi servisi",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Diyarbakır 7/24 Çilingir, Su Tesisatçısı & Kombi Servisi | Güler Hizmet",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diyarbakır 7/24 Acil Çilingir, Tesisat & Kombi Servisi",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "TR-21",
    "geo.placename": "Diyarbakır",
    "geo.position": "37.9144;40.2306",
    ICBM: "37.9144, 40.2306",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EmergencyService"],
    name: siteConfig.name,
    alternateName: "Güler Hizmet",
    image: `${siteConfig.url}/logo.jpg`,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    priceRange: "₺₺",
    currenciesAccepted: "TRY",
    paymentAccepted: "Nakit, Kredi Kartı, Havale, EFT",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "248",
      reviewCount: "248",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Diyarbakır 7/24 Nöbetçi Çilingir, Su Tesisatı ve Kombi Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diyarbakır Hasarsız Çelik Kapı Açma",
            description: "Diyarbakır genelinde 15 dakikada hasarsız çelik kapı, oda kapısı açımı ve Kale kilit montajı.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diyarbakır Acil Oto Çilingir",
            description: "Anahtarı içeride kalan otomobillerin kapısını hava yastıklı maymuncuk aparatıyla çiziksiz açma.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kırmadan Cihazla Su Kaçağı Tespiti",
            description: "Akustik dinleme cihazları ile banyo, mutfak ve şap altındaki su sızıntılarını kırmadan noktasal tespit.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Makineli Lavabo & Tuvalet Tıkanıklığı Açma",
            description: "Pimaş borularına zarar vermeden özel helezon spiral makinelerle gider ve pimaş tıkanıklığı açımı.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diyarbakır Kombi Bakımı & Kart Tamiri",
            description: "Tüm marka yoğuşmalı kombilerde arıza tespiti, elektronik kart onarımı ve 1 yıl garantili parça değişimi.",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: siteConfig.districts.map((d) => ({
      "@type": "AdministrativeArea",
      name: `${d.name}, Diyarbakır`,
    })),
  };

  return (
    <html lang="tr">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-800">
        <JsonLd data={rootSchema} />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}

