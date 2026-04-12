import type { Lang, L10nString, WhatWeCreateBlock } from "@/types";

const L = (o: Record<Lang, string>): L10nString => o;

const T_DIGITAL_PRODUCTS = L({
  en: "DIGITAL PRODUCTS",
  th: "DIGITAL PRODUCTS",
  zh: "DIGITAL PRODUCTS",
  ja: "DIGITAL PRODUCTS",
  ko: "DIGITAL PRODUCTS",
});

const T_DIGITAL_CONTENT = L({
  en: "DIGITAL CONTENT WRITING",
  th: "DIGITAL CONTENT WRITING",
  zh: "DIGITAL CONTENT WRITING",
  ja: "DIGITAL CONTENT WRITING",
  ko: "DIGITAL CONTENT WRITING",
});

const T_PINAHX = L({
  en: "PINAHX Products (Lifestyle)",
  th: "PINAHX Products (Lifestyle)",
  zh: "PINAHX Products（生活方式）",
  ja: "PINAHX Products（ライフスタイル）",
  ko: "PINAHX Products (라이프스타일)",
});

const T_AI = L({
  en: "AI ADVERTISING AND PRODUCTION (AUDIO & VISUAL)",
  th: "AI ADVERTISING AND PRODUCTION (AUDIO & VISUAL)",
  zh: "AI ADVERTISING AND PRODUCTION（音频与视觉）",
  ja: "AI ADVERTISING AND PRODUCTION（音声・映像）",
  ko: "AI ADVERTISING AND PRODUCTION (AUDIO & VISUAL)",
});

