# Kuwait Cleaning Services (Saffa)

Premium cleaning website. Next.js 16 + TypeScript + Tailwind v4 + Framer Motion.

Progress: Steps 1–5 complete — Navbar (Call + WhatsApp hooks), Hero (image +
animations + floating cards + trust row), Services pricing cards, Why grid,
Process timeline, Footer, mobile sticky call/WhatsApp bar.

## Run it

Node 18.18+ required (check: `node -v`).

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit

- **All content** (phone, WhatsApp, brand, menu, services, prices, features,
  why-points, steps, images) → `lib/site.ts`. One file.
- **Colors & fonts** → `app/globals.css` (the `@theme` block).
- Brand shown on site is the placeholder "Saffa" — change `name` in `lib/site.ts`
  and the logo "S" in `components/Navbar.tsx` + `components/Footer.tsx`.

## Notes

- Numbers are demo (+965 9000 0000) — replace in `lib/site.ts`.
- Images are reliable demo photos from picsum.photos — replace the URLs in
  `lib/site.ts` with your own. `next.config.ts` already allows images.unsplash.com
  and picsum.photos.

## Still to come

Video section, Before/After slider, Stats, Testimonials, FAQ, Booking/Contact, deploy.
