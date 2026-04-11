import type {
  BilingualText,
  ServiceItem,
  FaqItem,
  NavLink,
  PolicyLink,
  GalleryItem,
} from "@/types";

// ── Brand ──────────────────────────────────────────────────
export const BRAND_NAME = "PINAHX";
export const BRAND_EMAIL = "teams.skillup@gmail.com";
/** เบอร์โทรสำหรับลิงก์ `tel:` — ว่างไว้ได้ถ้ายังไม่ใช้ปุ่มโทร */
export const BRAND_PHONE = "";

// ── Social Links ───────────────────────────────────────────
export const SOCIAL_LINKS = {
  /** แก้เป็นลิงก์ LINE Official / add friend จริงของแบรนด์ */
  line: "https://line.me/R/ti/p/@pinahx",
  facebook: "https://www.facebook.com/pinahx",
  youtube: "https://www.youtube.com/pinahx",
  /** ว่าง = ยังไม่แสดงลิงก์ Instagram */
  instagram: "",
} as const;

/** `tel:` สำหรับ BRAND_PHONE — คืน null ถ้ายังไม่ตั้งเบอร์ */
export function telHref(): string | null {
  const raw = BRAND_PHONE.replace(/[\s\-()]/g, "");
  if (!raw) return null;
  return `tel:${raw}`;
}

// ── Navigation ─────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { id: "services", label: { th: "บริการ", en: "Services" }, href: "#services" },
  { id: "gallery",  label: { th: "ผลงาน", en: "Gallery" },   href: "#gallery" },
  { id: "about",    label: { th: "เกี่ยวกับ", en: "About" },  href: "#about" },
  { id: "contact",  label: { th: "ติดต่อ", en: "Contact" },   href: "#contact" },
];

// ── Hero ───────────────────────────────────────────────────
export const HERO_TAGLINE: BilingualText = {
  th: "NOT JUST CONTENT IT'S YOUR GROWTH",
  en: "NOT JUST CONTENT IT'S YOUR GROWTH",
};
export const HERO_SUB: BilingualText = {
  th: "เราไม่ได้แค่สร้าง Content เราวิเคราะห์ วางกลยุทธ์ และออกแบบการสื่อสาร\nที่ขับเคลื่อนการเติบโตที่แท้จริงให้กับคุณ",
  en: "We don't just create content. We analyze, strategize, and design\ncommunication that drives real growth.",
};
export const HERO_CTA: BilingualText = {
  th: "ดูบริการของเรา",
  en: "Explore Services",
};

// ── Hero Bullets ──────────────────────────────────────────
export const HERO_BULLETS: BilingualText[] = [
  { th: "Digital Content Writing", en: "Digital Content Writing" },
  { th: "Digital Content Products", en: "Digital Content Products" },
  { th: "Digital Education Products", en: "Digital Education Products" },
  { th: "PINAHX Products (Lifestyle)", en: "PINAHX Products (Lifestyle)" },
  { th: "AI Advertising & Production (text and visual)", en: "AI Advertising & Production (text and visual)" },
];

// ── Services ───────────────────────────────────────────────
export const SERVICES: ServiceItem[] = [
  {
    id: "content-writing",
    icon: "✍️",
    title:       { th: "Digital Content Writing",    en: "Digital Content Writing" },
    description: {
      th: "เขียน Content ดิจิทัลคุณภาพสูง ตอบโจทย์กลุ่มเป้าหมาย สร้าง Engagement ที่แท้จริง",
      en: "High-quality digital content writing tailored to your audience, building real engagement.",
    },
  },
  {
    id: "content-products",
    icon: "🎬",
    title:       { th: "Digital Content Products",   en: "Digital Content Products" },
    description: {
      th: "พัฒนาผลิตภัณฑ์ Content ดิจิทัลครบวงจร ตั้งแต่แนวคิดจนถึงการผลิต",
      en: "End-to-end digital content product development, from concept to production.",
    },
  },
  {
    id: "education-products",
    icon: "📚",
    title:       { th: "Digital Education Products", en: "Digital Education Products" },
    description: {
      th: "สร้างสรรค์ผลิตภัณฑ์การศึกษาดิจิทัลที่มีคุณภาพ เข้าถึงง่าย และสร้างผลลัพธ์ที่ชัดเจน",
      en: "Creative digital education products that are accessible and deliver measurable results.",
    },
  },
  {
    id: "pinahx-products",
    icon: "✨",
    title:       { th: "PINAHX Products (Lifestyle)", en: "PINAHX Products (Lifestyle)" },
    description: {
      th: "ผลิตภัณฑ์ไลฟ์สไตล์จาก PINAHX ที่ผสานดีไซน์ดีกับคุณค่าที่แท้จริง",
      en: "Lifestyle products from PINAHX, blending great design with real value.",
    },
  },
  {
    id: "ai-advertising",
    icon: "🤖",
    title:       { th: "AI Advertising & Production", en: "AI Advertising & Production" },
    description: {
      th: "ขับเคลื่อนโฆษณาและการผลิตด้วย AI ทั้ง Text และ Visual เพื่อผลลัพธ์ที่รวดเร็วและแม่นยำ",
      en: "AI-powered advertising and production for both text and visual, delivering faster and smarter results.",
    },
  },
];