export const WHAT_WE_CREATE_BLOCKS: WhatWeCreateBlock[] = [
  {
    id: "digital-products",
    title: T_DIGITAL_PRODUCTS,
    paragraphs: [
      L({
        en: "We create and publish our own digital products across text, audio, and visual formats — thoughtfully designed to deliver value and create meaningful impact across online platforms.",
        th: "เราสร้างและเผยแพร่ผลิตภัณฑ์ดิจิทัลของเราเองในรูปแบบข้อความ เสียง และภาพ — ออกแบบอย่างพิถีพิถันเพื่อมอบคุณค่าและสร้างผลกระทบที่มีความหมายบนแพลตฟอร์มออนไลน์",
        zh: "我们创建并发布自有数字产品，涵盖文本、音频和视觉形式——经过精心设计，旨在在各类在线平台上提供价值并产生有意义的影响。",
        ja: "私たちは、テキスト・音声・ビジュアル形式にわたる独自のデジタル製品を企画・制作・提供しています。オンラインプラットフォーム上で価値を届け、意味のある影響を生み出すよう丁寧に設計されています。",
        ko: "우리는 텍스트, 오디오, 비주얼 형식 전반에 걸쳐 자체 디지털 제품을 기획·제작·출판합니다. 온라인 플랫폼 전반에서 가치를 제공하고 의미 있는 영향을 만들어내도록 정교하게 설계되었습니다.",
      }),
      L({
        en: "Our offerings span a wide range of formats, including long-form information products such as courses, workshops, training programs, video courses, e-books, guidebooks, and workbooks, as well as short-form products like templates, cheat sheets, and ready-to-use content writing assets. We also produce audio and visual content, including audio courses, premium podcasts, and video-based materials.",
        th: "ข้อเสนอของเราครอบคลุมหลากหลายรูปแบบ ตั้งแต่ผลิตภัณฑ์เชิงข้อมูลแบบยาว เช่น คอร์ส เวิร์กช็อป โปรแกรมฝึกอบรม วิดีโอคอร์ส อีบุ๊ก หนังสือคู่มือ และเวิร์กบุ๊ก รวมถึงผลิตภัณฑ์แบบสั้น เช่น เทมเพลต ชีทสรุป และเครื่องมือช่วยเขียนคอนเทนต์ที่พร้อมใช้งาน นอกจากนี้ เรายังผลิตคอนเทนต์เสียงและภาพ เช่น คอร์สเสียง พอดแคสต์พรีเมียม และสื่อวิดีโอ",
        zh: "我们的产品形式多样，包括长篇信息类产品，如课程、工作坊、培训项目、视频课程、电子书、指南和练习手册，以及短篇产品，如模板、速查表和可直接使用的内容写作素材。同时，我们还制作音频与视觉内容，包括音频课程、高端播客和视频内容。",
        ja: "提供内容は、コース、ワークショップ、トレーニングプログラム、動画講座、電子書籍、ガイドブック、ワークブックなどの長尺型情報コンテンツから、テンプレート、チートシート、すぐに使えるコンテンツ作成素材といった短尺型製品まで幅広く展開しています。また、音声講座、プレミアムポッドキャスト、動画コンテンツなどの音声・映像制作も行っています。",
        ko: "코스, 워크숍, 교육 프로그램, 영상 강의, 전자책, 가이드북, 워크북과 같은 장문형 정보 제품부터 템플릿, 치트시트, 즉시 활용 가능한 콘텐츠 작성 자료와 같은 단문형 제품까지 폭넓게 제공합니다. 또한 오디오 강의, 프리미엄 팟캐스트, 영상 콘텐츠 등 다양한 오디오 및 비주얼 콘텐츠도 제작합니다.",
      }),
      L({
        en: "In addition, we develop digital tools and systems such as Notion templates, digital planners, and productivity-focused solutions, alongside creative digital assets including design elements, graphics, images, and prompts. Our ecosystem is further extended through membership and subscription-based access, offering exclusive content, curated communities, and private knowledge libraries.",
        th: "นอกจากนี้ เรายังพัฒนาเครื่องมือและระบบดิจิทัล เช่น เทมเพลต Notion แพลนเนอร์ดิจิทัล และโซลูชันด้านประสิทธิภาพการทำงาน รวมถึงสินทรัพย์ดิจิทัลเชิงสร้างสรรค์ เช่น องค์ประกอบการออกแบบ กราฟิก รูปภาพ และพรอมต์ ระบบนิเวศของเรายังขยายผ่านการสมัครสมาชิกและบริการแบบสมาชิก เพื่อเข้าถึงคอนเทนต์พิเศษ คอมมูนิตี้ที่คัดสรร และคลังความรู้ส่วนตัว",
        zh: "此外，我们开发数字工具与系统，例如 Notion 模板、数字规划工具以及以效率为导向的解决方案，同时提供创意数字资产，如设计元素、图形、图像和提示词。我们的生态系统还通过会员与订阅服务延伸，提供独家内容、精选社群以及私有知识库。",
        ja: "さらに、Notionテンプレートやデジタルプランナー、生産性向上ツールなどのデジタルツールやシステムの開発に加え、デザイン要素、グラフィック、画像、プロンプトなどのクリエイティブ資産も提供しています。会員制やサブスクリプションを通じて、限定コンテンツ、厳選されたコミュニティ、プライベートなナレッジライブラリも展開しています。",
        ko: "이와 함께 Notion 템플릿, 디지털 플래너, 생산성 중심 솔루션과 같은 디지털 도구 및 시스템을 개발하며, 디자인 요소, 그래픽, 이미지, 프롬프트 등 창의적인 디지털 자산도 제공합니다. 또한 멤버십 및 구독 기반 서비스를 통해 독점 콘텐츠, 큐레이션된 커뮤니티, 프라이빗 지식 라이브러리를 제공합니다.",
      }),
    ],
  },
  {
    id: "digital-content-writing",
    title: T_DIGITAL_CONTENT,
    paragraphs: [
      L({
        en: "We design and produce strategic content across online and offline platforms — from social media and digital channels to live and on-ground communication.",
        th: "เราออกแบบและผลิตคอนเทนต์เชิงกลยุทธ์ทั้งบนแพลตฟอร์มออนไลน์และออฟไลน์ — ตั้งแต่โซเชียลมีเดีย ช่องทางดิจิทัล ไปจนถึงการสื่อสารแบบสดและหน้างาน",
        zh: "我们在线上与线下平台上设计并制作具有战略性的内容——从社交媒体与数字渠道，到现场与线下沟通。",
        ja: "私たちは、オンライン・オフラインの両方で戦略的なコンテンツを設計・制作しています。ソーシャルメディアやデジタルチャネルから、対面・現場でのコミュニケーションまで対応します。",
        ko: "우리는 온라인과 오프라인 전반에서 전략적인 콘텐츠를 기획·제작합니다. 소셜 미디어와 디지털 채널부터 현장 및 라이브 커뮤니케이션까지 폭넓게 대응합니다.",
      }),
      L({
        en: "Our work goes beyond writing, combining strategy, storytelling, and brand identity to create content that communicates clearly, engages audiences, and drives real growth. From general content and social media to reviews, scripts, copywriting, PR, and business writing, we deliver end-to-end solutions tailored to each brand. We also specialize in multilingual content, ensuring your message stays consistent and impactful across different languages, cultures, and markets.",
        th: "งานของเราไม่ใช่แค่การเขียน แต่ผสานกลยุทธ์ การเล่าเรื่อง และอัตลักษณ์แบรนด์ เพื่อสร้างคอนเทนต์ที่สื่อสารได้ชัดเจน ดึงดูดผู้ชม และขับเคลื่อนการเติบโตจริง ตั้งแต่คอนเทนต์ทั่วไป โซเชียลมีเดีย รีวิว สคริปต์ โฆษณา PR และงานเขียนเชิงธุรกิจ เรานำเสนอโซลูชันแบบครบวงจรที่ปรับให้เหมาะกับแต่ละแบรนด์ เรายังเชี่ยวชาญด้านคอนเทนต์หลายภาษา เพื่อให้ข้อความของคุณคงความสม่ำเสมอและทรงพลังในทุกภาษา วัฒนธรรม และตลาด",
        zh: "我们的工作不仅是写作，更融合策略、叙事与品牌身份，打造清晰表达、吸引受众并推动实际增长的内容。从通用内容、社交媒体到评论、脚本、文案、公关及商务写作，我们提供为每个品牌量身定制的一站式解决方案。同时，我们也专注于多语言内容，确保您的信息在不同语言、文化与市场中始终保持一致且具有影响力。",
        ja: "単なる文章作成にとどまらず、戦略、ストーリーテリング、ブランドアイデンティティを融合し、明確に伝わり、共感を生み、実際の成長につながるコンテンツを創出します。一般コンテンツ、SNS、レビュー、スクリプト、コピーライティング、PR、ビジネスライティングまで、各ブランドに最適化された包括的なソリューションを提供します。また、多言語コンテンツにも強みがあり、言語や文化、市場を超えて一貫性と影響力を維持します。",
        ko: "단순한 글쓰기를 넘어 전략, 스토리텔링, 브랜드 아이덴티티를 결합하여 명확하게 전달되고, 고객의 참여를 이끌며, 실제 성장을 만들어내는 콘텐츠를 만듭니다. 일반 콘텐츠, 소셜 미디어, 리뷰, 스크립트, 카피라이팅, PR, 비즈니스 라이팅까지 각 브랜드에 맞춘 엔드투엔드 솔루션을 제공합니다. 또한 다국어 콘텐츠를 전문으로 하여 다양한 언어, 문화, 시장에서도 메시지의 일관성과 영향력을 유지합니다.",
      }),
    ],
  },
  {
    id: "pinahx-products",
    title: T_PINAHX,
    paragraphs: [
      L({
        en: "We create and offer our own lifestyle products, thoughtfully designed to reflect the identity of PINAHX — created with purpose for everyday use.",
        th: "เราสร้างและนำเสนอผลิตภัณฑ์ไลฟ์สไตล์ของเราเอง ซึ่งออกแบบอย่างตั้งใจเพื่อสะท้อนตัวตนของ PINAHX — สร้างขึ้นอย่างมีจุดมุ่งหมายสำหรับการใช้งานในชีวิตประจำวัน",
        zh: "我们打造并提供自有生活方式产品，精心设计以体现 PINAHX 的品牌身份——以目标为导向，为日常使用而生。",
        ja: "PINAHXのアイデンティティを反映したライフスタイル製品を企画・提供しています。日常で使われることを目的に、意味を持って設計されています。",
        ko: "PINAHX의 정체성을 반영한 라이프스타일 제품을 직접 기획·제작하며, 일상에서 의미 있게 사용할 수 있도록 설계합니다.",
      }),
    ],
  },
  {
    id: "ai-advertising",
    title: T_AI,
    paragraphs: [
      L({
        en: "AI-driven solutions for visual and audio content — designed to support the future of scalable communication and growth.",
        th: "โซลูชันที่ขับเคลื่อนด้วย AI สำหรับคอนเทนต์ภาพและเสียง — ออกแบบมาเพื่อรองรับอนาคตของการสื่อสารและการเติบโตที่ขยายขนาดได้",
        zh: "基于 AI 的音频与视觉内容解决方案——旨在支持未来可规模化的传播与增长。",
        ja: "AIを活用した音声・映像コンテンツソリューション——スケーラブルなコミュニケーションと成長の未来を支えます。",
        ko: "AI 기반의 오디오 및 비주얼 콘텐츠 솔루션 — 확장 가능한 커뮤니케이션과 성장을 위한 미래 지향적 시스템입니다.",
      }),
    ],
  },
];
