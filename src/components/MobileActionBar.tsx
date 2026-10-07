import { MessageCircle, Phone } from "lucide-react";

export const MobileActionBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-[#E5E7EB] shadow-lg">
      <div className="flex">
        <a
          href="tel:+918074372778"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#FF4A17] text-white font-semibold"
        >
          <Phone className="h-5 w-5" />
          <span>Call</span>
        </a>
        <a
          href="https://wa.me/918074372778"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white font-semibold"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};