import type {
  FaqItem,
  GalleryItem,
  HeadlineLine,
  Lang,
  L10nString,
  NavLink,
  PolicyLink,
  ServiceItem,
} from "@/types";

const L = (o: Record<Lang, string>): L10nString => o;

export const NAV_LINKS: NavLink[] = [
  {
    id: "services",
    label: L({
      en: "Products & Services",
      th: "สินค้าและบริการ",
      zh: "产品与服务",
      ja: "製品とサービス",
      ko: "제품 및 서비스",
    }),
    href: "#what-we-create",
  },
  {
    id: "gallery",
    label: L({
      en: "Gallery",
      th: "ผลงาน",
      zh: "作品",
      ja: "ギャラリー",
      ko: "갤러리",
    }),
    href: "#work-updates-heading",
  },
  {
    id: "about",
    label: L({
      en: "About",
      th: "เกี่ยวกับ",
      zh: "关于",
      ja: "概要",
      ko: "소개",
    }),
    href: "#about",
  },
  {
    id: "contact",
    label: L({
      en: "Contact",
      th: "ติดต่อ",
      zh: "联系",
      ja: "お問い合わせ",
      ko: "문의",
    }),
    href: "#contact",
  },
];

export const NAV_CONTACT_CTA = L({
  en: "Contact",
  th: "ติดต่อเรา",
  zh: "联系我们",
  ja: "お問い合わせ",
  ko: "문의하기",
});

export const HERO_HEADLINE: Record<Lang, HeadlineLine[]> = {
  en: [
    { text: "NOT JUST", tone: "solid" },
    { text: "CONTENT", tone: "solid" },
    { text: "IT'S YOUR", tone: "muted" },
    { text: "GROWTH", tone: "accent" },
  ],
  th: [
    { text: "ไม่ใช่แค่คอนเทนต์", tone: "solid" },
    { text: "แต่มันคือ", tone: "muted" },
    { text: "การเติบโต", tone: "accent" },
  ],
  zh: [
    { text: "不仅仅是内容", tone: "solid" },
    { text: "而是", tone: "muted" },
    { text: "增长", tone: "accent" },
  ],
  ja: [
    { text: "単なるコンテンツではなく", tone: "solid" },
    { text: "あなたの", tone: "muted" },
    { text: "成長です", tone: "accent" },
  ],
  ko: [
    { text: "단순한 콘텐츠가 아닌", tone: "solid" },
    { text: "당신의", tone: "muted" },
    { text: "성장입니다", tone: "accent" },
  ],
};

export const HERO_SUB = L({
  en: "We don't just create content. We analyze, strategize, and design communication that drives real growth.",
  th: "เราไม่ได้แค่สร้างคอนเทนต์ เราวิเคราะห์ วางกลยุทธ์ และออกแบบการสื่อสาร เพื่อขับเคลื่อนการเติบโตที่แท้จริง",
  zh: "我们不仅仅创造内容，我们进行分析、制定策略，并设计沟通方式，以推动真正的业务增长。",
  ja: "私たちは単にコンテンツを作るだけではありません。分析し、戦略を立て、コミュニケーションを設計し、本当の成長を実現します。",
  ko: "우리는 단순히 콘텐츠를 만드는 것이 아닙니다. 실질적인 성장을 이끄는 커뮤니케이션을 분석하고, 전략을 세우며, 설계합니다.",
});

export const HERO_CTA = L({
  en: "Explore our work",
  th: "ดูผลงานของเรา",
  zh: "查看我们的作品",
  ja: "制作実例を見る",
  ko: "작업물 살펴보기",
});

export const HERO_BULLETS: L10nString[] = [
  L({
    en: "Digital products",
    th: "ผลิตภัณฑ์ดิจิทัล",
    zh: "数字产品",
    ja: "デジタル製品",
    ko: "디지털 제품",
  }),
  L({
    en: "Digital content writing",
    th: "การเขียนคอนเทนต์ดิจิทัล",
    zh: "数字内容写作",
    ja: "デジタルコンテンツライティング",
    ko: "디지털 콘텐츠 작성",
  }),
  L({
    en: "PINAHX products (lifestyle)",
    th: "ผลิตภัณฑ์ PINAHX (ไลฟ์สไตล์)",
    zh: "PINAHX 产品（生活方式）",
    ja: "PINAHX 製品（ライフスタイル）",
    ko: "PINAHX 라이프스타일 제품",
  }),
  L({
    en: "AI advertising & production (audio & visual)",
    th: "โฆษณาและโปรดักชันด้วย AI (เสียงและภาพ)",
    zh: "AI 广告与制作（音频与视觉）",
    ja: "AI広告および制作（音声・ビジュアル）",
    ko: "AI 기반 광고 및 프로덕션 (음성 및 영상)",
  }),
];

