/**
 * ค่าคงที่แบรนด์ / การติดต่อ — ข้อความหลายภาษาอยู่ใน `@/copy`
 */
export * from "@/copy";

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

export const COPYRIGHT_YEAR = 2026;
