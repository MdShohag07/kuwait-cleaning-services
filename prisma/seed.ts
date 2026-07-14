/**
 * One-time bootstrap seed. Intentionally self-contained (does not import
 * lib/site.ts) so it still works standalone to rebuild a fresh database
 * (e.g. disaster recovery on a new VPS) even after lib/site.ts is trimmed
 * down to only the fields that stay static.
 *
 * Run with: npx tsx prisma/seed.ts
 */
import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Bi = { en: string; ar: string };

const services: {
  name: Bi;
  subtitle?: Bi;
  desc: Bi;
  image: string;
  features: { en: string[]; ar: string[] };
  note?: Bi;
  featured: boolean;
}[] = [
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
    image: "/images/before-after/bathroom-after.jpg",
    features: {
      en: ["Sofa (per 1 set)", "Kitchen", "Toilet", "Single room / floor", "Swimming pool"],
      ar: ["أريكة (طقم واحد)", "المطبخ", "دورة المياه", "غرفة واحدة / طابق واحد", "حمام السباحة"],
    },
    featured: false,
  },
];

const videos: { youtubeId: string; title: Bi; length: Bi }[] = [
  {
    youtubeId: "AkSwAc7ApNc",
    title: { en: "See our cleaning crew in action", ar: "شاهد فريق التنظيف لدينا أثناء العمل" },
    length: { en: "Watch now", ar: "شاهد الآن" },
  },
  {
    youtubeId: "AkSwAc7ApNc",
    title: { en: "Deep clean: villa turnaround", ar: "تنظيف عميق: تحويل فيلا كامل" },
    length: { en: "Watch now", ar: "شاهد الآن" },
  },
  {
    youtubeId: "AkSwAc7ApNc",
    title: { en: "Office cleaning walkthrough", ar: "جولة على تنظيف المكاتب" },
    length: { en: "Watch now", ar: "شاهد الآن" },
  },
];

const beforeAfterCases: { label: Bi; before: string; after: string; note: Bi }[] = [
  { label: { en: "Living room", ar: "غرفة المعيشة" }, before: "/images/before-after/living-room-before.jpg", after: "/images/before-after/living-room-after.jpg", note: { en: "Dust, stains & clutter lifted from every surface.", ar: "إزالة الغبار والبقع والفوضى من كل سطح." } },
  { label: { en: "Kitchen", ar: "المطبخ" }, before: "/images/before-after/kitchen-before.jpg", after: "/images/before-after/kitchen-after.jpg", note: { en: "Grease and baked-on residue cut from counters & hob.", ar: "إزالة الدهون والبقايا المتراكمة من الأسطح وموقد الطهي." } },
  { label: { en: "Bathroom", ar: "الحمام" }, before: "/images/before-after/bathroom-before.jpg", after: "/images/before-after/bathroom-after.jpg", note: { en: "Limescale, grout & glass restored to a spotless shine.", ar: "إعادة لمعان الترسبات الكلسية وفواصل البلاط والزجاج." } },
  { label: { en: "Villa floor", ar: "أرضية الفيلا" }, before: "/images/before-after/floor-before.jpg", after: "/images/before-after/floor-after.jpg", note: { en: "Tiles stripped of build-up and polished edge to edge.", ar: "تخليص البلاط من التراكمات وتلميعه من الحافة إلى الحافة." } },
  { label: { en: "Bedroom", ar: "غرفة النوم" }, before: "/images/before-after/bedroom-before.jpg", after: "/images/before-after/bedroom-after.jpg", note: { en: "Fabrics freshened and every surface fully sanitized.", ar: "تنعيم الأقمشة وتعقيم كل سطح بالكامل." } },
  { label: { en: "Office desk", ar: "مكتب العمل" }, before: "/images/before-after/office-before.jpg", after: "/images/before-after/office-after.jpg", note: { en: "Workspaces reset to client-ready in under an hour.", ar: "إعادة مساحات العمل لتكون جاهزة لاستقبال العملاء في أقل من ساعة." } },
];