export const SERVICES_KICKER = L({
  en: "01 — OUR EXPERTISE",
  th: "01 — ความเชี่ยวชาญของเรา",
  zh: "01 — 我们的专长",
  ja: "01 — 私たちの専門性",
  ko: "01 — 전문 분야",
});

export const SERVICES_TITLE = L({
  en: "WHAT WE DO",
  th: "เราทำอะไร",
  zh: "我们做什么",
  ja: "私たちの仕事",
  ko: "우리가 하는 일",
});

export const SERVICES_INTRO = L({
  en: "We offer comprehensive services across digital media to grow alongside your brand.",
  th: "เรามีบริการที่ครอบคลุมทุกด้านของสื่อดิจิทัล เพื่อให้เติบโตไปพร้อมกับแบรนด์ของคุณ",
  zh: "我们提供覆盖数字媒体各方面的综合服务，与您的品牌共同成长。",
  ja: "ブランドとともに成長できるよう、デジタルメディアのあらゆる側面をカバーするサービスを提供します。",
  ko: "브랜드와 함께 성장할 수 있도록 디지털 미디어 전반을 아우르는 서비스를 제공합니다.",
});

export const SERVICES: ServiceItem[] = [
  {
    id: "digital-products",
    icon: "📦",
    title: L({
      en: "Digital products",
      th: "ผลิตภัณฑ์ดิจิทัล",
      zh: "数字产品",
      ja: "デジタル製品",
      ko: "디지털 제품",
    }),
    description: L({
      en: "We build and publish our own digital products—courses, tools, templates, audio, and video—designed to deliver value across platforms.",
      th: "เราสร้างและเผยแพร่ผลิตภัณฑ์ดิจิทัลของเราเอง ทั้งคอร์ส เครื่องมือ เทมเพลต เสียง และวิดีโอ — ออกแบบมาเพื่อมอบคุณค่าบนแพลตฟอร์มต่างๆ",
      zh: "我们自主开发与发布数字产品——课程、工具、模板、音频与视频——旨在在各平台传递价值。",
      ja: "コース、ツール、テンプレート、音声、動画など、独自のデジタル製品を企画・提供し、各プラットフォームで価値を届けます。",
      ko: "코스, 도구, 템플릿, 오디오, 영상 등 자체 디지털 제품을 기획·출시하며 플랫폼 전반에 가치를 전달합니다.",
    }),
  },
  {
    id: "digital-content-writing",
    icon: "✍️",
    title: L({
      en: "Digital content writing",
      th: "การเขียนคอนเทนต์ดิจิทัล",
      zh: "数字内容写作",
      ja: "デジタルコンテンツライティング",
      ko: "디지털 콘텐츠 작성",
    }),
    description: L({
      en: "Strategic content for online and offline—social, scripts, PR, and business writing—with multilingual consistency.",
      th: "คอนเทนต์เชิงกลยุทธ์ทั้งออนไลน์และออฟไลน์ รวมโซเชียล สคริปต์ PR และงานเขียนธุรกิจ พร้อมคอนเทนต์หลายภาษาที่สอดคล้องกัน",
      zh: "覆盖线上与线下的战略内容——社交媒体、脚本、公关与商务写作，并保持多语言一致性。",
      ja: "オンライン・オフライン双方で、SNS、脚本、PR、ビジネスライティングまで戦略的なコンテンツを。多言語でも一貫性を保ちます。",
      ko: "온·오프라인 전반의 전략적 콘텐츠—소셜, 스크립트, PR, 비즈니스 라이팅—다국어에서도 일관된 메시지를 유지합니다.",
    }),
  },
  {
    id: "pinahx-products",
    icon: "✨",
    title: L({
      en: "PINAHX products (lifestyle)",
      th: "ผลิตภัณฑ์ PINAHX (ไลฟ์สไตล์)",
      zh: "PINAHX 产品（生活方式）",
      ja: "PINAHX 製品（ライフスタイル）",
      ko: "PINAHX 라이프스타일 제품",
    }),
    description: L({
      en: "Lifestyle products designed to reflect PINAHX—made with purpose for everyday use.",
      th: "ผลิตภัณฑ์ไลฟ์สไตล์ที่สะท้อนตัวตน PINAHX ออกแบบอย่างมีจุดมุ่งหมายสำหรับการใช้งานในชีวิตประจำวัน",
      zh: "体现 PINAHX 品牌身份的生活方式产品，为日常使用而精心设计。",
      ja: "PINAHXのアイデンティティを反映したライフスタイル製品。日常使いのために意味を持って設計されています。",
      ko: "PINAHX의 정체성을 담은 라이프스타일 제품으로, 일상에서 의미 있게 쓰이도록 설계했습니다.",
    }),
  },
  {
    id: "ai-advertising",
    icon: "🤖",
    title: L({
      en: "AI advertising & production",
      th: "โฆษณาและโปรดักชันด้วย AI",
      zh: "AI 广告与制作",
      ja: "AI広告および制作",
      ko: "AI 광고 및 프로덕션",
    }),
    description: L({
      en: "AI-powered audio and visual solutions built for scalable communication and growth.",
      th: "โซลูชันภาพและเสียงที่ขับเคลื่อนด้วย AI เพื่อการสื่อสารและการเติบโตที่ขยายขนาดได้",
      zh: "由 AI 驱动的视听解决方案，支持可扩展的传播与增长。",
      ja: "スケーラブルなコミュニケーションと成長のために設計された、AIを活用した音声・映像ソリューション。",
      ko: "확장 가능한 커뮤니케이션과 성장을 위해 설계된 AI 기반 오디오·비주얼 솔루션입니다.",
    }),
  },
];

