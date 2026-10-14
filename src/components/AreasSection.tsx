import { ArrowUpRight, MapPin } from "lucide-react";

const areas = [
  "Banjara Hills", "Hitech City", "Gachibowli", "Madhapur", "Kondapur",
  "Jubilee Hills", "Kukatpally", "Miyapur", "HITEC City", "Whitefield",
  "Kondapur", "Manikonda", "Narsingi", "Tellapur", "Gopanpally"
];

export const AreasSection = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-4">
            Service Areas in Hyderabad
          </h2>
          <p className="text-lg text-[#374151] max-w-2xl mx-auto">
            We provide doorstep TV repair services across Hyderabad. Check if we service your area.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area, index) => (
            <a
              key={index}
              href="#quote"
              className="px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-sm font-medium text-[#374151] hover:border-[#FF4A17] hover:text-[#FF4A17] hover:shadow-sm transition-all duration-200"
            >
              {area}
            </a>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-[#E5E7EB] bg-white p-6 text-center shadow-sm sm:flex-row sm:p-7 sm:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF1EC] text-[#FF4A17]">
              <MapPin className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-bold text-[#111827]">Visit Balaji TV Experts</h3>
              <p className="mt-1 text-sm text-[#6B7280]">
                Open our location in Google Maps for directions.
              </p>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/uQ3Xxj988e97Q1Ve8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#1A0F3C] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#30205F]"
          >
            <MapPin className="h-4 w-4" />
            Get Directions
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};