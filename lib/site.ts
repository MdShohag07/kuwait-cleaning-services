import type { Bi, BiArr } from "./i18n";

type ServiceItem = {
  name: Bi;
  subtitle?: Bi;
  desc: Bi;
  image: string;
  features: BiArr;
  note?: Bi;
  featured: boolean;
};

export const site = {
  name: "Clean Home Kuwait", // placeholder brand — change to "Kuwait Cleaning Services" or your name anytime
  tagline: { en: "Premium Cleaning, Kuwait", ar: "تنظيف فاخر، الكويت" } satisfies Bi,
  phone: "+965 9874 6670", // demo — replace later
  phoneDisplay: "+965 9874 6670",
  whatsapp: "+96598746670", // demo — replace later
  email: "hello@cleanhomekuwait.com",
  city: { en: "Kuwait City", ar: "مدينة الكويت" } satisfies Bi,
  nav: [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Watch", href: "#video" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "/#blog" },
  ],
  images: {
    hero: "/images/hero/hero-living-room.jpg",
  },
  services: [
    {
      name: { en: "House Cleaning", ar: "تنظيف المنزل" },
      subtitle: { en: "1 flat / floor", ar: "شقة واحدة / طابق واحد" },
      desc: { en: "Routine refresh for apartments & homes that always feels move-in ready.", ar: "تنظيف دوري للشقق والمنازل يجعلها دائمًا جاهزة كأنك تنتقل إليها للتو." },
      image: "/images/services/home-cleaning.jpg",
      features: {
        en: ["Toilet", "Kitchen", "Window", "Floor", "Sofa", "Carpet", "Stairs"],
        ar: ["دورة المياه", "المطبخ", "النوافذ", "الأرضية", "الأريكة", "السجاد", "الدرج"],
      },
      note: { en: "Excludes furniture", ar: "لا يشمل الأثاث" },
      featured: true,
    },
    {
      name: { en: "Restaurant Cleaning", ar: "تنظيف المطاعم" },
      desc: { en: "Scheduled, food-safe cleaning that keeps a restaurant floor spotless service after service.", ar: "تنظيف مجدول وآمن للأغذية يحافظ على نظافة أرضية المطعم في كل خدمة." },
      // TODO: swap for a real restaurant photo once supplied
      image: "/images/before-after/kitchen-after.jpg",
      features: {
        en: ["Glass", "Tiles / floor", "Toilet", "Cabinet", "Table", "Kitchen"],
        ar: ["الزجاج", "البلاط / الأرضية", "دورة المياه", "الخزانة", "الطاولات", "المطبخ"],
      },
      featured: false,
    },
    {
      name: { en: "Office Cleaning", ar: "تنظيف المكاتب" },
      desc: { en: "Discreet, scheduled cleaning that keeps your workspace client-ready.", ar: "تنظيف مجدول وغير ملحوظ يبقي مكان عملك جاهزًا لاستقبال العملاء دائمًا." },
      image: "/images/services/office-cleaning.jpg",
      features: {
        en: ["Glass", "Tiles / floor", "Toilet", "Cabinet", "Table", "Kitchen"],
        ar: ["الزجاج", "البلاط / الأرضية", "دورة المياه", "الخزانة", "الطاولات", "المطبخ"],
      },
      featured: false,
    },
    {
      name: { en: "Mosque Cleaning", ar: "تنظيف المساجد" },
      desc: { en: "Careful, respectful cleaning for prayer halls and wudu areas alike.", ar: "تنظيف دقيق يراعي القدسية لقاعات الصلاة ومناطق الوضوء على حد سواء." },
      // TODO: swap for a real mosque photo once supplied
      image: "/images/before-after/floor-after.jpg",
      features: {
        en: ["Floor", "Toilet", "Glass", "Wudu / Ablution area"],
        ar: ["الأرضية", "دورة المياه", "الزجاج", "منطقة الوضوء"],
      },
      featured: false,
    },
    {
      name: { en: "Single Services", ar: "خدمات فردية" },
      desc: { en: "Need just one thing done? Book a single item, no full package required.", ar: "تحتاج إنجاز مهمة واحدة فقط؟ احجز عنصرًا واحدًا دون الحاجة لباقة كاملة." },
      // TODO: swap for a real single-services photo once supplied
      image: "/images/before-after/bathroom-after.jpg",
      features: {
        en: ["Sofa (per 1 set)", "Kitchen", "Toilet", "Single room / floor", "Swimming pool"],
        ar: ["أريكة (طقم واحد)", "المطبخ", "دورة المياه", "غرفة واحدة / طابق واحد", "حمام السباحة"],
      },
      featured: false,
    },
  ] satisfies ServiceItem[],
  whyPoints: [
    { icon: "shield", title: { en: "Vetted professionals", ar: "محترفون موثوقون" }, text: { en: "Background-checked, trained crews who treat your home like their own.", ar: "فرق مدربة تم التحقق من خلفياتها، تتعامل مع منزلك وكأنه منزلها." } },
    { icon: "leaf", title: { en: "Eco-safe products", ar: "منتجات آمنة للبيئة" }, text: { en: "Non-toxic, family- and pet-friendly supplies included in every visit.", ar: "مستلزمات غير سامة وآمنة للعائلة والحيوانات الأليفة في كل زيارة." } },
    { icon: "bolt", title: { en: "Fast response", ar: "استجابة سريعة" }, text: { en: "Same-week scheduling across Kuwait, with on-time arrival you can set a clock by.", ar: "جدولة خلال نفس الأسبوع في جميع أنحاء الكويت، ووصول في الموعد المحدد بدقة." } },
    { icon: "clock", title: { en: "Reliable scheduling", ar: "جدولة موثوقة" }, text: { en: "Recurring plans with the same crew, so your standard never slips.", ar: "خطط متكررة مع نفس فريق العمل، لتبقى جودة الخدمة ثابتة دائمًا." } },
    { icon: "check", title: { en: "Spotless guarantee", ar: "ضمان نظافة تامة" }, text: { en: "Not happy with a spot? We re-clean it free within 24 hours. No debate.", ar: "غير راضٍ عن بقعة ما؟ نعيد تنظيفها مجانًا خلال ٢٤ ساعة، دون نقاش." } },
    { icon: "tag", title: { en: "Transparent pricing", ar: "أسعار واضحة" }, text: { en: "Clear KD rates up front. The quote you see is the price you pay.", ar: "أسعار محددة بالدينار الكويتي مسبقًا. السعر الذي تراه هو ما تدفعه." } },
  ] satisfies { icon: string; title: Bi; text: Bi }[],
  steps: [
    { title: { en: "Book online", ar: "احجز عبر الإنترنت" }, text: { en: "Pick a service, date, and time in under 60 seconds.", ar: "اختر الخدمة والتاريخ والوقت في أقل من ٦٠ ثانية." } },
    { title: { en: "Get confirmation", ar: "احصل على التأكيد" }, text: { en: "Instant confirmation on WhatsApp with your crew & price.", ar: "تأكيد فوري عبر واتساب يتضمن فريق العمل والسعر." } },
    { title: { en: "We clean", ar: "نقوم بالتنظيف" }, text: { en: "A vetted crew arrives on time with everything they need.", ar: "يصل فريق موثوق في الوقت المحدد ومعه كل ما يحتاجه." } },
    { title: { en: "Enjoy & relax", ar: "استمتع واسترخِ" }, text: { en: "Walk into a space that gleams — guaranteed.", ar: "ادخل إلى مساحة لامعة تمامًا — مضمونة." } },
  ] satisfies { title: Bi; text: Bi }[],
  video: {
    youtubeId: "AkSwAc7ApNc",
    thumb: "https://i.ytimg.com/vi/AkSwAc7ApNc/maxresdefault.jpg",
    title: { en: "See our cleaning crew in action", ar: "شاهد فريق التنظيف لدينا أثناء العمل" } satisfies Bi,
    length: { en: "Watch now", ar: "شاهد الآن" } satisfies Bi,
  },
  beforeAfter: {
    cases: [
      { label: { en: "Living room", ar: "غرفة المعيشة" }, before: "/images/before-after/living-room-before.jpg", after: "/images/before-after/living-room-after.jpg", note: { en: "Dust, stains & clutter lifted from every surface.", ar: "إزالة الغبار والبقع والفوضى من كل سطح." } },
      { label: { en: "Kitchen", ar: "المطبخ" }, before: "/images/before-after/kitchen-before.jpg", after: "/images/before-after/kitchen-after.jpg", note: { en: "Grease and baked-on residue cut from counters & hob.", ar: "إزالة الدهون والبقايا المتراكمة من الأسطح وموقد الطهي." } },
      { label: { en: "Bathroom", ar: "الحمام" }, before: "/images/before-after/bathroom-before.jpg", after: "/images/before-after/bathroom-after.jpg", note: { en: "Limescale, grout & glass restored to a spotless shine.", ar: "إعادة لمعان الترسبات الكلسية وفواصل البلاط والزجاج." } },
      { label: { en: "Villa floor", ar: "أرضية الفيلا" }, before: "/images/before-after/floor-before.jpg", after: "/images/before-after/floor-after.jpg", note: { en: "Tiles stripped of build-up and polished edge to edge.", ar: "تخليص البلاط من التراكمات وتلميعه من الحافة إلى الحافة." } },
      { label: { en: "Bedroom", ar: "غرفة النوم" }, before: "/images/before-after/bedroom-before.jpg", after: "/images/before-after/bedroom-after.jpg", note: { en: "Fabrics freshened and every surface fully sanitized.", ar: "تنعيم الأقمشة وتعقيم كل سطح بالكامل." } },
      { label: { en: "Office desk", ar: "مكتب العمل" }, before: "/images/before-after/office-before.jpg", after: "/images/before-after/office-after.jpg", note: { en: "Workspaces reset to client-ready in under an hour.", ar: "إعادة مساحات العمل لتكون جاهزة لاستقبال العملاء في أقل من ساعة." } },
    ] satisfies { label: Bi; before: string; after: string; note: Bi }[],
  },
  stats: [
    { value: 5000, suffix: "+", label: { en: "Homes & offices cleaned", ar: "منزل ومكتب تم تنظيفه" } },
    { value: 98, suffix: "%", label: { en: "Customer satisfaction", ar: "رضا العملاء" } },
    { value: 10, suffix: "+", label: { en: "Years of experience", ar: "سنوات من الخبرة" } },
    { value: 50, suffix: "+", label: { en: "Professional staff", ar: "موظف محترف" } },
  ] satisfies { value: number; suffix: string; label: Bi }[],
  testimonials: [
    { quote: { en: "The crew was on time, discreet, and the villa has never looked this good. The window finish alone was worth it.", ar: "وصل الفريق في الوقت المحدد وبهدوء تام، ولم تبدُ الفيلا بهذا الجمال من قبل. لمسة النوافذ وحدها كانت تستحق كل شيء." }, name: "Noura Al-Sabah", role: { en: "Villa owner · Mishref", ar: "مالكة فيلا · مشرف" }, seed: "rev-noura" },
    { quote: { en: "We switched our office to the weekly plan. Same crew every time, spotless every time. Clients notice.", ar: "انتقلنا إلى الخطة الأسبوعية لمكتبنا. نفس الفريق في كل مرة، ونظافة تامة في كل مرة. عملاؤنا يلاحظون الفرق." }, name: "Yousef Khaled", role: { en: "Operations Lead · Kuwait City", ar: "مسؤول العمليات · مدينة الكويت" }, seed: "rev-yousef" },
    { quote: { en: "Booked a move-out deep clean on short notice and got my full deposit back. I won't use anyone else.", ar: "حجزت تنظيفًا عميقًا قبل إخلاء الشقة بوقت قصير واستردت التأمين كاملًا. لن أتعامل مع أي شركة أخرى." }, name: "Fatima Rashed", role: { en: "Apartment · Salmiya", ar: "شقة · السالمية" }, seed: "rev-fatima" },
    { quote: { en: "Prompt, professional, and genuinely thorough. The kitchen looked brand new.", ar: "سريعون، محترفون، ودقيقون فعلًا. بدا المطبخ وكأنه جديد تمامًا." }, name: "Ahmad Al-Mutairi", role: { en: "Homeowner · Jabriya", ar: "مالك منزل · الجابرية" }, seed: "rev-ahmad" },
    { quote: { en: "Their eco-safe products matter to us with two toddlers at home. No harsh smell, spotless result.", ar: "منتجاتهم الآمنة على البيئة مهمة جدًا لنا مع وجود طفلين صغيرين في المنزل. بلا رائحة نفاذة ونتيجة نظيفة تمامًا." }, name: "Dana Saleh", role: { en: "Mother of two · Hawalli", ar: "أم لطفلين · حولي" }, seed: "rev-dana" },
    { quote: { en: "Best cleaning service in Kuwait, hands down. Reliable and detail-obsessed.", ar: "أفضل خدمة تنظيف في الكويت بلا منازع. موثوقون ومهتمون بأدق التفاصيل." }, name: "Khalid Nasser", role: { en: "Villa owner · Bayan", ar: "مالك فيلا · بيان" }, seed: "rev-khalid" },
    { quote: { en: "They handled our post-construction mess perfectly. Fine dust gone from everywhere.", ar: "تعاملوا مع فوضى ما بعد البناء بشكل مثالي. اختفى الغبار الدقيق من كل مكان." }, name: "Sara Al-Otaibi", role: { en: "Interior designer · Salwa", ar: "مصممة داخلية · سلوى" }, seed: "rev-sara" },
    { quote: { en: "Booking on WhatsApp took 30 seconds. Crew arrived exactly on time.", ar: "استغرق الحجز عبر واتساب ٣٠ ثانية فقط. وصل الفريق في الموعد المحدد تمامًا." }, name: "Omar Faisal", role: { en: "Tenant · Salmiya", ar: "مستأجر · السالمية" }, seed: "rev-omar" },
    { quote: { en: "Our showroom has never looked sharper. Customers commented the same day.", ar: "لم يبدُ صالة العرض بهذا البريق من قبل. علّق الزبائن على الفرق في نفس اليوم." }, name: "Layla Hassan", role: { en: "Retail manager · Avenues", ar: "مديرة متجر · الأفنيوز" }, seed: "rev-layla" },
    { quote: { en: "Polite, careful with our furniture, and incredibly thorough. Highly recommend.", ar: "مهذبون، حريصون على أثاثنا، ودقيقون للغاية. أنصح بهم بشدة." }, name: "Mohammed Ali", role: { en: "Homeowner · Mangaf", ar: "مالك منزل · المنقف" }, seed: "rev-mohammed" },
    { quote: { en: "Switched from another company and the difference is night and day.", ar: "انتقلنا من شركة أخرى والفرق كالليل والنهار." }, name: "Hessa Al-Rashed", role: { en: "Villa owner · Mishref", ar: "مالكة فيلا · مشرف" }, seed: "rev-hessa" },
    { quote: { en: "The deep clean before Ramadan was flawless. Felt like a brand-new home.", ar: "كان التنظيف العميق قبل رمضان لا تشوبه شائبة. شعرت وكأن المنزل جديد تمامًا." }, name: "Abdullah Jaber", role: { en: "Homeowner · Qortuba", ar: "مالك منزل · قرطبة" }, seed: "rev-abdullah" },
    { quote: { en: "Spotless bathrooms, sparkling glass, and a fair price. What more could you want?", ar: "حمامات نظيفة تمامًا، زجاج لامع، وسعر عادل. ماذا تريد أكثر من ذلك؟" }, name: "Mariam Saad", role: { en: "Apartment · Fintas", ar: "شقة · الفنطاس" }, seed: "rev-mariam" },
    { quote: { en: "They re-cleaned one spot I pointed out without any fuss. That's real service.", ar: "أعادوا تنظيف بقعة أشرت إليها دون أي تذمر. هذه هي الخدمة الحقيقية." }, name: "Talal Aziz", role: { en: "Tenant · Mahboula", ar: "مستأجر · المهبولة" }, seed: "rev-talal" },
    { quote: { en: "Our weekly office clean keeps the whole team happier. Worth every fil.", ar: "التنظيف الأسبوعي لمكتبنا يجعل الفريق بأكمله أكثر سعادة. يستحق كل فلس." }, name: "Reem Khalifa", role: { en: "HR lead · Sharq", ar: "مسؤولة الموارد البشرية · شرق" }, seed: "rev-reem" },
    { quote: { en: "Friendly, fast, and the floors actually shine now. Five stars.", ar: "ودودون وسريعون، والأرضيات تلمع فعلًا الآن. خمس نجوم." }, name: "Nasser Bader", role: { en: "Homeowner · Rumaithiya", ar: "مالك منزل · الرميثية" }, seed: "rev-nasser" },
    { quote: { en: "I'm very particular and they still exceeded my expectations.", ar: "أنا دقيقة جدًا في اختياراتي، ومع ذلك تجاوزوا توقعاتي." }, name: "Aisha Mansour", role: { en: "Villa owner · Surra", ar: "مالكة فيلا · السرة" }, seed: "rev-aisha" },
    { quote: { en: "Great communication from booking to finish. No surprises on the bill.", ar: "تواصل ممتاز من الحجز وحتى الانتهاء. لا مفاجآت في الفاتورة." }, name: "Faisal Al-Harbi", role: { en: "Tenant · Salmiya", ar: "مستأجر · السالمية" }, seed: "rev-faisal" },
    { quote: { en: "Move-in clean was immaculate. We unpacked into a perfect home.", ar: "كان تنظيف ما قبل الانتقال لا تشوبه شائبة. فرغنا أغراضنا في منزل مثالي." }, name: "Lulwa Saleh", role: { en: "New resident · Jabriya", ar: "مقيمة جديدة · الجابرية" }, seed: "rev-lulwa" },
    { quote: { en: "The team is trustworthy — I'm comfortable leaving them with a key.", ar: "الفريق جدير بالثقة — أشعر بالارتياح لترك مفتاح المنزل معهم." }, name: "Yaqoub Adel", role: { en: "Villa owner · Bayan", ar: "مالك فيلا · بيان" }, seed: "rev-yaqoub" },
    { quote: { en: "Consistent quality month after month. That consistency is rare.", ar: "جودة ثابتة شهرًا بعد شهر. هذا الثبات نادر فعلًا." }, name: "Maha Tariq", role: { en: "Apartment · Salwa", ar: "شقة · سلوى" }, seed: "rev-maha" },
    { quote: { en: "Quick response, spotless result, lovely crew. Couldn't ask for more.", ar: "استجابة سريعة، نتيجة نظيفة تمامًا، وفريق لطيف. لا يمكنني طلب المزيد." }, name: "Bader Al-Fadhli", role: { en: "Homeowner · Adailiya", ar: "مالك منزل · العديلية" }, seed: "rev-bader" },
  ] satisfies { quote: Bi; name: string; role: Bi; seed: string }[],
  faqs: [
    {
      q: { en: "How do I book?", ar: "كيف أحجز؟" },
      a: { en: "Use the booking form below, or tap Call / WhatsApp at the top — pick a service, date, and time and you'll get instant confirmation. Under a minute.", ar: "استخدم نموذج الحجز أدناه، أو اضغط على اتصال / واتساب في الأعلى — اختر الخدمة والتاريخ والوقت وستحصل على تأكيد فوري. في أقل من دقيقة." },
    },
    {
      q: { en: "What areas do you serve?", ar: "ما هي المناطق التي تخدمونها؟" },
      a: { en: "All of Kuwait — Kuwait City, Hawalli, Salmiya, Mishref, Jabriya, and Ahmadi. Outside these zones? Message us and we'll arrange it.", ar: "جميع أنحاء الكويت — مدينة الكويت، حولي، السالمية، مشرف، الجابرية، والأحمدي. خارج هذه المناطق؟ راسلنا وسنرتب الأمر." },
    },
    {
      q: { en: "Do you bring cleaning supplies?", ar: "هل تحضرون مستلزمات التنظيف؟" },
      a: { en: "Yes. Every booking includes professional, eco-safe equipment and products. You don't need to provide anything.", ar: "نعم. كل حجز يشمل معدات ومنتجات احترافية وآمنة للبيئة. لست بحاجة لتوفير أي شيء." },
    },
    {
      q: { en: "What payment methods do you accept?", ar: "ما هي طرق الدفع المتاحة؟" },
      a: { en: "KNET, cash, and major cards. For recurring plans you can set up monthly billing.", ar: "كي نت، والنقد، وأهم البطاقات الائتمانية. للخطط المتكررة يمكنك إعداد فوترة شهرية." },
    },
    {
      q: { en: "Can I reschedule?", ar: "هل يمكنني تغيير الموعد؟" },
      a: { en: "Anytime up to 12 hours before your slot, free of charge — just reply to your WhatsApp confirmation.", ar: "في أي وقت حتى ١٢ ساعة قبل موعدك، مجانًا — فقط رد على رسالة التأكيد عبر واتساب." },
    },
  ] satisfies { q: Bi; a: Bi }[],
  booking: {
    sizes: [
      { label: { en: "Studio / 1 room", ar: "استوديو / غرفة واحدة" }, mult: 1 },
      { label: { en: "2–3 rooms", ar: "٢-٣ غرف" }, mult: 1.4 },
      { label: { en: "4–5 rooms", ar: "٤-٥ غرف" }, mult: 1.9 },
      { label: { en: "Villa / large", ar: "فيلا / مساحة كبيرة" }, mult: 2.5 },
    ] satisfies { label: Bi; mult: number }[],
    freqs: [
      { label: { en: "One-time", ar: "لمرة واحدة" }, mult: 1 },
      { label: { en: "Weekly (-8%)", ar: "أسبوعي (خصم ٨٪)" }, mult: 0.92 },
      { label: { en: "Bi-weekly (-5%)", ar: "كل أسبوعين (خصم ٥٪)" }, mult: 0.95 },
    ] satisfies { label: Bi; mult: number }[],
    times: ["09:00", "11:00", "13:00", "15:00", "17:00"],
  },
 blogs: [
    {
      slug: "deep-clean-checklist",
      title: { en: "The 12-point deep clean checklist", ar: "قائمة التنظيف العميق من ١٢ نقطة" },
      excerpt: { en: "What separates a surface tidy from a true deep clean — and how to spot the difference.", ar: "ما الذي يميز الترتيب السطحي عن التنظيف العميق الحقيقي — وكيف تلاحظ الفرق." },
      category: { en: "Guides", ar: "أدلة إرشادية" },
      readTime: { en: "5 min", ar: "٥ دقائق" },
      date: { en: "Jun 2026", ar: "يونيو ٢٠٢٦" },
      cover: "/images/services/deep-cleaning.jpg",
      author: { name: "Layla Haddad", role: { en: "Lead Specialist", ar: "أخصائية أولى" }, linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-layla/100/100" },
      body: {
        en: [
          "A deep clean isn't just a longer regular clean — it targets the build-up everyday tidying never reaches: grout, behind appliances, vents, and the tops of doors and frames.",
          "Start high and move low. Dust ceilings, fans, and light fixtures first so anything that falls is cleaned up afterward, not after you've already done the floors.",
          "Kitchens and bathrooms deserve the most time. Degrease range hoods, descale taps and shower glass, and sanitize every high-touch surface — handles, switches, and remotes included.",
          "Finish with floors, edges, and skirting boards. The corners are what people notice; a centre-of-the-room clean always looks unfinished.",
        ],
        ar: [
          "التنظيف العميق ليس مجرد تنظيف عادي أطول مدة — بل يستهدف التراكمات التي لا يصل إليها الترتيب اليومي أبدًا: فواصل البلاط، خلف الأجهزة، فتحات التهوية، وأعلى الأبواب والإطارات.",
          "ابدأ من الأعلى وانتقل إلى الأسفل. نظّف الأسقف والمراوح وتركيبات الإضاءة أولًا حتى يتم تنظيف أي شيء يتساقط لاحقًا، لا بعد أن تكون قد أنهيت الأرضيات بالفعل.",
          "تستحق المطابخ والحمامات أكبر قدر من الوقت. أزل الدهون من مراوح الشفط، وأزل الترسبات الكلسية عن الحنفيات وزجاج الدش، وعقّم كل سطح كثير اللمس — بما في ذلك المقابض والمفاتيح وأجهزة التحكم.",
          "أنهِ العمل بالأرضيات والحواف والألواح السفلية للجدران. الزوايا هي ما يلاحظه الناس؛ فتنظيف وسط الغرفة فقط يبدو دائمًا غير مكتمل.",
        ],
      },
    },
    {
      slug: "eco-friendly-products",
      title: { en: "Why we only use eco-safe products", ar: "لماذا نستخدم فقط منتجات آمنة للبيئة" },
      excerpt: { en: "Family- and pet-friendly doesn't mean weaker. Here's the science of a safer clean.", ar: "آمن للعائلة والحيوانات الأليفة لا يعني أنه أضعف. إليك العلم وراء تنظيف أكثر أمانًا." },
      category: { en: "Health", ar: "الصحة" },
      readTime: { en: "4 min", ar: "٤ دقائق" },
      date: { en: "May 2026", ar: "مايو ٢٠٢٦" },
      cover: "/images/services/home-cleaning.jpg",
      author: { name: "Omar Saleh", role: { en: "Operations Manager", ar: "مدير العمليات" }, linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-omar/100/100" },
      body: {
        en: [
          "Harsh chemical cleaners leave residues and fumes that linger long after the crew leaves — a real concern in homes with children, pets, or anyone with sensitivities.",
          "Modern plant-based formulas cut grease and kill germs just as effectively, without the respiratory irritation or the sharp chemical smell.",
          "Eco-safe also means safer surfaces. Gentler products protect natural stone, wood, and finishes that aggressive cleaners slowly degrade.",
        ],
        ar: [
          "تترك المنظفات الكيميائية القاسية بقايا وأبخرة تبقى لفترة طويلة بعد مغادرة الفريق — وهذا مصدر قلق حقيقي في المنازل التي بها أطفال أو حيوانات أليفة أو أشخاص لديهم حساسية.",
          "تزيل التركيبات النباتية الحديثة الدهون وتقضي على الجراثيم بفعالية مماثلة، دون تهيج الجهاز التنفسي أو الرائحة الكيميائية النفاذة.",
          "الأمان البيئي يعني أيضًا أسطحًا أكثر أمانًا. فالمنتجات اللطيفة تحمي الحجر الطبيعي والخشب واللمسات النهائية التي تتلفها المنظفات القاسية تدريجيًا.",
        ],
      },
    },
    {
      slug: "move-out-deposit",
      title: { en: "Get your full deposit back", ar: "استرجع تأمينك بالكامل" },
      excerpt: { en: "Landlords inspect the same five things. Nail these and your deposit is safe.", ar: "يفحص الملاك نفس الأمور الخمسة دائمًا. اهتم بها وسيكون تأمينك آمنًا." },
      category: { en: "Tips", ar: "نصائح" },
      readTime: { en: "6 min", ar: "٦ دقائق" },
      date: { en: "Apr 2026", ar: "أبريل ٢٠٢٦" },
      cover: "/images/before-after/bedroom-after.jpg",
      author: { name: "Fatima Rashed", role: { en: "Customer Success", ar: "نجاح العملاء" }, linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-fatima/100/100" },
      body: {
        en: [
          "Deposits are most often docked for things tenants overlook: oven interiors, limescale, wall marks, and grime in window tracks.",
          "Document everything with photos before and after. A clear record resolves disputes faster than any argument.",
          "When in doubt, a professional move-out clean costs a fraction of a withheld deposit — and comes with a guarantee an afternoon of scrubbing never will.",
        ],
        ar: [
          "غالبًا ما يُقتطع من التأمين بسبب أمور يغفل عنها المستأجرون: داخل الفرن، الترسبات الكلسية، آثار على الجدران، والأوساخ في مجاري النوافذ.",
          "وثّق كل شيء بالصور قبل وبعد. السجل الواضح يحل النزاعات أسرع من أي جدال.",
          "عند الشك، يكلف التنظيف الاحترافي قبل الإخلاء جزءًا بسيطًا من التأمين المحتجز — ويأتي مع ضمان لن يوفره لك يوم كامل من الفرك بنفسك.",
        ],
      },
    },
    {
      slug: "cleaning-frequency",
      title: { en: "How often should you deep clean?", ar: "كم مرة يجب أن تقوم بالتنظيف العميق؟" },
      excerpt: { en: "Weekly, monthly, seasonal — a simple schedule that actually fits real life.", ar: "أسبوعيًا، شهريًا، أو موسميًا — جدول بسيط يناسب الحياة الواقعية فعلًا." },
      category: { en: "Guides", ar: "أدلة إرشادية" },
      readTime: { en: "3 min", ar: "٣ دقائق" },
      date: { en: "Mar 2026", ar: "مارس ٢٠٢٦" },
      cover: "/images/before-after/floor-after.jpg",
      author: { name: "Layla Haddad", role: { en: "Lead Specialist", ar: "أخصائية أولى" }, linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-layla/100/100" },
      body: {
        en: [
          "Light maintenance cleaning works best weekly — surfaces, floors, and bathrooms stay on top of mess before it becomes a project.",
          "A deep clean every two to three months resets everything routine cleaning slowly misses, from grout to upholstery.",
          "Homes with pets, kids, or heavy foot traffic should lean toward the shorter end of that range.",
        ],
        ar: [
          "يعمل التنظيف الخفيف للصيانة بشكل أفضل أسبوعيًا — تبقى الأسطح والأرضيات والحمامات تحت السيطرة قبل أن تتحول الفوضى إلى مشروع كبير.",
          "يعيد التنظيف العميق كل شهرين إلى ثلاثة أشهر ضبط كل ما يفوته التنظيف الروتيني تدريجيًا، من فواصل البلاط إلى المفروشات.",
          "المنازل التي بها حيوانات أليفة أو أطفال أو حركة كثيفة يُفضّل لها الالتزام بالفترة الأقصر من هذا النطاق.",
        ],
      },
    },
    {
      slug: "kitchen-degrease",
      title: { en: "The right way to degrease a kitchen", ar: "الطريقة الصحيحة لإزالة الدهون من المطبخ" },
      excerpt: { en: "Cut through baked-on grease without dulling your surfaces or finishes.", ar: "تخلص من الدهون المتراكمة دون الإضرار بأسطحك أو لمساتها النهائية." },
      category: { en: "Tips", ar: "نصائح" },
      readTime: { en: "4 min", ar: "٤ دقائق" },
      date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" },
      cover: "/images/before-after/kitchen-after.jpg",
      author: { name: "Yousef Khaled", role: { en: "Field Supervisor", ar: "مشرف ميداني" }, linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-yousef/100/100" },
      body: {
        en: [
          "Grease bonds with dust over time, so the longer it sits the harder it clings. Warm water and a degreaser loosen it far better than scrubbing dry.",
          "Always test on a hidden spot first. Stainless steel, painted cabinets, and natural stone each react differently to strong cleaners.",
          "Work top-down: hood and upper cabinets first, then the backsplash, then countertops, finishing with the cooktop and floor.",
        ],
        ar: [
          "تتحد الدهون مع الغبار بمرور الوقت، فكلما بقيت لفترة أطول أصبحت أصعب في الإزالة. الماء الدافئ مع مزيل الدهون يفكّكها بشكل أفضل بكثير من الفرك الجاف.",
          "اختبر دائمًا في بقعة غير ظاهرة أولًا. يتفاعل الستانلس ستيل والخزائن المطلية والحجر الطبيعي بشكل مختلف مع المنظفات القوية.",
          "اعمل من الأعلى إلى الأسفل: المروحة والخزائن العلوية أولًا، ثم الحائط الخلفي، ثم أسطح العمل، وانتهِ بموقد الطهي والأرضية.",
        ],
      },
    },
    {
      slug: "bathroom-limescale",
      title: { en: "Beat bathroom limescale for good", ar: "تخلص من ترسبات الكلس في الحمام نهائيًا" },
      excerpt: { en: "Why hard water leaves those white marks — and how to remove them safely.", ar: "لماذا يترك الماء العسر تلك البقع البيضاء — وكيف تزيلها بأمان." },
      category: { en: "Tips", ar: "نصائح" },
      readTime: { en: "4 min", ar: "٤ دقائق" },
      date: { en: "Feb 2026", ar: "فبراير ٢٠٢٦" },
      cover: "/images/before-after/bathroom-after.jpg",
      author: { name: "Fatima Rashed", role: { en: "Customer Success", ar: "نجاح العملاء" }, linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-fatima/100/100" },
      body: {
        en: [
          "Limescale is a mineral deposit left by hard water. It builds on taps, glass, and tiles, and it only gets tougher the longer it's left.",
          "A mild acidic cleaner dissolves it without scratching. Give it time to sit rather than scrubbing harder — patience beats elbow grease here.",
          "A quick daily squeegee on shower glass is the single best habit for keeping limescale from ever returning.",
        ],
        ar: [
          "الترسبات الكلسية عبارة عن رواسب معدنية يتركها الماء العسر. تتراكم على الحنفيات والزجاج والبلاط، وتزداد صعوبة إزالتها كلما تُركت لفترة أطول.",
          "يذيبها منظف حمضي خفيف دون خدش الأسطح. امنحه وقتًا كافيًا بدلًا من الفرك بقوة — الصبر هنا أفضل من الجهد العضلي.",
          "مسح زجاج الدش يوميًا بالممسحة المطاطية لثوانٍ هي أفضل عادة وحيدة لمنع عودة الترسبات الكلسية أبدًا.",
        ],
      },
    },
    {
      slug: "office-hygiene",
      title: { en: "Office hygiene: the spots everyone forgets", ar: "نظافة المكتب: البقع التي ينساها الجميع" },
      excerpt: { en: "Desks look clean, but the germs hide where no one's looking.", ar: "تبدو المكاتب نظيفة، لكن الجراثيم تختبئ حيث لا ينظر أحد." },
      category: { en: "Workplace", ar: "بيئة العمل" },
      readTime: { en: "5 min", ar: "٥ دقائق" },
      date: { en: "Jan 2026", ar: "يناير ٢٠٢٦" },
      cover: "/images/services/office-cleaning.jpg",
      author: { name: "Omar Saleh", role: { en: "Operations Manager", ar: "مدير العمليات" }, linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-omar/100/100" },
      body: {
        en: [
          "Keyboards, phones, and door handles carry more bacteria than most surfaces in a building, yet they're rarely part of a routine wipe-down.",
          "Shared kitchens and meeting-room tables are hotspots too. A daily sanitize of high-touch points cuts the spread of seasonal illness dramatically.",
          "A consistent schedule with the same crew means nothing gets skipped — which is exactly where office cleaning usually falls down.",
        ],
        ar: [
          "تحمل لوحات المفاتيح والهواتف ومقابض الأبواب بكتيريا أكثر من معظم أسطح المبنى، ومع ذلك نادرًا ما تكون ضمن المسح الروتيني.",
          "المطابخ المشتركة وطاولات غرف الاجتماعات نقاط ساخنة أيضًا. التعقيم اليومي للنقاط كثيرة اللمس يقلل بشكل كبير من انتشار الأمراض الموسمية.",
          "الجدول الثابت مع نفس فريق العمل يعني عدم تجاهل أي شيء — وهذه بالضبط النقطة التي يتعثر عندها تنظيف المكاتب عادة.",
        ],
      },
    },
    {
      slug: "post-construction",
      title: { en: "Post-construction cleaning, step by step", ar: "تنظيف ما بعد البناء، خطوة بخطوة" },
      excerpt: { en: "Fine dust gets everywhere after a build. Here's how the pros clear it.", ar: "يصل الغبار الدقيق إلى كل مكان بعد البناء. إليك كيف يزيله المحترفون." },
      category: { en: "Guides", ar: "أدلة إرشادية" },
      readTime: { en: "7 min", ar: "٧ دقائق" },
      date: { en: "Jan 2026", ar: "يناير ٢٠٢٦" },
      cover: "/images/before-after/floor-before.jpg",
      author: { name: "Yousef Khaled", role: { en: "Field Supervisor", ar: "مشرف ميداني" }, linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-yousef/100/100" },
      body: {
        en: [
          "Construction dust is ultra-fine and settles into every gap. It needs a vacuum with a proper filter, not just a cloth that pushes it around.",
          "Work in passes: a rough clean to remove debris, a detailed clean for surfaces and fixtures, then a final polish once the dust has fully settled.",
          "Windows, tracks, and vents trap the most residue and are the easiest to miss — leave time for them at the end.",
        ],
        ar: [
          "غبار البناء دقيق جدًا ويستقر في كل فجوة. يحتاج إلى مكنسة كهربائية بفلتر مناسب، وليس مجرد قطعة قماش تنقله من مكان إلى آخر.",
          "اعمل على مراحل: تنظيف أولي لإزالة الحطام، ثم تنظيف تفصيلي للأسطح والتجهيزات، ثم تلميع نهائي بعد استقرار الغبار تمامًا.",
          "تحتجز النوافذ والمجاري وفتحات التهوية أكبر قدر من البقايا وهي الأسهل تجاهلًا — خصص لها وقتًا في النهاية.",
        ],
      },
    },
    {
      slug: "pet-friendly-home",
      title: { en: "A spotless home with pets", ar: "منزل نظيف تمامًا مع الحيوانات الأليفة" },
      excerpt: { en: "Hair, odours, and accidents — manageable with the right routine.", ar: "الشعر والروائح والحوادث الصغيرة — يمكن التعامل معها بالروتين الصحيح." },
      category: { en: "Health", ar: "الصحة" },
      readTime: { en: "4 min", ar: "٤ دقائق" },
      date: { en: "Dec 2025", ar: "ديسمبر ٢٠٢٥" },
      cover: "/images/services/home-cleaning.jpg",
      author: { name: "Layla Haddad", role: { en: "Lead Specialist", ar: "أخصائية أولى" }, linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-layla/100/100" },
      body: {
        en: [
          "Pet hair clings to fabric and floats into vents. Frequent vacuuming with the right attachments keeps it from building up everywhere.",
          "For odours, treat the source rather than masking it. Enzyme-based cleaners break down what air fresheners only cover.",
          "Always choose pet-safe products — paws and noses are close to every surface you clean.",
        ],
        ar: [
          "يلتصق شعر الحيوانات الأليفة بالأقمشة ويتطاير إلى فتحات التهوية. التنظيف المتكرر بالمكنسة الكهربائية مع الملحقات المناسبة يمنع تراكمه في كل مكان.",
          "بالنسبة للروائح، عالج المصدر بدلًا من إخفائه. المنظفات المعتمدة على الإنزيمات تفكك ما تكتفي معطرات الجو بتغطيته فقط.",
          "اختر دائمًا منتجات آمنة للحيوانات الأليفة — فأقدامها وأنوفها قريبة من كل سطح تقوم بتنظيفه.",
        ],
      },
    },
    {
      slug: "ramadan-deep-clean",
      title: { en: "Preparing your home for Ramadan", ar: "تجهيز منزلك لشهر رمضان" },
      excerpt: { en: "A calm, organised deep-clean plan to welcome the holy month.", ar: "خطة تنظيف عميق هادئة ومنظمة لاستقبال الشهر الفضيل." },
      category: { en: "Seasonal", ar: "موسمي" },
      readTime: { en: "5 min", ar: "٥ دقائق" },
      date: { en: "Dec 2025", ar: "ديسمبر ٢٠٢٥" },
      cover: "/images/before-after/living-room-after.jpg",
      author: { name: "Fatima Rashed", role: { en: "Customer Success", ar: "نجاح العملاء" }, linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-fatima/100/100" },
      body: {
        en: [
          "Start a week or two ahead so the work feels calm, not rushed. Tackle one room a day rather than everything at once.",
          "Focus on the spaces you'll use most — the kitchen for long evenings of cooking, and the majlis for hosting family and guests.",
          "A professional deep clean before the month begins frees you to focus on what matters during Ramadan itself.",
        ],
        ar: [
          "ابدأ قبل أسبوع أو أسبوعين حتى يكون العمل هادئًا وليس متسرعًا. تعامل مع غرفة واحدة يوميًا بدلًا من كل شيء دفعة واحدة.",
          "ركّز على المساحات التي ستستخدمها أكثر — المطبخ لساعات الطهي الطويلة، والمجلس لاستضافة العائلة والضيوف.",
          "التنظيف العميق الاحترافي قبل بداية الشهر يمنحك الوقت للتركيز على ما يهم فعلًا خلال رمضان.",
        ],
      },
    },
  ],
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