export const GALLERY_HEADING = L({
  en: "WE CREATE MORE THAN CONTENT",
  th: "เราสร้างมากกว่าคอนเทนต์",
  zh: "我们创造的不只是内容",
  ja: "私たちは単なるコンテンツ以上のものを創り出します",
  ko: "우리는 단순한 콘텐츠 그 이상을 만듭니다",
});

export const GALLERY_SUB = L({
  en: "What we create",
  th: "สิ่งที่เราทำ",
  zh: "我们的创作",
  ja: "私たちが創るもの",
  ko: "우리가 만드는 것",
});

export const GALLERY_KICKER = L({
  en: "02 — OUR WORK",
  th: "02 — ผลงานของเรา",
  zh: "02 — 我们的作品",
  ja: "02 — 制作実績",
  ko: "02 — 작업물",
});

export const GALLERY_VIEW_PROJECT = L({
  en: "VIEW PROJECT",
  th: "ดูโปรเจกต์",
  zh: "查看项目",
  ja: "プロジェクトを見る",
  ko: "프로젝트 보기",
});

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/gallery/placeholder-1.jpg",
    alt: L({
      en: "Work 1",
      th: "ผลงานที่ 1",
      zh: "作品 1",
      ja: "作品 1",
      ko: "작업 1",
    }),
  },
  {
    id: "g2",
    src: "/gallery/placeholder-2.jpg",
    alt: L({
      en: "Work 2",
      th: "ผลงานที่ 2",
      zh: "作品 2",
      ja: "作品 2",
      ko: "작업 2",
    }),
  },
  {
    id: "g3",
    src: "/gallery/placeholder-3.jpg",
    alt: L({
      en: "Work 3",
      th: "ผลงานที่ 3",
      zh: "作品 3",
      ja: "作品 3",
      ko: "작업 3",
    }),
  },
  {
    id: "g4",
    src: "/gallery/placeholder-4.jpg",
    alt: L({
      en: "Work 4",
      th: "ผลงานที่ 4",
      zh: "作品 4",
      ja: "作品 4",
      ko: "작업 4",
    }),
  },
  {
    id: "g5",
    src: "/gallery/placeholder-5.jpg",
    alt: L({
      en: "Work 5",
      th: "ผลงานที่ 5",
      zh: "作品 5",
      ja: "作品 5",
      ko: "작업 5",
    }),
  },
];

export const MARQUEE_TEXT = L({
  en: "NOT JUST CONTENT  IT'S YOUR GROWTH",
  th: "ไม่ใช่แค่คอนเทนต์ แต่มันคือการเติบโต",
  zh: "不仅仅是内容，而是增长",
  ja: "単なるコンテンツではなく、あなたの成長です",
  ko: "단순한 콘텐츠가 아닌, 당신의 성장입니다",
});

export const MARQUEE_SEPARATOR = "✦";

