"use client";

import { motion } from "framer-motion";

export default function WhatWeCreateSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-black leading-none mb-6">
              WHAT WE CREATE
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="space-y-8 text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            <p>
              We create and publish our own digital products across text, audio, and visual formats — thoughtfully designed to deliver value and create meaningful impact across online platforms.
            </p>
            
            <p>
              Our offerings span a wide range of formats, including long-form information products such as courses, workshops, training programs, video courses, e-books, guidebooks, and workbooks, as well as short-form products like templates, cheat sheets, and ready-to-use content writing assets. We also produce audio and visual content, including audio courses, premium podcasts, and video-based materials.
            </p>
            
            <p>
              In addition, we develop digital tools and systems such as Notion templates, digital planners, and productivity-focused solutions, alongside creative digital assets including design elements, graphics, images, and prompts. Our ecosystem is further extended through membership and subscription-based access, offering exclusive content, curated communities, and private knowledge libraries.
            </p>

            <div className="h-px w-full bg-gray-200 my-10 relative">
               <div className="absolute left-0 top-0 h-full w-12 bg-[#FF6B35]"></div>
            </div>

            <p>
              We design and produce strategic content across online and offline platforms — from social media and digital channels to live and on-ground communication. Our work goes beyond writing, combining strategy, storytelling, and brand identity to create content that communicates clearly, engages audiences, and drives real growth. From general content and social media to reviews, scripts, copywriting, PR, and business writing, we deliver end-to-end solutions tailored to each brand. We also specialize in multilingual content, ensuring your message stays consistent and impactful across different languages, cultures, and markets.
            </p>

            <p>
              We create and offer our own lifestyle products, thoughtfully designed to reflect the identity of PINAHX — created with purpose for everyday use.
            </p>

            <p>
              AI-driven solutions for visual and audio content — designed to support the future of scalable communication and growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
