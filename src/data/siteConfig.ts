export interface DistrictDetail {
  name: string;
  slug: string;
  featured: boolean;
  arrivalMinutes: string;
  neighborhoods: string[];
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
}

export interface PriceItem {
  service: string;
  range: string;
  details: string;
  guarantee: string;
}

export const siteConfig = {
  name: "Güler Hizmet Diyarbakır",
  shortName: "Güler Hizmet",
  tagline: "Diyarbakır 7/24 Nöbetçi Çilingir, Su Tesisatçısı & Kombi Servisi",
  description:
    "Diyarbakır genelinde 7/24 acil çilingir, kırmadan su kaçağı tespiti, tıkanıklık açma ve kombi servisi. Kayapınar, Bağlar, Yenişehir, Sur ve tüm semtlere 15-25 dakikada garantili adrese varış.",
  url: "https://gulerhizmet.com.tr",
  phone: "0538 333 89 80",
  phoneRaw: "+905383338980",
  whatsappNumber: "905383338980",
  email: "info@gulerhizmet.com.tr",
  esnafOdaNo: "Diyarbakır Esnaf ve Sanatkarlar Sicil No: 21-8492",
  address: {
    street: "Diclekent Bulvarı, Fırat Bulvarı & Urfa Yolu Kavşağı Mobil Usta Noktaları",
    locality: "Kayapınar / Diyarbakır Merkez",
    region: "Diyarbakır",
    postalCode: "21070",
    country: "TR",
  },
  geo: {
    latitude: 37.9144,
    longitude: 40.2306,
  },
  districtsDetailed: [
    {
      name: "Kayapınar",
      slug: "kayapinar",
      featured: true,
      arrivalMinutes: "15-20 Dk",
      neighborhoods: [
        "Diclekent Bulvarı",
        "75. Yol (Mahabad Bulvarı)",
        "Gaziler Çeşmesi Civarı",
        "Peyas Mahallesi",
        "Huzurevleri",
        "Mezopotamya Mahallesi",
        "Medya Mahallesi",
        "Fırat Bulvarı",
        "Talaytepe / Stadyum Civarı",
        "Lunapark & Ceylan AVM Çevresi",
      ],
      description:
        "Kayapınar ilçesinde Diclekent ve 75. Yol üzerinde sabit bekleyen motorlu ve araçlı ekiplerimizle kapıda kalma, su sızıntısı ve kombi arızalarına 15 dakikada müdahale ediyoruz.",
    },
    {
      name: "Bağlar",
      slug: "baglar",
      featured: true,
      arrivalMinutes: "15-25 Dk",
      neighborhoods: [
        "Bağlar Dörtyol",
        "Şeyh Şamil Mahallesi",
        "Körhat",
        "5 Nisan Mahallesi",
        "Emek Caddesi",
        "Koşuyolu Parkı Civarı",
        "Alipınar",
        "Cezaevi Üstü",
        "Cengizler Caddesi",
        "Girne Caddesi",
      ],
      description:
        "Bağlar’ın yoğun nüfuslu mahallelerinde eski ve yeni tip binalarda hasarsız kilit açımı, alt komşuya damlayan su kaçaklarının cihazla tespiti ve kombi tamirinde 7/24 sahadayız.",
    },
    {
      name: "Yenişehir",
      slug: "yenisehir",
      featured: true,
      arrivalMinutes: "15-20 Dk",
      neighborhoods: [
        "Ofis (Ekinciler Caddesi)",
        "Sanat Sokağı Civarı",
        "Seyrantepe",
        "Şehitlik Mahallesi",
        "Kooperatifler",
        "Vilayet & Adliye Bölgesi",
        "Ali Amiri Caddesi",
        "İstasyon Caddesi",
        "Üçkuyu Mahallesi",
        "Fabrika Mahallesi",
      ],
      description:
        "Yenişehir ve Ofis bölgesinde ev, ofis ve iş yerlerine anında teknik servis. Kale kilit montajı, anahtar çoğaltma, lavabo tıkanıklığı açma ve kombi periyodik bakımı.",
    },
    {
      name: "Sur",
      slug: "sur",
      featured: true,
      arrivalMinutes: "20-30 Dk",
      neighborhoods: [
        "Dağkapı Meydanı",
        "Mardinkapı",
        "Urfakapı",
        "Balıkçılarbaşı",
        "Gazi Caddesi",
        "Melikahmet Caddesi",
        "İskenderpaşa",
        "Cevatpaşa",
        "Çarıklı Civarı",
        "Dicle Üniversitesi Yerleşkesi",
      ],
      description:
        "Tarihi Sur ilçesinde taş binalar ve yeni yapılarda hassas sıhhi tesisat tamiratı, özel çelik kapı açma, tarihi konut kilit revizyonu ve kombi bakım servisi.",
    },
  ] as DistrictDetail[],

  districts: [
    { name: "Kayapınar", slug: "kayapinar", featured: true },
    { name: "Bağlar", slug: "baglar", featured: true },
    { name: "Yenişehir", slug: "yenisehir", featured: true },
    { name: "Sur", slug: "sur", featured: true },
    { name: "Diclekent", slug: "diclekent", featured: true },
    { name: "Gaziler", slug: "gaziler", featured: true },
    { name: "75. Yol", slug: "75-yol", featured: true },
    { name: "Ofis", slug: "ofis", featured: true },
    { name: "Peyas", slug: "peyas", featured: false },
    { name: "Huzurevleri", slug: "huzurevleri", featured: false },
    { name: "Seyrantepe", slug: "seyrantepe", featured: false },
    { name: "Şehitlik", slug: "sehitlik", featured: false },
    { name: "Talaytepe", slug: "talaytepe", featured: false },
    { name: "Çarıklı", slug: "carikli", featured: false },
    { name: "Mezopotamya", slug: "mezopotamya", featured: false },
    { name: "Fırat Bulvarı", slug: "firat-bulvari", featured: false },
    { name: "Kooperatifler", slug: "kooperatifler", featured: false },
    { name: "5 Nisan", slug: "5-nisan", featured: false },
  ],

  pricingTable: [
    {
      service: "Çelik Kapı Açma (Çekili / Hasarsız)",
      range: "Ekonomik & Standart Esnaf Fiyatı",
      details: "Özel maymuncuk aparatıyla kapı kanadına ve kilit yuvasına sıfır hasar.",
      guarantee: "%100 Hasarsız Açım",
    },
    {
      service: "Kilit Göbeği / Barel Değişimi",
      range: "Kilit Markasına Göre Şeffaf Fiyat",
      details: "Orijinal kutusunda Kale, Yale veya Desi tuzaklı güvenlik göbeği montajı.",
      guarantee: "2 Yıl Parça Garantisi",
    },
    {
      service: "Oto Çilingir (Araba Kapısı Açma)",
      range: "Araç Marka/Modeline Uygun Tarife",
      details: "Hava yastıklı kilit açma aparatı ile cama ve kapı fitillerine zarar verilmez.",
      guarantee: "Çiziksiz & Hasarsız",
    },
    {
      service: "Kırmadan Su Kaçağı Tespiti",
      range: "Noktasal Tespit Garantili",
      details: "Akustik dinleme ve özel cihazlarla tek fayans altında sızıntı bulma.",
      guarantee: "%100 Kırmadan Çözüm",
    },
    {
      service: "Özel Makine ile Tıkanıklık Açma",
      range: "Gider Türüne Göre Sabit Fiyat",
      details: "Mutfak, tuvalet veya ana pimaş hattındaki tıkanıklık kırmadan temizlenir.",
      guarantee: "Tam Tesisat Akış Testi",
    },
    {
      service: "Periyodik Kombi Bakımı & Petek Temizliği",
      range: "Tasarruf Garantili Paket",
      details: "Yanma odası, brülör, genleşme tankı bakımı ve makineli ilaçlı petek yıkama.",
      guarantee: "1 Yıl Servis Güvencesi",
    },
  ] as PriceItem[],

  testimonials: [
    {
      name: "Baran Çelik",
      location: "Kayapınar / Diclekent Bulvarı",
      service: "Gece Acil Çilingir",
      rating: 5,
      date: "3 gün önce",
      comment:
        "Gece saat 01:30'da Diclekent'te anahtarımı evde unuttum. Aradıktan 18 dakika sonra usta kapımdaydı. Çelik kapımın kilidini 3 dakikada çizik dahi olmadan açtı. Diyarbakır'da böyle dürüst ve hızlı esnaf bulmak zor, helal olsun.",
    },
    {
      name: "Rojda Demir",
      location: "Yenişehir / Ofis Sanat Sokağı",
      service: "Kırmadan Su Kaçağı Tespiti",
      rating: 5,
      date: "1 hafta önce",
      comment:
        "Alt komşum banyodan su damladığını söyledi, çok korktuk her yer kırılacak diye. Güler Hizmet geldi, özel cihazla borudaki sızıntıyı tek bir fayansın altında buldu ve sadece o fayansı çıkarıp tamir etti. Bizi büyük masraftan kurtardılar.",
    },
    {
      name: "Mehmet Şirin A.",
      location: "Bağlar / Şeyh Şamil Mah.",
      service: "Tuvalet & Gider Tıkanıklığı",
      rating: 5,
      date: "2 hafta önce",
      comment:
        "Klozet tıkanmıştı, ev berbat haldeydi. Özel makineyle gelip yarım saat içinde tek bir boruya zarar vermeden açtılar ve sonrasında test ettiler. Fiyatı da baştan ne konuştuksa o oldu, çok teşekkürler.",
    },
    {
      name: "Ahmet Kaya",
      location: "Kayapınar / 75. Yol Civarı",
      service: "Kombi Bakımı & Kart Tamiri",
      rating: 5,
      date: "1 ay önce",
      comment:
        "DemirDöküm kombim F4 hatası veriyordu ve ateşleme yapmıyordu. Yetkili servis kart değişimi için çok yüksek fiyat istedi. Güler Hizmet aynı gün gelip anakartı test edip tamir etti, üstüne de kışlık bakımını yaptı. Şimdi petekler sıcacık.",
    },
  ] as Testimonial[],
};