export const BRAND_MANIFESTO = L({
  en: "We are a digital content production studio focused on strategic, multilingual content, digital products, and experiences designed to drive meaningful growth for brands and individuals.",
  th: "เราเป็นสตูดิโอผลิตคอนเทนต์ดิจิทัลที่มุ่งเน้นการสร้างคอนเทนต์เชิงกลยุทธ์ หลายภาษา รวมถึงผลิตภัณฑ์ดิจิทัลและประสบการณ์ที่ออกแบบมาเพื่อขับเคลื่อนการเติบโตอย่างมีความหมายให้กับแบรนด์และบุคคล",
  zh: "我们是一家数字内容制作工作室，专注于打造具有战略性的多语言内容、数字产品和体验，旨在推动品牌和个人实现有意义的增长。",
  ja: "私たちは、戦略的かつ多言語のコンテンツ、デジタル製品、そして体験の創出に特化したデジタルコンテンツ制作スタジオであり、ブランドや個人にとって意味のある成長を促進することを目的としています。",
  ko: "우리는 전략적이고 다국어 기반의 콘텐츠, 디지털 제품, 그리고 경험을 창출하는 데 집중하는 디지털 콘텐츠 제작 스튜디오로서, 브랜드와 개인의 의미 있는 성장을 이끄는 것을 목표로 합니다.",
});

/** ข้อความใต้สโลแกนในส่วนแบรนด์ (ก่อนหัว WE CREATE…) */
export const BRAND_TAGLINE = L({
  en: "At PINAHX, we take digital content further—progressive and modern—while keeping the story of the present and the future of your brand.",
  th: "ที่ PINAHX เราตั้งใจให้เนื้อหาดิจิทัลไปสู่อีกระดับ ให้ล้ำยุคก้าวหน้า ทันสมัย แต่ยังคงเรื่องราวของทั้งปัจจุบัน และมุ่งหน้าสู่อนาคตของแบรนด์",
  zh: "在 PINAHX，我们致力于将数字内容提升到新高度——前沿、现代，同时保留当下的故事并面向品牌的未来。",
  ja: "PINAHXでは、デジタルコンテンツを次のレベルへ。先進的でモダンでありながら、いまの物語とブランドの未来を大切にします。",
  ko: "PINAHX는 디지털 콘텐츠를 한 단계 끌어올립니다. 앞서가고 모던하면서도, 지금의 이야기와 브랜드의 미래를 담습니다.",
});

export const ABOUT_TEXT = BRAND_MANIFESTO;

export const ABOUT_CTA = L({
  en: "Contact us",
  th: "ติดต่อเรา",
  zh: "联系我们",
  ja: "お問い合わせ",
  ko: "문의하기",
});

export const CONTACT_HEADING = L({
  en: "Get In Touch",
  th: "ช่องทางการติดต่อ",
  zh: "联系方式",
  ja: "お問い合わせ",
  ko: "연락처",
});

