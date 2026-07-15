"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ar";
export type Bi = { en: string; ar: string };
export type BiArr = { en: string[]; ar: string[] };

const dict = {
  en: {
    langName: "العربية", // label shows the OTHER language to switch to
    nav: { services: "Services", why: "Why Us", watch: "Watch", results: "Results", faq: "FAQ", blog: "Blog" },
    cta: { book: "Book a service", services: "View services & pricing", callNow: "Call now", whatsapp: "WhatsApp" },
    menu: { open: "Open menu", close: "Close menu" },

    hero: {
      badge: "Now serving Kuwait City, Hawalli & Salmiya",
      h1a: "A spotless space,",
      h1b: "delivered like art.",
      sub: "{name} brings white-glove cleaning to Kuwait's homes, villas, and offices. Vetted crews, eco-safe products, and a finish you can see in the light.",
      ratingCaption: "4.9 average · 600+ reviews",
      statHomesNum: "5,000+",
      statHomesLabel: "homes & offices cleaned",
      statGuaranteeNum: "100%",
      statGuaranteeLabel: "spotless guarantee",
      ecoTitle: "Eco-safe",
      ecoSub: "Family & pet friendly",
      insuredTitle: "Insured crews",
      insuredSub: "Background-checked",
    },

    services: {
      eyebrow: "Our Services",
      h2a: "A clean plan for",
      h2b: "every space",
      sub: "Call us for a free quote tailored to your space. Every booking includes supplies, insured crews, and our spotless re-clean promise.",
      mostBooked: "Most booked",
      noteLabel: "NB:",
      callToBook: "Call to book",
      helpPre: "Not sure which plan fits your space? Call",
      helpPost: "and we'll help you choose.",
    },

    why: {
      eyebrowPrefix: "Why",
      h2a: "Built on trust,",
      h2b: "not luck",
      sub: "A decade of experience, vetted crews, and a guarantee that means something — here's what earns our clients' trust, visit after visit.",
    },

    process: {
      eyebrow: "How it works",
      h2a: "Four steps to a",
      h2b: "spotless space",
    },

    video: {
      eyebrow: "See us in action",
      h2a: "A clean you can",
      h2b: "watch happen",
      sub: "Press play to see our cleaning standard for yourself.",
      playAria: "Play cleaning video",
    },

    beforeAfter: {
      eyebrowPrefix: "The",
      eyebrowSuffix: "difference",
      h2a: "See the",
      h2b: "transformation",
      sub: "Real results from real homes across Kuwait — messy on the left, spotless on the right.",
      before: "Before",
      after: "After",
    },

    testimonials: {
      eyebrow: "Loved across Kuwait",
      h2a: "What our clients",
      h2b: "say",
      prevAria: "Previous",
      nextAria: "Next",
      goToAria: "Go to review {n}",
    },

    reviewForm: {
      eyebrow: "Tell us how we did",
      h2a: "Share your",
      h2b: "experience",
      sub: "Had a service with us? We'd love to hear about it — your review helps other Kuwait families find us.",
      nameLabel: "Your name",
      namePlaceholder: "e.g. Sara Al-Fahad",
      ratingLabel: "Your rating",
      reviewLabel: "Your review",
      reviewPlaceholder: "Tell us what stood out about your cleaning...",
      submitBtn: "Submit review",
      submittingBtn: "Submitting...",
      note: "Your review will be checked by our team before it appears on the site.",
      successTitle: "Thank you!",
      successSub: "Your review has been submitted and is pending approval. We appreciate your feedback.",
    },

    faq: {
      eyebrow: "Good to know",
      h2a: "Questions,",
      h2b: "answered",
    },

    blog: {
      eyebrow: "From the blog",
      h2a: "Cleaning tips &",
      h2b: "guides",
      readLabel: "Read",
      topicLabel: "Topic",
      publishedLabel: "Published",
      descriptionLabel: "Description",
      kuwaitSuffix: "Kuwait",
      prevAria: "Previous",
      nextAria: "Next",
      goToAria: "Go to article {n}",
    },

    blogList: {
      loadMore: "Load more articles",
    },

    moreArticles: {
      title: "More articles",
      loadMore: "Load more articles",
    },

    blogPost: {
      back: "Back to all articles",
      linkedin: "LinkedIn",
      ctaTitle: "Ready for a spotless space?",
      ctaSub: "Book {name} in 60 seconds — transparent KD pricing, vetted crews, spotless guarantee.",
    },

    booking: {
      eyebrow: "Book in 60 seconds",
      h2a: "Let's make it",
      h2b: "spotless",
      formTitle: "Book in a few taps",
      formSub: "Pick your details and send it straight to WhatsApp — we'll confirm your crew and price there.",
      serviceLabel: "Service",
      sizeLabel: "Property size",
      dateLabel: "Date",
      timeLabel: "Time",
      freqLabel: "Frequency",
      confirmBtn: "Confirm on WhatsApp",
      talkTitle: "Talk to us directly",
      callSub: "Tap to call · Sat–Thu, 8am – 9pm",
      emailSub: "We reply within 2 hours",
      citySub: "Serving all governorates",
      chatWa: "Chat on WhatsApp",
      waHi: "Hi {name}! I'd like to book:",
      waSize: "Size:",
      waFlexibleDate: "flexible date",
      waAt: "at",
    },

    footer: {
      sectionServices: "Services",
      sectionCompany: "Company",
      sectionResources: "Resources",
      sectionContact: "Contact",
      whyUs: "Why Us",
      howItWorks: "How it works",
      results: "Results",
      faq: "FAQ",
      blog: "Blog",
      reviews: "Reviews",
      bookNow: "Book now",
      call: "Call",
      whatsapp: "WhatsApp",
      email: "Email",
      allRightsReserved: "All rights reserved.",
    },

    mobileHook: {
      callNow: "Call now",
      whatsapp: "WhatsApp",
    },
  },
  ar: {
    langName: "English",
    nav: { services: "خدماتنا", why: "لماذا نحن", watch: "شاهد", results: "النتائج", faq: "الأسئلة", blog: "المدونة" },
    cta: { book: "احجز خدمة", services: "الخدمات والأسعار", callNow: "اتصل الآن", whatsapp: "واتساب" },
    menu: { open: "افتح القائمة", close: "أغلق القائمة" },

    hero: {
      badge: "نخدم الآن مدينة الكويت وحولي والسالمية",
      h1a: "مساحة نظيفة تمامًا،",
      h1b: "بلمسة فنية.",
      sub: "تقدّم {name} خدمات تنظيف راقية لمنازل الكويت وفللها ومكاتبها. فرق عمل موثوقة، منتجات آمنة وصديقة للبيئة، ولمسة نهائية تلمع أمام عينيك.",
      ratingCaption: "4.9 من 5 · أكثر من 600 تقييم",
      statHomesNum: "+5,000",
      statHomesLabel: "منزل ومكتب تم تنظيفه",
      statGuaranteeNum: "100%",
      statGuaranteeLabel: "ضمان نظافة تامة",
      ecoTitle: "آمن للبيئة",
      ecoSub: "مناسب للعائلة والحيوانات الأليفة",
      insuredTitle: "فرق مؤمَّنة",
      insuredSub: "تم التحقق من خلفياتهم",
    },

    services: {
      eyebrow: "خدماتنا",
      h2a: "خطة تنظيف تناسب",
      h2b: "كل مساحة",
      sub: "اتصل بنا للحصول على عرض سعر مجاني يناسب مساحتك. كل حجز يشمل المستلزمات وفرق عمل مؤمَّنة ووعدنا بإعادة التنظيف مجانًا حتى الرضا التام.",
      mostBooked: "الأكثر حجزًا",
      noteLabel: "ملاحظة:",
      callToBook: "اتصل للحجز",
      helpPre: "غير متأكد أي خطة تناسب مساحتك؟ اتصل على",
      helpPost: "وسنساعدك على الاختيار.",
    },

    why: {
      eyebrowPrefix: "لماذا",
      h2a: "نبني الثقة،",
      h2b: "لا نعتمد على الحظ",
      sub: "خبرة تمتد لعقد كامل، وفرق عمل موثوقة، وضمان له معنى حقيقي — إليك ما يكسب ثقة عملائنا في كل زيارة.",
    },

    process: {
      eyebrow: "كيف نعمل",
      h2a: "أربع خطوات نحو",
      h2b: "مساحة نظيفة تمامًا",
    },

    video: {
      eyebrow: "شاهدونا في العمل",
      h2a: "نظافة يمكنك",
      h2b: "مشاهدتها بنفسك",
      sub: "اضغط تشغيل لترى معيار التنظيف لدينا بنفسك.",
      playAria: "تشغيل فيديو التنظيف",
    },

    beforeAfter: {
      eyebrowPrefix: "الفرق الذي تصنعه",
      eyebrowSuffix: "",
      h2a: "شاهد",
      h2b: "التحول",
      sub: "نتائج حقيقية من منازل حقيقية في جميع أنحاء الكويت — فوضى على اليسار، ونظافة تامة على اليمين.",
      before: "قبل",
      after: "بعد",
    },

    testimonials: {
      eyebrow: "محبوبون في جميع أنحاء الكويت",
      h2a: "ماذا يقول",
      h2b: "عملاؤنا",
      prevAria: "السابق",
      nextAria: "التالي",
      goToAria: "الانتقال إلى التقييم {n}",
    },

    reviewForm: {
      eyebrow: "أخبرنا برأيك",
      h2a: "شاركنا",
      h2b: "تجربتك",
      sub: "هل جربت خدمتنا من قبل؟ يسعدنا أن نسمع رأيك — تقييمك يساعد عائلات أخرى في الكويت على إيجادنا.",
      nameLabel: "اسمك",
      namePlaceholder: "مثال: سارة الفهد",
      ratingLabel: "تقييمك",
      reviewLabel: "رأيك",
      reviewPlaceholder: "أخبرنا بما أعجبك في خدمة التنظيف...",
      submitBtn: "إرسال التقييم",
      submittingBtn: "جارٍ الإرسال...",
      note: "سيراجع فريقنا تقييمك قبل ظهوره على الموقع.",
      successTitle: "شكرًا لك!",
      successSub: "تم إرسال تقييمك وهو الآن قيد المراجعة. نقدّر رأيك.",
    },

    faq: {
      eyebrow: "جيد أن تعرف",
      h2a: "أسئلة",
      h2b: "وأجوبتها",
    },

    blog: {
      eyebrow: "من المدونة",
      h2a: "نصائح وأدلة",
      h2b: "للتنظيف",
      readLabel: "مدة القراءة",
      topicLabel: "الموضوع",
      publishedLabel: "تاريخ النشر",
      descriptionLabel: "الوصف",
      kuwaitSuffix: "الكويت",
      prevAria: "السابق",
      nextAria: "التالي",
      goToAria: "الانتقال إلى المقال {n}",
    },

    blogList: {
      loadMore: "تحميل المزيد من المقالات",
    },

    moreArticles: {
      title: "المزيد من المقالات",
      loadMore: "تحميل المزيد من المقالات",
    },

    blogPost: {
      back: "العودة إلى جميع المقالات",
      linkedin: "لينكدإن",
      ctaTitle: "هل أنت مستعد لمساحة نظيفة تمامًا؟",
      ctaSub: "احجز {name} خلال 60 ثانية — أسعار واضحة بالدينار الكويتي، فرق موثوقة، وضمان نظافة تامة.",
    },

    booking: {
      eyebrow: "احجز خلال 60 ثانية",
      h2a: "لنجعلها",
      h2b: "نظيفة تمامًا",
      formTitle: "احجز خلال خطوات بسيطة",
      formSub: "اختر تفاصيلك وأرسلها مباشرة عبر واتساب — سنؤكد فريق العمل والسعر هناك.",
      serviceLabel: "الخدمة",
      sizeLabel: "حجم العقار",
      dateLabel: "التاريخ",
      timeLabel: "الوقت",
      freqLabel: "التكرار",
      confirmBtn: "التأكيد عبر واتساب",
      talkTitle: "تواصل معنا مباشرة",
      callSub: "اتصل بنا · السبت–الخميس، 8ص – 9م",
      emailSub: "نرد خلال ساعتين",
      citySub: "نخدم جميع المحافظات",
      chatWa: "تحدث عبر واتساب",
      waHi: "مرحبًا {name}! أرغب في حجز:",
      waSize: "الحجم:",
      waFlexibleDate: "تاريخ مرن",
      waAt: "الساعة",
    },

    footer: {
      sectionServices: "الخدمات",
      sectionCompany: "الشركة",
      sectionResources: "روابط مفيدة",
      sectionContact: "تواصل معنا",
      whyUs: "لماذا نحن",
      howItWorks: "كيف نعمل",
      results: "النتائج",
      faq: "الأسئلة الشائعة",
      blog: "المدونة",
      reviews: "التقييمات",
      bookNow: "احجز الآن",
      call: "اتصال",
      whatsapp: "واتساب",
      email: "بريد إلكتروني",
      allRightsReserved: "جميع الحقوق محفوظة.",
    },

    mobileHook: {
      callNow: "اتصل الآن",
      whatsapp: "واتساب",
    },
  },
} as const;

type Dict = (typeof dict)["en"];

type Ctx = {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
  tr: (v: Bi | string) => string;
  trList: (v: BiArr | string[]) => string[];
};

const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang) || "en";
    setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
  }, [lang]);

  const value: Ctx = {
    lang,
    dir: lang === "ar" ? "rtl" : "ltr",
    setLang,
    toggle: () => setLang((p) => (p === "en" ? "ar" : "en")),
    t: dict[lang] as Dict,
    tr: (v) => (typeof v === "string" ? v : v[lang]),
    trList: (v) => (Array.isArray(v) ? v : v[lang]),
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
