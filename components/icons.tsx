import type { SVGProps } from "react";

export type IconName =
  | "code"
  | "app"
  | "search"
  | "share"
  | "target"
  | "rocket"
  | "scale"
  | "home"
  | "compass"
  | "map"
  | "arrowRight"
  | "arrowUpRight"
  | "check"
  | "menu"
  | "close"
  | "phone"
  | "mail"
  | "star"
  | "chevronDown"
  | "mapPin"
  | "sparkles"
  | "bolt"
  | "heart"
  | "facebook"
  | "instagram"
  | "linkedin"
  | "x"
  | "youtube"
  | "whatsapp"
  | "tiktok";

type Props = SVGProps<SVGSVGElement> & { name: IconName };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<IconName, React.ReactNode> = {
  code: (
    <g {...stroke}>
      <path d="m8 9-3 3 3 3" />
      <path d="m16 9 3 3-3 3" />
      <path d="m13.5 7-3 10" />
    </g>
  ),
  app: (
    <g {...stroke}>
      <rect x="7" y="3" width="10" height="18" rx="2.5" />
      <path d="M11 18h2" />
    </g>
  ),
  search: (
    <g {...stroke}>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.2-3.2" />
    </g>
  ),
  share: (
    <g {...stroke}>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="17" cy="6" r="2.5" />
      <circle cx="17" cy="18" r="2.5" />
      <path d="m8.3 10.8 6.4-3.6M8.3 13.2l6.4 3.6" />
    </g>
  ),
  target: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </g>
  ),
  rocket: (
    <g {...stroke}>
      <path d="M12 3c3 1.5 5 4.5 5 8l-3 3H10L7 11c0-3.5 2-6.5 5-8Z" />
      <circle cx="12" cy="9.5" r="1.4" />
      <path d="M9 18c-1 1-1.5 3-1.5 3s2-.5 3-1.5M15 18c1 1 1.5 3 1.5 3s-2-.5-3-1.5" />
    </g>
  ),
  scale: (
    <g {...stroke}>
      <path d="M12 3v18M7 21h10" />
      <path d="M5 7h14M8 4.5 5 7l-2.2 4a3 3 0 0 0 5.4 0L6 7M16 4.5 19 7l-2.2 4a3 3 0 0 0 5.4 0L18 7" />
    </g>
  ),
  home: (
    <g {...stroke}>
      <path d="M4 11.5 12 5l8 6.5" />
      <path d="M6 10.5V20h12v-9.5" />
      <path d="M10 20v-5h4v5" />
    </g>
  ),
  compass: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15 9-1.8 4.2L9 15l1.8-4.2L15 9Z" />
    </g>
  ),
  map: (
    <g {...stroke}>
      <path d="m9 4 6 2 5-2v14l-5 2-6-2-5 2V6l5-2Z" />
      <path d="M9 4v14M15 6v14" />
    </g>
  ),
  arrowRight: (
    <g {...stroke}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </g>
  ),
  arrowUpRight: (
    <g {...stroke}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </g>
  ),
  check: (
    <g {...stroke}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </g>
  ),
  menu: (
    <g {...stroke}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </g>
  ),
  close: (
    <g {...stroke}>
      <path d="M6 6 18 18M18 6 6 18" />
    </g>
  ),
  phone: (
    <g {...stroke}>
      <path d="M6 3h3l1.5 5-2 1.5a12 12 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
    </g>
  ),
  mail: (
    <g {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </g>
  ),
  star: (
    <path
      d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L3.5 9.7l5.9-.9L12 3.5Z"
      fill="currentColor"
    />
  ),
  chevronDown: (
    <g {...stroke}>
      <path d="m6 9 6 6 6-6" />
    </g>
  ),
  mapPin: (
    <g {...stroke}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </g>
  ),
  sparkles: (
    <g {...stroke}>
      <path d="M12 4v6M9 7h6" transform="translate(0 -1)" />
      <path d="M12 5.5 13 9l3.5 1L13 11l-1 3.5L11 11l-3.5-1L11 9l1-3.5Z" fill="currentColor" stroke="none" />
      <path d="M18 13l.6 2 2 .6-2 .6L18 18l-.6-1.8-2-.6 2-.6L18 13Z" fill="currentColor" stroke="none" />
    </g>
  ),
  bolt: (
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="currentColor" />
  ),
  heart: (
    <path
      d="M12 20.5 4.2 12.9a4.6 4.6 0 0 1 0-6.5 4.6 4.6 0 0 1 6.5 0l1.3 1.3 1.3-1.3a4.6 4.6 0 0 1 6.5 6.5L12 20.5Z"
      fill="currentColor"
    />
  ),
  // ---- Social (brand glyphs, fill currentColor) ----
  facebook: (
    <path
      fill="currentColor"
      d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"
    />
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth={1.7}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </g>
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M20.5 3h-17A1.5 1.5 0 0 0 2 4.5v15A1.5 1.5 0 0 0 3.5 21h17a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20.5 3ZM8 18H5.5v-8H8v8ZM6.7 8.7a1.4 1.4 0 1 1 0-2.9 1.4 1.4 0 0 1 0 2.9ZM18.5 18H16v-4.3c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3 1-.1.2-.1.5-.1.7V18H10.9s.03-7.3 0-8h2.5v1.1c.3-.5 1-1.3 2.4-1.3 1.7 0 3 1.1 3 3.6V18Z"
    />
  ),
  x: (
    <path
      fill="currentColor"
      d="M17.5 3h3l-6.6 7.5L21.8 21h-6l-4.7-6.1L5.6 21H2.5l7-8L2.5 3h6.1l4.2 5.6L17.5 3Zm-1 16h1.7L7.6 4.8H5.8L16.5 19Z"
    />
  ),
  youtube: (
    <g>
      <path
        fill="currentColor"
        d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8Z"
      />
      <path fill="#fff" d="m10 15 5-3-5-3v6Z" />
    </g>
  ),
  whatsapp: (
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3A3 3 0 0 0 6.8 10a5.3 5.3 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c2.3.9 2.3.6 2.7.6.4 0 1.4-.5 1.6-1.1.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3Z"
    />
  ),
  tiktok: (
    <path
      fill="currentColor"
      d="M16.5 3c.3 2 1.5 3.5 3.5 3.8v2.6c-1.3 0-2.5-.4-3.5-1.1v5.8a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 1 0 2 2.8V3h2.7Z"
    />
  ),
};

export function Icon({ name, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
