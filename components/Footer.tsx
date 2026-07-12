import { site } from "@/lib/site";
import { Container } from "./Container";

function FCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h5 className="mb-4 text-xs font-semibold uppercase tracking-wider text-acc">
        {title}
      </h5>
      {links.map((l) => (
        <a
          key={l}
          href="#"
          className="mb-3 block text-sm text-muted transition hover:text-ink"
        >
          {l}
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
            <div className="flex items-center gap-3 text-lg font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-grad font-serif text-white">
                S
              </span>
              {site.name}
            </div>
            <p className="mt-4 max-w-[280px] text-sm text-muted">
              Premium cleaning for Kuwait&apos;s homes, villas, and offices. A
              spotless space, delivered like art.
            </p>
          </div>
          <FCol
            title="Services"
            links={[
              "Home Cleaning",
              "Office Cleaning",
              "Deep Cleaning",
              "Move-In / Out",
              "Post-Construction",
            ]}
          />
          <FCol
            title="Company"
            links={["Why Saffa", "How it works", "Results", "FAQ"]}
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
