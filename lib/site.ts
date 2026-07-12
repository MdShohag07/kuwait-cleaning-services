type ServiceItem = {
  name: string;
  subtitle?: string;
  desc: string;
  image: string;
  features: string[];
  note?: string;
  featured: boolean;
};

export const site = {
  name: "Clean Home Kuwait", // placeholder brand — change to "Kuwait Cleaning Services" or your name anytime
  tagline: "Premium Cleaning, Kuwait",
  phone: "+965 9874 6670", // demo — replace later
  phoneDisplay: "+965 9874 6670",
  whatsapp: "+96598746670", // demo — replace later
  email: "hello@saffa.kw",
  city: "Kuwait City",
  nav: [
    { label: "Services", href: "#services" },
    { label: "Why Saffa", href: "#why" },
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
      name: "House Cleaning",
      subtitle: "1 flat / floor",
      desc: "Routine refresh for apartments & homes that always feels move-in ready.",
      image: "/images/services/home-cleaning.jpg",
      features: ["Toilet", "Kitchen", "Window", "Floor", "Sofa", "Carpet", "Stairs"],
      note: "Excludes furniture",
      featured: true,
    },
    {
      name: "Restaurant Cleaning",
      desc: "Scheduled, food-safe cleaning that keeps a restaurant floor spotless service after service.",
      // TODO: swap for a real restaurant photo once supplied
      image: "/images/before-after/kitchen-after.jpg",
      features: ["Glass", "Tiles / floor", "Toilet", "Cabinet", "Table", "Kitchen"],
      featured: false,
    },
    {
      name: "Office Cleaning",
      desc: "Discreet, scheduled cleaning that keeps your workspace client-ready.",
      image: "/images/services/office-cleaning.jpg",
      features: ["Glass", "Tiles / floor", "Toilet", "Cabinet", "Table", "Kitchen"],
      featured: false,
    },
    {
      name: "Mosque Cleaning",
      desc: "Careful, respectful cleaning for prayer halls and wudu areas alike.",
      // TODO: swap for a real mosque photo once supplied
      image: "/images/before-after/floor-after.jpg",
      features: ["Floor", "Toilet", "Glass", "Wudu / Ablution area"],
      featured: false,
    },
    {
      name: "Single Services",
      desc: "Need just one thing done? Book a single item, no full package required.",
      // TODO: swap for a real single-services photo once supplied
      image: "/images/before-after/bathroom-after.jpg",
      features: ["Sofa (per 1 set)", "Kitchen", "Toilet", "Single room / floor", "Swimming pool"],
      featured: false,
    },
  ] satisfies ServiceItem[],
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
    youtubeId: "AkSwAc7ApNc",
    thumb: "https://i.ytimg.com/vi/AkSwAc7ApNc/maxresdefault.jpg",
    title: "See our cleaning crew in action",
    length: "Watch now",
  },
  beforeAfter: {
    cases: [
      { label: "Living room", before: "/images/before-after/living-room-before.jpg", after: "/images/before-after/living-room-after.jpg", note: "Dust, stains & clutter lifted from every surface." },
      { label: "Kitchen", before: "/images/before-after/kitchen-before.jpg", after: "/images/before-after/kitchen-after.jpg", note: "Grease and baked-on residue cut from counters & hob." },
      { label: "Bathroom", before: "/images/before-after/bathroom-before.jpg", after: "/images/before-after/bathroom-after.jpg", note: "Limescale, grout & glass restored to a spotless shine." },
      { label: "Villa floor", before: "/images/before-after/floor-before.jpg", after: "/images/before-after/floor-after.jpg", note: "Tiles stripped of build-up and polished edge to edge." },
      { label: "Bedroom", before: "/images/before-after/bedroom-before.jpg", after: "/images/before-after/bedroom-after.jpg", note: "Fabrics freshened and every surface fully sanitized." },
      { label: "Office desk", before: "/images/before-after/office-before.jpg", after: "/images/before-after/office-after.jpg", note: "Workspaces reset to client-ready in under an hour." },
    ],
  },
  stats: [
    { value: 5000, suffix: "+", label: "Homes & offices cleaned" },
    { value: 98, suffix: "%", label: "Customer satisfaction" },
    { value: 10, suffix: "+", label: "Years of experience" },
    { value: 50, suffix: "+", label: "Professional staff" },
  ],
  testimonials: [
    { quote: "The crew was on time, discreet, and the villa has never looked this good. The window finish alone was worth it.", name: "Noura Al-Sabah", role: "Villa owner · Mishref", seed: "rev-noura" },
    { quote: "We switched our office to the weekly plan. Same crew every time, spotless every time. Clients notice.", name: "Yousef Khaled", role: "Operations Lead · Kuwait City", seed: "rev-yousef" },
    { quote: "Booked a move-out deep clean on short notice and got my full deposit back. I won't use anyone else.", name: "Fatima Rashed", role: "Apartment · Salmiya", seed: "rev-fatima" },
    { quote: "Prompt, professional, and genuinely thorough. The kitchen looked brand new.", name: "Ahmad Al-Mutairi", role: "Homeowner · Jabriya", seed: "rev-ahmad" },
    { quote: "Their eco-safe products matter to us with two toddlers at home. No harsh smell, spotless result.", name: "Dana Saleh", role: "Mother of two · Hawalli", seed: "rev-dana" },
    { quote: "Best cleaning service in Kuwait, hands down. Reliable and detail-obsessed.", name: "Khalid Nasser", role: "Villa owner · Bayan", seed: "rev-khalid" },
    { quote: "They handled our post-construction mess perfectly. Fine dust gone from everywhere.", name: "Sara Al-Otaibi", role: "Interior designer · Salwa", seed: "rev-sara" },
    { quote: "Booking on WhatsApp took 30 seconds. Crew arrived exactly on time.", name: "Omar Faisal", role: "Tenant · Salmiya", seed: "rev-omar" },
    { quote: "Our showroom has never looked sharper. Customers commented the same day.", name: "Layla Hassan", role: "Retail manager · Avenues", seed: "rev-layla" },
    { quote: "Polite, careful with our furniture, and incredibly thorough. Highly recommend.", name: "Mohammed Ali", role: "Homeowner · Mangaf", seed: "rev-mohammed" },
    { quote: "Switched from another company and the difference is night and day.", name: "Hessa Al-Rashed", role: "Villa owner · Mishref", seed: "rev-hessa" },
    { quote: "The deep clean before Ramadan was flawless. Felt like a brand-new home.", name: "Abdullah Jaber", role: "Homeowner · Qortuba", seed: "rev-abdullah" },
    { quote: "Spotless bathrooms, sparkling glass, and a fair price. What more could you want?", name: "Mariam Saad", role: "Apartment · Fintas", seed: "rev-mariam" },
    { quote: "They re-cleaned one spot I pointed out without any fuss. That's real service.", name: "Talal Aziz", role: "Tenant · Mahboula", seed: "rev-talal" },
    { quote: "Our weekly office clean keeps the whole team happier. Worth every fil.", name: "Reem Khalifa", role: "HR lead · Sharq", seed: "rev-reem" },
    { quote: "Friendly, fast, and the floors actually shine now. Five stars.", name: "Nasser Bader", role: "Homeowner · Rumaithiya", seed: "rev-nasser" },
    { quote: "I'm very particular and they still exceeded my expectations.", name: "Aisha Mansour", role: "Villa owner · Surra", seed: "rev-aisha" },
    { quote: "Great communication from booking to finish. No surprises on the bill.", name: "Faisal Al-Harbi", role: "Tenant · Salmiya", seed: "rev-faisal" },
    { quote: "Move-in clean was immaculate. We unpacked into a perfect home.", name: "Lulwa Saleh", role: "New resident · Jabriya", seed: "rev-lulwa" },
    { quote: "The team is trustworthy — I'm comfortable leaving them with a key.", name: "Yaqoub Adel", role: "Villa owner · Bayan", seed: "rev-yaqoub" },
    { quote: "Consistent quality month after month. That consistency is rare.", name: "Maha Tariq", role: "Apartment · Salwa", seed: "rev-maha" },
    { quote: "Quick response, spotless result, lovely crew. Couldn't ask for more.", name: "Bader Al-Fadhli", role: "Homeowner · Adailiya", seed: "rev-bader" },
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
 blogs: [
    {
      slug: "deep-clean-checklist",
      title: "The 12-point deep clean checklist",
      excerpt: "What separates a surface tidy from a true deep clean — and how to spot the difference.",
      category: "Guides",
      readTime: "5 min",
      date: "Jun 2026",
      cover: "/images/services/deep-cleaning.jpg",
      author: { name: "Layla Haddad", role: "Lead Specialist", linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-layla/100/100" },
      body: [
        "A deep clean isn't just a longer regular clean — it targets the build-up everyday tidying never reaches: grout, behind appliances, vents, and the tops of doors and frames.",
        "Start high and move low. Dust ceilings, fans, and light fixtures first so anything that falls is cleaned up afterward, not after you've already done the floors.",
        "Kitchens and bathrooms deserve the most time. Degrease range hoods, descale taps and shower glass, and sanitize every high-touch surface — handles, switches, and remotes included.",
        "Finish with floors, edges, and skirting boards. The corners are what people notice; a centre-of-the-room clean always looks unfinished.",
      ],
    },
    {
      slug: "eco-friendly-products",
      title: "Why we only use eco-safe products",
      excerpt: "Family- and pet-friendly doesn't mean weaker. Here's the science of a safer clean.",
      category: "Health",
      readTime: "4 min",
      date: "May 2026",
      cover: "/images/services/home-cleaning.jpg",
      author: { name: "Omar Saleh", role: "Operations Manager", linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-omar/100/100" },
      body: [
        "Harsh chemical cleaners leave residues and fumes that linger long after the crew leaves — a real concern in homes with children, pets, or anyone with sensitivities.",
        "Modern plant-based formulas cut grease and kill germs just as effectively, without the respiratory irritation or the sharp chemical smell.",
        "Eco-safe also means safer surfaces. Gentler products protect natural stone, wood, and finishes that aggressive cleaners slowly degrade.",
      ],
    },
    {
      slug: "move-out-deposit",
      title: "Get your full deposit back",
      excerpt: "Landlords inspect the same five things. Nail these and your deposit is safe.",
      category: "Tips",
      readTime: "6 min",
      date: "Apr 2026",
      cover: "/images/before-after/bedroom-after.jpg",
      author: { name: "Fatima Rashed", role: "Customer Success", linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-fatima/100/100" },
      body: [
        "Deposits are most often docked for things tenants overlook: oven interiors, limescale, wall marks, and grime in window tracks.",
        "Document everything with photos before and after. A clear record resolves disputes faster than any argument.",
        "When in doubt, a professional move-out clean costs a fraction of a withheld deposit — and comes with a guarantee an afternoon of scrubbing never will.",
      ],
    },
    {
      slug: "cleaning-frequency",
      title: "How often should you deep clean?",
      excerpt: "Weekly, monthly, seasonal — a simple schedule that actually fits real life.",
      category: "Guides",
      readTime: "3 min",
      date: "Mar 2026",
      cover: "/images/before-after/floor-after.jpg",
      author: { name: "Layla Haddad", role: "Lead Specialist", linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-layla/100/100" },
      body: [
        "Light maintenance cleaning works best weekly — surfaces, floors, and bathrooms stay on top of mess before it becomes a project.",
        "A deep clean every two to three months resets everything routine cleaning slowly misses, from grout to upholstery.",
        "Homes with pets, kids, or heavy foot traffic should lean toward the shorter end of that range.",
      ],
    },
    {
      slug: "kitchen-degrease",
      title: "The right way to degrease a kitchen",
      excerpt: "Cut through baked-on grease without dulling your surfaces or finishes.",
      category: "Tips",
      readTime: "4 min",
      date: "Feb 2026",
      cover: "/images/before-after/kitchen-after.jpg",
      author: { name: "Yousef Khaled", role: "Field Supervisor", linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-yousef/100/100" },
      body: [
        "Grease bonds with dust over time, so the longer it sits the harder it clings. Warm water and a degreaser loosen it far better than scrubbing dry.",
        "Always test on a hidden spot first. Stainless steel, painted cabinets, and natural stone each react differently to strong cleaners.",
        "Work top-down: hood and upper cabinets first, then the backsplash, then countertops, finishing with the cooktop and floor.",
      ],
    },
    {
      slug: "bathroom-limescale",
      title: "Beat bathroom limescale for good",
      excerpt: "Why hard water leaves those white marks — and how to remove them safely.",
      category: "Tips",
      readTime: "4 min",
      date: "Feb 2026",
      cover: "/images/before-after/bathroom-after.jpg",
      author: { name: "Fatima Rashed", role: "Customer Success", linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-fatima/100/100" },
      body: [
        "Limescale is a mineral deposit left by hard water. It builds on taps, glass, and tiles, and it only gets tougher the longer it's left.",
        "A mild acidic cleaner dissolves it without scratching. Give it time to sit rather than scrubbing harder — patience beats elbow grease here.",
        "A quick daily squeegee on shower glass is the single best habit for keeping limescale from ever returning.",
      ],
    },
    {
      slug: "office-hygiene",
      title: "Office hygiene: the spots everyone forgets",
      excerpt: "Desks look clean, but the germs hide where no one's looking.",
      category: "Workplace",
      readTime: "5 min",
      date: "Jan 2026",
      cover: "/images/services/office-cleaning.jpg",
      author: { name: "Omar Saleh", role: "Operations Manager", linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-omar/100/100" },
      body: [
        "Keyboards, phones, and door handles carry more bacteria than most surfaces in a building, yet they're rarely part of a routine wipe-down.",
        "Shared kitchens and meeting-room tables are hotspots too. A daily sanitize of high-touch points cuts the spread of seasonal illness dramatically.",
        "A consistent schedule with the same crew means nothing gets skipped — which is exactly where office cleaning usually falls down.",
      ],
    },
    {
      slug: "post-construction",
      title: "Post-construction cleaning, step by step",
      excerpt: "Fine dust gets everywhere after a build. Here's how the pros clear it.",
      category: "Guides",
      readTime: "7 min",
      date: "Jan 2026",
      cover: "/images/before-after/floor-before.jpg",
      author: { name: "Yousef Khaled", role: "Field Supervisor", linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-yousef/100/100" },
      body: [
        "Construction dust is ultra-fine and settles into every gap. It needs a vacuum with a proper filter, not just a cloth that pushes it around.",
        "Work in passes: a rough clean to remove debris, a detailed clean for surfaces and fixtures, then a final polish once the dust has fully settled.",
        "Windows, tracks, and vents trap the most residue and are the easiest to miss — leave time for them at the end.",
      ],
    },
    {
      slug: "pet-friendly-home",
      title: "A spotless home with pets",
      excerpt: "Hair, odours, and accidents — manageable with the right routine.",
      category: "Health",
      readTime: "4 min",
      date: "Dec 2025",
      cover: "/images/services/home-cleaning.jpg",
      author: { name: "Layla Haddad", role: "Lead Specialist", linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-layla/100/100" },
      body: [
        "Pet hair clings to fabric and floats into vents. Frequent vacuuming with the right attachments keeps it from building up everywhere.",
        "For odours, treat the source rather than masking it. Enzyme-based cleaners break down what air fresheners only cover.",
        "Always choose pet-safe products — paws and noses are close to every surface you clean.",
      ],
    },
    {
      slug: "ramadan-deep-clean",
      title: "Preparing your home for Ramadan",
      excerpt: "A calm, organised deep-clean plan to welcome the holy month.",
      category: "Seasonal",
      readTime: "5 min",
      date: "Dec 2025",
      cover: "/images/before-after/living-room-after.jpg",
      author: { name: "Fatima Rashed", role: "Customer Success", linkedin: "https://linkedin.com/in/example", avatar: "https://picsum.photos/seed/author-fatima/100/100" },
      body: [
        "Start a week or two ahead so the work feels calm, not rushed. Tackle one room a day rather than everything at once.",
        "Focus on the spaces you'll use most — the kitchen for long evenings of cooking, and the majlis for hosting family and guests.",
        "A professional deep clean before the month begins frees you to focus on what matters during Ramadan itself.",
      ],
    },
  ],
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