// ── Gallery ────────────────────────────────────────────────
export const GALLERY_HEADING: BilingualText = {
  th: "WE CREATE MORE THAN CONTENT",
  en: "WE CREATE MORE THAN CONTENT",
};
export const GALLERY_SUB: BilingualText = {
  th: "สิ่งที่เราสร้าง",
  en: "What We Create",
};
export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", src: "/gallery/placeholder-1.jpg", alt: { th: "ผลงานที่ 1", en: "Work 1" } },
  { id: "g2", src: "/gallery/placeholder-2.jpg", alt: { th: "ผลงานที่ 2", en: "Work 2" } },
  { id: "g3", src: "/gallery/placeholder-3.jpg", alt: { th: "ผลงานที่ 3", en: "Work 3" } },
  { id: "g4", src: "/gallery/placeholder-4.jpg", alt: { th: "ผลงานที่ 4", en: "Work 4" } },
  { id: "g5", src: "/gallery/placeholder-5.jpg", alt: { th: "ผลงานที่ 5", en: "Work 5" } },
];

// ── Marquee ────────────────────────────────────────────────
export const MARQUEE_TEXT = "NOT JUST CONTENT  IT'S YOUR GROWTH";
export const MARQUEE_SEPARATOR = "✦";

// ── About ──────────────────────────────────────────────────
export const ABOUT_TEXT: BilingualText = {
  th: "งาน Digital Content ของเรา คือการออกแบบและสร้างสรรค์สื่อดิจิทัลที่ช่วยยกระดับคุณ ผ่านแนวคิดที่ชัดเจนและการสื่อสารที่มีความหมาย",
  en: "Our Digital Content work is about designing and crafting digital media that elevates you, through clear concepts and meaningful communication.",
};
export const ABOUT_CTA: BilingualText = {
  th: "ติดต่อเรา",
  en: "Contact Us",
};

// ── FAQ ────────────────────────────────────────────────────
export const FAQ_HEADING: BilingualText = {
  th: "คำถามที่พบบ่อย",
  en: "Frequently Asked Questions",
};
export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: { th: "PINAHX ให้บริการอะไรบ้าง?", en: "What services does PINAHX offer?" },
    answer: {
      th: "PINAHX ให้บริการครบวงจรด้าน Digital Content ได้แก่ Content Writing, Content Products, Education Products, Lifestyle Products และ AI Advertising & Production",
      en: "PINAHX offers comprehensive digital content services including Content Writing, Content Products, Education Products, Lifestyle Products, and AI Advertising & Production.",
    },
  },
  {
    id: "faq-2",
    question: { th: "ติดต่อ PINAHX ได้ทางไหนบ้าง?", en: "How can I reach PINAHX?" },
    answer: {
      th: "สามารถติดต่อเราได้ผ่าน LINE, โทรศัพท์, Facebook, YouTube และ Instagram",
      en: "You can reach us via LINE, Phone, Facebook, YouTube, and Instagram.",
    },
  },
  {
    id: "faq-3",
    question: { th: "PINAHX รับงานประเภทไหนบ้าง?", en: "What types of projects does PINAHX accept?" },
    answer: {
      th: "เรารับทุก project ที่เกี่ยวข้องกับ Digital Content ไม่ว่าจะเป็นงานเดี่ยว หรือ Campaign ขนาดใหญ่ ติดต่อเพื่อพูดคุยรายละเอียดได้เลย",
      en: "We accept all projects related to Digital Content, from individual pieces to large-scale campaigns. Contact us to discuss the details.",
    },
  },
  {
    id: "faq-4",
    question: { th: "มีบริการให้คำปรึกษาฟรีไหม?", en: "Do you offer free consultations?" },
    answer: {
      th: "ใช่ครับ เราให้คำปรึกษาเบื้องต้นฟรี ติดต่อมาได้เลยเพื่อนัดพูดคุย",
      en: "Yes! We offer free initial consultations. Feel free to reach out to schedule a chat.",
    },
  },
];

// ── Contact ────────────────────────────────────────────────
export const CONTACT_HEADING: BilingualText = {
  th: "ช่องทางการติดต่อ",
  en: "Get In Touch",
};

// ── Footer ─────────────────────────────────────────────────
export const POLICY_LINKS: PolicyLink[] = [
  { id: "privacy",  label: { th: "นโยบายความเป็นส่วนตัว",  en: "Privacy Policy" },  href: "#" },
  { id: "shipping", label: { th: "นโยบายการจัดส่ง",        en: "Shipping Policy" }, href: "#" },
  { id: "terms",    label: { th: "ข้อกำหนดในการใช้บริการ", en: "Terms of Service" }, href: "#" },
  { id: "refund",   label: { th: "นโยบายการคืนเงิน",       en: "Refund Policy" },   href: "#" },
  { id: "cookies",  label: { th: "การกำหนดลักษณะคุกกี้",   en: "Cookie Settings" }, href: "#" },
];
export const COPYRIGHT_YEAR = 2026;
