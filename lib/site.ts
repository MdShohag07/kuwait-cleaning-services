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
    hero: "https://picsum.photos/seed/saffa-hero/1000/800",
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
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
