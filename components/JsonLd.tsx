import { site } from "@/data/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    image: `${site.url}/images/developer-studio-logo.png`,
    logo: `${site.url}/images/developer-studio-logo.png`,
    telephone: `+${site.phones.uk.e164}`,
    areaServed: "GB",
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    sameAs: site.social.map((s) => s.href),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+${site.phones.uk.e164}`,
        contactType: "sales",
        areaServed: "GB",
        availableLanguage: ["en"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