const testimonials: { quote: Bi; name: string; role: Bi; seed: string }[] = [
  { quote: { en: "The crew was on time, discreet, and the villa has never looked this good. The window finish alone was worth it.", ar: "وصل الفريق في الوقت المحدد وبهدوء تام، ولم تبدُ الفيلا بهذا الجمال من قبل. لمسة النوافذ وحدها كانت تستحق كل شيء." }, name: "Noura Al-Sabah", role: { en: "Villa owner · Mishref", ar: "مالكة فيلا · مشرف" }, seed: "rev-noura" },
  { quote: { en: "We switched our office to the weekly plan. Same crew every time, spotless every time. Clients notice.", ar: "انتقلنا إلى الخطة الأسبوعية لمكتبنا. نفس الفريق في كل مرة، ونظافة تامة في كل مرة. عملاؤنا يلاحظون الفرق." }, name: "Yousef Khaled", role: { en: "Operations Lead · Kuwait City", ar: "مسؤول العمليات · مدينة الكويت" }, seed: "rev-yousef" },
  { quote: { en: "Booked a move-out deep clean on short notice and got my full deposit back. I won't use anyone else.", ar: "حجزت تنظيفًا عميقًا قبل إخلاء الشقة بوقت قصير واستردت التأمين كاملًا. لن أتعامل مع أي شركة أخرى." }, name: "Fatima Rashed", role: { en: "Apartment · Salmiya", ar: "شقة · السالمية" }, seed: "rev-fatima" },
  { quote: { en: "Prompt, professional, and genuinely thorough. The kitchen looked brand new.", ar: "سريعون، محترفون، ودقيقون فعلًا. بدا المطبخ وكأنه جديد تمامًا." }, name: "Ahmad Al-Mutairi", role: { en: "Homeowner · Jabriya", ar: "مالك منزل · الجابرية" }, seed: "rev-ahmad" },
  { quote: { en: "Their eco-safe products matter to us with two toddlers at home. No harsh smell, spotless result.", ar: "منتجاتهم الآمنة على البيئة مهمة جدًا لنا مع وجود طفلين صغيرين في المنزل. بلا رائحة نفاذة ونتيجة نظيفة تمامًا." }, name: "Dana Saleh", role: { en: "Mother of two · Hawalli", ar: "أم لطفلين · حولي" }, seed: "rev-dana" },
  { quote: { en: "Best cleaning service in Kuwait, hands down. Reliable and detail-obsessed.", ar: "أفضل خدمة تنظيف في الكويت بلا منازع. موثوقون ومهتمون بأدق التفاصيل." }, name: "Khalid Nasser", role: { en: "Villa owner · Bayan", ar: "مالك فيلا · بيان" }, seed: "rev-khalid" },
  { quote: { en: "They handled our post-construction mess perfectly. Fine dust gone from everywhere.", ar: "تعاملوا مع فوضى ما بعد البناء بشكل مثالي. اختفى الغبار الدقيق من كل مكان." }, name: "Sara Al-Otaibi", role: { en: "Interior designer · Salwa", ar: "مصممة داخلية · سلوى" }, seed: "rev-sara" },
  { quote: { en: "Booking on WhatsApp took 30 seconds. Crew arrived exactly on time.", ar: "استغرق الحجز عبر واتساب 30 ثانية فقط. وصل الفريق في الموعد المحدد تمامًا." }, name: "Omar Faisal", role: { en: "Tenant · Salmiya", ar: "مستأجر · السالمية" }, seed: "rev-omar" },
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
];

