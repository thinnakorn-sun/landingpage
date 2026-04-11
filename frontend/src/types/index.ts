export type Lang = "th" | "en";

export interface BilingualText {
  th: string;
  en: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: BilingualText;
  description: BilingualText;
}

export interface FaqItem {
  id: string;
  question: BilingualText;
  answer: BilingualText;
}

export interface ContactChannel {
  id: string;
  label: BilingualText;
  icon: React.ReactNode;
  href: string;
  value: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: BilingualText;
}

export interface NavLink {
  id: string;
  label: BilingualText;
  href: string;
}

export interface PolicyLink {
  id: string;
  label: BilingualText;
  href: string;
}
