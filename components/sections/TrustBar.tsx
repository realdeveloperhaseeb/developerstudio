import Container from "@/components/Container";
import { Icon } from "@/components/icons";

const items = [
  { value: "5.0", label: "Average client rating", stars: true },
  { value: "120+", label: "Projects delivered" },
  { value: "8+ yrs", label: "Growing UK businesses" },
  { value: "UK + PK", label: "Real, in-house team" },
  { value: "< 1 hr", label: "Typical reply time" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-white">
      <Container>
        <div className="grid grid-cols-2 divide-line py-6 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
          {items.map((it) => (
            <div key={it.label} className="flex flex-col items-center px-4 py-2 text-center">
              {it.stars ? (
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-extrabold text-ink">{it.value}</span>
                  <span className="flex text-brand">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" className="h-4 w-4" />
                    ))}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-extrabold text-ink">{it.value}</span>
              )}
              <span className="mt-1 text-xs text-ink-muted">{it.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
