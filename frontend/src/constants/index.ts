/**
 * ค่าคงที่แบรนด์ / การติดต่อ — ข้อความหลายภาษาอยู่ใน `@/copy`
 */
export * from "@/copy";

export const BRAND_NAME = "PINAHX";
/** โลโก้แบรนด์ (รวม PINAHX + DIGITAL STUDIO ในภาพเดียว) */
export const BRAND_LOGO_SRC = "/logo.svg";
export const BRAND_EMAIL = "teams.skillup@gmail.com";
/** เบอร์โทรสำหรับลิงก์ `tel:` — ว่างไว้ได้ถ้ายังไม่ใช้ปุ่มโทร */
export const BRAND_PHONE = "0987418874";

// ── Social Links ───────────────────────────────────────────
export const SOCIAL_LINKS = {
  line: "https://line.me/R/ti/p/~0987418874",
  facebook: "https://www.facebook.com/pinahx",
  youtube: "https://www.youtube.com/@pinahx.studio",
  instagram: "https://www.instagram.com/pinahx.studio/",
} as const;

/** `tel:` สำหรับ BRAND_PHONE — คืน null ถ้ายังไม่ตั้งเบอร์ */
export function telHref(): string | null {
  const raw = BRAND_PHONE.replace(/[\s\-()]/g, "");
  if (!raw) return null;
  return `tel:${raw}`;
}

export const COPYRIGHT_YEAR = 2026;
