import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="bg-[#1A0F3C] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                className="h-8 w-8 text-[#FF4A17]"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="32" height="32" rx="6" fill="#1A0F3C" />
                <path
                  d="M8 10h16v12H8z"
                  stroke="#FF4A17"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 22v4"
                  stroke="#FF4A17"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="16" cy="16" r="3" fill="#FF4A17" />
              </svg>
              <span className="font-bold text-xl">Balaji TV Experts</span>
            </div>
            <p className="text-sm text-[#9CA3AF] mb-4">
              Independent TV repair service in Hyderabad. Component-level repairs with 90-day warranty.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#problems" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  TV Problems
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#brands" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Brands
                </a>
              </li>
              <li>
                <a href="#areas" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Screen Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Motherboard Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Power Supply Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Backlight Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  Smart TV Troubleshooting
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#FF4A17]" />
                <a href="tel:+918074372778" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  +91 80743 72778
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <a href="https://wa.me/918074372778" target="_blank" rel="noopener noreferrer" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#FF4A17]" />
                <span className="text-sm text-[#9CA3AF]">
                  Hyderabad, Telangana, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#FF4A17]" />
                <span className="text-sm text-[#9CA3AF]">
                  Mon-Sun: 9AM - 9PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#374151] pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#9CA3AF]">
              © 2024 Balaji TV Experts. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-[#9CA3AF] hover:text-white transition-colors">
                Warranty Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};