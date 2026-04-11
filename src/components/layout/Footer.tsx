import Image from "next/image";
import { Share2, Camera, MessageCircle, ExternalLink, Mail } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { BRAND_NAME, COPYRIGHT_YEAR, POLICY_LINKS, ABOUT_TEXT, SOCIAL_LINKS, BRAND_EMAIL } from "@/constants";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" className="bg-black text-white py-24 border-t border-white/5 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Brand Logo - Direct Placement */}
        <div className="mb-12 flex justify-center">
          <img 
            src="/logo.jpg" 
            alt="PINAHX Logo" 
            className="h-20 md:h-28 w-auto object-contain bg-white px-8 py-4 rounded-2xl"
          />
        </div>

        {/* About (12) */}
        <p className="text-base md:text-lg text-gray-400 font-medium leading-relaxed mb-16 max-w-3xl mx-auto px-4 italic">
          &quot;{t(ABOUT_TEXT)}&quot;
        </p>

        {/* Contact CTA */}
        <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[#FF6B35] mb-12">
          {t({ th: "ร่วมงานกับเรา", en: "WORK WITH US" })}
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 md:gap-10 mb-16 px-4 flex-wrap">
          <a href={SOCIAL_LINKS.line} className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/5 rounded-full hover:bg-[#FF6B35] transition-all hover:scale-110 shadow-lg border border-white/5" aria-label="Line">
            <MessageCircle size={28} />
          </a>
          <a href={SOCIAL_LINKS.instagram} className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/5 rounded-full hover:bg-[#FF6B35] transition-all hover:scale-110 shadow-lg border border-white/5" aria-label="Instagram">
            <Camera size={28} />
          </a>
          <a href={SOCIAL_LINKS.facebook} className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/5 rounded-full hover:bg-[#FF6B35] transition-all hover:scale-110 shadow-lg border border-white/5" aria-label="Facebook">
            <Share2 size={28} />
          </a>
          <a href={SOCIAL_LINKS.youtube} className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/5 rounded-full hover:bg-[#FF6B35] transition-all hover:scale-110 shadow-lg border border-white/5" aria-label="YouTube">
            <ExternalLink size={28} />
          </a>
        </div>

        {/* Contact Block (8) - From Image Reference */}
        <div className="mb-20 flex flex-col items-center">
          <h3 className="text-xl font-bold text-white mb-6">
            Contact Us
          </h3>
          
          {/* QR Code */}
          <div className="bg-white p-3 rounded-lg mb-8 inline-block shadow-xl">
            <div className="w-40 h-40 bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 relative">
              {/* Replace with real QR when available */}
              <div className="absolute inset-2 bg-black/5 flex items-center justify-center">
                <span className="font-black text-black tracking-widest bg-white px-2 py-1">LINE</span>
              </div>
            </div>
          </div>

          {/* Vertical Contact List */}
          <div className="flex flex-col gap-4 text-left w-full max-w-[280px]">
            {/* Line */}
            <a href={SOCIAL_LINKS.line} className="flex items-center gap-4 py-2 border-b border-white/10 hover:border-[#FF6B35] transition-colors group">
              <div className="w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors">
                <MessageCircle size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">@PINAHX</span>
            </a>
            
            {/* Email */}
            <a href={`mailto:${BRAND_EMAIL}`} className="flex items-center gap-4 py-2 border-b border-white/10 hover:border-[#FF6B35] transition-colors group">
              <div className="w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors">
                <Mail size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">{BRAND_EMAIL}</span>
            </a>
            
            {/* Facebook */}
            <a href={SOCIAL_LINKS.facebook} className="flex items-center gap-4 py-2 border-b border-white/10 hover:border-[#FF6B35] transition-colors group">
              <div className="w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors">
                <Share2 size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">PINAHX</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[10px] text-gray-600 font-bold tracking-[0.4em] uppercase mb-10">
          © {COPYRIGHT_YEAR} {BRAND_NAME}
        </p>

        {/* Policy Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 opacity-30 hover:opacity-100 transition-opacity">
          {POLICY_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-[9px] font-bold uppercase tracking-widest hover:text-[#FF6B35] transition-colors"
            >
              {t(link.label)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
