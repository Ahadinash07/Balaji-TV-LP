"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/gtm";
import { Facebook, Instagram } from "lucide-react";

export const AnnouncementBar = () => {
  return (
    <div className="bg-[#1A0F3C] text-white px-4 py-2 text-sm flex items-center justify-between sm:px-6">
      <div className="flex items-center gap-4">
        <span>Service available in Hyderabad</span>
        <div className="hidden sm:flex items-center gap-3 border-l border-white/20 pl-4">
          <a href="https://www.instagram.com/balaji_tv_services/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#FF4A17] transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://www.facebook.com/share/1GVayfLymZ/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#FF4A17] transition-colors">
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://maps.app.goo.gl/uQ3Xxj988e97Q1Ve8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Balaji TV Experts location in Google Maps"
          className="mr-2 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-colors hover:bg-white/10 hover:text-[#FDBA74] sm:text-sm"
        >
          <MapPin className="h-4 w-4 text-[#FF805B]" />
          <span className="hidden sm:inline">Get Directions</span>
          <span className="sm:hidden">Map</span>
        </a>
        <MessageCircle className="h-4 w-4 text-[#25D366]" />
        <a
          href="/call"
          onClick={() => trackPhoneClick("announcement_bar")}
          className="hover:underline"
        >
          +91 9959152818
        </a>
      </div>
    </div>
  );
};