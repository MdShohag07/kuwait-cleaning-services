import Image from "next/image";
import { site } from "@/lib/site";
import { Container } from "./Container";

function FCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h5 className="mb-4 text-xs font-semibold uppercase tracking-wider text-acc">
        {title}
      </h5>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="mb-3 block text-sm text-muted transition hover:text-ink"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-line-soft bg-surface pb-7 pt-16">
      <Container>
        <div className="mb-12 grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div>
              <Image src="/images/footerlogo.png" alt={site.name} width={640} height={640} className="-ml-2 h-32 w-32 object-contain sm:h-36 sm:w-36" />
            </div>
            <p className="mt-4 max-w-[280px] text-sm text-muted">
              Premium cleaning for Kuwait&apos;s homes, villas, and offices. A
              spotless space, delivered like art.
            </p>
          </div>
          <FCol
            title="Services"
            links={[
              { label: "Home Cleaning", href: "/#services" },
              { label: "Office Cleaning", href: "/#services" },
              { label: "Deep Cleaning", href: "/#services" },
              { label: "Move-In / Out", href: "/#services" },
              { label: "Post-Construction", href: "/#services" },
            ]}
          />
          <FCol
            title="Company"
            links={[
              { label: "Why Us", href: "/#why" },
              { label: "How it works", href: "/#process" },
              { label: "Results", href: "/#results" },
              { label: "FAQ", href: "/#faq" },
            ]}
          />
          <div>
            <h5 className="mb-4 text-xs font-semibold uppercase tracking-wider text-acc">
              Contact
            </h5>
            <a
              href={`tel:${site.phone}`}
              className="mb-3 block text-sm text-muted hover:text-ink"
            >
              {site.phoneDisplay}
            </a>
            
            <a
              href={`mailto:${site.email}`}
              className="mb-3 block text-sm text-muted hover:text-ink"
            >
              {site.email}
            </a>
            <span className="block text-sm text-muted">{site.city}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line-soft pt-6 text-sm text-muted-2">
          <span>
            © {new Date().getFullYear()} {site.name} Cleaning Services · Kuwait
          </span>
          <span className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
