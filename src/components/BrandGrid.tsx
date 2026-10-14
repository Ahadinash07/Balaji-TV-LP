import { BadgeCheck, Tv } from "lucide-react";

const brands = [
  "Samsung", "LG", "Sony", "Panasonic", "Xiaomi", "Vu", "Mitashi", "Onida",
  "TCL", "Hisense", "Sharp", "Philips", "Vizio", "Skyworth", "Micromax"
];

export const BrandGrid = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#F4F6FA] py-16 sm:py-24" id="brands">
      <div className="brand-orb pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FF4A17]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-36 -left-24 h-80 w-80 rounded-full bg-[#49328A]/[0.05] blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FF4A17]/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#E94112] shadow-sm shadow-[#160E30]/[0.04] backdrop-blur">
            <BadgeCheck className="h-4 w-4" />
            Brands We Repair
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-[-0.035em] text-[#111827] sm:text-4xl lg:text-5xl">
            We Service All Major TV Brands
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#5B6472] sm:text-lg">
            Component-level repair expertise across all major TV brands.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#FF4A17] to-[#FDBA74]" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
          {brands.map((brand, index) => (
            <div
              key={brand}
              className="brand-card-enter group relative isolate flex min-h-[76px] items-center gap-3 overflow-hidden rounded-2xl border border-white/80 bg-white/85 px-4 py-4 shadow-[0_4px_18px_rgba(22,14,48,0.045)] ring-1 ring-[#172033]/[0.045] backdrop-blur-sm transition-all duration-300 before:absolute before:inset-x-4 before:top-0 before:h-[2px] before:origin-left before:scale-x-0 before:rounded-full before:bg-gradient-to-r before:from-[#FF4A17] before:to-[#FDBA74] before:transition-transform before:duration-300 hover:-translate-y-1.5 hover:border-[#FF4A17]/25 hover:shadow-[0_18px_38px_rgba(22,14,48,0.12)] hover:ring-[#FF4A17]/10 hover:before:scale-x-100 sm:min-h-[92px] sm:gap-4 sm:px-5"
              style={{ animationDelay: `${index * 55}ms` }}
            >
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFF1EC] to-[#FFE2D8] text-[#FF4A17] shadow-inner shadow-white/80 transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:from-[#FF4A17] group-hover:to-[#F97316] group-hover:text-white group-hover:shadow-[#FF4A17]/20 sm:h-12 sm:w-12">
                <Tv className="h-5 w-5 transition-transform duration-300 group-hover:scale-105 sm:h-[22px] sm:w-[22px]" strokeWidth={1.8} />
              </span>
              <span className="text-sm font-bold tracking-tight text-[#293243] transition-colors duration-300 group-hover:text-[#E94112] sm:text-base">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};