"use client";

import { MessageCircle, Phone } from "lucide-react";
import { LeadForm } from "./LeadForm";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";

export const FinalCTA = () => {
  return (
    <section className="bg-[#1A0F3C] py-16 text-white sm:py-20" id="final-cta">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#FF805B]">
              WE'RE HERE TO HELP
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              TV Not Working? Let's Get It Fixed.
            </h2>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-[#D1CADD]">
              Tell us what is happening with your TV. Our Hyderabad team will help you find the right repair, with clear pricing before any work begins.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/call"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF4A17] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#E94112]"
                onClick={() => trackPhoneClick("final_cta")}
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919959152818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#1db954]"
                onClick={() => trackWhatsAppClick("final_cta")}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#D1CADD]">
              <span>✓ Free diagnosis</span>
              <span>✓ 90-day repair warranty</span>
              <span>✓ No repair without approval</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 text-[#111827] shadow-2xl shadow-black/20 sm:p-7 lg:p-8">
            <div className="mb-5">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Request a Free Quote
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                Fill in the form and we'll contact you shortly.
              </p>
            </div>
            <LeadForm formId="final_cta_lead_form" idPrefix="final-cta" />
          </div>
        </div>
      </div>
    </section>
  );
};