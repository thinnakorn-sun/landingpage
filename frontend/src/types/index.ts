export type Lang = "en" | "th" | "zh" | "ja" | "ko";

/** ข้อความครบทุกภาษาที่รองรับ */
export type L10nString = Record<Lang, string>;

/** @deprecated ใช้ L10nString แทน */
export type BilingualText = L10nString;

export interface ServiceItem {
  id: string;
  icon: string;
  title: L10nString;
  description: L10nString;
}

export interface FaqItem {
  id: string;
  question: L10nString;
  answer: L10nString;
}

export interface ContactChannel {
  id: string;
  label: L10nString;
  icon: React.ReactNode;
  href: string;
  value: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: L10nString;
}

export interface NavLink {
  id: string;
  label: L10nString;
  href: string;
}

export interface PolicyLink {
  id: string;
  label: L10nString;
  href: string;
}

export type HeadlineTone = "solid" | "muted" | "accent";

export interface HeadlineLine {
  text: string;
  tone: HeadlineTone;
}

export interface WhatWeCreateBlock {
  id: string;
  title: L10nString;
  paragraphs: L10nString[];
}
