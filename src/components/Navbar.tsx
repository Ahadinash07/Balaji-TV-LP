import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";

const navLinks = [
  { href: "#problems", label: "TV Problems" },
  { href: "#services", label: "Services" },
  { href: "#brands", label: "Brands" },
  { href: "#areas", label: "Areas" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              className="h-8 w-8 text-[#1A0F3C]"
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
            <span className="font-bold text-xl text-[#1A0F3C]">Balaji TV Experts</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#374151] hover:text-[#1A0F3C] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4 border-l border-[#E5E7EB] pl-4">
              <a
                href="tel:+918074372778"
                className="flex items-center gap-1.5 text-sm font-medium text-[#1A0F3C] hover:text-[#FF4A17] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call</span>
              </a>
              <a
                href="https://wa.me/918074372778"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-sm font-medium rounded-lg hover:bg-[#1db954] transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#374151] hover:bg-[#F3F4F6] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2 border-t border-[#E5E7EB]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2 py-3 text-base font-medium text-[#374151] hover:text-[#1A0F3C] hover:bg-[#F9FAFB] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-[#E5E7EB]">
              <a
                href="tel:+918074372778"
                className="flex items-center gap-2 px-2 py-3 text-base font-medium text-[#1A0F3C] hover:bg-[#F9FAFB] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span>Call: +91 80743 72778</span>
              </a>
              <a
                href="https://wa.me/918074372778"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2 py-3 bg-[#25D366] text-white text-base font-medium rounded-lg hover:bg-[#1db954] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};