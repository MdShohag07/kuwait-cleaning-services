import { site, waLink } from "@/lib/site";

export function MobileHookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2.5 border-t border-line bg-white/90 p-2.5 backdrop-blur-lg md:hidden">
      <a
        href={`tel:${site.phone}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-grad py-3 font-semibold text-white"
      >
        Call now
      </a>
      <a
        href={waLink("Hi Saffa, I'd like to book a cleaning.")}
        target="_blank"
        rel="noopener"
        className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#22c35e] py-3 font-semibold text-white"
      >
        WhatsApp
      </a>
    </div>
  );
}