export const FAQ_HEADING = L({
  en: "Frequently Asked Questions",
  th: "คำถามที่พบบ่อย",
  zh: "常见问题",
  ja: "よくある質問",
  ko: "자주 묻는 질문",
});

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: L({
      en: "What services does PINAHX offer?",
      th: "PINAHX ให้บริการอะไรบ้าง?",
      zh: "PINAHX 提供哪些服务？",
      ja: "PINAHXはどのようなサービスを提供していますか？",
      ko: "PINAHX는 어떤 서비스를 제공하나요?",
    }),
    answer: L({
      en: "PINAHX offers digital content writing, digital products, PINAHX lifestyle products, and AI advertising & production (audio & visual).",
      th: "PINAHX ให้บริการครอบคลุมการเขียนคอนเทนต์ดิจิทัล ผลิตภัณฑ์ดิจิทัล ผลิตภัณฑ์ไลฟ์สไตล์ PINAHX และโฆษณาและโปรดักชันด้วย AI (เสียงและภาพ)",
      zh: "PINAHX 提供数字内容写作、数字产品、PINAHX 生活方式产品，以及 AI 广告与制作（音频与视觉）。",
      ja: "PINAHXは、デジタルコンテンツライティング、デジタル製品、PINAHXライフスタイル製品、AI広告・制作（音声・映像）を提供しています。",
      ko: "PINAHX는 디지털 콘텐츠 작성, 디지털 제품, PINAHX 라이프스타일 제품, AI 광고 및 프로덕션(음성·영상)을 제공합니다.",
    }),
  },
  {
    id: "faq-2",
    question: L({
      en: "How can I reach PINAHX?",
      th: "ติดต่อ PINAHX ได้ทางไหนบ้าง?",
      zh: "如何联系 PINAHX？",
      ja: "PINAHXへの連絡方法は？",
      ko: "PINAHX에 어떻게 연락할 수 있나요?",
    }),
    answer: L({
      en: "You can reach us via LINE, Facebook, YouTube, and email.",
      th: "สามารถติดต่อเราได้ผ่าน LINE, Facebook, YouTube และอีเมล",
      zh: "您可以通过 LINE、Facebook、YouTube 和电子邮件联系我们。",
      ja: "LINE、Facebook、YouTube、メールでご連絡いただけます。",
      ko: "LINE, Facebook, YouTube 및 이메일로 연락하실 수 있습니다.",
    }),
  },
  {
    id: "faq-3",
    question: L({
      en: "What types of projects does PINAHX accept?",
      th: "PINAHX รับงานประเภทไหนบ้าง?",
      zh: "PINAHX 接受哪些类型的项目？",
      ja: "どのような案件を受け付けていますか？",
      ko: "어떤 유형의 프로젝트를 맡나요?",
    }),
    answer: L({
      en: "We work on digital content projects of all sizes—from one-off pieces to large campaigns. Contact us to discuss.",
      th: "เรารับงานที่เกี่ยวกับคอนเทนต์ดิจิทัลทุกขนาด ตั้งแต่งานเดี่ยวไปจนถึงแคมเปญใหญ่ ติดต่อเพื่อพูดคุยรายละเอียดได้เลย",
      zh: "我们承接各种规模的数字内容项目，从单次稿件到大型活动。欢迎联系洽谈。",
      ja: "単発の制作から大規模キャンペーンまで、デジタルコンテンツに関わる案件幅広く対応します。お気軽にご相談ください。",
      ko: "일회성 제작부터 대규모 캠페인까지 디지털 콘텐츠 관련 프로젝트를 폭넓게 진행합니다. 문의 환영합니다.",
    }),
  },
  {
    id: "faq-4",
    question: L({
      en: "Do you offer free consultations?",
      th: "มีบริการให้คำปรึกษาฟรีไหม?",
      zh: "是否提供免费咨询？",
      ja: "無料の相談はありますか？",
      ko: "무료 상담을 제공하나요?",
    }),
    answer: L({
      en: "Yes. We offer a free initial consultation—reach out to schedule a conversation.",
      th: "มีครับ เราให้คำปรึกษาเบื้องต้นฟรี ติดต่อมาได้เลยเพื่อนัดพูดคุย",
      zh: "是的，我们提供免费的初步咨询，欢迎联系预约。",
      ja: "はい。初回のご相談は無料です。お気軽にご連絡ください。",
      ko: "네. 초기 상담은 무료로 제공합니다. 편히 연락 주세요.",
    }),
  },
];

export const POLICY_LINKS: PolicyLink[] = [
  {
    id: "privacy",
    label: L({
      en: "Privacy Policy",
      th: "นโยบายความเป็นส่วนตัว",
      zh: "隐私政策",
      ja: "プライバシーポリシー",
      ko: "개인정보 처리방침",
    }),
    href: "#",
  },
  {
    id: "shipping",
    label: L({
      en: "Shipping Policy",
      th: "นโยบายการจัดส่ง",
      zh: "配送政策",
      ja: "配送ポリシー",
      ko: "배송 정책",
    }),
    href: "#",
  },
  {
    id: "terms",
    label: L({
      en: "Terms of Service",
      th: "ข้อกำหนดในการใช้บริการ",
      zh: "服务条款",
      ja: "利用規約",
      ko: "이용약관",
    }),
    href: "#",
  },
  {
    id: "refund",
    label: L({
      en: "Refund Policy",
      th: "นโยบายการคืนเงิน",
      zh: "退款政策",
      ja: "返金ポリシー",
      ko: "환불 정책",
    }),
    href: "#",
  },
  {
    id: "cookies",
    label: L({
      en: "Cookie Settings",
      th: "การกำหนดลักษณะคุกกี้",
      zh: "Cookie 设置",
      ja: "Cookie設定",
      ko: "쿠키 설정",
    }),
    href: "#",
  },
];

export const PARTNER_TRUSTED = L({
  en: "Trusted by Innovative Brands",
  th: "ได้รับความไว้วางใจจากแบรนด์ที่ก้าวหน้า",
  zh: "创新品牌信赖之选",
  ja: "革新的なブランドに信頼されています",
  ko: "혁신적인 브랜드가 신뢰합니다",
});

export const WWC_SECTION_TITLE = L({
  en: "WHAT WE CREATE",
  th: "WHAT WE CREATE",
  zh: "WHAT WE CREATE",
  ja: "WHAT WE CREATE",
  ko: "WHAT WE CREATE",
});

export const WWC_SECTION_SUBTITLE = L({
  en: "What we create",
  th: "สิ่งที่เราทำ",
  zh: "我们的创作内容",
  ja: "私たちが創るもの",
  ko: "우리가 만드는 것",
});
