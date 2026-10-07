import { MessageCircle, Phone } from "lucide-react";

export const AnnouncementBar = () => {
  return (
    <div className="bg-[#1A0F3C] text-white px-4 py-2 text-sm flex items-center justify-between sm:px-6">
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4" />
        <span>Service available in Hyderabad</span>
      </div>
      <div className="flex items-center gap-2">
        <MessageCircle className="h-4 w-4 text-[#25D366]" />
        <span>+91 80743 72778</span>
      </div>
    </div>
  );
};