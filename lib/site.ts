export const site = {
  name: "Saffa", // placeholder brand — change to "Kuwait Cleaning Services" or your name anytime
  tagline: "Premium Cleaning, Kuwait",
  phone: "+96590000000", // demo — replace later
  phoneDisplay: "+965 9000 0000",
  whatsapp: "96590000000", // demo — replace later
  email: "hello@saffa.kw",
  city: "Kuwait City",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Why Saffa", href: "#why" },
    { label: "Watch", href: "#video" },
    { label: "Results", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ],
  images: {
    hero: "https://images.pexels.com/photos/36730122/pexels-photo-36730122.jpeg",
  },
  services: [
    {
      name: "Home Cleaning",
      desc: "Routine refresh for apartments & homes that always feels move-in ready.",
      price: 18,
      unit: "per visit",
      duration: "2–3 hours",
      image: "https://picsum.photos/seed/saffa-home/600/400",
      features: ["Floors, dusting & surfaces", "Kitchen wipe-down", "Bathroom sanitization"],
      featured: false,
    },
    {
      name: "Deep Cleaning",
      desc: "Top-to-bottom detail with furniture, windows & build-up nobody else reaches.",
      price: 45,
      unit: "per property",
      duration: "4–6 hours",
      image: "https://picsum.photos/seed/saffa-deep/600/400",
      features: [
        "Full property deep clean",
        "Furniture & upholstery",
        "Interior windows & tracks",
        "Detailed sanitization",
      ],
      featured: true,
    },
    {
      name: "Office Cleaning",
      desc: "Discreet, scheduled cleaning that keeps your workspace client-ready.",
      price: 25,
      unit: "per visit",
      duration: "2–4 hours",
      image: "https://picsum.photos/seed/saffa-office/600/400",
      features: ["Workspaces & desk sanitizing", "Trash removal & restrooms", "Floor maintenance"],
      featured: false,
    },
  ],
  whyPoints: [
    { icon: "shield", title: "Vetted professionals", text: "Background-checked, trained crews who treat your home like their own." },
    { icon: "leaf", title: "Eco-safe products", text: "Non-toxic, family- and pet-friendly supplies included in every visit." },
    { icon: "bolt", title: "Fast response", text: "Same-week scheduling across Kuwait, with on-time arrival you can set a clock by." },
    { icon: "clock", title: "Reliable scheduling", text: "Recurring plans with the same crew, so your standard never slips." },
    { icon: "check", title: "Spotless guarantee", text: "Not happy with a spot? We re-clean it free within 24 hours. No debate." },
    { icon: "tag", title: "Transparent pricing", text: "Clear KD rates up front. The quote you see is the price you pay." },
  ],
  steps: [
    { title: "Book online", text: "Pick a service, date, and time in under 60 seconds." },
    { title: "Get confirmation", text: "Instant confirmation on WhatsApp with your crew & price." },
    { title: "We clean", text: "A vetted crew arrives on time with everything they need." },
    { title: "Enjoy & relax", text: "Walk into a space that gleams — guaranteed." },
  ],
  video: {
    youtubeId: "aqz-KE-bpKQ", // demo video — replace with your cleaning video's ID
    thumb: "https://picsum.photos/seed/saffa-video/1280/720",
    title: "Deep clean · Salmiya villa",
    length: "3:24 time-lapse",
  },
  beforeAfter: {
    cases: [
      { label: "Living room", seed: "ba-living" },
      { label: "Kitchen", seed: "ba-kitchen" },
      { label: "Bathroom", seed: "ba-bath" },
      { label: "Villa floor", seed: "ba-floor" },
    ],
  },
  stats: [
    { value: 5000, suffix: "+", label: "Homes & offices cleaned" },
    { value: 98, suffix: "%", label: "Customer satisfaction" },
    { value: 10, suffix: "+", label: "Years of experience" },
    { value: 50, suffix: "+", label: "Professional staff" },
  ],
  testimonials: [
    {
      quote:
        "The crew was on time, discreet, and the villa has never looked this good. The window finish alone was worth it.",
      name: "Noura Al-Sabah",
      role: "Villa owner · Mishref",
      seed: "rev-noura",
    },
    {
      quote:
        "We switched our office to Saffa's weekly plan. Same crew every time, spotless every time. Clients notice.",
      name: "Yousef Khaled",
      role: "Operations Lead · Kuwait City",
      seed: "rev-yousef",
    },
    {
      quote:
        "Booked a move-out deep clean on short notice. Got my full deposit back. I won't use anyone else.",
      name: "Fatima Rashed",
      role: "Apartment · Salmiya",
      seed: "rev-fatima",
    },
  ],
  faqs: [
    {
      q: "How do I book?",
      a: "Use the booking form below, or tap Call / WhatsApp at the top — pick a service, date, and time and you'll get instant confirmation. Under a minute.",
    },
    {
      q: "What areas do you serve?",
      a: "All of Kuwait — Kuwait City, Hawalli, Salmiya, Mishref, Jabriya, and Ahmadi. Outside these zones? Message us and we'll arrange it.",
    },
    {
      q: "Do you bring cleaning supplies?",
      a: "Yes. Every booking includes professional, eco-safe equipment and products. You don't need to provide anything.",
    },
    {
      q: "What payment methods do you accept?",
      a: "KNET, cash, and major cards. For recurring plans you can set up monthly billing.",
    },
    {
      q: "Can I reschedule?",
      a: "Anytime up to 12 hours before your slot, free of charge — just reply to your WhatsApp confirmation.",
    },
  ],
  booking: {
    services: [
      { label: "Home Cleaning", base: 18 },
      { label: "Office Cleaning", base: 25 },
      { label: "Deep Cleaning", base: 45 },
      { label: "Move-In / Move-Out", base: 35 },
      { label: "Villa Cleaning", base: 55 },
      { label: "Post-Construction", base: 60 },
    ],
    sizes: [
      { label: "Studio / 1 room", mult: 1 },
      { label: "2–3 rooms", mult: 1.4 },
      { label: "4–5 rooms", mult: 1.9 },
      { label: "Villa / large", mult: 2.5 },
    ],
    freqs: [
      { label: "One-time", mult: 1 },
      { label: "Weekly (-8%)", mult: 0.92 },
      { label: "Bi-weekly (-5%)", mult: 0.95 },
    ],
    times: ["09:00", "11:00", "13:00", "15:00", "17:00"],
  },
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