const blogs: {
  slug: string;
  title: Bi;
  excerpt: Bi;
  category: Bi;
  readTime: Bi;
  date: Bi;
  cover: string;
  author: { name: string; role: Bi; linkedin: string; avatar: string };
  body: { en: string[]; ar: string[] };
}[] = [
  {
    slug: "deep-clean-checklist",
    title: { en: "The 12-point deep clean checklist", ar: "قائمة التنظيف العميق من 12 نقطة" },
    excerpt: { en: "What separates a surface tidy from a true deep clean — and how to spot the difference.", ar: "ما الذي يميز الترتيب السطحي عن التنظيف العميق الحقيقي — وكيف تلاحظ الفرق." },
    category: { en: "Guides", ar: "أدلة إرشادية" },
    readTime: { en: "5 min", ar: "5 دقائق" },
    date: { en: "Jun 2026", ar: "يونيو 2026" },
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
    readTime: { en: "4 min", ar: "4 دقائق" },
    date: { en: "May 2026", ar: "مايو 2026" },
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
    readTime: { en: "6 min", ar: "6 دقائق" },
    date: { en: "Apr 2026", ar: "أبريل 2026" },
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
    readTime: { en: "3 min", ar: "3 دقائق" },
    date: { en: "Mar 2026", ar: "مارس 2026" },
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
    readTime: { en: "4 min", ar: "4 دقائق" },
    date: { en: "Feb 2026", ar: "فبراير 2026" },
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
    readTime: { en: "4 min", ar: "4 دقائق" },
    date: { en: "Feb 2026", ar: "فبراير 2026" },
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
    readTime: { en: "5 min", ar: "5 دقائق" },
    date: { en: "Jan 2026", ar: "يناير 2026" },
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
    readTime: { en: "7 min", ar: "7 دقائق" },
    date: { en: "Jan 2026", ar: "يناير 2026" },
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
    readTime: { en: "4 min", ar: "4 دقائق" },
    date: { en: "Dec 2025", ar: "ديسمبر 2025" },
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
    readTime: { en: "5 min", ar: "5 دقائق" },
    date: { en: "Dec 2025", ar: "ديسمبر 2025" },
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
];

async function seedUsers() {
  const accounts: { email?: string; password?: string; name: string; role: "OWNER" | "ADMIN" }[] = [
    { email: process.env.SEED_OWNER_EMAIL, password: process.env.SEED_OWNER_PASSWORD, name: "Owner", role: "OWNER" },
    { email: process.env.SEED_ADMIN_EMAIL, password: process.env.SEED_ADMIN_PASSWORD, name: "Admin", role: "ADMIN" },
  ];

  for (const acc of accounts) {
    if (!acc.email || !acc.password) {
      console.warn(`Skipping ${acc.role} seed — missing env vars.`);
      continue;
    }
    const passwordHash = await bcrypt.hash(acc.password, 12);
    await prisma.user.upsert({
      where: { email: acc.email },
      update: { passwordHash, role: acc.role, name: acc.name },
      create: { email: acc.email, passwordHash, role: acc.role, name: acc.name },
    });
    console.log(`Seeded user: ${acc.email} (${acc.role})`);
  }
}

async function seedContent() {
  const existing = await prisma.service.count();
  if (existing > 0) {
    console.log("Content already seeded — skipping (content seeding is one-time).");
    return;
  }

  await prisma.service.createMany({
    data: services.map((s, i) => ({
      nameEn: s.name.en,
      nameAr: s.name.ar,
      subtitleEn: s.subtitle?.en,
      subtitleAr: s.subtitle?.ar,
      descEn: s.desc.en,
      descAr: s.desc.ar,
      image: s.image,
      featuresEn: s.features.en,
      featuresAr: s.features.ar,
      noteEn: s.note?.en,
      noteAr: s.note?.ar,
      featured: s.featured,
      order: i,
    })),
  });
  console.log(`Seeded ${services.length} services.`);

  await prisma.video.createMany({
    data: videos.map((v, i) => ({
      youtubeId: v.youtubeId,
      titleEn: v.title.en,
      titleAr: v.title.ar,
      lengthEn: v.length.en,
      lengthAr: v.length.ar,
      order: i,
    })),
  });
  console.log(`Seeded ${videos.length} videos.`);

  await prisma.beforeAfterCase.createMany({
    data: beforeAfterCases.map((c, i) => ({
      labelEn: c.label.en,
      labelAr: c.label.ar,
      before: c.before,
      after: c.after,
      noteEn: c.note.en,
      noteAr: c.note.ar,
      order: i,
    })),
  });
  console.log(`Seeded ${beforeAfterCases.length} before/after cases.`);

  await prisma.review.createMany({
    data: testimonials.map((t) => ({
      name: t.name,
      rating: 5,
      quoteEn: t.quote.en,
      quoteAr: t.quote.ar,
      roleEn: t.role.en,
      roleAr: t.role.ar,
      seed: t.seed,
      status: "APPROVED" as const,
    })),
  });
  console.log(`Seeded ${testimonials.length} reviews.`);

  for (const b of blogs) {
    await prisma.blogPost.create({
      data: {
        slug: b.slug,
        titleEn: b.title.en,
        titleAr: b.title.ar,
        excerptEn: b.excerpt.en,
        excerptAr: b.excerpt.ar,
        categoryEn: b.category.en,
        categoryAr: b.category.ar,
        readTimeEn: b.readTime.en,
        readTimeAr: b.readTime.ar,
        dateEn: b.date.en,
        dateAr: b.date.ar,
        cover: b.cover,
        authorName: b.author.name,
        authorRoleEn: b.author.role.en,
        authorRoleAr: b.author.role.ar,
        authorLinkedin: b.author.linkedin,
        authorAvatar: b.author.avatar,
        bodyEn: b.body.en,
        bodyAr: b.body.ar,
      },
    });
  }
  console.log(`Seeded ${blogs.length} blog posts.`);
}

async function main() {
  await seedUsers();
  await seedContent();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
