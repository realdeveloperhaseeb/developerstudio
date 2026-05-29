import { cities } from "@/data/cities";
import { Icon } from "@/components/icons";

export default function LocationsStrip() {
  const row = [...cities, ...cities];
  return (
    <section className="border-y border-line bg-zinc-50/60 py-6">
      <div className="flex items-center gap-4">
        <span className="ml-4 hidden shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink-muted ring-1 ring-line sm:inline-flex">
          Serving the whole UK
        </span>
        <div className="marquee-mask relative flex-1 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-3">
            {row.map((c, i) => (
              <span
                key={`${c.slug}-${i}`}
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-soft ring-1 ring-line"
              >
                <Icon name="mapPin" className="h-4 w-4 text-brand" />
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
