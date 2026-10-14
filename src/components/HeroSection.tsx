"use client";

import { MessageCircle, Phone } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";
import { LeadForm } from "./LeadForm";

export const HeroSection = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-cover bg-center py-12 sm:py-16 lg:min-h-[680px] lg:py-20 xl:min-h-[720px]"
      id="hero"
      style={{ backgroundImage: "url('/Balaji-Images/Balaji%20TV%20Repair%20Workshop.png')" }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#160E30]/95 via-[#160E30]/85 to-[#160E30]/65" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.88fr] lg:gap-14">
          <div className="space-y-6 text-white">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FDBA74] sm:text-sm">
                INDEPENDENT TV REPAIR SERVICE IN HYDERABAD
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
              <span className="block">Expert TV Repair at Your</span>
              <span className="block text-[#FF805B]">Doorstep in Hyderabad</span>
            </h1>

            {/* Body */}
            <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              From no display and black screens to backlight, motherboard, power and Smart TV issues — get your TV diagnosed and repaired at home, where doorstep service is available.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <a
                href="/call"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF4A17] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#E94112] hover:shadow-xl"
                onClick={() => trackPhoneClick("hero_section")}
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919959152818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#1db954] hover:shadow-xl"
                onClick={() => trackWhatsAppClick("hero_section")}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 text-[#111827] shadow-2xl shadow-black/25 sm:p-7 lg:p-8">
            <div className="mb-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#FF4A17]">
                QUICK SERVICE REQUEST
              </p>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Get a Free TV Repair Quote
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                Share a few details and our Hyderabad team will get back to you.
              </p>
            </div>
            <LeadForm formId="hero_lead_form" idPrefix="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};