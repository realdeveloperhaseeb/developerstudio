export type City = {
  slug: string;
  name: string;
  region: string;
  blurb: string;
  // Sectors we emphasise per city (just for copy variety)
  highlight: string;
};

export const cities: City[] = [
  {
    slug: "london",
    name: "London",
    region: "Greater London",
    blurb:
      "The UK's most competitive market. We help London law firms and roofing companies cut through the noise and own the search results that matter.",
    highlight: "Capital-grade competition",
  },
  {
    slug: "manchester",
    name: "Manchester",
    region: "Greater Manchester",
    blurb:
      "A booming North-West hub. We build fast websites and local SEO that turn Manchester searches into booked jobs and consultations.",
    highlight: "North-West powerhouse",
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    region: "West Midlands",
    blurb:
      "The UK's second city. We position Birmingham businesses at the top of Google for the services their customers are searching for.",
    highlight: "UK's second city",
  },
  {
    slug: "leeds",
    name: "Leeds",
    region: "West Yorkshire",
    blurb:
      "A thriving legal and trades market. We grow Leeds firms with high-intent SEO, paid ads, and websites that convert.",
    highlight: "Yorkshire's business heart",
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    region: "Merseyside",
    blurb:
      "Big personality, big opportunity. We help Liverpool companies dominate local search and fill their calendars.",
    highlight: "Merseyside momentum",
  },
  {
    slug: "bristol",
    name: "Bristol",
    region: "South West",
    blurb:
      "The South West's growth engine. We deliver design-led websites and SEO that get Bristol businesses found first.",
    highlight: "South West leader",
  },
  {
    slug: "sheffield",
    name: "Sheffield",
    region: "South Yorkshire",
    blurb:
      "Steel city, sharp results. We build local authority for Sheffield firms so the right customers find you first.",
    highlight: "Steel City results",
  },
  {
    slug: "newcastle",
    name: "Newcastle",
    region: "Tyne and Wear",
    blurb:
      "The North East's capital. We grow Newcastle businesses with local SEO, ads, and websites built to convert.",
    highlight: "North East capital",
  },
  {
    slug: "nottingham",
    name: "Nottingham",
    region: "East Midlands",
    blurb:
      "A competitive East Midlands market. We put Nottingham companies in front of ready-to-buy local searchers.",
    highlight: "East Midlands hub",
  },
  {
    slug: "leicester",
    name: "Leicester",
    region: "East Midlands",
    blurb:
      "A diverse, fast-growing city. We help Leicester firms win locally with SEO and high-converting websites.",
    highlight: "Fast-growing city",
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    region: "Scotland",
    blurb:
      "Scotland's largest city. We help Glasgow businesses rank, advertise, and grow across the Central Belt.",
    highlight: "Scotland's largest city",
  },
  {
    slug: "edinburgh",
    name: "Edinburgh",
    region: "Scotland",
    blurb:
      "Scotland's capital and a premium market. We deliver polished websites and SEO for Edinburgh firms.",
    highlight: "Scotland's capital",
  },
  {
    slug: "cardiff",
    name: "Cardiff",
    region: "Wales",
    blurb:
      "The capital of Wales. We grow Cardiff law firms and trades with local-first digital marketing.",
    highlight: "Capital of Wales",
  },
  {
    slug: "belfast",
    name: "Belfast",
    region: "Northern Ireland",
    blurb:
      "Northern Ireland's capital. We help Belfast businesses build authority online and win more local work.",
    highlight: "NI's capital",
  },
  {
    slug: "coventry",
    name: "Coventry",
    region: "West Midlands",
    blurb:
      "A resurgent Midlands city. We help Coventry firms get found, get clicks, and get clients.",
    highlight: "Resurgent Midlands city",
  },
  {
    slug: "brighton",
    name: "Brighton",
    region: "South East",
    blurb:
      "The South coast's creative capital. We craft standout websites and SEO for Brighton businesses.",
    highlight: "South coast creative hub",
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
