import type { Lang, L10nString } from "@/types";

const L = (o: Record<Lang, string>): L10nString => o;

/** หัวข้อเดียวกันทุกภาษา (ตามบรีฟลูกค้า) */
export const WORK_UPDATES_TITLE = L({
  en: "OUR WORK & UPDATEDS",
  th: "OUR WORK & UPDATEDS",
  zh: "OUR WORK & UPDATEDS",
  ja: "OUR WORK & UPDATEDS",
  ko: "OUR WORK & UPDATEDS",
});

/** ข้อความก่อนลิงก์ Facebook — ไม่รวมโดเมน (EN/TH ต่อท้ายด้วยลิงก์ในบรรทัดเดียวกัน) */
export const WORK_UPDATES_LEAD = L({
  en: "Follow our latest updates on our work, products, and services at",
  th: "ติดตามการอัปเดตล่าสุดเกี่ยวกับงานของเรา, ผลิตภัณฑ์ และบริการของเราได้ที่",
  zh: "关注我们，获取最新作品、产品和服务动态",
  ja: "",
  ko: "최신 작품, 제품 및 서비스 소식을 여기에서 확인하세요",
});

/** บรรทัดเน้นภาษาญี่ปุ่น (แสดงเมื่อเลือก JA เท่านั้น) */
export const WORK_UPDATES_JA_EMPHASIS =
  "最新の作品・商品・サービス情報は、こちらでご覧ください";
